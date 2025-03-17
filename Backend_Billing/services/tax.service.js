const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createTax = async ({
  taxId,
  invoiceId,
  orderId,
  customerId,
  region,
  taxType,
  taxPercentage,
}) => {
  // Convert taxPercentage to float
  const taxRate = parseFloat(taxPercentage);
  if (isNaN(taxRate) || taxRate <= 0) {
    throw new Error("Invalid tax percentage");
  }

  // Check if Invoice exists
  const invoice = await prisma.invoice.findUnique({
    where: { invoiceId },
  });

  if (!invoice) {
    throw new Error("Invoice not found");
  }

  // Validate orderId and customerId association with invoice
  if (invoice.orderId !== orderId || invoice.customerId !== customerId) {
    throw new Error("Order or Customer ID mismatch with Invoice");
  }

  // Calculate tax amount
  const taxAmount = (invoice.totalAmount * taxRate) / 100;

  // Create new tax entry
  const newTax = await prisma.tax.create({
    data: {
      taxId,
      invoiceId,
      orderId,
      customerId,
      region,
      taxType,
      taxPercentage: taxRate,
    },
  });

  // Update Invoice with new tax and total amount
  const updatedInvoice = await prisma.invoice.update({
    where: { invoiceId },
    data: {
      totalTax: taxAmount,
      totalAmount: invoice.totalAmount + taxAmount,
    },
  });

  return { newTax, updatedInvoice };
};

exports.getTaxById = async (taxId) => {
  try {
    const tax = await prisma.tax.findUnique({
      where: { taxId },
    });

    return tax;
  } catch (error) {
    console.error("Error fetching tax:", error);
    throw error;
  }
};

const computeTaxAmount = (invoice, taxPercentage) => {
  const baseAmount = invoice.totalAmount - invoice.totalTax;
  return baseAmount * (parseFloat(taxPercentage) / 100);
};

exports.editTax = async (taxId, updatedData) => {
  return await prisma.$transaction(async (tx) => {
    // Retrieve the existing tax record (with its invoice data)
    const oldTax = await tx.tax.findUnique({
      where: { taxId },
      include: { invoice: true },
    });

    if (!oldTax) {
      throw new Error("Tax record not found");
    }

    // Get the old and (possibly) new invoiceId
    const oldInvoiceId = oldTax.invoiceId;
    const newInvoiceId = updatedData.invoiceId || oldInvoiceId; // if not provided, assume unchanged

    // For removal of the old tax, we use the original invoice.
    const oldInvoice = oldTax.invoice;

    // Compute the tax amount that was added previously.
    // (This assumes that when the tax was originally created, the tax amount was:
    //    oldTaxAmount = baseOld * (oldTax.taxPercentage/100)
    // where baseOld = oldInvoice.totalAmount - oldInvoice.totalTax)
    const oldTaxAmount = computeTaxAmount(oldInvoice, oldTax.taxPercentage);

    // If the invoiceId is changing...
    if (oldInvoiceId !== newInvoiceId) {
      // 1. Remove old tax from the original invoice.
      await tx.invoice.update({
        where: { invoiceId: oldInvoiceId },
        data: {
          totalTax: oldInvoice.totalTax - oldTaxAmount,
          totalAmount: oldInvoice.totalAmount - oldTaxAmount,
        },
      });

      // 2. Validate new invoice exists.
      const newInvoice = await tx.invoice.findUnique({
        where: { invoiceId: newInvoiceId },
      });
      if (!newInvoice) {
        throw new Error("New invoice not found");
      }

      // 3. Compute new tax amount based on the new invoice.
      const newTaxAmount = computeTaxAmount(
        newInvoice,
        updatedData.taxPercentage
      );

      // 4. Update the new invoice with the new tax.
      await tx.invoice.update({
        where: { invoiceId: newInvoiceId },
        data: {
          totalTax: newTaxAmount,
          totalAmount:
            newInvoice.totalAmount - newInvoice.totalTax + newTaxAmount,
        },
      });
    } else {
      // Invoice remains the same.
      // 1. Remove the effect of the old tax from the same invoice.
      await tx.invoice.update({
        where: { invoiceId: oldInvoiceId },
        data: {
          totalTax: oldInvoice.totalTax - oldTaxAmount,
          totalAmount: oldInvoice.totalAmount - oldTaxAmount,
        },
      });

      // 2. Fetch the updated invoice after deduction.
      const currentInvoice = await tx.invoice.findUnique({
        where: { invoiceId: oldInvoiceId },
      });

      // 3. Compute the new tax amount using the current invoice's base amount.
      const newTaxAmount = computeTaxAmount(
        currentInvoice,
        updatedData.taxPercentage
      );

      // 4. Add the new tax amount.
      await tx.invoice.update({
        where: { invoiceId: oldInvoiceId },
        data: {
          totalTax: currentInvoice.totalTax + newTaxAmount,
          totalAmount: currentInvoice.totalAmount + newTaxAmount,
        },
      });
    }

    // Finally, update the tax record itself.
    const updatedTaxRecord = await tx.tax.update({
      where: { taxId },
      data: updatedData,
      include: { invoice: true },
    });

    return updatedTaxRecord;
  });
};

exports.getTaxByInvoice = async (taxId, invoiceId) => {
  try {
    const tax = await prisma.tax.findUnique({
      where: { taxId, invoiceId },
    });

    return tax;
  } catch (error) {
    console.error("Error fetching tax:", error);
    throw error;
  }
};
