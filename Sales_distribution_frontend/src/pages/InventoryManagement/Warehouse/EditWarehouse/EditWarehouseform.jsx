// // import React, { useContext, useEffect } from "react";
// // import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
// // import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
// // import "../../../../components/Layout/Styles/BoxFormStyles.css";

// // export default function EditWarehouseForm() {
// // 	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

// // 	useEffect(() => {
// // 		setBtn("Save");
// // 		setUrl("/warehouse");
// // 		setGoBackUrl("/warehouse");
// // 	}, []);

// // 	return (
// // 		<>
// // 			<FormPageHeader />

// // 			<div className="container">
// // 				<div className="form-container">
// // 					<h2>Edit Warehouse</h2>

// // 					<div className="header-box">
// // 						<h2>Header</h2>

// // 						<form>
// // 							<div className="data-container">
// // 								<div className="data">
// // 									<label htmlFor="warehouseId">Warehouse ID</label>
// // 									<input
// // 										type="text"
// // 										id="warehouseId"
// // 										name="warehouseId"
// // 										placeholder="(Primary Key)"
// // 										value=""
// // 										required
// // 									/>
// // 								</div>

// // 								<div className="data">
// // 									<label htmlFor="inventoryId">Inventory ID</label>
// // 									<input
// // 										type="text"
// // 										id="inventoryId"
// // 										name="inventoryId"
// // 										value=""
// // 										required
// // 									/>
// // 								</div>

// // 								<div className="data">
// // 									<label htmlFor="productId">Product ID</label>
// // 									<input
// // 										type="text"
// // 										id="productId"
// // 										name="productId"
// // 										value=""
// // 										required
// // 									/>
// // 								</div>
// // 							</div>
// // 						</form>
// // 					</div>

// // 					<div className="item-box">
// // 						<h2>Item</h2>

// // 						<form>
// // 							<div className="data-container">
// // 								<div className="data">
// // 									<label htmlFor="warehouseName">Warehouse Name</label>
// // 									<input
// // 										type="text"
// // 										id="warehouseName"
// // 										name="warehouseName"
// // 										value=""
// // 										required
// // 									/>
// // 								</div>

// // 								<div className="data">
// // 									<label htmlFor="warehouseAddress">Warehouse Address</label>
// // 									<input
// // 										type="text"
// // 										id="warehouseAddress"
// // 										name="warehouseAddress"
// // 										value=""
// // 										required
// // 									/>
// // 								</div>

// // 								<div className="data">
// // 									<label htmlFor="warehouseCapacity">Warehouse Capacity</label>
// // 									<input
// // 										type="text"
// // 										id="warehouseCapacity"
// // 										name="warehouseCapacity"
// // 										value=""
// // 										required
// // 									/>
// // 								</div>

// // 								<div className="data">
// // 									<label htmlFor="warehouseType">Warehouse Type</label>
// // 									<select
// // 										id="warehouseType"
// // 										name="warehouseType"
// // 										value=""
// // 									>
// // 										<option>Owned</option>
// // 										<option>3rd Party</option>
// // 									</select>
// // 								</div>
// // 							</div>
// // 						</form>
// // 					</div>
// // 				</div>
// // 			</div>
// // 		</>
// // 	);
// // }
// import React, { useContext, useEffect, useState } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
// import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
// import "../../../../components/Layout/Styles/BoxFormStyles.css";

// export default function EditWarehouseForm() {
//   const { warehouseId } = useParams();
//   const { setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);
//   const token = localStorage.getItem("accessToken");
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Get inventory data from location state
//   const warehouseData = location.state?.warehouseData;

//   useEffect(() => {
//     setUrl("/warehouse");
//     setGoBackUrl("/warehouse");
//   }, [setUrl, setGoBackUrl]);

//   // Initialize form state
//   const [formData, setFormData] = useState(() => ({
// 	warehouseId: warehouseData?.warehouseId || "",
//     inventoryId: warehouseData?.inventoryId || "",
//     productId: warehouseData?.productId || "",
//     warehouseCapacity: warehouseData?.warehouseCapacity || "",
//     warehouseAddress: warehouseData?.warehouseAddress || "",
//     warehouseType: warehouseData?.warehouseType || "OWNED",
//     warehouseName: warehouseData?.warehouseName || "",
//   }));

//   // Handle input changes with number validation

//   const [errors, setErrors] = useState({});

//   // Validate that a field (which should be a number) contains a valid number
//   const validateNumberField = (name, value) => {
//     if (!value.trim()) {
//       return `${name} is required.`;
//     }
//     if (isNaN(Number(value))) {
//       return `${name} must be a valid number.`;
//     }
//     return "";
//   };

