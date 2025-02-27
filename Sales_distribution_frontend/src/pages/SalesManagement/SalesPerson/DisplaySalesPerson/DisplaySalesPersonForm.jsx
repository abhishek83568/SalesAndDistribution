
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function DisplaySalesPersonForm() {
	const { setBtn, setGoBackUrl } = useContext(FormPageHeaderContext);
		
	useEffect(() => {
		setBtn("NoBtn");
		setGoBackUrl("/salesperson");
	}, []);

	return (
		<>
			<FormPageHeader />

			<div className="container">
				<div className="form-container">
					<h2>Display Sales Person</h2>

					<div className="header-box">
						<h2>Header</h2>

						<form>
							<div className="data-container">
								<div className="data">
									<label htmlFor="salesPersonId">Sales Person ID</label>
									<input
										type="text"
										id="salesPersonId"
										name="salesPersonId"
										disabled
									/>
								</div>

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
									<label htmlFor="salesPersonName">Sales Person Name</label>
									<input
										type="text"
										id="salesPersonName"
										name="salesPersonName"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="contactEmail">Contact Email</label>
									<input
										type="email"
										id="contactEmail"
										name="contactEmail"
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
									<label htmlFor="region">Region</label>
									<input
										type="text"
										id="region"
										name="region"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="target">Target</label>
									<input
										type="text"
										id="target"
										name="target"
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
									<input
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
