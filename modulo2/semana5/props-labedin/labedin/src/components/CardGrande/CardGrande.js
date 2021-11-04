import React from 'react';
import styled from 'styled-components';

const BigCardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 150px;
`

const ImgBigCardContainer = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 30%;
`
const HeadingBigCardContainer = styled.h4 `
    margin-bottom: 5px;
`
const DescriptionBigCardContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;

    p {
        text-align: justify;
    }
`

function CardGrande(props) {
    return (
        <BigCardContainer>
            <ImgBigCardContainer src={ props.imagem } />
            <DescriptionBigCardContainer>
                <HeadingBigCardContainer>{ props.nome }</HeadingBigCardContainer>
                <p>{ props.descricao }</p>
            </DescriptionBigCardContainer>
        </BigCardContainer>
    );
}

export default CardGrande;