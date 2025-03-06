const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// exports.createProductMovement = async ({
//   movementId,
//   warehouseId,
//   inventoryId,
//   productId,
//   sourceLocation,
//   destinationLocation,
//   quantity,
//   movementDate,
// }) => {
//   try {
//     const productMovementId = await prisma.productMovement.findUnique({
//       where: { movementId },
//     });

//     if (productMovementId) {
//       return {
//         status: 404,
//         data: { error: "ProductMovementId already exists" },
//       };
//     }
//     // 1️⃣ Check if the warehouse exists
//     const warehouse = await prisma.warehouse.findUnique({
//       where: { warehouseId, inventoryId, productId },
//       include: { inventory: true },
//     });

//     if (!warehouse) {
//       return {
//         status: 404,
//         data: { error: "Warehouse or productId or inventoryId does not match" },
//       };
//     }

//     // 2️⃣ Validate if inventory exists
//     const inventory = await prisma.inventory.findUnique({
//       where: { inventoryId },
//     });

//     if (!inventory) {
//       return { status: 404, data: { error: "Inventory not found" } };
//     }

//     // 3️⃣ Ensure the productId in inventory matches the given productId
//     if (inventory.productId !== productId) {
//       return {
//         status: 400,
//         data: { error: "Product ID does not match the inventory" },
//       };
//     }

//     // 4️⃣ Ensure the quantity does not exceed the stock level
//     if (quantity > inventory.stockLevel) {
//       return { status: 400, data: { error: "Insufficient stock level" } };
//     }

//     // 5️⃣ Create the ProductMovement entry
//     const newMovement = await prisma.productMovement.create({
//       data: {
//         movementId,
//         inventoryId,
//         warehouseId,
//         productId,
//         sourceLocation,
//         destinationLocation,
//         quantity,
//         movementDate: new Date(movementDate),
//       },
//     });

//     return {
//       status: 201,
//       data: {
//         message: "Product movement recorded successfully",
//         data: newMovement,
//       },
//     };
//   } catch (error) {
//     console.error("Error creating product movement:", error);
//     return { status: 500, data: { error: "Internal Server Error" } };
//   }
// };

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
