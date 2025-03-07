import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SalesOrderPage from "./pages/SalesManagement/SalesOrder/SalesOrderPage";
import LineItemsPage from "./pages/SalesManagement/LineItems/LineItemsPage";
import CustomerPage from "./pages/SalesManagement/Customer/CustomerPage";
import SalesPersonPage from "./pages/SalesManagement/SalesPerson/SalesPersonPage";
import PricingRulesPage from "./pages/Pricing&Discount/PricingRules/PricingRulesPage";
import DiscountRulesPage from "./pages/Pricing&Discount/DiscountRules/DiscountRulesPage";
import ProductPage from "./pages/Pricing&Discount/Product/ProductPage";
import DiscountPage from "./pages/Pricing&Discount/Discount/DiscountPage";
import InventoryPage from "./pages/InventoryManagement/Inventory/InventoryPage";
import ProductMovementPage from "./pages/InventoryManagement/ProductMovement/ProductMovementPage";
import WarehousePage from "./pages/InventoryManagement/Warehouse/WarehousePage";
import CarrierPage from "./pages/Logistics&Delivery/Carrier/CarrierPage";
import DeliveryRoutePage from "./pages/Logistics&Delivery/DeliveryRoute/DeliveryRoutePage";
import DeliveryVehiclePage from "./pages/Logistics&Delivery/DeliveryVehicle/DeliveryVehiclePage";
import ShipmentPage from "./pages/Logistics&Delivery/Shipment/ShipmentPage";
import CurrencyExchangeRatePage from "./pages/Billing&Invoicing/CurrencyExchangeRate/CurrencyExchangeRatePage";
import InvoicePage from "./pages/Billing&Invoicing/Invoice/InvoicePage";
import PaymentPage from "./pages/Billing&Invoicing/Payment/PaymentPage";
import TaxConfigurationPage from "./pages/Billing&Invoicing/TaxConfiguration/TaxConfigurationPage";
import ReturnLineItemsPage from "./pages/Returns/ReturnLineItems/ReturnLineItemsPage";
import ReturnOrderPage from "./pages/Returns/ReturnOrder/ReturnOrderPage";

import Homepage from "./pages/HomePage/HomePage";

