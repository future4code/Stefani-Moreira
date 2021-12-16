import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import Post from '../../features/Posts/Post/Post';

export default function PostPage() {
    useProtectedPage()
    return (
        <div>
            <h2>Post</h2>
            <Post />
        </div>
    )
}
