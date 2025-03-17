const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createInvoice = async (invoiceData) => {
  try {
    // Extract invoice details from request
    const {
      invoiceId, // Provided by user
      orderId,
      customerId,
      invoiceDate,
      totalAmount,
      paymentStatus,
      totalTax,
    } = invoiceData;

    // Create invoice in database
    const newInvoice = await prisma.invoice.create({
      data: {
        invoiceId, // User-provided unique ID
        orderId,
        customerId,
        invoiceDate: new Date(invoiceDate), // Ensure proper Date format
        totalAmount,
        totalTax: totalTax || 0, // Initially 0, will be updated when tax is added
        paymentStatus,
      },
    });

    return newInvoice;
  } catch (error) {
    throw new Error(`Failed to create invoice: ${error.message}`);
  }
};

exports.getInvoiceById = async (invoiceId) => {
  try {
    const invoice = await prisma.invoice.findUnique({
      where: { invoiceId },
    });
    return invoice;
  } catch (error) {
    console.error("Error fetching invoice:", error);
    throw error;
  }
};

exports.updateInvoice = async (invoiceId, updateData) => {
  try {
    if (!invoiceId) {
      throw new Error("Invoice ID is required");
    }

    // Find the invoice first
    const existingInvoice = await prisma.invoice.findUnique({
      where: { invoiceId },
    });

    if (!existingInvoice) {
      return null; // Invoice not found
    }

    // Validate updateData fields before updating (optional but recommended)
    const validFields = [
      "orderId",
      "customerId",
      "totalAmount",
      "invoiceDate",
      "totalTax",
      "paymentStatus",
    ];
    const filteredUpdateData = Object.keys(updateData)
      .filter((key) => validFields.includes(key))
      .reduce((obj, key) => {
        obj[key] = updateData[key];
        return obj;
      }, {});

    // Update the invoice
    const updatedInvoice = await prisma.invoice.update({
      where: { invoiceId },
      data: filteredUpdateData,
    });

    return updatedInvoice;
  } catch (error) {
    console.error("Error in updateInvoice service:", error);
    throw error;
  }
};
