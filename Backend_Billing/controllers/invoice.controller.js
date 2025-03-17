const invoiceService = require("../services/invoice.service");

exports.createInvoice = async (req, res) => {
  try {
    const invoiceData = req.body; // Extract invoice details from request body
    const invoice = await invoiceService.createInvoice(invoiceData);

    res.status(201).json({
      success: true,
      message: "Invoice created successfully",
      data: invoice,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "InvoiceId already exists",
      error: error.message,
    });
  }
};

exports.editInvoice = () => {};
exports.getInvoice = () => {};
