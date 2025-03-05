import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"; // ✅ Import useLocation
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function EditInventoryForm() {
  const { inventoryId } = useParams();
  const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);
  const location = useLocation(); // ✅ Get state data from navigation
  const inventoryData = location.state?.inventoryData || {}; // ✅ Default to empty object if no data
  console.log("params", inventoryId);
  // ✅ Initialize form state with fetched data
  const [formData, setFormData] = useState({
    inventoryId: inventoryData.inventoryId || "",
    productId: inventoryData.productId || "",
    warehouseId: inventoryData.warehouseId || "",
    location: inventoryData.location || "",
    stockLevel: inventoryData.stockLevel || "",
    reorderLevel: inventoryData.reorderLevel || "",
    safetyStock: inventoryData.safetyStock || "",
    lotNumber: inventoryData.lotNumber || "",
  });

  useEffect(() => {
    setUrl("/inventory");
    setGoBackUrl("/inventory");
  }, []);

  // ✅ Update form state on user input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {};

  return (
    <>
      <FormPageHeader />
      <div className="container">
        <div className="form-container">
          <h2>Edit Inventory</h2>

          <div className="header-box">
            <h2>Header</h2>

            <form onSubmit={handleSubmit}>
              <div className="data-container">
                <div className="data">
                  <label htmlFor="inventoryId">Inventory ID</label>
                  <input
                    type="text"
                    id="inventoryId"
                    name="inventoryId"
                    value={formData.inventoryId}
                    onChange={handleChange}
                    readOnly // ✅ Make ID read-only to prevent accidental changes
                  />
                </div>

                <div className="data">
                  <label htmlFor="productId">Product ID</label>
                  <input
                    type="text"
                    id="productId"
                    name="productId"
                    value={formData.productId}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="item-box">
            <h2>Item</h2>

            <form>
              <div className="data-container">
                <div className="data">
                  <label htmlFor="locationId">Location ID</label>
                  <input
                    type="text"
                    id="locationId"
                    name="locationId"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>

                <div className="data">
                  <label htmlFor="stockLevel">Stock Level</label>
                  <input
                    type="text"
                    id="stockLevel"
                    name="stockLevel"
                    value={formData.stockLevel}
                    onChange={handleChange}
                  />
                </div>

                <div className="data">
                  <label htmlFor="reorderLevel">Reorder Level</label>
                  <input
                    type="text"
                    id="reorderLevel"
                    name="reorderLevel"
                    value={formData.reorderLevel}
                    onChange={handleChange}
                  />
                </div>

                <div className="data">
                  <label htmlFor="safetyStock">Safety Stock</label>
                  <input
                    type="text"
                    id="safetyStock"
                    name="safetyStock"
                    value={formData.safetyStock}
                    onChange={handleChange}
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
                  />
                </div>
              </div>
              <button type="submit">Submit Edit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
