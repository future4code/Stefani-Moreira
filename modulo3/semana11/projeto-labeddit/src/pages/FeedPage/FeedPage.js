import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import Feed from '../../features/Posts/Feed/Feed';

export default function FeedPAge() {
    useProtectedPage()

    return (
        <div>
            <h2>Feed</h2>
            <Feed />
        </div>
    )
}
