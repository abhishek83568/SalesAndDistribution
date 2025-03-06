const productMovementService = require("../services/productMovement.services");

exports.createProductMovement = async (req, res) => {
  try {
    const {
      movementId,
      warehouseId,
      inventoryId,
      productId,
      sourceLocation,
      destinationLocation,
      quantity,
      movementDate,
    } = req.body;

    // ✅ Validate that all fields are provided
    if (
      !movementId ||
      !warehouseId ||
      !inventoryId ||
      !productId ||
      !sourceLocation ||
      !destinationLocation ||
      !quantity ||
      !movementDate
    ) {
      return res
        .status(400)
        .json({
          error:
            "All fields (movementId, warehouseId, inventoryId, productId, sourceLocation, destinationLocation, quantity, movementDate) are required",
        });
    }

    // ✅ Ensure quantity is a positive number
    if (typeof quantity !== "number" || quantity <= 0) {
      return res
        .status(400)
        .json({ error: "Quantity must be a positive number" });
    }

    // ✅ Ensure movementDate is a valid date
    if (isNaN(new Date(movementDate).getTime())) {
      return res.status(400).json({ error: "Invalid movementDate format" });
    }

    // Call service function to handle logic
    const result = await productMovementService.createProductMovement({
      movementId,
      warehouseId,
      inventoryId,
      productId,
      sourceLocation,
      destinationLocation,
      quantity,
      movementDate,
    });

    res.status(result.status).json(result.data);
  } catch (error) {
    console.error("Error creating product movement:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
