import React from 'react';
import PublicHeader from '../../shared/Headers/PublicHeader/PublicHeader';
import SignUp from '../../features/User/SignUp/SignUp';

import { PublicPageStyle } from '../styles/GeneralStyles'

export default function ApplicationFormPage() {
    return (
        <PublicPageStyle>
            <PublicHeader />
            <SignUp />
        </PublicPageStyle>
    )
}
