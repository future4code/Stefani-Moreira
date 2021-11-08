import React from "react";
import SelectQuestion from "../QuestionsTypes/SelectQuestion";
import InputQuestion from "../QuestionsTypes/InputQuestion";
import { FormContainer1 } from "./StyledForms";

class Page1 extends React.Component {
  render() {
    const form1 = (
      <FormContainer1>
            <h2>ETAPA 1 - DADOS GERAIS</h2>
            <InputQuestion question={"1. Qual o seu nome?"} />
            <InputQuestion question={"2. Qual a sua idade?"} />
            <InputQuestion question={"3. Qual o seu e-mail?"} />
            <SelectQuestion
                question={"4. Qual a sua escolaridade?"}
                options={[
                "",
                "Ensino médio incompleto",
                "Ensino médio completo",
                "Ensino superior incompleto",
                "Ensino superior completo",
                ]}          
            />
        </FormContainer1>
     
    );
    return <div>{form1}</div>;
  }
}

export default Page1;