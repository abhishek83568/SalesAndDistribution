
import React, { useEffect, useContext } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function DisplayDiscountPage() {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);
	
	useEffect(() => {
		setBtn("Display");
		setUrl("/displaydiscountpage");		// Edit this
		setGoBackUrl("/discount");
	}, []);

	return (
		<>
			<FormPageHeader />

			<div className="container">
				<div className="form-container">
					<h2>Display Discount - Mandatory Details</h2>

					<form className="header-box">
						<div className="data-container">
							<div className="data">
								<label htmlFor="discountId">Discount ID</label>
								<input
									type="text"
									id="discountId"
									name="discountId"
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
