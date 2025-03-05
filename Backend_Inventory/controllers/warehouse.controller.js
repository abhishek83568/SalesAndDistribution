const warehouseService = require("../services/warehouse.services");

exports.createWarehouse = async (req, res) => {
  try {
    const {
      warehouseId,
      inventoryId,
      productId,
      warehouseName,
      warehouseAddress,
      warehouseCapacity,
      warehouseType,
    } = req.body;

    if (
      !warehouseId ||
      !inventoryId ||
      !productId ||
      !warehouseName ||
      !warehouseAddress ||
      !warehouseCapacity ||
      !warehouseType
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const warehouse = await warehouseService.createWarehouse({
      warehouseId,
      inventoryId,
      productId,
      warehouseName,
      warehouseAddress,
      warehouseCapacity,
      warehouseType,
    });

    return res
      .status(201)
      .json({ message: "Warehouse Created Successfully", warehouse });
  } catch (error) {
    console.error("Error in warehouse controller:", error);
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
};
