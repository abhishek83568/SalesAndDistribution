import React, { useState } from "react";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function CreateInventoryForm() {
  const [formData, setFormData] = useState({
    productId: "",
    locationId: "",
    stockLevel: "",
    reorderLevel: "",
    safetyStock: "",
    lotNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
    } catch (error) {}
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Create Inventory</h2>

        <form onSubmit={handleSubmit}>
          {/* Header Box */}
          <div className="header-box">
            <h2>Header</h2>

            <div className="data-container">
              <div className="data">
                <label htmlFor="productId">Product ID</label>
                <input
                  type="text"
                  id="productId"
                  name="productId"
                  placeholder="Foreign Key for Product"
                  value={formData.productId}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Item Box */}
          <div className="item-box">
            <h2>Item</h2>

            <div className="data-container">
              <div className="data">
                <label htmlFor="locationId">Location ID</label>
                <input
                  type="text"
                  id="locationId"
                  name="locationId"
                  value={formData.locationId}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="data">
                <label htmlFor="stockLevel">Stock Level</label>
                <input
                  type="number"
                  id="stockLevel"
                  name="stockLevel"
                  value={formData.stockLevel}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="data">
                <label htmlFor="reorderLevel">Reorder Level</label>
                <input
                  type="number"
                  id="reorderLevel"
                  name="reorderLevel"
                  value={formData.reorderLevel}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="data">
                <label htmlFor="safetyStock">Safety Stock</label>
                <input
                  type="number"
                  id="safetyStock"
                  name="safetyStock"
                  value={formData.safetyStock}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="data">
                <label htmlFor="lotNumber">Lot Number</label>
                <input
                  type="text"
                  id="lotNumber"
                  name="lotNumber"
                  value={formData.lotNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
