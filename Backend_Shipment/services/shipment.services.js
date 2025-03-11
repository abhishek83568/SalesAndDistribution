const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient(); // ✅ Ensure Prisma Client is instantiated

exports.createShipment = async (shipmentData) => {
  // Check if shipmentId or trackingNumber already exists
  const existingShipment = await prisma.shipment.findFirst({
    where: {
      OR: [
        { shipmentId: shipmentData.shipmentId },
        { trackingNumber: shipmentData.trackingNumber },
      ],
    },
  });

  if (existingShipment) {
    throw new Error("Shipment ID or Tracking Number already exists");
  }

  // Create the new shipment
  return await prisma.shipment.create({
    data: shipmentData,
  });
};

exports.updateShipment = async ({
  shipmentId,
  orderId,
  trackingNumber,
  shipmentStatus,
  dispatchDate,
  estimatedDeliveryDate,
}) => {
  // ✅ Check if the shipment exists
  const existingShipment = await prisma.shipment.findUnique({
    where: { shipmentId },
  });

  if (!existingShipment) {
    return null; // Return null if shipment is not found
  }

  // ✅ Ensure tracking number is unique (if updated)
  if (trackingNumber) {
    const existingTracking = await prisma.shipment.findFirst({
      where: {
        trackingNumber: Number(trackingNumber),
        shipmentId: { not: shipmentId },
      }, // Exclude same shipmentId
    });

    if (existingTracking) {
      throw new Error("Tracking number already exists.");
    }
  }

  // ✅ Convert dates to ISO strings if provided
  return await prisma.shipment.update({
    where: { shipmentId },
    data: {
      orderId,
      trackingNumber: trackingNumber
        ? Number(trackingNumber)
        : existingShipment.trackingNumber,
      shipmentStatus,
      dispatchDate: dispatchDate
        ? new Date(dispatchDate).toISOString()
        : existingShipment.dispatchDate, // ✅ Convert to ISO string
      estimatedDeliveryDate: estimatedDeliveryDate
        ? new Date(estimatedDeliveryDate).toISOString()
        : existingShipment.estimatedDeliveryDate, // ✅ Convert to ISO string
    },
  });
};

exports.getShipmentById = async (shipmentId) => {
  if (!shipmentId) {
    throw new Error("Shipment ID is missing!"); // ✅ Throw explicit error
  }

  return await prisma.shipment.findUnique({
    where: { shipmentId: String(shipmentId) }, // ✅ Ensure it's a string
    include: {
      carriers: true,
      deliveryRoutes: true,
      deliveryVehicles: true,
    },
  });
};

exports.getShipmentByOrder = async (shipmentId, orderId) => {
  return await prisma.shipment.findFirst({
    where: {
      shipmentId,
      orderId,
    },
    include: {
      carriers: true,
      deliveryRoutes: true,
      deliveryVehicles: true,
    },
  });
};
