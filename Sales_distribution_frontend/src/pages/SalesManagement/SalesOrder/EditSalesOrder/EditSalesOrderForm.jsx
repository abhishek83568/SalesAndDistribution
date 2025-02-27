
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function EditSalesOrderForm() {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);
		
	useEffect(() => {
		setBtn("Save");
		setUrl("/salesorder");
		setGoBackUrl("/salesorder");
	}, []);

	return (
		<>
			<FormPageHeader />

			<div className="container">
				<div className="form-container">
					<h2>Edit Sales Order</h2>

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
										placeholder="(Foreign Key to Customer)"
										value=""
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
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="productId">Product ID</label>
									<input
										type="text"
										id="productId"
										name="productId"
										value=""
										required
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
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="requiredDate">Required Date</label>
									<input
										type="date"
										id="requiredDate"
										name="requiredDate"
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="deliveryBlock">Delivery Block</label>
									<input
										type="text"
										id="deliveryBlock"
										name="deliveryBlock"
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="orderStatus">Order Status</label>
									<select
										id="orderStatus"
										name="orderStatus"
										value=""
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
										value=""
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
										value=""
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
