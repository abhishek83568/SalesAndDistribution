import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import "../../../../components/Layout/Styles/BoxFormStyles.css";

export default function EditCustomerForm() {
  const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

  useEffect(() => {
    setBtn("Save");
    setUrl("/customer");
    setGoBackUrl("/customer");
  }, []);

  return (
    <>
      <FormPageHeader />

      <div className="container">
        <div className="form-container">
          <h2>Edit Customer</h2>

          <div className="header-box">
            <h2>Header</h2>

            <form>
              <div className="data-container">
                <div className="data">
                  <label htmlFor="customerId">Customer ID</label>
                  <input
                    type="text"
                    id="customerId"
                    name="customerId"
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
                  <label htmlFor="customerName">Customer Name</label>
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    value=""
                    required
                  />
                </div>

                <div className="data">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value=""
                    required
                  />
                </div>

                <div className="data">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value=""
                    required
                  />
                </div>

                <div className="data">
                  <label htmlFor="billingAddress">Billing Address</label>
                  <input
                    type="text"
                    id="billingAddress"
                    name="billingAddress"
                    value=""
                    required
                  />
                </div>

                <div className="data">
                  <label htmlFor="shippingAddress">Shipping Address</label>
                  <input
                    type="text"
                    id="shippingAddress"
                    name="shippingAddress"
                    value=""
                    required
                  />
                </div>

                <div className="data">
                  <label htmlFor="customerGroup">Customer Group</label>
                  <select id="customerGroup" name="customerGroup" value="">
                    <option>Whole Sale</option>
                    <option>Retail</option>
                  </select>
                </div>

                <div className="data">
                  <label htmlFor="creditLimit">Credit Limit</label>
                  <input
                    type="text"
                    id="creditLimit"
                    name="creditLimit"
                    placeholder="Max Credit Allowed"
                    value=""
                    required
                  />
                </div>

                <div className="data">
                  <label htmlFor="status">Status</label>
                  <select id="status" name="status" value="">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
