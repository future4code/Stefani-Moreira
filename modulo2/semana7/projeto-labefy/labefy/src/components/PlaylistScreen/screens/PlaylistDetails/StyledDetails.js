import styled from 'styled-components'

const LeftButtonContainer = styled.div `
    background-color: #181818;
    position: fixed;
    width: 2rem;
    height: 2rem;
    border-radius: 90%;
    display: flex;
    align-items: center;
    margin: 0.6rem 1.8rem 0;

    img {
        padding: 0px 20px 0px 12px;
        width: 50%;
    }

`

const TrackCard = styled.div `

`

const PlaylistContainer = styled.div `
    height: 20rem;
    background: linear-gradient(#4d4d4d, #9198e5);
    display: flex;
    align-items: flex-end;

    img {
        border-radius: 100%;
        margin: 1.4rem;
    }

    li {
        list-style:none;
        font-size: 6rem;
        margin: 1.4rem 0 4rem;
    }
`

export { PlaylistContainer, TrackCard, LeftButtonContainer }