import CreateSalesOrderPage from "./pages/SalesManagement/SalesOrder/CreateSalesOrder/CreateSalesOrderPage";
import EditSalesOrderPage from "./pages/SalesManagement/SalesOrder/EditSalesOrder/EditSalesOrderPage";
import DisplaySalesOrderPage from "./pages/SalesManagement/SalesOrder/DisplaySalesOrder/DisplaySalesOrderPage";
import CreateLineItemsPage from "./pages/SalesManagement/LineItems/CreateLineItems/CreateLineItemsPage";
import EditLineItemsPage from "./pages/SalesManagement/LineItems/EditLineItems/EditLineItemsPage";
import DisplayLineItemsPage from "./pages/SalesManagement/LineItems/DisplayLineItems/DisplayLineItemsPage";
import CreateCustomerPage from "./pages/SalesManagement/Customer/CreateCustomer/CreateCustomerPage";
import EditCustomerPage from "./pages/SalesManagement/Customer/EditCustomer/EditCustomerPage";
import DisplayCustomerPage from "./pages/SalesManagement/Customer/DisplayCustomer/DisplayCustomerPage";
import CreateSalesPersonPage from "./pages/SalesManagement/SalesPerson/CreateSalesPerson/CreateSalesPersonPage";
import EditSalesPersonPage from "./pages/SalesManagement/SalesPerson/EditSalesPerson/EditSalesPersonPage";
import DisplaySalesPersonPage from "./pages/SalesManagement/SalesPerson/DisplaySalesPerson/DisplaySalesPersonPage";
import CreatePricingRulesPage from "./pages/Pricing&Discount/PricingRules/CreatePricingRules/CreatePricingRulesPage";
import EditPricingRulesPage from "./pages/Pricing&Discount/PricingRules/EditPricingRules/EditPricingRulesPage";
import DisplayPricingRulesPage from "./pages/Pricing&Discount/PricingRules/DisplayPricingRules/DisplayPricingRulesPage";
import CreateDiscountRulesPage from "./pages/Pricing&Discount/DiscountRules/CreateDiscountRules/CreateDiscountRulesPage";
import EditDiscountRulesPage from "./pages/Pricing&Discount/DiscountRules/EditDiscountRules/EditDiscountRulesPage";
import DisplayDiscountRulesPage from "./pages/Pricing&Discount/DiscountRules/DisplayDiscountRules/DisplayDiscountRulesPage";
import CreateProductPage from "./pages/Pricing&Discount/Product/CreateProduct/CreateProductPage";
import EditProductPage from "./pages/Pricing&Discount/Product/EditProduct/EditProductPage";
import DisplayProductPage from "./pages/Pricing&Discount/Product/DisplayProduct/DisplayProductPage";
import CreateDiscountPage from "./pages/Pricing&Discount/Discount/CreateDiscount/CreateDiscountPage";
import EditDiscountPage from "./pages/Pricing&Discount/Discount/EditDiscount/EditDiscountPage";
import DisplayDiscountPage from "./pages/Pricing&Discount/Discount/DisplayDiscount/DisplayDiscountPage";
import CreateInventoryPage from "./pages/InventoryManagement/Inventory/CreateInventory/CreateInventoryPage";
import EditInventoryPage from "./pages/InventoryManagement/Inventory/EditInventory/EditInventoryPage";
import DisplayInventoryPage from "./pages/InventoryManagement/Inventory/DisplayInventory/DisplayInventoryPage";
import CreateWarehousePage from "./pages/InventoryManagement/Warehouse/CreateWarehouse/CreateWarehousePage";
import EditWarehousePage from "./pages/InventoryManagement/Warehouse/EditWarehouse/EditWarehousePage";
import DisplayWarehousePage from "./pages/InventoryManagement/Warehouse/DisplayWarehouse/DisplayWarehousePage";
import CreateProductMovementPage from "./pages/InventoryManagement/ProductMovement/CreateProductMovement/CreateProductMovementPage";
import EditProductMovementPage from "./pages/InventoryManagement/ProductMovement/EditProductMovement/EditProductMovementPage";
import DisplayProductMovementPage from "./pages/InventoryManagement/ProductMovement/DisplayProductMovement/DisplayProductMovementPage";
import CreateShipmentPage from "./pages/Logistics&Delivery/Shipment/CreateShipment/CreateShipmentPage";
import EditShipmentPage from "./pages/Logistics&Delivery/Shipment/EditShipment/EditShipmentPage";
import DisplayShipmentPage from "./pages/Logistics&Delivery/Shipment/DisplayShipment/DisplayShipmentPage";
import CreateDeliveryRoutePage from "./pages/Logistics&Delivery/DeliveryRoute/CreateDeliveryRoute/CreateDeliveryRoutePage";
import EditDeliveryRoutePage from "./pages/Logistics&Delivery/DeliveryRoute/EditDeliveryRoute/EditDeliveryRoutePage";
import DisplayDeliveryRoutePage from "./pages/Logistics&Delivery/DeliveryRoute/DisplayDeliveryRoute/DisplayDeliveryRoutePage";
import CreateCarrierPage from "./pages/Logistics&Delivery/Carrier/CreateCarrier/CreateCarrierPage";
import EditCarrierPage from "./pages/Logistics&Delivery/Carrier/EditCarrier/EditCarrierPage";
import DisplayCarrierPage from "./pages/Logistics&Delivery/Carrier/DisplayCarrier/DisplayCarrierPage";
import CreateDeliveryVehiclePage from "./pages/Logistics&Delivery/DeliveryVehicle/CreateDeliveryVehicle/CreateDeliveryVehiclePage";
import EditDeliveryVehiclePage from "./pages/Logistics&Delivery/DeliveryVehicle/EditDeliveryVehicle/EditDeliveryVehiclePage";
import DisplayDeliveryVehiclePage from "./pages/Logistics&Delivery/DeliveryVehicle/DisplayDeliveryVehicle/DisplayDeliveryVehiclePage";
import CreateInvoicePage from "./pages/Billing&Invoicing/Invoice/CreateInvoice/CreateInvoicePage";
import EditInvoicePage from "./pages/Billing&Invoicing/Invoice/EditInvoice/EditInvoicePage";
import DisplayInvoicePage from "./pages/Billing&Invoicing/Invoice/DisplayInvoice/DisplayInvoicePage";
import CreatePaymentPage from "./pages/Billing&Invoicing/Payment/CreatePayment/CreatePaymentPage";
import EditPaymentPage from "./pages/Billing&Invoicing/Payment/EditPayment/EditPaymentPage";
import DisplayPaymentPage from "./pages/Billing&Invoicing/Payment/DisplayPayment/DisplayPaymentPage";
import CreateTaxConfigurationPage from "./pages/Billing&Invoicing/TaxConfiguration/CreateTaxConfiguration/CreateTaxConfigurationPage";
import EditTaxConfigurationPage from "./pages/Billing&Invoicing/TaxConfiguration/EditTaxConfiguration/EditTaxConfigurationPage";
import DisplayTaxConfigurationPage from "./pages/Billing&Invoicing/TaxConfiguration/DisplayTaxConfiguration/DisplayTaxConfigurationPage";
import CreateCurrencyExchangeRatePage from "./pages/Billing&Invoicing/CurrencyExchangeRate/CreateCurrencyExchangeRate/CreateCurrencyExchangeRatePage";
import EditCurrencyExchangeRatePage from "./pages/Billing&Invoicing/CurrencyExchangeRate/EditCurrencyExchangeRate/EditCurrencyExchangeRatePage";
import DisplayCurrencyExchangeRatePage from "./pages/Billing&Invoicing/CurrencyExchangeRate/DisplayCurrencyExchangeRate/DisplayCurrencyExchangeRatePage";
import CreateReturnLineItemsPage from "./pages/Returns/ReturnLineItems/CreateReturnLineItems/CreateReturnLineItemsPage";
import EditReturnLineItemsPage from "./pages/Returns/ReturnLineItems/EditReturnLineItems/EditReturnLineItemsPage";
import DisplayReturnLineItemsPage from "./pages/Returns/ReturnLineItems/DisplayReturnLineItems/DisplayReturnLineItemsPage";
import CreateReturnOrderPage from "./pages/Returns/ReturnOrder/CreateReturnOrder/CreateReturnOrderPage";
import EditReturnOrderPage from "./pages/Returns/ReturnOrder/EditReturnOrder/EditReturnOrderPage";
import DisplayReturnOrderPage from "./pages/Returns/ReturnOrder/DisplayReturnOrder/DisplayReturnOrderPage";

