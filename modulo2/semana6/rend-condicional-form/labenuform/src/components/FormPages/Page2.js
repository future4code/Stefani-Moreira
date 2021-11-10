import React from 'react';
import InputQuestion from '../QuestionsTypes/InputQuestion';
import { FormContainer2 } from './StyledForms'

class Page2 extends React.Component {
    render() {
        const form2 = 
            <FormContainer2>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <InputQuestion 
                    question={"5. Qual o seu curso?"}  
                />
                <InputQuestion 
                    question={"6. Qual a unidade de ensino?"}  
                />
            </FormContainer2>
        return (
           <div>
               { form2 }
           </div> 
        )
    }
}

export default Page2;