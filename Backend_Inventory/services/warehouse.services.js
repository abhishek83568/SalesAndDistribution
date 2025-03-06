const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createWarehouse = async ({
  warehouseId,
  inventoryId,
  productId, // User provides this
  warehouseName,
  warehouseAddress,
  warehouseCapacity,
  warehouseType,
}) => {
  try {
    // Check if warehouseId is unique
    const existingWarehouse = await prisma.warehouse.findUnique({
      where: { warehouseId },
    });

    if (existingWarehouse) {
      throw { statusCode: 400, message: "Warehouse ID already exists" };
    }

    // Fetch the inventory details
    const inventory = await prisma.inventory.findUnique({
      where: { inventoryId },
      select: { productId: true },
    });

    if (!inventory) {
      throw { statusCode: 404, message: "Inventory not found" };
    }

    // Validate if the provided productId matches the one in the Inventory model
    if (inventory.productId !== productId) {
      throw {
        statusCode: 400,
        message: "Product ID does not match the inventory's product",
      };
    }

    // Create warehouse inside a transaction (best practice)
    const warehouse = await prisma.$transaction(async (prisma) => {
      return await prisma.warehouse.create({
        data: {
          warehouseId,
          inventoryId,
          productId,
          warehouseName,
          warehouseAddress,
          warehouseCapacity: Number(warehouseCapacity),
          warehouseType,
        },
      });
    });

    return warehouse;
  } catch (error) {
    console.error("Error creating warehouse:", error);

    if (error.statusCode) {
      throw error; // Re-throw known errors for API handling
    }

    throw { statusCode: 500, message: "Internal Server Error" }; // Catch unexpected errors
  }
};
exports.getWarehouseById = async (warehouseId) => {
  try {
    const warehouse = await prisma.warehouse.findUnique({
      where: { warehouseId: warehouseId }, // ✅ Use string directly
    });

    return warehouse; // ✅ If not found, it will return null (handled in controller)
  } catch (error) {
    console.error("Error fetching warehouse:", error);
    return null; // ✅ Return null instead of throwing an error
  }
};

exports.editWarehouse = async (warehouseId, updateData) => {
  try {
    // Find existing warehouse
    const existingWarehouse = await prisma.warehouse.findUnique({
      where: { warehouseId },
    });

    if (!existingWarehouse) {
      throw new Error("Warehouse not found.");
    }

    // Validate inventoryId and productId
    if (updateData.inventoryId) {
      const inventoryRecord = await prisma.inventory.findUnique({
        where: { inventoryId: updateData.inventoryId },
      });

      if (!inventoryRecord) {
        throw new Error("Inventory ID not found in the database.");
      }

      // If productId is also provided, check if it matches the inventory's productId
      if (
        updateData.productId &&
        inventoryRecord.productId !== updateData.productId
      ) {
        throw new Error(
          "The provided Product ID does not match the Inventory ID."
        );
      }
    }

    // Update warehouse with only provided fields
    const updatedWarehouse = await prisma.warehouse.update({
      where: { warehouseId },
      data: {
        inventoryId: updateData.inventoryId ?? existingWarehouse.inventoryId,
        productId: updateData.productId ?? existingWarehouse.productId,
        warehouseName:
          updateData.warehouseName ?? existingWarehouse.warehouseName,
        warehouseAddress:
          updateData.warehouseAddress ?? existingWarehouse.warehouseAddress,
        warehouseCapacity:
          updateData.warehouseCapacity ?? existingWarehouse.warehouseCapacity,
        warehouseType:
          updateData.warehouseType ?? existingWarehouse.warehouseType,
      },
    });

    return updatedWarehouse;
  } catch (error) {
    console.error("Error updating warehouse:", error);
    throw new Error("Failed to update warehouse: " + error.message);
  }
};

exports.getWarehouseByInventory = async (warehouseId, inventoryId) => {
  try {
    const warehouse = await prisma.warehouse.findUnique({
      where: {
        warehouseId, // ✅ Find warehouse by unique warehouseId
        inventoryId, // ✅ Ensure it has the given inventoryId
      },
    });

    return warehouse; // Returns the warehouse if found, otherwise null
  } catch (error) {
    console.error("Error fetching warehouse:", error);
    throw new Error("Failed to fetch warehouse");
  }
};
