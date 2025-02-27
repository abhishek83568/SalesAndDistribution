import React, { useState } from "react";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function CreatePricingRulesForm() {
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
				<h2>Create Pricing Rules</h2>

				<form>
					{/* Header Box */}
					<div className="header-box">
						<h2>Header</h2>

						<div className="data-container">
							<div className="data">
								<label htmlFor="ruleId">Rule ID</label>
								<input
									type="text"
									id="ruleId"
									name="ruleId"
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
									placeholder="(Foreign Key to Product)"
									value={formData.orderId}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="discountId">Discount ID</label>
								<input
									type="text"
									id="discountId"
									name="discountId"
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
								<label htmlFor="customerGroup">Customer Group</label>
								<input
									type="text"
									id="customerGroup"
									name="customerGroup"
									value={formData.requiredDate}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="region">Region</label>
								<input
									type="text"
									id="region"
									name="region"
									value={formData.deliveryBlock}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="basePrice">Base Price</label>
								<input
									type="text"
									id="basePrice"
									name="basePrice"
									placeholder="(Default Price of Product)"
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
