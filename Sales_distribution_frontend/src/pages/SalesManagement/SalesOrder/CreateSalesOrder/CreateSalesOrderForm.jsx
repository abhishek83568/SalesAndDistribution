import React, { useState } from "react";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function CreateSalesOrderForm() {
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
        <h2>New Sales Order</h2>

        <form>
          {/* Header Box */}
          <div className="header-box">
            <h2>Header</h2>

            <div className="data-container">
              <div className="data">
                <label htmlFor="orderId">Order ID</label>
                <input
                  type="text"
                  id="orderId"
                  name="orderId"
                  placeholder="(Foreign Key to Customer)"
                  value={formData.orderId}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="data">
                <label htmlFor="customerId">Customer ID</label>
                <input
                  type="text"
                  id="customerId"
                  name="customerId"
                  placeholder="(Primary Key)"
                  value={formData.customerId}
                  onChange={handleChange}
                  required
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
                <label htmlFor="orderDate">Order Date</label>
                <input
                  type="date"
                  id="orderDate"
                  name="orderDate"
                  value={formData.orderDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="data">
                <label htmlFor="requiredDate">Required Date</label>
                <input
                  type="date"
                  id="requiredDate"
                  name="requiredDate"
                  value={formData.requiredDate}
                  onChange={handleChange}
                  step={1}
                  required
                />
              </div>

              <div className="data">
                <label htmlFor="deliveryBlock">Delivery Block</label>
                <input
                  type="text"
                  id="deliveryBlock"
                  name="deliveryBlock"
                  value={formData.deliveryBlock}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="data">
                <label htmlFor="orderStatus">Order Status</label>
                <select
                  id="orderStatus"
                  name="orderStatus"
                  value={formData.orderStatus}
                  onChange={handleChange}
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              <div className="data">
                <label htmlFor="paymentStatus">Payment Status</label>
                <select
                  id="paymentStatus"
                  name="paymentStatus"
                  value={formData.paymentStatus}
                  onChange={handleChange}
                >
                  <option>Unpaid</option>
                  <option>Partially Paid</option>
                  <option>Fully Paid</option>
                </select>
              </div>

              <div className="data">
                <label htmlFor="total">Total</label>
                <input
                  type="text"
                  id="total"
                  name="total"
                  value={formData.total}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
