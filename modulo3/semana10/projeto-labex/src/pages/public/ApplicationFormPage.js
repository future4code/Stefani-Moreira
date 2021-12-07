import React from 'react';
import Header from '../../shared/Headers/Header';
import SignUp from '../../features/User/SignUp/SignUp';

import { PublicPageStyle } from '../styles/GeneralStyles'

export default function ApplicationFormPage() {
    return (
        <PublicPageStyle>
            <Header />
            <SignUp />
        </PublicPageStyle>
    )
}
