
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function EditProductForm() {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);
		
	useEffect(() => {
		setBtn("Save");
		setUrl("/product");
		setGoBackUrl("/product");
	}, []);

	return (
		<>
			<FormPageHeader />

			<div className="container">
				<div className="form-container">
					<h2>Edit Product</h2>

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
									<label htmlFor="productName">Product Name</label>
									<input
										type="text"
										id="productName"
										name="productName"
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="category">Category</label>
									<input
										type="text"
										id="category"
										name="category"
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="basePrice">Description</label>
									<input
										type="text"
										id="description"
										name="description"
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="unitOfMeasurement">Unit of Measurement</label>
									<input
										type="date"
										id="unitOfMeasurement"
										name="unitOfMeasurement"
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="weightvolume">Weight/Volume</label>
									<input
										type="date"
										id="weightvolume"
										name="weightvolume"
										value=""
										required
									/>
								</div>

								<div className="data">
									<label htmlFor="stockStatus">Stock Status</label>
									<input
										type="date"
										id="stockStatus"
										name="stockStatus"
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
