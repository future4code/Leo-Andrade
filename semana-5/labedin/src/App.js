import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import { CardPequeno } from './components/CardPequeno/CardPequeno';
import CardSkills from './components/cardSkills/CardSkills';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQH_OxgeQfbHyg/profile-displayphoto-shrink_200_200/0/1609380494796?e=1636588800&v=beta&t=VdGQm2H98ZDN0e-9p5_gSfsvdto5ifyjSkIGCYzbGJY" 
          nome="Web Developer" 
          descricao="Oi, eu sou Léo Andrade. Sou aluno da Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className='page-section-container'>
        <CardPequeno
          icon='https://img-premium.flaticon.com/png/512/1804/premium/1804925.png?token=exp=1631128665~hmac=7ac8c920a89f19408f2ab4c1f52120dd'
          texto='Email: leo.ramos182@hotmail.com'
        />
        <CardPequeno
        icon='https://image.flaticon.com/icons/png/512/684/684908.png'
        texto='Estrada dos Três Rios, Rio de Janeiro - RJ'
        />
      </div>
      <div className='page-section-container'>
      <h2>Habilidades</h2>
        <CardSkills
          htmlIcon='https://image.flaticon.com/icons/png/512/888/888859.png'
          jsIcon='https://image.flaticon.com/icons/png/512/136/136530.png'
          cssIcon='https://image.flaticon.com/icons/png/512/888/888847.png'
          reactIcon='https://img-premium.flaticon.com/png/512/1183/premium/1183672.png?token=exp=1631133578~hmac=4c4b9df75ad947a1a07fba11970e49cb'
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
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
