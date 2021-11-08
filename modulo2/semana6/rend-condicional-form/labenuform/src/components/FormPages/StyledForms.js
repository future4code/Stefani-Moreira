import styled from 'styled-components';

const FormContainer1 = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;

    h2 {
        margin:20px 0px 60px;
        text-align: center;
    }
    label {
        margin-bottom: 20px;
    }
    input {
        border-style: dotted;
        border-width: 0px 0px 1px;
        width: 300px;
        margin:2px 0px 10px;
    }
    select {
        border-style: dotted;
        width: 304px;
        margin:2px 0px;
    }
`
const FormContainer2 = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;

    h2 {
        margin:20px 0px 90px;
        text-align: center;
    }
    label {
        margin-bottom:20px;
    }
    input {
        border-style: dotted;
        border-width: 0px 0px 1px;
        width: 300px;
        margin:2px 0px 10px;
    }
    
`
const FormContainer3 = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;

    h2 {
        margin:20px 0px 90px;
        text-align: center;
    }
    label {
        margin:0px 0px 20px 5px;
    }
    input {
        border-style: dotted;
        border-width: 0px 0px 1px;
        width: 300px;
        margin:2px 0px 20px 0px;
    }
    select {
        border-style: dotted;
        width: 304px;
        margin:2px 0;
    }
`
const FormContainer4 = styled.form `
    margin: 50% 6%;
    
    h2{
        text-align: justify;
        margin-bottom: 50px;
    }

    p{
        font-size: 1.2rem;
        text-align: center;
    }

`


export { FormContainer1, FormContainer2, FormContainer3, FormContainer4,  } ;