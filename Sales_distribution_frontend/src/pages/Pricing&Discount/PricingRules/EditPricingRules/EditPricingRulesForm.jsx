
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function EditPricingRulesForm() {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);
		
	useEffect(() => {
		setBtn("Save");
		setUrl("/pricingrules");
		setGoBackUrl("/pricingrules");
	}, []);

	return (
		<>
			<FormPageHeader />

			<div className="container">
				<div className="form-container">
					<h2>Edit Pricing Rules</h2>

					<div className="header-box">
						<h2>Header</h2>

						<form>
							<div className="data-container">
								<div className="data">
									<label htmlFor="ruleId">Rule ID</label>
									<input
										type="text"
										id="ruleId"
										name="ruleId"
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
										placeholder="(Foreign Key to Product)"
										value=""
										required
									/>
								</div>

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
							</div>
						</form>
					</div>

					<div className="item-box">
						<h2>Item</h2>

						<form>
							<div className="data-container">
								<div className="data">
									<label htmlFor="customerGroup">Customer Group</label>
									<input
										type="text"
										id="customerGroup"
										name="customerGroup"
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="region">Region</label>
									<input
										type="text"
										id="region"
										name="region"
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="basePrice">Base Price</label>
									<input
										type="text"
										id="basePrice"
										name="basePrice"
										placeholder="(Default Price of Product)"
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
