const paymentService = require("../services/payment.service");

exports.createPayment = async (req, res) => {
  try {
    const {
      paymentId,
      invoiceId,
      orderId,
      customerId,
      amountPaid,
      paymentDate,
      paymentMode,
    } = req.body;

    // Validate required fields
    if (
      !paymentId ||
      !invoiceId ||
      !orderId ||
      !customerId ||
      !amountPaid ||
      !paymentDate ||
      !paymentMode
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Ensure amountPaid is a valid float
    if (isNaN(parseFloat(amountPaid))) {
      return res
        .status(400)
        .json({ message: "amountPaid must be a valid number." });
    }

    // Ensure payment mode is valid
    if (!["ONLINE", "CASH"].includes(paymentMode)) {
      return res
        .status(400)
        .json({ message: "Invalid payment mode. Must be 'ONLINE' or 'CASH'." });
    }

    // Call service to create payment
    const payment = await paymentService.createPayment({
      paymentId,
      invoiceId,
      orderId,
      customerId,
      amountPaid,
      paymentDate,
      paymentMode,
    });

    return res
      .status(201)
      .json({ message: "Payment created successfully", payment });
  } catch (error) {
    console.error("Error creating payment:", error);
    return res.status(500).json({ message: error.message });
  }
};

exports.editPayment = () => {};
exports.getPayment = () => {};
