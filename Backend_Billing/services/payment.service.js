const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createPayment = async ({
  paymentId,
  invoiceId,
  orderId,
  customerId,
  amountPaid,
  paymentDate,
  paymentMode,
}) => {
  const existingPayment = await prisma.payment.findUnique({
    where: { paymentId },
    // Only fetch required fields
  });
  if (existingPayment) {
    throw new Error("PaymentId already exists.");
  }
  // Step 1: Verify invoice exists and matches orderId & customerId
  const invoice = await prisma.invoice.findUnique({
    where: { invoiceId },
    select: { orderId: true, customerId: true }, // Only fetch required fields
  });

  if (!invoice) {
    throw new Error("Invoice not found.");
  }

  if (invoice.orderId !== orderId || invoice.customerId !== customerId) {
    throw new Error("Order ID or Customer ID does not match the invoice.");
  }

  // Step 2: Create the Payment record
  const payment = await prisma.payment.create({
    data: {
      paymentId,
      invoiceId,
      orderId,
      customerId,
      amountPaid: parseFloat(amountPaid), // Ensure float conversion
      paymentDate: new Date(paymentDate), // Convert to DateTime
      paymentMode,
    },
  });

  return payment;
};

exports.getPaymentById = async (paymentId) => {
  try {
    const payment = await prisma.payment.findUnique({
      where: { paymentId },
    });
    return payment;
  } catch (error) {
    console.error("Error fetching payment:", error);
    throw error;
  }
};

exports.editPayment = async (paymentId, updatedData) => {
  // 1. Retrieve the existing Payment record
  const existingPayment = await prisma.payment.findUnique({
    where: { paymentId },
  });

  if (!existingPayment) {
    throw new Error("Payment not found");
  }

  // 2. Validate that the updated invoiceId is valid
  const { invoiceId, orderId, customerId } = updatedData;
  const invoice = await prisma.invoice.findUnique({
    where: { invoiceId },
  });
  if (!invoice) {
    throw new Error("Invoice not found");
  }

  // 3. Check if the invoice's orderId and customerId match the provided ones
  if (invoice.orderId !== orderId || invoice.customerId !== customerId) {
    throw new Error(
      "Order ID or Customer ID does not match the invoice record"
    );
  }

  // 4. Prepare the updated payment data
  const newPaymentData = {
    invoiceId,
    orderId,
    customerId,
    amountPaid: parseFloat(updatedData.amountPaid), // Ensure it's stored as a float
    paymentDate: new Date(updatedData.paymentDate), // Convert to Date
    paymentMode: updatedData.paymentMode,
  };

  // 5. Update the Payment record in the database
  const updatedPayment = await prisma.payment.update({
    where: { paymentId },
    data: newPaymentData,
  });

  return updatedPayment;
};

exports.getPaymentByInvoice = async (paymentId, invoiceId) => {
  try {
    const payment = await prisma.payment.findUnique({
      where: { paymentId, invoiceId },
    });

    return payment;
  } catch (error) {
    console.error("Error fetching payment:", error);
    throw error;
  }
};