//   // Validate other (non-number) fields
//   const validateField = (name, value) => {
//     if (!value) {
//       return `${name} is required.`;
//     }
//     return "";
//   };

//   // Handle input changes. All inputs are of type text, even numeric ones.
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

//     // Validate numeric fields
//     if (
//       ["warehouseCapacity"].includes(name)
//     ) {
//       const errorMsg = validateNumberField(name, value);
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         [name]: errorMsg,
//       }));
//     } else {
//       const errorMsg = validateField(name, value);
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         [name]: errorMsg,
//       }));
//     }
//   };

//   // Check if the form is valid (no errors and all required fields provided)
//   const isFormValid = () => {
//     const requiredFields = [
//       "inventoryId",
//       "productId",
//       "warehouseId",
//       "warehouseCapacity",
//       "warehouseAddress",
//       "warehouseName",
//       "warehouseType",
//     ];
//     for (let field of requiredFields) {
//       if (!formData[field]) {
//         return false;
//       }
//     }
//     return Object.values(errors).every((msg) => msg === "");
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.productId || !formData.inventoryId) {
//       alert("ProductID and InventoryId are required!");
//       return;
//     }

//     try {
//       const payload = {
//         ...formData,
//         warehouseCapacity: Number(formData.warehouseCapacity),

//       };
//       const response = await fetch(
//         `http://localhost:7857/api/warehouse/edit-warehouse/${formData.warehouseId}`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(payload),
//         }
//       );
//       const data = await response.json();

//       if (response.ok) {
//         console.log(data);
//         setFormData({
// 			warehouseId:"",
//           inventoryId: "",
//           productId: "",
//           warehouseAddress: "",
//           warehouseCapacity: "", // numeric values as strings
//           warehouseType: "",
//           warehouseType: "",

//         });
//         alert("warehouse updated successfully!");
//         navigate("/warehouse");
//       } else {
//         alert(data.message || "Failed to edit warehouse");
//       }
//     } catch (error) {
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <>
//       <FormPageHeader />
//       <div className="container">
//         <div className="form-container">
//           <h2>Edit Inventory</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="header-box">
//               <h2>Header</h2>
//               <div className="data-container">
//                 <div className="data">
//                   <label htmlFor="warehouseId">Warehouse ID</label>
//                   <input
//                     type="text"
//                     id="warehouseId"
//                     name="warehouseId"
//                     value={formData.warehouseId}
//                     readOnly
//                   />
//                 </div>
// 				<div className="data">
//                   <label htmlFor="inventoryId">Inventory ID</label>
//                   <input
//                     type="text"
//                     id="inventoryId"
//                     name="inventoryId"
//                     value={formData.inventoryId}
//                     onChange={handleChange}
//                     required
//                   />
//                   {errors.productId && (
//                     <p className="error">{errors.productId}</p>
//                   )}
//                 </div>
//                 <div className="data">
//                   <label htmlFor="productId">Product ID</label>
//                   <input
//                     type="text"
//                     id="productId"
//                     name="productId"
//                     value={formData.productId}
//                     onChange={handleChange}
//                     required
//                   />
//                   {errors.productId && (
//                     <p className="error">{errors.productId}</p>
//                   )}
//                 </div>

//               </div>
//             </div>

//             <div className="item-box">
//               <h2>Item</h2>
//               <div className="data-container">
//                 <div className="data">
//                   <label htmlFor="warehouseName">warehouseName</label>
//                   <input
//                     type="text"
//                     id="warehouseName"
//                     name="warehouseName"
//                     value={formData.warehouseName}
//                     onChange={handleChange}
//                   />
//                   {errors.warehouseName && (
//                     <p className="error">{errors.warehouseName}</p>
//                   )}
//                 </div>
//                 <div className="data">
//                   <label htmlFor="warehouseAddress">Stock Level</label>
//                   <input
//                     type="text"
//                     id="warehouseAddress"
//                     name="warehouseAddress"
//                     value={formData.warehouseAddress}
//                     onChange={handleChange}
//                     required
//                   />
//                   {errors.warehouseAddress && (
//                     <p className="error">{errors.warehouseAddress}</p>
//                   )}
//                 </div>
//                 <div className="data">
//                   <label htmlFor="warehouseCapacity">Reorder Level</label>
//                   <input
//                     type="text"
//                     id="warehouseCapacity"
//                     name="warehouseCapacity"
//                     value={formData.warehouseCapacity}
//                     onChange={handleChange}
//                   />
//                   {errors.warehouseCapacity && (
//                     <p className="error">{errors.warehouseCapacity}</p>
//                   )}
//                 </div>

//                 <div className="data">
//                   <label htmlFor="warehouseType">Safety Stock</label>
//                   <input
//                     type="text"
//                     id="warehouseType"
//                     name="warehouseType"
//                     value={formData.warehouseType}
//                     onChange={handleChange}
//                   />
//                   {errors.warehouseType && (
//                     <p className="error">{errors.warehouseType}</p>
//                   )}
//                 </div>

//               </div>
//             </div>
//             <button type="submit">Submit Edit</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function EditWarehouseForm() {
  const { warehouseId } = useParams();
  const { setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);
  const token = localStorage.getItem("accessToken");
  const location = useLocation();
  const navigate = useNavigate();

  const warehouseData = location.state?.warehouseData;

  useEffect(() => {
    setUrl("/warehouse");
    setGoBackUrl("/warehouse");
  }, [setUrl, setGoBackUrl]);

  const [formData, setFormData] = useState({
    warehouseId: warehouseData?.warehouseId || "",
    inventoryId: warehouseData?.inventoryId || "",
    productId: warehouseData?.productId || "",
    warehouseCapacity: warehouseData?.warehouseCapacity || "",
    warehouseAddress: warehouseData?.warehouseAddress || "",
    warehouseType: warehouseData?.warehouseType || "OWNED",
    warehouseName: warehouseData?.warehouseName || "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    if (!value.trim()) {
      return `${name} is required.`;
    }
    return "";
  };

  const validateNumberField = (name, value) => {
    if (!value.trim()) {
      return `${name} is required.`;
    }
    if (isNaN(Number(value)) || Number(value) <= 0) {
      return `${name} must be a valid positive number.`;
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    let errorMsg = "";
    if (name === "warehouseCapacity") {
      errorMsg = validateNumberField(name, value);
    } else {
      errorMsg = validateField(name, value);
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(errors).some((error) => error !== "")) {
      alert("Please correct the errors before submitting.");
      return;
    }

    try {
      const payload = {
        ...formData,
        warehouseCapacity: Number(formData.warehouseCapacity),
      };

      const response = await fetch(
        `http://localhost:7857/api/warehouse/edit-warehouse/${formData.warehouseId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Warehouse updated successfully!");
        navigate("/warehouse");
      } else {
        alert(data.error || "Failed to edit warehouse");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <FormPageHeader />
      <div className="container">
        <div className="form-container">
          <h2>Edit Warehouse</h2>
          <form onSubmit={handleSubmit}>
            <div className="header-box">
              <h2>Header</h2>
              <div className="data-container">
                <div className="data">
                  <label htmlFor="warehouseId">Warehouse ID</label>
                  <input
                    type="text"
                    id="warehouseId"
                    name="warehouseId"
                    value={formData.warehouseId}
                    readOnly
                  />
                </div>
                <div className="data">
                  <label htmlFor="inventoryId">Inventory ID</label>
                  <input
                    type="text"
                    id="inventoryId"
                    name="inventoryId"
                    value={formData.inventoryId}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="data">
                  <label htmlFor="productId">Product ID</label>
                  <input
                    type="text"
                    id="productId"
                    name="productId"
                    value={formData.productId}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="item-box">
              <h2>Item</h2>
              <div className="data-container">
                <div className="data">
                  <label htmlFor="warehouseName">Warehouse Name</label>
                  <input
                    type="text"
                    id="warehouseName"
                    name="warehouseName"
                    value={formData.warehouseName}
                    onChange={handleChange}
                  />
                </div>
                <div className="data">
                  <label htmlFor="warehouseAddress">Warehouse Address</label>
                  <input
                    type="text"
                    id="warehouseAddress"
                    name="warehouseAddress"
                    value={formData.warehouseAddress}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="data">
                  <label htmlFor="warehouseCapacity">Warehouse Capacity</label>
                  <input
                    type="text"
                    id="warehouseCapacity"
                    name="warehouseCapacity"
                    value={formData.warehouseCapacity}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="data">
                  <label htmlFor="warehouseType">Warehouse Type</label>
                  <select
                    id="warehouseType"
                    name="warehouseType"
                    value={formData.warehouseType}
                    onChange={handleChange}
                  >
                    <option value="OWNED">OWNED</option>
                    <option value="THIRDPARTY">THIRDPARTY</option>
                  </select>
                </div>
              </div>
            </div>
            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    </>
  );
}
