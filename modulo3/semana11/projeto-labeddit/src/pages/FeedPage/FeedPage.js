import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useNavigate } from "react-router-dom";
import Feed from '../../features/Posts/Feed/Feed';
import Header from '../../shared/Header/Header';

export default function FeedPage() {
    useProtectedPage()
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <h2>Feed</h2>
            <input onClick={() => navigate("/createPost")} type="text" placeholder="Crie um novo post" />
            <Feed />
        </div>
    )
}
