import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import CreatePost from '../../features/Posts/CreatePost/CreatePost';
import Header from '../../shared/Header/Header';

export default function CreatePostPage() {
    useProtectedPage()

    return (
        <div>
            <Header />
            <h2>Feed</h2>
            <CreatePost />
        </div>
    )
}
