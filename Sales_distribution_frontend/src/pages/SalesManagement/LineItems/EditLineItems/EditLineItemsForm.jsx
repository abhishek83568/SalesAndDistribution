
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function EditLineItemsForm() {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);
		
	useEffect(() => {
		setBtn("Save");
		setUrl("/lineitems");
		setGoBackUrl("/lineitems");
	}, []);

	return (
		<>
			<FormPageHeader />

			<div className="container">
				<div className="form-container">
					<h2>Edit Line Items</h2>

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
										placeholder="(Primary Key)"
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="orderId">Order ID</label>
									<input
										type="text"
										id="orderId"
										name="orderId"
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

								<div className="data">
									<label htmlFor="customerId">Customer ID</label>
									<input
										type="text"
										id="customerId"
										name="customerId"
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
									<label htmlFor="quantity">Quantity</label>
									<input
										type="text"
										id="quantity"
										name="quantity"
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="unitPrice">Unit Price</label>
									<input
										type="text"
										id="unitPrice"
										name="unitPrice"
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="discount">Discount</label>
									<input
										type="text"
										id="discount"
										name="discount"
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="tax">Tax</label>
									<input
										type="text"
										id="tax"
										name="tax"
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="totalLinePrice">Total Line Price</label>
									<input
										type="text"
										id="totalLinePrice"
										name="totalLinePrice"
										value=""
										required
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
