const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient(); // ✅ Ensure Prisma Client is instantiated

exports.validateShipmentForOrder = async (shipmentId, orderId) => {
  const shipment = await prisma.shipment.findUnique({
    where: { shipmentId },
  });

  return shipment && shipment.orderId === orderId;
};

// Check if carrierId already exists
exports.getCarrierById = async (carrierId) => {
  return await prisma.carrier.findUnique({
    where: { carrierId },
  });
};

// Create a new carrier
exports.createCarrier = async (carrierData) => {
  return await prisma.carrier.create({
    data: {
      carrierId: carrierData.carrierId,
      orderId: carrierData.orderId,
      name: carrierData.name,
      serviceType: carrierData.serviceType,
      contactDetails: carrierData.contactDetails,
      costStructure: carrierData.costStructure,
      shipmentId: carrierData.shipmentId, // Foreign key reference
    },
  });
};
