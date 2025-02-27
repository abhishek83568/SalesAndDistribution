import React, { useState } from "react";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function CreateDiscountRulesForm() {
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
				<h2>Create Discount Rules</h2>

				<form>
					{/* Header Box */}
					<div className="header-box">
						<h2>Header</h2>

						<div className="data-container">
							<div className="data">
								<label htmlFor="discountId">Discount ID</label>
								<input
									type="text"
									id="discountId"
									name="discountId"
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
								<label htmlFor="applicableTo">Applicable to</label>
								<select
									id="applicableTo"
									name="applicableTo"
									value={formData.paymentStatus}
									onChange={handleChange}
								>
									<option>Product</option>
									<option>Category</option>
									<option>Order Total</option>
								</select>
							</div>

							<div className="data">
								<label htmlFor="criteria">Criteria</label>
								<input
									type="text"
									id="criteria"
									name="criteria"
									placeholder="(Min. Order Quantity)"
									value={formData.requiredDate}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="discountType">Discount Type</label>
								<select
									id="discountType"
									name="discountType"
									value={formData.paymentStatus}
									onChange={handleChange}
								>
									<option>Flat</option>
									<option>Percentage</option>
								</select>
							</div>

							<div className="data">
								<label htmlFor="discountValue">Discount Value</label>
								<input
									type="text"
									id="discountValue"
									name="discountValue"
									value={formData.deliveryBlock}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="effectiveDate">Effective Date</label>
								<input
									type="date"
									id="effectiveDate"
									name="effectiveDate"
									value={formData.deliveryBlock}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="expiryDate">Expiry Date</label>
								<input
									type="date"
									id="expiryDate"
									name="expiryDate"
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
