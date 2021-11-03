import React from 'react';
import styled from 'styled-components';

const ImageButtonContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 150px;
    padding: 5px 10px;
    margin: 5px auto;
    height: 30px;

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

    );
}

export default ImagemButton;