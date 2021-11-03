import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import SmallCard from './components/SmallCard/SmallCard';
import minhaFoto from './image/oie_jpg.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={minhaFoto} 
          nome="Stefani" 
          descricao="Oi, eu sou a Stefani. Sou estudante de desenvolvimento web. Amo comida, viajar (principalmente se tiver praia, sendo baiana seria impossível não amar praia) e longas caminhadas."
        />

        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <SmallCard 
          image="https://image.flaticon.com/icons/png/512/3293/3293282.png"
          title="Email:"
          description="stefani@gmail.com"
        />

        <SmallCard 
          image="https://image.flaticon.com/icons/png/512/3293/3293302.png"
          title="Endereço:"
          description="Tralala Vieira, 240, Fileira do Céu."
        />
        
      </div>

      <div className="page-section-container">
        <h2>Experiência profissional</h2>
        <CardGrande  
          nome="Afro Diáspora" 
          descricao="Desenvolvedora Web" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
