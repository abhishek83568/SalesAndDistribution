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
//     // 🔹 Check if Product Movement already exists
//     const existingMovement = await prisma.productMovement.findUnique({
//       where: { movementId },
//     });

//     if (existingMovement) {
//       return {
//         status: 400,
//         data: { error: "Product Movement ID already exists" },
//       };
//     }

//     // 🔹 Ensure the warehouse contains the correct productId and inventoryId
//     const warehouse = await prisma.warehouse.findFirst({
//       where: {
//         warehouseId,
//         inventoryId,
//         productId, // Direct check in warehouse table
//       },
//     });

//     if (!warehouse) {
//       return {
//         status: 404,
//         data: {
//           error:
//             "Warehouse does not contain the specified product and inventory",
//         },
//       };
//     }

//     // 🔹 Check if the inventory exists
//     const inventory = await prisma.inventory.findUnique({
//       where: { inventoryId },
//     });

//     if (!inventory) {
//       return { status: 404, data: { error: "Inventory not found" } };
//     }

//     // 🔹 Ensure the product in inventory matches the given product ID
//     if (inventory.productId !== productId) {
//       return {
//         status: 400,
//         data: { error: "Product ID does not match the inventory" },
//       };
//     }

//     // 🔹 Ensure there is enough stock available
//     if (quantity > inventory.stockLevel) {
//       return { status: 400, data: { error: "Insufficient stock level" } };
//     }

