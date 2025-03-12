const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createVehicleRoute = async (routeData) => {
  const {
    routeId,
    carrierId,
    shipmentId,
    orderId,
    sourceLocation,
    destinationLocation,
    routeTime,
    distance,
  } = routeData;

  // Check if routeId already exists
  const existingRoute = await prisma.deliveryRoute.findUnique({
    where: { routeId },
  });

  if (existingRoute) {
    throw new Error("routeId already exists. Please provide a unique routeId.");
  }
  const carrierIdValidation = await prisma.carrier.findUnique({
    where: { carrierId },
  });

  if (!carrierIdValidation) {
    throw new Error("Invalid carrierId: CarrierId not found");
  }

  // Validate carrierId exists
  const carrier = await prisma.carrier.findFirst({
    where: { carrierId, shipmentId, orderId },
  });

  if (!carrier) {
    throw new Error(
      "Invalid carrierId: Either carrierId is not associated with shipmentId or orderId"
    );
  }

  // Validate shipmentId and orderId are associated with the given carrierId
  //   const shipment = await prisma.shipment.findUnique({
  //     where: { shipmentId },
  //   });

  //   if (!shipment || shipment.carrierId !== carrierId) {
  //     throw new Error("Invalid shipmentId: Shipment is not associated with this carrier");
  //   }

  //   const order = await prisma.order.findUnique({
  //     where: { orderId },
  //   });

  //   if (!order || order.carrierId !== carrierId) {
  //     throw new Error("Invalid orderId: Order is not associated with this carrier");
  //   }

  // Create DeliveryRoute
  return await prisma.deliveryRoute.create({
    data: {
      routeId,
      orderId,
      shipmentId,
      sourceLocation,
      destinationLocation,
      routeTime,
      distance,
      carrierId,
    },
  });
};

exports.getVehicleRouteById = async (routeId) => {
  return await prisma.deliveryRoute.findUnique({
    where: { routeId },
  });
};

exports.editDeliveryRoute = async (routeId, updateData) => {
  try {
    // Check if route exists
    const { carrierId, shipmentId, orderId } = updateData;
    const existingRoute = await prisma.deliveryRoute.findUnique({
      where: { routeId },
    });

    if (!existingRoute) {
      throw new Error("Vehicleroute not found");
    }

    const carrier = await prisma.carrier.findFirst({
      where: { carrierId, shipmentId, orderId },
    });

    if (!carrier) {
      throw new Error(
        "Invalid carrierId: Carrier does not exist associated with these shipmentId and orderId."
      );
    }

    // Update the route with new data
    const updatedRoute = await prisma.deliveryRoute.update({
      where: { routeId },
      data: updateData,
    });

    return updatedRoute;
  } catch (error) {
    console.error("Error updating vehicleroute:", error);
    throw new Error(error);
  }
};

exports.getVehicleRouteByCarrier = async (routeId, carrierId) => {
  try {
    return await prisma.deliveryRoute.findFirst({
      where: {
        carrierId: String(carrierId),
        routeId: String(routeId),
      },
    });
  } catch (error) {
    console.error("Database query failed:", error);
    throw new Error("Failed to fetch vehicleRoute from database");
  }
};
