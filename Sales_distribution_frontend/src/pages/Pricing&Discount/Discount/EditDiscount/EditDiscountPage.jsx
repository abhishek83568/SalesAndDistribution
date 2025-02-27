
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

const EditDiscountPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editdiscountpage");	// Edit this
		setGoBackUrl("/discount");
	}, []);

	return (
		<>
			<FormPageHeader />
			
			<div className="container">
				<div className="form-container">
					<h2>Edit Discount - Mandatory Details</h2>

					<form className="header-box">
						<div className="data-container">
							<div className="data">
								<label htmlFor="discountId">Discount ID</label>
								<input
									type="text"
									id="discountId"
									name="discountId"
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

export default EditDiscountPage;