import React, { useState } from "react";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function CreateDiscountForm() {
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
				<h2>Create Discount</h2>

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
								<label htmlFor="discountCriteria">Discount Criteria</label>
								<input
									type="text"
									id="discountCriteria"
									name="discountCriteria"
									value={formData.orderDate}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="productDiscount">Product Discount</label>
								<input
									type="text"
									id="productDiscount"
									name="productDiscount"
									value={formData.requiredDate}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="customerDiscount">Customer Discount</label>
								<input
									type="text"
									id="customerDiscount"
									name="customerDiscount"
									value={formData.deliveryBlock}
									onChange={handleChange}
									required
								/>
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
								<label htmlFor="discountEligibilityCondition">Discount Eligibility Condition</label>
								<input
									type="text"
									id="discountEligibilityCondition"
									name="discountEligibiltyCondition"
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