//     // 🔹 Create the ProductMovement entry
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

    // 🔹 Ensure the warehouse contains the correct product and inventory
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

    // 🔹 Check if there is enough stock
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

    // 🔹 Reduce the inventory stock level
    const updatedInventory = await prisma.inventory.update({
      where: { inventoryId },
      data: {
        stockLevel: inventory.stockLevel - quantity, // Reduce stock
      },
    });

    let alertMessage = null;
    if (updatedInventory.stockLevel < updatedInventory.safetyStock) {
      alertMessage = `⚠️ Warning: Product stock (${updatedInventory.stockLevel}) is below safety stock level (${updatedInventory.safetyStock}). Consider restocking.`;
    }

    if (updatedInventory.stockLevel < updatedInventory.reorderLevel) {
      alertMessage = `⚠️ Warning: Product stock (${updatedInventory.stockLevel}) is below reorder level (${updatedInventory.reorderLevel}). Consider reordering.`;
    }

    return {
      status: 201,
      data: {
        message: "Product movement recorded successfully",
        data: newMovement,
        alert: alertMessage, // Send an alert if stock is low
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

// exports.editProductMovement = async (movementId, updateData) => {
//   try {
//     const existingMovement = await prisma.productMovement.findUnique({
//       where: { movementId },
//     });

//     if (!existingMovement) {
//       return { status: 404, data: { error: "ProductMovement not found" } };
//     }

//     const previousInventory = await prisma.inventory.findUnique({
//       where: { inventoryId: existingMovement.inventoryId },
//     });

//     if (!previousInventory) {
//       return { status: 404, data: { error: "Previous inventory not found" } };
//     }

//     // Extract updated values or use existing ones
//     const newInventoryId =
//       updateData.inventoryId ?? existingMovement.inventoryId;
//     const newProductId = updateData.productId ?? existingMovement.productId;
//     const newWarehouseId =
//       updateData.warehouseId ?? existingMovement.warehouseId;
//     const newQuantity = updateData.quantity ?? existingMovement.quantity;

//     const newInventory = await prisma.inventory.findUnique({
//       where: { inventoryId: newInventoryId },
//     });

//     if (!newInventory) {
//       return { status: 404, data: { error: "New inventory not found" } };
//     }

//     // Step 1: Validate warehouse association with inventory
//     const warehouse = await prisma.warehouse.findFirst({
//       where: { warehouseId: newWarehouseId, inventoryId: newInventoryId },
//     });

//     if (!warehouse) {
//       return {
//         status: 400,
//         data: { error: "Warehouse is not associated with this inventory" },
//       };
//     }

//     // **CASE 1: User DID NOT Change Inventory or Product**
//     if (
//       newInventoryId === existingMovement.inventoryId &&
//       newProductId === existingMovement.productId
//     ) {
//       // Add back the previous quantity to the stock level
//       await prisma.inventory.update({
//         where: { inventoryId: newInventoryId },
//         data: {
//           stockLevel: newInventory.stockLevel + existingMovement.quantity, // ✅ Add back previous quantity
//         },
//       });

//       // Fetch updated inventory stock after restoring previous quantity
//       const updatedInventory = await prisma.inventory.findUnique({
//         where: { inventoryId: newInventoryId },
//       });

//       // Ensure there is enough stock to deduct the new quantity
//       if (newQuantity > updatedInventory.stockLevel) {
//         return {
//           status: 400,
//           data: { error: "Insufficient stock level in inventory" },
//         };
//       }

//       // Deduct the new quantity
//       await prisma.inventory.update({
//         where: { inventoryId: newInventoryId },
//         data: {
//           stockLevel: updatedInventory.stockLevel - newQuantity, // ✅ Deduct the new quantity
//         },
//       });
//     } else {
//       // **CASE 2: User Changed Inventory or Product**
//       // Step 1: Restore stock level in the old inventory (previous inventory)
//       await prisma.inventory.update({
//         where: { inventoryId: existingMovement.inventoryId },
//         data: {
//           stockLevel: previousInventory.stockLevel + existingMovement.quantity, // ✅ Add back previous quantity
//         },
//       });

//       // Ensure new inventory has the correct product
//       if (newInventory.productId !== newProductId) {
//         return {
//           status: 400,
//           data: { error: "Product ID does not match the new inventory" },
//         };
//       }

//       // Ensure the new inventory has enough stock
//       if (newQuantity > newInventory.stockLevel) {
//         return {
//           status: 400,
//           data: { error: "Insufficient stock level in new inventory" },
//         };
//       }

//       // Step 2: Deduct the new quantity from the new inventory
//       await prisma.inventory.update({
//         where: { inventoryId: newInventoryId },
//         data: {
//           stockLevel: newInventory.stockLevel - newQuantity, // ✅ Deduct new quantity from new inventory
//         },
//       });
//     }

//     // Step 3: Check for Safety Stock & Reorder Level
//     const finalStockLevel = await prisma.inventory.findUnique({
//       where: { inventoryId: newInventoryId },
//     });

//     if (finalStockLevel.stockLevel < newInventory.safetyStock) {
//       console.warn("⚠️ Warning: Stock is below safety stock level!");
//     }

//     if (finalStockLevel.stockLevel < newInventory.reorderLevel) {
//       console.warn(
//         "⚠️ Alert: Stock is below reorder level, consider restocking!"
//       );
//     }

//     // Step 4: Update the Product Movement Entry
//     const updatedProductMovement = await prisma.productMovement.update({
//       where: { movementId },
//       data: {
//         warehouseId: newWarehouseId,
//         inventoryId: newInventoryId,
//         productId: newProductId,
//         sourceLocation:
//           updateData.sourceLocation ?? existingMovement.sourceLocation,
//         destinationLocation:
//           updateData.destinationLocation ??
//           existingMovement.destinationLocation,
//         quantity: newQuantity,
//         movementDate: updateData.movementDate
//           ? new Date(updateData.movementDate).toISOString()
//           : existingMovement.movementDate,
//       },
//     });

//     return { status: 200, data: updatedProductMovement };
//   } catch (error) {
//     console.error("Error in editProductMovement:", error);
//     return { status: 500, data: { error: "Internal Server Error" } };
//   }
// };

exports.editProductMovement = async (movementId, updateData) => {
  try {
    const existingMovement = await prisma.productMovement.findUnique({
      where: { movementId },
    });

    if (!existingMovement) {
      return { status: 404, data: { error: "ProductMovement not found" } };
    }

    const previousInventory = await prisma.inventory.findUnique({
      where: { inventoryId: existingMovement.inventoryId },
    });

    if (!previousInventory) {
      return { status: 404, data: { error: "Previous inventory not found" } };
    }

    const newInventoryId =
      updateData.inventoryId ?? existingMovement.inventoryId;
    const newProductId = updateData.productId ?? existingMovement.productId;
    const newWarehouseId =
      updateData.warehouseId ?? existingMovement.warehouseId;
    const newQuantity = updateData.quantity ?? existingMovement.quantity;

    const newInventory = await prisma.inventory.findUnique({
      where: { inventoryId: newInventoryId },
    });

    if (!newInventory) {
      return { status: 404, data: { error: "New inventory not found" } };
    }

    const warehouse = await prisma.warehouse.findFirst({
      where: { warehouseId: newWarehouseId, inventoryId: newInventoryId },
    });

    if (!warehouse) {
      return {
        status: 400,
        data: { error: "Warehouse is not associated with this inventory" },
      };
    }

    // Initialize alerts array
    let alerts = [];

    if (
      newInventoryId === existingMovement.inventoryId &&
      newProductId === existingMovement.productId
    ) {
      await prisma.inventory.update({
        where: { inventoryId: newInventoryId },
        data: {
          stockLevel: newInventory.stockLevel + existingMovement.quantity,
        },
      });

      const updatedInventory = await prisma.inventory.findUnique({
        where: { inventoryId: newInventoryId },
      });

      if (newQuantity > updatedInventory.stockLevel) {
        return {
          status: 400,
          data: { error: "Insufficient stock level in inventory" },
        };
      }

      await prisma.inventory.update({
        where: { inventoryId: newInventoryId },
        data: {
          stockLevel: updatedInventory.stockLevel - newQuantity,
        },
      });
    } else {
      await prisma.inventory.update({
        where: { inventoryId: existingMovement.inventoryId },
        data: {
          stockLevel: previousInventory.stockLevel + existingMovement.quantity,
        },
      });

      if (newInventory.productId !== newProductId) {
        return {
          status: 400,
          data: { error: "Product ID does not match the new inventory" },
        };
      }

      if (newQuantity > newInventory.stockLevel) {
        return {
          status: 400,
          data: { error: "Insufficient stock level in new inventory" },
        };
      }

      await prisma.inventory.update({
        where: { inventoryId: newInventoryId },
        data: {
          stockLevel: newInventory.stockLevel - newQuantity,
        },
      });
    }

    const finalStockLevel = await prisma.inventory.findUnique({
      where: { inventoryId: newInventoryId },
    });

    if (finalStockLevel.stockLevel < newInventory.safetyStock) {
      alerts.push("⚠️ Warning: Stock is below safety stock level!");
    }

    if (finalStockLevel.stockLevel < newInventory.reorderLevel) {
      alerts.push(
        "⚠️ Alert: Stock is below reorder level, consider restocking!"
      );
    }

    const updatedProductMovement = await prisma.productMovement.update({
      where: { movementId },
      data: {
        warehouseId: newWarehouseId,
        inventoryId: newInventoryId,
        productId: newProductId,
        sourceLocation:
          updateData.sourceLocation ?? existingMovement.sourceLocation,
        destinationLocation:
          updateData.destinationLocation ??
          existingMovement.destinationLocation,
        quantity: newQuantity,
        movementDate: updateData.movementDate
          ? new Date(updateData.movementDate).toISOString()
          : existingMovement.movementDate,
      },
    });

    return { status: 200, data: updatedProductMovement, alerts };
  } catch (error) {
    console.error("Error in editProductMovement:", error);
    return { status: 500, data: { error: "Internal Server Error" } };
  }
};