import DisplaySalesOrderForm from "./pages/SalesManagement/SalesOrder/DisplaySalesOrder/DisplaySalesOrderForm";
import EditSalesOrderForm from "./pages/SalesManagement/SalesOrder/EditSalesOrder/EditSalesOrderForm";
import DisplaySalesPersonForm from "./pages/SalesManagement/SalesPerson/DisplaySalesPerson/DisplaySalesPersonForm";
import EditSalesPersonForm from "./pages/SalesManagement/SalesPerson/EditSalesPerson/EditSalesPersonForm";
import DisplayLineItemsForm from "./pages/SalesManagement/LineItems/DisplayLineItems/DisplayLineItemsForm";
import EditLineItemsForm from "./pages/SalesManagement/LineItems/EditLineItems/EditLineItemsForm";
import DisplayCustomerForm from "./pages/SalesManagement/Customer/DisplayCustomer/DisplayCustomerForm";
import EditCustomerForm from "./pages/SalesManagement/Customer/EditCustomer/EditCustomerForm";
import DisplayDiscountForm from "./pages/Pricing&Discount/Discount/DisplayDiscount/DisplayDiscountForm";
import EditDiscountForm from "./pages/Pricing&Discount/Discount/EditDiscount/EditDiscountForm";
import DisplayDiscountRulesForm from "./pages/Pricing&Discount/DiscountRules/DisplayDiscountRules/DisplayDiscountRulesForm";
import EditDiscountRulesForm from "./pages/Pricing&Discount/DiscountRules/EditDiscountRules/EditDiscountRulesForm";
import DisplayPricingRulesForm from "./pages/Pricing&Discount/PricingRules/DisplayPricingRules/DisplayPricingRulesForm";
import EditPricingRulesForm from "./pages/Pricing&Discount/PricingRules/EditPricingRules/EditPricingRulesForm";
import DisplayProductForm from "./pages/Pricing&Discount/Product/DisplayProduct/DisplayProductForm";
import EditProductForm from "./pages/Pricing&Discount/Product/EditProduct/EditProductForm";
import DisplayInventoryForm from "./pages/InventoryManagement/Inventory/DisplayInventory/DisplayInventoryForm";
import EditInventoryForm from "./pages/InventoryManagement/Inventory/EditInventory/EditInventoryForm";
import DisplayProductMovementForm from "./pages/InventoryManagement/ProductMovement/DisplayProductMovement/DisplayProductMovementForm";
import EditProductMovementForm from "./pages/InventoryManagement/ProductMovement/EditProductMovement/EditProductMovementForm";
import DisplayWarehouseForm from "./pages/InventoryManagement/Warehouse/DisplayWarehouse/DisplayWarehouseForm";
import EditWarehouseForm from "./pages/InventoryManagement/Warehouse/EditWarehouse/EditWarehouseForm";
import DisplayCarrierForm from "./pages/Logistics&Delivery/Carrier/DisplayCarrier/DisplayCarrierForm";
import EditCarrierForm from "./pages/Logistics&Delivery/Carrier/EditCarrier/EditCarrierForm";
import DisplayDeliveryRouteForm from "./pages/Logistics&Delivery/DeliveryRoute/DisplayDeliveryRoute/DisplayDeliveryRouteForm";
import EditDeliveryRouteForm from "./pages/Logistics&Delivery/DeliveryRoute/EditDeliveryRoute/EditDeliveryRouteForm";
import DisplayDeliveryVehicleForm from "./pages/Logistics&Delivery/DeliveryVehicle/DisplayDeliveryVehicle/DisplayDeliveryVehicleForm";
import EditDeliveryVehicleForm from "./pages/Logistics&Delivery/DeliveryVehicle/EditDeliveryVehicle/EditDeliveryVehicleForm";
import DisplayShipmentForm from "./pages/Logistics&Delivery/Shipment/DisplayShipment/DisplayShipmentForm";
import EditShipmentForm from "./pages/Logistics&Delivery/Shipment/EditShipment/EditShipmentForm";
import DisplayCurrencyExchangeRateForm from "./pages/Billing&Invoicing/CurrencyExchangeRate/DisplayCurrencyExchangeRate/DisplayCurrencyExchangeRateForm";
import EditCurrencyExchangeRateForm from "./pages/Billing&Invoicing/CurrencyExchangeRate/EditCurrencyExchangeRate/EditCurrencyExchangeRateForm";
import DisplayInvoiceForm from "./pages/Billing&Invoicing/Invoice/DisplayInvoice/DisplayInvoiceForm";
import EditInvoiceForm from "./pages/Billing&Invoicing/Invoice/EditInvoice/EditInvoiceForm";
import DisplayPaymentForm from "./pages/Billing&Invoicing/Payment/DisplayPayment/DisplayPaymentForm";
import EditPaymentForm from "./pages/Billing&Invoicing/Payment/EditPayment/EditPaymentForm";
import DisplayTaxConfigurationForm from "./pages/Billing&Invoicing/TaxConfiguration/DisplayTaxConfiguration/DisplayTaxConfigurationForm";
import EditTaxConfigurationForm from "./pages/Billing&Invoicing/TaxConfiguration/EditTaxConfiguration/EditTaxConfigurationForm";
import DisplayReturnOrderForm from "./pages/Returns/ReturnOrder/DisplayReturnOrder/DisplayReturnOrderForm";
import EditReturnOrderForm from "./pages/Returns/ReturnOrder/EditReturnOrder/EditReturnOrderForm";
import DisplayReturnLineItemsForm from "./pages/Returns/ReturnLineItems/DisplayReturnLineItems/DisplayReturnLineItemsForm";
import EditReturnLineItemsForm from "./pages/Returns/ReturnOrder/EditReturnOrder/EditReturnOrderForm";

