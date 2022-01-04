import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import Post from '../../features/Posts/Post/Post';
import Header from '../../shared/Header/Header';;

export default function PostPage() {
    useProtectedPage()
    return (
        <div>
            <Header />
            <Post />
        </div>
    )
}
