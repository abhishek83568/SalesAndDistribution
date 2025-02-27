
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function DisplayLineItemsForm() {
	const { setBtn, setGoBackUrl } = useContext(FormPageHeaderContext);
		
	useEffect(() => {
		setBtn("NoBtn");
		setGoBackUrl("/lineitems");
	}, []);

	return (
		<>
			<FormPageHeader />

			<div className="container">
				<div className="form-container">
					<h2>Display Line Items</h2>

					<div className="header-box">
						<h2>Header</h2>

						<form>
							<div className="data-container">
								<div className="data">
									<label htmlFor="lineItemId">Order Line Item ID</label>
									<input
										type="text"
										id="lineItemId"
										name="lineItemId"
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

								<div className="data">
									<label htmlFor="customerId">Customer ID</label>
									<input
										type="text"
										id="customerId"
										name="customerId"
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
									<label htmlFor="quantity">Quantity</label>
									<input
										type="text"
										id="quantity"
										name="quantity"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="unitPrice">Unit Price</label>
									<input
										type="text"
										id="unitPrice"
										name="unitPrice"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="discount">Discount</label>
									<input
										type="text"
										id="discount"
										name="discount"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="tax">Tax</label>
									<input
										type="text"
										id="tax"
										name="tax"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="totalLinePrice">Total Line Price</label>
									<input
										type="text"
										id="totalLinePrice"
										name="totalLinePrice"
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
