const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createInventory = async ({
  inventoryId,
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
        inventoryId,
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

exports.editInventory = async (inventoryId, updateData) => {
  try {
    // Fetch the existing inventory item
    const existingInventory = await prisma.inventory.findUnique({
      where: { inventoryId },
    });

    if (!existingInventory) {
      throw new Error("Inventory not found.");
    }

    // Update inventory details with provided data or fallback to existing values
    const updatedInventory = await prisma.inventory.update({
      where: { inventoryId },
      data: {
        productId: updateData.productId ?? existingInventory.productId,
        location: updateData.location ?? existingInventory.location,
        stockLevel: updateData.stockLevel ?? existingInventory.stockLevel,
        reorderLevel: updateData.reorderLevel ?? existingInventory.reorderLevel,
        safetyStock: updateData.safetyStock ?? existingInventory.safetyStock,
        lotNumber: updateData.lotNumber ?? existingInventory.lotNumber,
      },
    });

    return updatedInventory;
  } catch (error) {
    console.error("Error updating inventory:", error);
    throw new Error("Failed to update inventory: " + error.message);
  }
};

exports.getInventoryById = async (inventoryId) => {
  try {
    const inventory = await prisma.inventory.findUnique({
      where: { inventoryId: inventoryId }, // ✅ Use string directly
    });

    return inventory; // ✅ If not found, it will return null (handled in controller)
  } catch (error) {
    console.error("Error fetching inventory:", error);
    return null; // ✅ Return null instead of throwing an error
  }
};
