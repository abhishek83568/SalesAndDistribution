const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createProductMovement = async ({
  movementId,
  warehouseId,
  inventoryId,
  productId,
  sourceLocation,
  destinationLocation,
  quantity,
  movementDate,
}) => {
  try {
    // 🔹 Check if Product Movement already exists
    const existingMovement = await prisma.productMovement.findUnique({
      where: { movementId },
    });

    if (existingMovement) {
      return {
        status: 400,
        data: { error: "Product Movement ID already exists" },
      };
    }

    // 🔹 Ensure the warehouse contains the correct productId and inventoryId
    const warehouse = await prisma.warehouse.findFirst({
      where: {
        warehouseId,
        inventoryId,
        productId, // Direct check in warehouse table
      },
    });

    if (!warehouse) {
      return {
        status: 404,
        data: {
          error:
            "Warehouse does not contain the specified product and inventory",
        },
      };
    }

    // 🔹 Check if the inventory exists
    const inventory = await prisma.inventory.findUnique({
      where: { inventoryId },
    });

    if (!inventory) {
      return { status: 404, data: { error: "Inventory not found" } };
    }

    // 🔹 Ensure the product in inventory matches the given product ID
    if (inventory.productId !== productId) {
      return {
        status: 400,
        data: { error: "Product ID does not match the inventory" },
      };
    }

    // 🔹 Ensure there is enough stock available
    if (quantity > inventory.stockLevel) {
      return { status: 400, data: { error: "Insufficient stock level" } };
    }

    // 🔹 Create the ProductMovement entry
    const newMovement = await prisma.productMovement.create({
      data: {
        movementId,
        inventoryId,
        warehouseId,
        productId,
        sourceLocation,
        destinationLocation,
        quantity,
        movementDate: new Date(movementDate),
      },
    });

    return {
      status: 201,
      data: {
        message: "Product movement recorded successfully",
        data: newMovement,
      },
    };
  } catch (error) {
    console.error("Error creating product movement:", error);
    return { status: 500, data: { error: "Internal Server Error" } };
  }
};

exports.getProductMovementById = async (movementId) => {
  try {
    const productMovement = await prisma.productMovement.findUnique({
      where: { movementId: movementId },
    });
    return productMovement;
  } catch (error) {
    console.error("Error in getProductMovementById:", error);
    throw error;
  }
};

exports.getProductMovementWithProduct = async (movementId, productId) => {
  try {
    const productMovement = await prisma.productMovement.findUnique({
      where: { movementId, productId },
    });
    return productMovement;
  } catch (error) {
    console.error("Error in getProductMovement:", error);
    throw error;
  }
};

exports.editProductMovement = async (movementId, updateData) => {
  try {
    const existingMovement = await prisma.productMovement.findUnique({
      where: { movementId },
    });
    if (!existingMovement) {
      return { status: 404, data: { error: "ProductMovement not found" } };
    }

    const warehouse = await prisma.warehouse.findFirst({
      where: {
        warehouseId: updateData.warehouseId ?? existingMovement.warehouseId,
        inventoryId: updateData.inventoryId ?? existingMovement.inventoryId,
        productId: updateData.productId ?? existingMovement.productId,
      },
    });

    if (!warehouse) {
      return { status: 404, data: { error: "Warehouse record not found" } };
    }

    const inventory = await prisma.inventory.findUnique({
      where: {
        inventoryId: updateData.inventoryId ?? existingMovement.inventoryId,
      },
    });

    if (!inventory) {
      return { status: 404, data: { error: "Inventory not found" } };
    }

    if (
      (updateData.productId ?? existingMovement.productId) !==
      inventory.productId
    ) {
      return {
        status: 400,
        data: { error: "Product ID does not match the inventory" },
      };
    }

    if (
      (updateData.quantity ?? existingMovement.quantity) > inventory.stockLevel
    ) {
      return { status: 400, data: { error: "Insufficient stock level" } };
    }

    const updatedProductMovement = await prisma.productMovement.update({
      where: { movementId },
      data: {
        warehouseId: updateData.warehouseId ?? existingMovement.warehouseId,
        inventoryId: updateData.inventoryId ?? existingMovement.inventoryId,
        productId: updateData.productId ?? existingMovement.productId,
        sourceLocation:
          updateData.sourceLocation ?? existingMovement.sourceLocation,
        destinationLocation:
          updateData.destinationLocation ??
          existingMovement.destinationLocation,
        quantity: updateData.quantity ?? existingMovement.quantity,
        movementDate: updateData.movementDate
          ? new Date(updateData.movementDate).toISOString()
          : existingMovement.movementDate,
      },
    });

    return { status: 200, data: updatedProductMovement };
  } catch (error) {
    console.error("Error in editProductMovement:", error);
    return { status: 500, data: error };
  }
};
