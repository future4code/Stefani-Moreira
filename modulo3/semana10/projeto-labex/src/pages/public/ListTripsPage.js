import React from 'react';
import PublicHeader from '../../shared/Headers/PublicHeader/PublicHeader';
import TripList from '../../features/User/TripList/TripList';

import { PublicPageStyle } from '../styles/GeneralStyles';

export default function ListTripsPage() {
    return (
        <PublicPageStyle>
            <PublicHeader />
            <TripList />
        </PublicPageStyle>
    )
}
