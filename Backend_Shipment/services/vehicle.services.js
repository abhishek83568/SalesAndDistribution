const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createVehicle = async (vehicleData) => {
  try {
    const { carrierId, shipmentId, orderId } = vehicleData;

    // ✅ Step 1: Validate carrier existence & association with shipmentId and orderId
    const carrier = await prisma.carrier.findFirst({
      where: {
        carrierId,
        shipmentId,
        orderId,
      },
    });

    if (!carrier) {
      throw new Error(
        "Invalid carrierId: The given carrier is not associated with the provided shipmentId and orderId."
      );
    }

    // ✅ Step 2: Create the vehicle after validation
    const newVehicle = await prisma.deliveryVehicle.create({
      data: vehicleData,
    });

    return newVehicle;
  } catch (error) {
    console.error("Error in createVehicle service:", error);
    throw error;
  }
};
exports.getVehicle = async (vehicleId) => {
  try {
    // ✅ Validate vehicleId
    if (!vehicleId) {
      throw new Error("Vehicle ID is required.");
    }

    // ✅ Fetch vehicle details
    const vehicle = await prisma.deliveryVehicle.findUnique({
      where: { vehicleId },
    });

    if (!vehicle) {
      throw new Error("Vehicle not found.");
    }

    return vehicle;
  } catch (error) {
    console.error("Error in getVehicle service:", error.message);
    throw new Error(error.message);
  }
};

exports.editVehicle = async (vehicleId, updateData) => {
  try {
    const { carrierId, shipmentId, orderId } = updateData;

    // ✅ Step 1: Check if vehicle exists
    const existingVehicle = await prisma.deliveryVehicle.findUnique({
      where: { vehicleId },
    });

    if (!existingVehicle) {
      throw new Error("Vehicle not found");
    }

    // ✅ Step 2: Check if carrier exists
    const carrier = await prisma.carrier.findFirst({
      where: { carrierId, shipmentId, orderId },
    });

    if (!carrier) {
      throw new Error(
        "Invalid carrierId: Carrier does not exist associated with these shipmentId and orderId."
      );
    }

    // ✅ Step 4: Update vehicle data
    const updatedVehicle = await prisma.deliveryVehicle.update({
      where: { vehicleId },
      data: updateData,
    });

    return updatedVehicle;
  } catch (error) {
    console.error("Error in editVehicle service:", error);
    throw error;
  }
};

exports.getVehicleByCarrier = async (vehicleId, carrierId) => {
  try {
    return await prisma.deliveryVehicle.findFirst({
      where: {
        carrierId: String(carrierId),
        vehicleId: String(vehicleId),
      },
    });
  } catch (error) {
    console.error("Database query failed:", error);
    throw new Error("Failed to fetch vehicle from database");
  }
};
