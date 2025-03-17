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
