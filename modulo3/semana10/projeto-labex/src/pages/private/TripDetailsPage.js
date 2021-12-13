import React from "react";
import PrivateHeader from "../../shared/Headers/PrivateHeader/PrivateHeader";
import TripDetails from "../../features/Admin/TripDetails/TripDetails";

import { PrivatePageStyle } from "../styles/GeneralStyles";

export default function TripDetailsPage() {
  return (
    <PrivatePageStyle>
      <PrivateHeader />
      <TripDetails />
    </PrivatePageStyle>
  );
}
