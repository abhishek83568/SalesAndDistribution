import React, { useState } from "react";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function CreateProductForm() {
  const [formData, setFormData] = useState({
    customerId: "",
    orderId: "",
    productId: "",
    orderDate: "",
    requiredDate: "",
    deliveryBlock: "",
    orderStatus: "pending",
    paymentStatus: "unpaid",
    total: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Create Product</h2>

        <form>
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
                  placeholder="(Primary Key)"
                  value={formData.orderId}
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
                <label htmlFor="productName">Product Name</label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  value={formData.requiredDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="data">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.deliveryBlock}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="data">
                <label htmlFor="basePrice">Description</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={formData.deliveryBlock}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="data">
                <label htmlFor="unitOfMeasurement">Unit of Measurement</label>
                <input
                  type="date"
                  id="unitOfMeasurement"
                  name="unitOfMeasurement"
                  value={formData.deliveryBlock}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="data">
                <label htmlFor="weightvolume">Weight/Volume</label>
                <input
                  type="text"
                  id="weightvolume"
                  name="weightvolume"
                  value={formData.deliveryBlock}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="data">
                <label htmlFor="stockStatus">Stock Status</label>
                <input
                  type="date"
                  id="stockStatus"
                  name="stockStatus"
                  value={formData.deliveryBlock}
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
