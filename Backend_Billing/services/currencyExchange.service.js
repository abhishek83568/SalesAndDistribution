const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createCurrencyExchange = async (exchangeData) => {
  try {
    const {
      invoiceId,
      orderId,
      customerId,
      currencyCode,
      effectiveDate,
      exchangeRate,
    } = exchangeData;

    // Validate required fields
    if (
      !invoiceId ||
      !orderId ||
      !customerId ||
      !currencyCode ||
      !effectiveDate ||
      exchangeRate === undefined
    ) {
      throw new Error("All fields are required.");
    }

    // Validate exchangeRate (should be a positive float)
    const parsedExchangeRate = parseFloat(exchangeRate);
    if (isNaN(parsedExchangeRate) || parsedExchangeRate <= 0) {
      throw new Error("Exchange rate must be a positive number.");
    }

    // Validate invoice existence and associated customerId and orderId
    const invoice = await prisma.invoice.findUnique({
      where: { invoiceId },
    });

    if (!invoice) {
      throw new Error("Invoice ID does not exist.");
    }

    if (invoice.customerId !== customerId || invoice.orderId !== orderId) {
      throw new Error(
        "Customer ID or Order ID does not match the provided Invoice ID."
      );
    }

    // Create currency exchange entry
    const newCurrencyExchange = await prisma.currencyExchangeRate.create({
      data: {
        invoiceId,
        orderId,
        customerId,
        currencyCode,
        effectiveDate: new Date(effectiveDate),
        exchangeRate: parsedExchangeRate, // Store as float
      },
    });

    return newCurrencyExchange;
  } catch (error) {
    console.error("Error creating currency exchange:", error);
    throw error;
  }
};

exports.getCurrencyExchangeByInvoiceId = async (invoiceId) => {
  try {
    const currencyExchange = await prisma.currencyExchangeRate.findFirst({
      where: { invoiceId },
    });

    return currencyExchange;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Database Query Failed");
  }
};

// exports.editCurrencyExchange = async (invoiceId, updatedData) => {
//   try {
//     // Check if invoiceId exists in Invoice table
//     const invoice = await prisma.invoice.findUnique({
//       where: { invoiceId },
//     });

//     if (!invoice) {
//       throw new Error("Invalid invoiceId. Invoice does not exist.");
//     }

//     // Check if orderId and customerId are associated with the given invoiceId
//     const isValidAssociation = await prisma.invoice.findFirst({
//       where: {
//         invoiceId,
//         orderId: updatedData.orderId,
//         customerId: updatedData.customerId,
//       },
//     });

//     if (!isValidAssociation) {
//       throw new Error(
//         "orderId and customerId do not match the provided invoiceId."
//       );
//     }

//     // Update the currency exchange record
//     const updatedExchangeRate = await prisma.currencyExchangeRate.updateMany({
//       where: { invoiceId },
//       data: updatedData,
//     });

//     // If no records were updated, return null
//     if (updatedExchangeRate.count === 0) {
//       return null;
//     }

//     return updatedExchangeRate;
//   } catch (error) {
//     console.error("Service Error:", error.message);
//     return null;
//   }
// };
exports.editCurrencyExchange = async (invoiceId, updatedData) => {
  try {
    if (!invoiceId) {
      throw new Error("Missing invoiceId.");
    }

    // Check if invoiceId exists in Invoice table
    const invoice = await prisma.invoice.findFirst({
      where: { invoiceId },
    });

    if (!invoice) {
      throw new Error("Invalid invoiceId. Invoice does not exist.");
    }

    // Check if orderId and customerId are associated with the given invoiceId
    const existingRecord = await prisma.currencyExchangeRate.findFirst({
      where: {
        invoiceId,
        orderId: updatedData.orderId,
        customerId: updatedData.customerId,
      },
    });

    if (!existingRecord) {
      throw new Error(
        "orderId and customerId do not match the provided invoiceId."
      );
    }

    // Validate and convert `effectiveDate`
    if (updatedData.effectiveDate) {
      const date = new Date(updatedData.effectiveDate);
      if (isNaN(date.getTime())) {
        throw new Error(
          "Invalid effectiveDate. Must be a valid ISO-8601 date."
        );
      }
      updatedData.effectiveDate = date.toISOString();
    }

    // Merge existing values with new values
    const updatedValues = {
      invoiceId: updatedData.invoiceId || existingRecord.invoiceId,
      orderId: updatedData.orderId || existingRecord.orderId,
      customerId: updatedData.customerId || existingRecord.customerId,
      currencyCode: updatedData.currencyCode || existingRecord.currencyCode,
      effectiveDate: updatedData.effectiveDate || existingRecord.effectiveDate,
      exchangeRate: updatedData.exchangeRate || existingRecord.exchangeRate,
    };

    // Check if any values have changed
    const hasChanges = Object.keys(updatedValues).some(
      (key) => updatedValues[key] !== existingRecord[key]
    );

    if (!hasChanges) {
      return { message: "No changes were made." };
    }

    // Update the record
    const updatedExchangeRate = await prisma.currencyExchangeRate.update({
      where: { id: existingRecord.id }, // Use `id` instead of `invoiceId`
      data: updatedValues,
    });

    return updatedExchangeRate;
  } catch (error) {
    console.error("Service Error:", error.message);
    return null;
  }
};

exports.getCurrencyExchangeByOrder = async (invoiceId, orderId) => {
  try {
    console.log("✅ Querying DB for:", { invoiceId, orderId });

    const currencyData = await prisma.currencyExchangeRate.findFirst({
      where: {
        invoiceId,
        orderId,
      },
    });

    console.log("✅ Fetched Data from DB:", currencyData);

    return currencyData;
  } catch (error) {
    console.error("❌ Error fetching currencyData:", error);
    throw error;
  }
};
