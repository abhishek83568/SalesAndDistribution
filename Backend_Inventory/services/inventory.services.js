const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createOrUpdateInventory = async ({
  productId,
  location,
  stockLevel,
  reorderLevel,
  safetyStock,
  lotNumber,
}) => {
  try {
    // Check if inventory already exists for the given productId
    const existingInventory = await prisma.inventory.findUnique({
      where: { productId },
    });

    if (existingInventory) {
      // Update existing inventory
      const updatedInventory = await prisma.inventory.update({
        where: { productId },
        data: {
          stockLevel,
          reorderLevel,
          safetyStock,
          lotNumber,
          location,
        },
      });

      console.log("Inventory updated successfully:", updatedInventory);
      return updatedInventory;
    } else {
      // Create new inventory entry
      const newInventory = await prisma.inventory.create({
        data: {
          productId,
          location,
          stockLevel,
          reorderLevel,
          safetyStock,
          lotNumber,
        },
      });

      console.log("Inventory created successfully:", newInventory);
      return newInventory;
    }
  } catch (error) {
    console.error("Error in inventory operation:", error);
    throw new Error("Failed to create or update inventory");
  }
};
