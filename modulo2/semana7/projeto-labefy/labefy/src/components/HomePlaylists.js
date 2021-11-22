import React from 'react';
import { FirstContainer, FirstTitle, FirstContainerItems, SecondContainer, SecondTitle, SecondContainerItems } from './styles/StyledHomePlaylists'

export default class HomePlaylists extends React.Component {
    render() {
        return(
            <div>

            <FirstContainer>
            <FirstTitle>Olá</FirstTitle>
            <FirstContainerItems src="https://open.spotify.com/embed/playlist/37i9dQZF1E3a8vqdmGqsja?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="PlaylistSpotify" />
            <FirstContainerItems src="https://open.spotify.com/embed/playlist/37i9dQZF1E37WHCYJ8Lg53?utm_source=generator&theme=0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="PlaylistSpotify" />
            <FirstContainerItems src="https://open.spotify.com/embed/playlist/37i9dQZF1E39Ox8g0pPsIE?utm_source=generator&theme=0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="PlaylistSpotify" />
            <FirstContainerItems src="https://open.spotify.com/embed/playlist/37i9dQZF1E378VGdWb1Pg9?utm_source=generator&theme=0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="PlaylistSpotify" />
            <FirstContainerItems src="https://open.spotify.com/embed/playlist/37i9dQZF1E37WqjmjUvSrd?utm_source=generator&theme=0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="PlaylistSpotify" />
            <FirstContainerItems src="https://open.spotify.com/embed/playlist/37i9dQZF1E35IrDBbP3r1q?utm_source=generator&theme=0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="PlaylistSpotify" />
            </FirstContainer> 
            <SecondContainer>
                <SecondTitle>Seus Programas</SecondTitle>
                <SecondContainerItems src="https://open.spotify.com/embed/episode/2bMHrzGUAQD4MaTc8Frflv?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                <SecondContainerItems src="https://open.spotify.com/embed/episode/5Eyi0zCSnPo4BeY3gCrjby?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                <SecondContainerItems src="https://open.spotify.com/embed/episode/5yoP5QwkmQr5t1w4B5HB3Q?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
            </SecondContainer>      
        </div>
        )
    }
}