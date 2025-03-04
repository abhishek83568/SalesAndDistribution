const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createInventory = async ({
  productId,
  location,
  stockLevel,
  reorderLevel,
  safetyStock,
  lotNumber,
}) => {
  try {
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
  } catch (error) {
    console.error("Error in inventory operation:", error);
    // Optionally, throw a more detailed error for debugging:
    throw new Error("Failed to create inventory: " + error.message);
  }
};
