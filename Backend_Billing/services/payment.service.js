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
