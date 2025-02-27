
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function EditDiscountForm() {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);
		
	useEffect(() => {
		setBtn("Save");
		setUrl("/discount");
		setGoBackUrl("/discount");
	}, []);

	return (
		<>
			<FormPageHeader />

			<div className="container">
				<div className="form-container">
					<h2>Edit Discount</h2>

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
									<label htmlFor="discountCriteria">Discount Criteria</label>
									<input
										type="text"
										id="discountCriteria"
										name="discountCriteria"
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="productDiscount">Product Discount</label>
									<input
										type="text"
										id="productDiscount"
										name="productDiscount"
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="customerDiscount">Customer Discount</label>
									<input
										type="text"
										id="customerDiscount"
										name="customerDiscount"
										value=""
										required
									/>
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
									<label htmlFor="discountEligibilityCondition">Discount Eligibility Condition</label>
									<input
										type="text"
										id="discountEligibilityCondition"
										name="discountEligibiltyCondition"
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
