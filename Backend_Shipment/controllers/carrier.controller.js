const carrierService = require("../services/carrier.services");

exports.createCarrier = async (req, res) => {
  try {
    const {
      carrierId,
      orderId,
      name,
      serviceType,
      contactDetails,
      costStructure,
      shipmentId,
    } = req.body;

    // Validate required fields
    if (
      !carrierId ||
      !orderId ||
      !name ||
      !serviceType ||
      !contactDetails ||
      !costStructure ||
      !shipmentId
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if carrierId already exists
    const existingCarrier = await carrierService.getCarrierById(carrierId);
    if (existingCarrier) {
      return res.status(409).json({ message: "Carrier ID already exists." });
    }

    // Validate that shipmentId is associated with the given orderId
    const isValidShipment = await carrierService.validateShipmentForOrder(
      shipmentId,
      orderId
    );
    if (!isValidShipment) {
      return res
        .status(400)
        .json({ message: "Invalid shipmentId for the given orderId." });
    }

    // Create the carrier
    const newCarrier = await carrierService.createCarrier({
      carrierId,
      orderId,
      name,
      serviceType,
      contactDetails,
      costStructure,
      shipmentId,
    });

    return res.status(201).json(newCarrier);
  } catch (error) {
    console.error("Error creating carrier:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
exports.editCarrier = () => {};
exports.getCarrier = () => {};
