import React from 'react'
import PrivateHeader from '../../shared/Headers/PrivateHeader/PrivateHeader'
import CreateTrip from '../../features/Admin/CreateTrip/CreateTrip'

import { PrivatePageStyle } from '../styles/GeneralStyles';

export default function CreateTripPage() {
    return (
        <PrivatePageStyle>
           <PrivateHeader />
           <CreateTrip />
        </PrivatePageStyle>
    )
}
