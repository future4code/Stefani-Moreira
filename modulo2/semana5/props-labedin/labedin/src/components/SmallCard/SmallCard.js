import React from 'react';
import styled from 'styled-components';

const SmallCardContainer = styled.div `
    display: flex;
    justify-items: center;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 30px;
`

const ImageSmallCard = styled.img `
    width: 5%;
    padding-right: 5px;
`

const TitleSmallCard = styled.h4 `
    padding-right: 5px;
`

function SmallCard(props) {
    return (
        <SmallCardContainer>
            <ImageSmallCard src={ props.image }/>
            <TitleSmallCard> { props.title } </TitleSmallCard>
            <p>{ props.description }</p>
        </SmallCardContainer>

    )
}

export default SmallCard;