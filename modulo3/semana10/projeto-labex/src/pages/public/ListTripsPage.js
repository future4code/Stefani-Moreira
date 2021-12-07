import React from 'react';
import Header from '../../shared/Headers/Header';
import TripList from '../../features/User/TripList/TripList';

import { PublicPageStyle } from '../styles/GeneralStyles';

export default function ListTripsPage() {
    return (
        <PublicPageStyle>
            <Header />
            <TripList />
        </PublicPageStyle>
    )
}
