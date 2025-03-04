// exports.createInventory = async (req, res) => {
//   try {
//     const {
//       productId,
//       location,
//       stockLevel,
//       reorderLevel,
//       safetyStock,
//       lotNumber,
//     } = req.body;

//     // Validate required fields
//     if (
//       !productId ||
//       !location ||
//       !stockLevel ||
//       !reorderLevel ||
//       !safetyStock ||
//       !lotNumber
//     ) {
//       return res.status(400).json({ error });
//     }

//     // Call service function
//     const inventory = await inventoryService.createOrUpdateInventory(req.body);

//     // Response based on whether it's a new record or an update
//     const statusCode = inventory.isNew ? 201 : 200;
//     const message = inventory.isNew
//       ? "Inventory Created Successfully"
//       : "Inventory Updated Successfully";

//     return res.status(statusCode).json({ message, inventory });
//   } catch (error) {
//     console.error("Error in inventory controller:", error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };
const inventoryService = require("../services/inventory.services");
exports.createInventory = async (req, res) => {
  try {
    const {
      productId,
      location,
      stockLevel,
      reorderLevel,
      safetyStock,
      lotNumber,
    } = req.body;

    // Validate required fields
    if (
      !productId ||
      !location ||
      !stockLevel ||
      !reorderLevel ||
      !safetyStock ||
      !lotNumber
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Call service function
    const inventory = await inventoryService.createInventory(req.body);

    // Response based on whether it's a new record or an update

    return res
      .status(201)
      .json({ message: "Inventory Created Successfully", inventory });
  } catch (error) {
    console.error("Error in inventory controller:", error);
    return res.status(500).json({ error: error });
  }
};
