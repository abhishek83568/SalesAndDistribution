const shipmentService = require("../services/shipment.services");

exports.createShipment = async (req, res) => {
  try {
    const {
      shipmentId,
      orderId,
      trackingNumber,
      shipmentStatus,
      dispatchDate,
      estimatedDeliveryDate,
    } = req.body;

    // Validate required fields
    if (
      !shipmentId ||
      !orderId ||
      !trackingNumber ||
      !shipmentStatus ||
      !dispatchDate ||
      !estimatedDeliveryDate
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Call the service function
    const shipment = await shipmentService.createShipment({
      shipmentId, // Provided by user
      orderId,
      trackingNumber,
      shipmentStatus,
      dispatchDate: new Date(dispatchDate),
      estimatedDeliveryDate: new Date(estimatedDeliveryDate),
    });

    return res
      .status(201)
      .json({ message: "Shipment created successfully", shipment });
  } catch (error) {
    console.error("Error creating shipment:", error.message);

    // Handle uniqueness error
    if (
      error.message.includes("Shipment ID or Tracking Number already exists")
    ) {
      return res.status(409).json({ message: error.message });
    }

    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.getShipment = async (req, res) => {
  try {
    const { shipmentId } = req.query; // Get shipmentId from query parameters

    if (!shipmentId) {
      return res
        .status(400)
        .json({ message: "Shipment ID is required as a query parameter." });
    }

    const shipment = await shipmentService.getShipmentById(shipmentId);

    if (!shipment) {
      return res.status(404).json({ message: "Shipment not found." });
    }

    return res.status(200).json(shipment);
  } catch (error) {
    console.error("Error fetching shipment:", error); // ✅ Log error for debugging
    return res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
};

exports.editShipment = async (req, res) => {
  try {
    const { shipmentId } = req.params; // ✅ Extract from params
    const {
      orderId,
      trackingNumber,
      shipmentStatus,
      dispatchDate,
      estimatedDeliveryDate,
    } = req.body;

    // ✅ Validate shipmentId
    if (!shipmentId) {
      return res
        .status(400)
        .json({ message: "Shipment ID is required in params." });
    }

    // ✅ Call service to update shipment
    const updatedShipment = await shipmentService.updateShipment({
      shipmentId,
      orderId,
      trackingNumber,
      shipmentStatus,
      dispatchDate,
      estimatedDeliveryDate,
    });

    if (!updatedShipment) {
      return res.status(404).json({ message: "Shipment not found." });
    }

    return res.status(200).json({
      message: "Shipment updated successfully",
      shipment: updatedShipment,
    });
  } catch (error) {
    console.error("Error updating shipment:", error);
    return res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
};

exports.getShipmentByOrder = async (req, res) => {
  try {
    const { shipmentId, orderId } = req.query; // Get shipmentId and orderId from query params

    if (!shipmentId || !orderId) {
      return res.status(400).json({
        message:
          "Both shipmentId and orderId are required as query parameters.",
      });
    }

    const shipment = await shipmentService.getShipmentByOrder(
      shipmentId,
      orderId
    );

    if (!shipment) {
      return res.status(404).json({ message: "Shipment not found." });
    }

    return res.status(200).json(shipment);
  } catch (error) {
    console.error("Error fetching shipment:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
exports.getShipmentByOrder = async (req, res) => {
  try {
    const { shipmentId, orderId } = req.query; // Get shipmentId and orderId from query params

    if (!shipmentId || !orderId) {
      return res.status(400).json({
        message:
          "Both shipmentId and orderId are required as query parameters.",
      });
    }

    const shipment = await shipmentService.getShipmentByOrder(
      shipmentId,
      orderId
    );

    if (!shipment) {
      return res.status(404).json({ message: "Shipment not found." });
    }

    return res.status(200).json(shipment);
  } catch (error) {
    console.error("Error fetching shipment:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
