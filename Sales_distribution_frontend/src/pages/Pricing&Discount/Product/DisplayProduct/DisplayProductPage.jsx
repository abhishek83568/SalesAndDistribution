
import React, { useEffect, useContext } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function DisplayProductPage() {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);
	
	useEffect(() => {
		setBtn("Display");
		setUrl("/displayproductpage");		// Edit this
		setGoBackUrl("/product");
	}, []);

	return (
		<>
			<FormPageHeader />

			<div className="container">
				<div className="form-container">
					<h2>Display Product - Mandatory Details</h2>

					<form className="header-box">
						<div className="data-container">
							<div className="data">
								<label htmlFor="productId">Product ID</label>
								<input
									type="text"
									id="productId"
									name="productId"
									required
								/>
							</div>

							<div className="data">
								<label htmlFor="productCategory">Product Category</label>
								<input
									type="text"
									id="productCategory"
									name="productCategory"
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
