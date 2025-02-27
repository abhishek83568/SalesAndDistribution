
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function EditDiscountRulesForm() {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);
		
	useEffect(() => {
		setBtn("Save");
		setUrl("/discountrules");
		setGoBackUrl("/discountrules");
	}, []);

	return (
		<>
			<FormPageHeader />

			<div className="container">
				<div className="form-container">
					<h2>Edit Discount Rules</h2>

					<div className="header-box">
						<h2>Header</h2>

						<form>
							<div className="data-container">
								<div className="data">
									<label htmlFor="discountId">Discount ID</label>
									<input
										type="text"
										id="discountId"
										name="discountId"
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
									<label htmlFor="applicableTo">Applicable to</label>
									<select
										id="applicableTo"
										name="applicableTo"
										value=""
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
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="discountType">Discount Type</label>
									<select
										id="discountType"
										name="discountType"
										value=""
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
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="effectiveDate">Effective Date</label>
									<input
										type="date"
										id="effectiveDate"
										name="effectiveDate"
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="expiryDate">Expiry Date</label>
									<input
										type="date"
										id="expiryDate"
										name="expiryDate"
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
