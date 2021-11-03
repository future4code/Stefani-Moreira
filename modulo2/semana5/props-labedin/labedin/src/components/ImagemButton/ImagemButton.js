import React from 'react';
import styled from 'styled-components';

const ImageButtonContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 150px;
    padding: 15px 20px;
    margin: 10px auto;

    img  {
        width: 20px;
        margin-right: 10px;
    }
`

function ImagemButton(props) {
    return (
        <ImageButtonContainer>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImageButtonContainer>

    )
}

export default ImagemButton;