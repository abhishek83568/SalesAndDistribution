
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

const EditProductPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editproductpage");	// Edit this
		setGoBackUrl("/product");
	}, []);

	return (
		<>
			<FormPageHeader />
			
			<div className="container">
				<div className="form-container">
					<h2>Edit Product - Mandatory Details</h2>

					<form className="header-box">
						<div className="data-container">
							<div className="data">
								<label htmlFor="productId">Product ID</label>
								<input
									type="text"
									id="productId"
									name="productId"
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

export default EditProductPage;