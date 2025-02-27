
import React, { useEffect, useContext } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function DisplayShipmentPage() {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);
	
	useEffect(() => {
		setBtn("Display");
		setUrl("/displayshipmentpage");		// Edit this
		setGoBackUrl("/shipment");
	}, []);

	return (
		<>
			<FormPageHeader />

			<div className="container">
				<div className="form-container">
					<h2>Display Shipment - Mandatory Details</h2>

					<form className="header-box">
						<div className="data-container">
							<div className="data">
								<label htmlFor="invoiceId">Invoice ID</label>
								<input
									type="text"
									id="invoiceId"
									name="invoiceId"
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="orderId">Order ID</label>
								<input
									type="text"
									id="orderId"
									name="orderId"
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
