import React, { useState } from "react";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function CreateLineItemsForm() {
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
				<h2>New Line Item</h2>

				<form>
					{/* Header Box */}
					<div className="header-box">
						<h2>Header</h2>

						<div className="data-container">
							<div className="data">
								<label htmlFor="lineItemId">Order Line Item ID</label>
								<input
									type="text"
									id="lineItemId"
									name="lineItemId"
									placeholder="(Primary Key)"
									value={formData.customerId}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="orderId">Order ID</label>
								<input
									type="text"
									id="orderId"
									name="orderId"
									value={formData.orderId}
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

							<div className="data">
								<label htmlFor="customerId">Customer ID</label>
								<input
									type="text"
									id="customerId"
									name="customerId"
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
								<label htmlFor="quantity">Quantity</label>
								<input
									type="text"
									id="quantity"
									name="quantity"
									value={formData.orderDate}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="unitPrice">Unit Price</label>
								<input
									type="text"
									id="unitPrice"
									name="unitPrice"
									value={formData.requiredDate}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="discount">Discount</label>
								<input
									type="text"
									id="discount"
									name="discount"
									value={formData.deliveryBlock}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="tax">Tax</label>
								<input
									type="text"
									id="tax"
									name="tax"
									value={formData.deliveryBlock}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="totalLinePrice">Total Line Price</label>
								<input
									type="text"
									id="totalLinePrice"
									name="totalLinePrice"
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
