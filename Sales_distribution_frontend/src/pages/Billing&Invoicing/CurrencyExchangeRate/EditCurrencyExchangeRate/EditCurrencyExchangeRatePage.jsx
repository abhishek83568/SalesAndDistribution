import React, { useContext, useEffect, useState } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";
import { useNavigate } from "react-router-dom";

const EditCurrencyExchangeRatePage = () => {
  const { setGoBackUrl } = useContext(FormPageHeaderContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  const [formData, setFormData] = useState({ invoiceId: "" });

  // Correctly update invoiceId using the input's name and value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that invoiceId is non-empty
    if (!formData.invoiceId) {
      alert("Please enter a valid Invoice ID.");
      return;
    }

    if (!token) {
      alert("Unauthorized: Please log in again.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:7445/api/currency/get-currencyExchange?invoiceId=${encodeURIComponent(
          formData.invoiceId
        )}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => null); // Prevents JSON parsing errors
        throw new Error(
          errorData?.message || "Failed to fetch currency details."
        );
      }

      const data = await response.json();

      navigate(`/editcurrencyexchangeratepage/${formData.invoiceId}`, {
        state: { currencyData: data },
      });
    } catch (error) {
      console.error("Error fetching currency:", error);
      alert(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    setGoBackUrl("/currencyexchangerate");
  }, [setGoBackUrl]);

  return (
    <>
      <FormPageHeader />

      <div className="container">
        <div className="form-container">
          <h2>Edit Currency Exchange Rate - Mandatory Details</h2>

          <form className="header-box" onSubmit={handleSubmit}>
            <div className="data-container">
              <div className="data">
                <label htmlFor="invoiceId">Invoice ID</label>
                <input
                  type="text"
                  id="invoiceId"
                  name="invoiceId"
                  placeholder="(Primary Key)"
                  value={formData.invoiceId}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className="edit-btn">
              Edit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditCurrencyExchangeRatePage;
