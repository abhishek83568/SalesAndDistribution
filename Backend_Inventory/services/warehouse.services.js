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
