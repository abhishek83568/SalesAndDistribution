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

// Update carrier details while keeping previous values if not provided
exports.updateCarrier = async (carrierId, updatedData) => {
  return await prisma.carrier.update({
    where: { carrierId },
    data: updatedData,
  });
};

exports.getCarrierByOrder = async (carrierId, orderId) => {
  return await prisma.carrier.findFirst({
    where: {
      carrierId: carrierId,
      orderId: orderId,
    },
    include: {
      shipment: true, // Include related shipment (if needed)
      deliveryRoutes: true, // Include related delivery routes (if needed)
      deliveryVehicles: true, // Include related delivery vehicles (if needed)
    },
  });
};
