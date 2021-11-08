import React from 'react';
import SelectQuestion from '../QuestionsTypes/SelectQuestion';
import InputQuestion from '../QuestionsTypes/InputQuestion';
import { FormContainer3 } from './StyledForms'

class Page3 extends React.Component {
    render() {
        const form3 = 
                
            <FormContainer3>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <InputQuestion 
                    question={"5. Por que você não terminou um curso de graduação?"}  
                />
                <SelectQuestion 
                    question={"6. Você fez algum curso complementar?"}
                    options={[
                        "",
                        "Curso técnico",
                        "Cursos de inglês",
                        "Não fiz curso complementar"
                    ]}
                />
            </FormContainer3>
        return (
           <div>
               { form3 }
           </div> 
        )
    }
}

export default Page3;