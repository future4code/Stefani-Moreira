import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => navigate('/trips')}>
                VIAGENS
            </button>
            <button onClick={() => navigate('/login')}>
                LOGIN
            </button>
        </div>
    )
}
