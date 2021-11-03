import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import SmallCard from './components/SmallCard/SmallCard';
import JobSection from './components/JobSection/JobSection';
import CourseSection from './components/CourseSection/CourseSection';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import minhaFoto from './image/oie_jpg.png';

const GlobalStyle = createGlobalStyle `
  body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  }
`

const PageSectionContainer = styled.div `
  width: 40vw;
  margin: 10px 0;
`

const HeadingPageSectionContainer = styled.h2 `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <PageSectionContainer>
        <HeadingPageSectionContainer>Dados Pessoais</HeadingPageSectionContainer>
        <CardGrande 
          imagem={minhaFoto} 
          nome="Stefani Barros" 
          descricao="Oi, eu sou a Stefani. Sou estudante de desenvolvimento web. Amo comida, viajar, principalmente se tiver praia (sendo baiana seria impossível não amar praia), e longas caminhadas."
        />

        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

      </PageSectionContainer>

      <PageSectionContainer>
        <SmallCard 
          image="https://image.flaticon.com/icons/png/512/3293/3293282.png"
          title="Email:"
          description="stefani@gmail.com"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <SmallCard 
          image="https://image.flaticon.com/icons/png/512/3293/3293302.png"
          title="Endereço:"
          description="Tralala Vieira, 240, Fileira do Céu."
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <HeadingPageSectionContainer>Experiência Profissional</HeadingPageSectionContainer>
        <JobSection  
          title="Afro Diáspora" 
          description="Desenvolvedora Web - Voluntária" 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <HeadingPageSectionContainer>Formação Educacional</HeadingPageSectionContainer>
        <CourseSection 
        image="https://formas.ufba.br/uploads/logoufba.png" 
          title="Universidade Federal da Bahia -" 
          description="Ciência da Computação" 
        />

        <CourseSection 
        image="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          title="Labenu -" 
          description="Desenvolvimento Web Fullstack" 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <HeadingPageSectionContainer>Minhas redes sociais</HeadingPageSectionContainer>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </div>
  );
}

export default App;
