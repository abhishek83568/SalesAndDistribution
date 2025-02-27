
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

const EditDeliveryRoutePage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editdeliveryroutepage");	// Edit this
		setGoBackUrl("/deliveryroute");
	}, []);

	return (
		<>
			<FormPageHeader />
			
			<div className="container">
				<div className="form-container">
					<h2>Edit Delivery Route - Mandatory Details</h2>

					<form className="header-box">
						<div className="data-container">
							<div className="data">
								<label htmlFor="invoiceId">Invoice ID</label>
								<input
									type="text"
									id="invoiceId"
									name="invoiceId"
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

export default EditDeliveryRoutePage;