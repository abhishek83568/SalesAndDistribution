
import React, { useContext, useEffect } from "react";
import Tips from "../../../components/Tips/Tips";
import { TipsPageHeaderContext } from "../../../contexts/TipsPageHeaderContext";
import TipsPageHeader from "../../../components/Layout/TipsPageHeader/TipsPageHeader";

const ShipmentPage = () => {
	const { setCreateBtn, setEditBtn, setDisplayBtn, setCreateUrl, setEditUrl, setDisplayUrl } = useContext(TipsPageHeaderContext);

	useEffect(() => {
		setCreateBtn("Create Shipment");
		setEditBtn("Edit Shipment");
		setDisplayBtn("Display Shipment");
		setCreateUrl("/createshipment");
		setEditUrl("/editshipment");
		setDisplayUrl("/displayshipment");
	}, []);

	return (
		<>
			<TipsPageHeader />
			<Tips />
		</>
	);
}

export default ShipmentPage;