import Profile from "./header/Profile/Profile";
import Settings from "./header/Setting/Setting";
import NotificationSettings from "./header/Notification/NotificationSettings";
import CollaborationSettings from "./header/Team/CollaborationSettings";

import Login from "./Login/Login";
import ProtectedRoute from "./Login/ProtectedRoute";
import SignUp from "./Login/SignUp";
import ForgotPassword from "./Login/ForgotPassword";
import ResetPassword from "./Login/ResetPassword";
import PrivateRoute from "./Login/ProtectedRoute";
import API from "./utils/app";
import { useEffect } from "react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/layout"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/salesorder" element={<SalesOrderPage />} />
          <Route path="/lineitems" element={<LineItemsPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/salesperson" element={<SalesPersonPage />} />
          <Route path="/pricingrules" element={<PricingRulesPage />} />
          <Route path="/discountrules" element={<DiscountRulesPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/discount" element={<DiscountPage />} />
          <Route
            path="/inventory"
            element={
              <ProtectedRoute>
                <InventoryPage />
              </ProtectedRoute>
            }
          />
          <Route path="/productmovement" element={<ProductMovementPage />} />

          <Route path="/warehouse" element={<WarehousePage />} />
          <Route path="/carrier" element={<CarrierPage />} />
          <Route path="/deliveryroute" element={<DeliveryRoutePage />} />
          <Route path="/deliveryvehicle" element={<DeliveryVehiclePage />} />
          <Route path="/shipment" element={<ShipmentPage />} />
          <Route
            path="/currencyexchangerate"
            element={<CurrencyExchangeRatePage />}
          />
          <Route path="/invoice" element={<InvoicePage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/taxconfiguration" element={<TaxConfigurationPage />} />
          <Route path="/returnlineitems" element={<ReturnLineItemsPage />} />
          <Route path="/returnorder" element={<ReturnOrderPage />} />

          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Homepage />
              </PrivateRoute>
            }
          />

          <Route path="/createsalesorder" element={<CreateSalesOrderPage />} />
          <Route path="/editsalesorder" element={<EditSalesOrderPage />} />
          <Route
            path="/displaysalesorder"
            element={<DisplaySalesOrderPage />}
          />
          <Route path="/createlineitems" element={<CreateLineItemsPage />} />
          <Route path="/editlineitems" element={<EditLineItemsPage />} />
          <Route path="/displaylineitems" element={<DisplayLineItemsPage />} />
          <Route path="/createcustomer" element={<CreateCustomerPage />} />
          <Route path="/editcustomer" element={<EditCustomerPage />} />
          <Route path="/displaycustomer" element={<DisplayCustomerPage />} />
          <Route
            path="/createsalesperson"
            element={<CreateSalesPersonPage />}
          />
          <Route path="/editsalesperson" element={<EditSalesPersonPage />} />
          <Route
            path="/displaysalesperson"
            element={<DisplaySalesPersonPage />}
          />
          <Route
            path="/createpricingrules"
            element={<CreatePricingRulesPage />}
          />
          <Route path="/editpricingrules" element={<EditPricingRulesPage />} />
          <Route
            path="/displaypricingrules"
            element={<DisplayPricingRulesPage />}
          />
          <Route
            path="/creatediscountrules"
            element={<CreateDiscountRulesPage />}
          />
          <Route
            path="/editdiscountrules"
            element={<EditDiscountRulesPage />}
          />
          <Route
            path="/displaydiscountrules"
            element={<DisplayDiscountRulesPage />}
          />
          <Route path="/createproduct" element={<CreateProductPage />} />
          <Route path="/editproduct" element={<EditProductPage />} />
          <Route path="/displayproduct" element={<DisplayProductPage />} />
          <Route path="/creatediscount" element={<CreateDiscountPage />} />
          <Route path="/editdiscount" element={<EditDiscountPage />} />
          <Route path="/displaydiscount" element={<DisplayDiscountPage />} />
          <Route
            path="/createinventory"
            element={
              <PrivateRoute>
                <CreateInventoryPage />
              </PrivateRoute>
            }
          />
          <Route path="/editinventory" element={<EditInventoryPage />} />
          <Route path="/displayinventory" element={<DisplayInventoryPage />} />
          <Route path="/createwarehouse" element={<CreateWarehousePage />} />
          <Route path="/editwarehouse" element={<EditWarehousePage />} />
          <Route path="/displaywarehouse" element={<DisplayWarehousePage />} />
          <Route
            path="/createproductmovement"
            element={<CreateProductMovementPage />}
          />
          <Route
            path="/editproductmovement"
            element={<EditProductMovementPage />}
          />
          <Route
            path="/displayproductmovement"
            element={<DisplayProductMovementPage />}
          />

          <Route path="/createshipment" element={<CreateShipmentPage />} />
          <Route path="/editshipment" element={<EditShipmentPage />} />
          <Route path="/displayshipment" element={<DisplayShipmentPage />} />
          <Route
            path="/createdeliveryroute"
            element={<CreateDeliveryRoutePage />}
          />
          <Route
            path="/editdeliveryroute"
            element={<EditDeliveryRoutePage />}
          />
          <Route
            path="/displaydeliveryroute"
            element={<DisplayDeliveryRoutePage />}
          />
          <Route path="/createcarrier" element={<CreateCarrierPage />} />
          <Route path="/editcarrier" element={<EditCarrierPage />} />
          <Route path="/displaycarrier" element={<DisplayCarrierPage />} />
          <Route
            path="/createdeliveryvehicle"
            element={<CreateDeliveryVehiclePage />}
          />
          <Route
            path="/editdeliveryvehicle"
            element={<EditDeliveryVehiclePage />}
          />
          <Route
            path="/displaydeliveryvehicle"
            element={<DisplayDeliveryVehiclePage />}
          />
          <Route path="/createinvoice" element={<CreateInvoicePage />} />
          <Route path="/editinvoice" element={<EditInvoicePage />} />
          <Route path="/displayinvoice" element={<DisplayInvoicePage />} />
          <Route path="/createpayment" element={<CreatePaymentPage />} />
          <Route path="/editpayment" element={<EditPaymentPage />} />
          <Route path="/displaypayment" element={<DisplayPaymentPage />} />
          <Route
            path="/createtaxconfiguration"
            element={<CreateTaxConfigurationPage />}
          />
          <Route
            path="/edittaxconfiguration"
            element={<EditTaxConfigurationPage />}
          />
          <Route
            path="/displaytaxconfiguration"
            element={<DisplayTaxConfigurationPage />}
          />
          <Route
            path="/createcurrencyexchangerate"
            element={<CreateCurrencyExchangeRatePage />}
          />
          <Route
            path="/editcurrencyexchangerate"
            element={<EditCurrencyExchangeRatePage />}
          />
          <Route
            path="/displaycurrencyexchangerate"
            element={<DisplayCurrencyExchangeRatePage />}
          />
          <Route
            path="/createreturnlineitems"
            element={<CreateReturnLineItemsPage />}
          />
          <Route
            path="/editreturnlineitems"
            element={<EditReturnLineItemsPage />}
          />
          <Route
            path="/displayreturnlineitems"
            element={<DisplayReturnLineItemsPage />}
          />
          <Route
            path="/createreturnorder"
            element={<CreateReturnOrderPage />}
          />
          <Route path="/editreturnorder" element={<EditReturnOrderPage />} />
          <Route
            path="/displayreturnorder"
            element={<DisplayReturnOrderPage />}
          />

          <Route
            path="/displaysalesorderpage"
            element={<DisplaySalesOrderForm />}
          />
          <Route path="/editsalesorderpage" element={<EditSalesOrderForm />} />
          <Route
            path="/displaysalespersonpage"
            element={<DisplaySalesPersonForm />}
          />
          <Route
            path="/editsalespersonpage"
            element={<EditSalesPersonForm />}
          />
          <Route
            path="/displaylineitemspage"
            element={<DisplayLineItemsForm />}
          />
          <Route path="/editlineitemspage" element={<EditLineItemsForm />} />
          <Route
            path="/displaycustomerpage"
            element={<DisplayCustomerForm />}
          />
          <Route path="/editcustomerpage" element={<EditCustomerForm />} />
          <Route path="/displaycarrierpage" element={<DisplayCarrierForm />} />
          <Route path="/editcarrierpage" element={<EditCarrierForm />} />
          <Route
            path="/displaydiscountpage"
            element={<DisplayDiscountForm />}
          />
          <Route path="/editdiscountpage" element={<EditDiscountForm />} />
          <Route
            path="/displaydiscountrulespage"
            element={<DisplayDiscountRulesForm />}
          />
          <Route
            path="/editdiscountrulespage"
            element={<EditDiscountRulesForm />}
          />
          <Route
            path="/displaypricingrulespage"
            element={<DisplayPricingRulesForm />}
          />
          <Route
            path="/editpricingrulespage"
            element={<EditPricingRulesForm />}
          />
          <Route path="/displayproductpage" element={<DisplayProductForm />} />
          <Route path="/editproductpage" element={<EditProductForm />} />
          <Route
            path="/displayinventorypage/:inventoryId"
            element={<DisplayInventoryForm />}
          />
          <Route
            path="/editinventorypage/:inventoryId"
            element={<EditInventoryForm />}
          />
          <Route
            path="/displayproductmovementpage/:movementId"
            element={<DisplayProductMovementForm />}
          />
          <Route
            path="/editproductmovementpage/:movementId"
            element={<EditProductMovementForm />}
          />

          <Route
            path="/displaywarehousepage/:warehouseId"
            element={<DisplayWarehouseForm />}
          />
          <Route
            path="/editwarehousepage/:warehouseId"
            element={<EditWarehouseForm />}
          />
          <Route path="/displaycarrierpage" element={<DisplayCarrierForm />} />
          <Route path="/editcarrierpage" element={<EditCarrierForm />} />
          <Route
            path="/displaydeliveryroutepage"
            element={<DisplayDeliveryRouteForm />}
          />
          <Route
            path="/editdeliveryroutepage"
            element={<EditDeliveryRouteForm />}
          />
          <Route
            path="/displaydeliveryvehiclepage"
            element={<DisplayDeliveryVehicleForm />}
          />
          <Route
            path="/editdeliveryvehiclepage"
            element={<EditDeliveryVehicleForm />}
          />
          <Route
            path="/displayshipmentpage"
            element={<DisplayShipmentForm />}
          />
          <Route path="/editshipmentpage" element={<EditShipmentForm />} />
          <Route
            path="/displaycurrencyexchangeratepage"
            element={<DisplayCurrencyExchangeRateForm />}
          />
          <Route
            path="/editcurrencyexchangeratepage"
            element={<EditCurrencyExchangeRateForm />}
          />
          <Route path="/displayinvoicepage" element={<DisplayInvoiceForm />} />
          <Route path="/editinvoicepage" element={<EditInvoiceForm />} />
          <Route path="/displaypaymentpage" element={<DisplayPaymentForm />} />
          <Route path="/editpaymentpage" element={<EditPaymentForm />} />
          <Route
            path="/displaytaxconfigurationpage"
            element={<DisplayTaxConfigurationForm />}
          />
          <Route
            path="/edittaxconfigurationpage"
            element={<EditTaxConfigurationForm />}
          />
          <Route
            path="/displayreturnlineitemspage"
            element={<DisplayReturnLineItemsForm />}
          />
          <Route
            path="/editreturnlineitemspage"
            element={<EditReturnLineItemsForm />}
          />
          <Route
            path="/displayreturnorderpage"
            element={<DisplayReturnOrderForm />}
          />
          <Route
            path="/editreturnorderpage"
            element={<EditReturnOrderForm />}
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/setting" element={<Settings />} />
          <Route path="/notification" element={<NotificationSettings />} />
          <Route
            path="/collaborationsettings"
            element={<CollaborationSettings />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
