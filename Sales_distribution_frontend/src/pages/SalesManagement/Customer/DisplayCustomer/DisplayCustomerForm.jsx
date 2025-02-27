
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function DisplayCustomerForm() {
	const { setBtn, setGoBackUrl } = useContext(FormPageHeaderContext);
		
	useEffect(() => {
		setBtn("NoBtn");
		setGoBackUrl("/customer");
	}, []);

	return (
		<>
			<FormPageHeader />

			<div className="container">
				<div className="form-container">
					<h2>Display Customer</h2>

					<div className="header-box">
						<h2>Header</h2>

						<form>
							<div className="data-container">
								<div className="data">
									<label htmlFor="customerId">Customer ID</label>
									<input
										type="text"
										id="customerId"
										name="customerId"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="orderId">Order ID</label>
									<input
										type="text"
										id="orderId"
										name="orderId"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="productId">Product ID</label>
									<input
										type="text"
										id="productId"
										name="productId"
										disabled
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
									<label htmlFor="customerName">Customer Name</label>
									<input
										type="text"
										id="customerName"
										name="customerName"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="email">Email</label>
									<input
										type="email"
										id="email"
										name="email"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="phoneNumber">Phone Number</label>
									<input
										type="tel"
										id="phoneNumber"
										name="phoneNumber"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="billingAddress">Billing Address</label>
									<input
										type="text"
										id="billingAddress"
										name="billingAddress"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="shippingAddress">Shipping Address</label>
									<input
										type="text"
										id="shippingAddress"
										name="shippingAddress"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="customerGroup">Customer Group</label>
									<input
										type="text"
										id="customerGroup"
										name="customerGroup"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="creditLimit">Credit Limit</label>
									<input
										type="text"
										id="creditLimit"
										name="creditLimit"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="status">Status</label>
									<select
										type="text"
										id="status"
										name="status"
										disabled
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
