
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

const EditCustomerPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editcustomerpage");	// Edit this
		setGoBackUrl("/customer");
	}, []);

	return (
		<>
			<FormPageHeader />
			
			<div className="container">
				<div className="form-container">
					<h2>Edit Customer - Mandatory Details</h2>

					<form className="header-box">
						<div className="data-container">
							<div className="data">
								<label htmlFor="customerId">Customer ID</label>
								<input
									type="text"
									id="customerId"
									name="customerId"
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="productId">Product ID</label>
								<input
									type="text"
									id="productId"
									name="productId"
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

export default EditCustomerPage;