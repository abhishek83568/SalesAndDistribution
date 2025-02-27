
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

const EditSalesOrderPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editsalesorderpage");	// Edit this
		setGoBackUrl("/salesorder");
	}, []);

	return (
		<>
			<FormPageHeader />
			
			<div className="container">
				<div className="form-container">
					<h2>Edit Sales Order - Mandatory Details</h2>

					<form className="header-box">
						<div className="data-container">
							<div className="data">
								<label htmlFor="salesOrderId">Sales Order ID</label>
								<input
									type="text"
									id="salesOrderId"
									name="salesOrderId"
									placeholder="(Primary Key)"
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="customerId">Customer ID</label>
								<input
									type="text"
									id="customerId"
									name="customerId"
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

export default EditSalesOrderPage;