import React from 'react';
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()

    return (
        <header>
            <nav>
                <ul>
                    <li onClick={() => navigate('/')}>LabeX</li>
                    <li onClick={() => navigate('/')}>HOME</li>
                    <li onClick={() => navigate('/trips/signUp')}>INSCREVER-SE</li>
                    <li onClick={() => navigate('/login')}>LOGIN</li>
                </ul>
            </nav>
        </header>
    )
}
