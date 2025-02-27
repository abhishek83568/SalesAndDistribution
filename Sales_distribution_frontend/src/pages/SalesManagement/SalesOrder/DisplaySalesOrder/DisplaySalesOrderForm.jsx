
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function DisplaySalesOrderForm() {
	const { setBtn, setGoBackUrl } = useContext(FormPageHeaderContext);
		
	useEffect(() => {
		setBtn("NoBtn");
		setGoBackUrl("/salesorder");
	}, []);

	return (
		<>
			<FormPageHeader />

			<div className="container">
				<div className="form-container">
					<h2>Display Sales Order</h2>

					<div className="header-box">
						<h2>Header</h2>

						<form>
							<div className="data-container">
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
									<label htmlFor="customerId">Customer ID</label>
									<input
										type="text"
										id="customerId"
										name="customerId"
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
									<label htmlFor="orderDate">Order Date</label>
									<input
										type="date"
										id="orderDate"
										name="orderDate"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="requiredDate">Required Date</label>
									<input
										type="date"
										id="requiredDate"
										name="requiredDate"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="deliveryBlock">Delivery Block</label>
									<input
										type="text"
										id="deliveryBlock"
										name="deliveryBlock"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="orderStatus">Order Status</label>
									<input
										type="text"
										id="orderStatus"
										name="orderStatus"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="paymentStatus">Payment Status</label>
									<input
										type="text"
										id="paymentStatus"
										name="paymentStatus"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="total">Total</label>
									<input
										type="text"
										id="total"
										name="total"
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
