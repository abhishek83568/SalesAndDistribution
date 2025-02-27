
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function DisplayDiscountRulesForm() {
	const { setBtn, setGoBackUrl } = useContext(FormPageHeaderContext);
		
	useEffect(() => {
		setBtn("NoBtn");
		setGoBackUrl("/discountrules");
	}, []);

	return (
		<>
			<FormPageHeader />

			<div className="container">
				<div className="form-container">
					<h2>Display Discount Rules</h2>

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
									<label htmlFor="applicableTo">Applicable to</label>
									<input
										type="text"
										id="applicableTo"
										name="applicableTo"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="criteria">Criteria</label>
									<input
										type="text"
										id="criteria"
										name="criteria"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="discountType">Discount Type</label>
									<input
										type="text"
										id="discountType"
										name="discountType"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="discountValue">Discount Value</label>
									<input
										type="text"
										id="discountValue"
										name="discountValue"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="effectiveDate">Effective Date</label>
									<input
										type="date"
										id="effectiveDate"
										name="effectiveDate"
										disabled
									/>
								</div>

								<div className="data">
									<label htmlFor="expiryDate">Expiry Date</label>
									<input
										type="date"
										id="expiryDate"
										name="expiryDate"
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
