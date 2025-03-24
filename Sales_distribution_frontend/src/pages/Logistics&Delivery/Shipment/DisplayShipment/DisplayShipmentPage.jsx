import React, { useEffect, useContext, useState } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";
import { useNavigate } from "react-router-dom";

export default function DisplayShipmentPage() {
  const { setGoBackUrl } = useContext(FormPageHeaderContext);
  const navigate = useNavigate(); // ✅ Initialize navigation
  const token = localStorage.getItem("accessToken");

  const [formData, setFormData] = useState({
    shipmentId: "",
    orderId: "",
    trackingNumber: "", // Kept as string initially to handle empty state
    shipmentStatus: "PENDING",
    dispatchDate: "",
    estimatedDeliveryDate: "",
  });

  // ✅ Fix handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // ✅ Dynamically update state
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:6744/api/shipment/get-shipmentByOrder?shipmentId=${formData.shipmentId}&orderId=${formData.orderId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Ensure response is valid JSON
      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error("Invalid JSON response:", jsonError);
        alert("Server error: Invalid response format");
        return;
      }

      if (response.ok) {
        console.log("Fetched shipment:", data);

        // ✅ Navigate and pass `data` safely
        navigate(`/displayshipmentpage`, {
          state: { shipmentData: data },
        });
      } else {
        console.log("Error fetching shipment", data?.error || "Unknown error");
        alert(`Error fetching shipment: ${data?.message || "Unknown error"}`);

        // Reset only `shipmentId` to allow new input
        setFormData((prev) => ({
          ...prev,
          shipmentId: "",
          orderId: "",
        }));
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Network error: Unable to fetch shipment.");
    }
  };

  useEffect(() => {
    setGoBackUrl("/shipment");
  }, []);

  return (
    <>
      <FormPageHeader />

      <div className="container">
        <div className="form-container">
          <h2>Display Shipment - Mandatory Details</h2>

          <form className="header-box" onSubmit={handleSubmit}>
            <div className="data-container">
              <div className="data">
                <label htmlFor="shipmentId">Shipment ID</label>
                <input
                  type="text"
                  id="shipmentId"
                  name="shipmentId"
                  value={formData.shipmentId}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="data">
                <label htmlFor="orderId">Order ID</label>
                <input
                  type="text"
                  id="orderId"
                  name="orderId"
                  value={formData.orderId}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className="edit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
