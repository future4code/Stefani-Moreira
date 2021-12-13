import React from "react";
import PrivateHeader from "../../shared/Headers/PrivateHeader/PrivateHeader";
import TripList from "../../features/Admin/TripList/TripList";

import { PrivatePageStyle } from "../styles/GeneralStyles";

export default function AdminHomePage() {
  return (
    <PrivatePageStyle>
      <PrivateHeader />
      <TripList />
    </PrivatePageStyle>
  );
}
