
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

const EditPricingRulesPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editpricingrulespage");	// Edit this
		setGoBackUrl("/pricingrules");
	}, []);

	return (
		<>
			<FormPageHeader />
			
			<div className="container">
				<div className="form-container">
					<h2>Edit Pricing Rules - Mandatory Details</h2>

					<form className="header-box">
						<div className="data-container">
							<div className="data">
								<label htmlFor="ruleId">Rule ID</label>
								<input
									type="text"
									id="ruleId"
									name="ruleId"
									placeholder="(Primary Key)"
									required
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default EditPricingRulesPage;