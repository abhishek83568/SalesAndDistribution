import React, { useState } from "react";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function CreateSalesPersonForm() {
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
				<h2>Create Sales Person</h2>

				<form>
					{/* Header Box */}
					<div className="header-box">
						<h2>Header</h2>

						<div className="data-container">
							<div className="data">
								<label htmlFor="salesPersonId">Sales Person ID</label>
								<input
									type="text"
									id="salesPersonId"
									name="salesPersonId"
									placeholder="(Primary Key)"
									value={formData.customerId}
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
									value={formData.orderId}
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
						</div>
					</div>

					{/* Item Box */}
					<div className="item-box">
						<h2>Item</h2>

						<div className="data-container">
							<div className="data">
								<label htmlFor="salesPersonName">Sales Person Name</label>
								<input
									type="text"
									id="salesPersonName"
									name="salesPersonName"
									value={formData.orderDate}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="contactEmail">Contact Email</label>
								<input
									type="email"
									id="contactEmail"
									name="contactEmail"
									value={formData.requiredDate}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="phoneNumber">Phone Number</label>
								<input
									type="tel"
									id="phoneNumber"
									name="phoneNumber"
									value={formData.deliveryBlock}
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
								<label htmlFor="target">Target</label>
								<select
									id="target"
									name="target"
									value={formData.paymentStatus}
									onChange={handleChange}
								>
									<option>Whole Sale</option>
									<option>Retail</option>
								</select>
							</div>

							<div className="data">
								<label htmlFor="creditLimit">Credit Limit</label>
								<input
									type="text"
									id="creditLimit"
									name="creditLimit"
									placeholder="(Max Credit Allowed)"
									value={formData.deliveryBlock}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="status">Status</label>
								<select
									id="status"
									name="status"
									value={formData.paymentStatus}
									onChange={handleChange}
								>
									<option>Active</option>
									<option>Inactive</option>
								</select>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
