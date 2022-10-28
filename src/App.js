import './App.css';
import logo from './assets/logo.svg';
import React, { Component, useState } from "react";
import Carousel from "react-spring-3d-carousel";
//import Card from "@material-ui/core/Card";
import { v4 as uuidv4 } from 'uuid';

import Image1 from '../src/assets/cards/José Eliomar.png';
import Image2 from '../src/assets/cards/Alexandre.png';
import Image3 from '../src/assets/cards/anansa.png';
import Image4 from '../src/assets/cards/Fernanda.png';
import Image5 from '../src/assets/cards/Jane Kelli.png';
import Image6 from '../src/assets/cards/José Maurício.png';
import Image7 from '../src/assets/cards/Laiz Pereira.png';
import Image8 from '../src/assets/cards/Marcos Torres.png';
import Image9 from '../src/assets/cards/Marilia.png';
import Image10 from '../src/assets/cards/Nadia.png';
import Image11 from '../src/assets/cards/Rita.png';
import Image12 from '../src/assets/cards/Samanta.png';
import Image13 from '../src/assets/cards/Tais.png';
import Image14 from '../src/assets/cards/Vielka.png';
import Image15 from '../src/assets/cards/tania.png';
import Image16 from '../src/assets/cards/Tanianna.png';

import { config } from "react-spring";

const App = ()=>{

  const [goToSlide, setgoToSlide] = useState("");

  let slides = [];
  
  slides = [
    {
      key: uuidv4(),
      content: <img src={Image1} alt="José Eliomar" />
    },
    {
      key: uuidv4(),
      content: <img src={Image2} alt="Alexandre Silva" />
    },
    {
      key: uuidv4(),
      content: <img src={Image3} alt="Anansa Campos" />
    },
    {
      key: uuidv4(),
      content: <img src={Image4} alt="Fernanda Bispo" />
    },
    {
      key: uuidv4(),
      content: <img src={Image5} alt="Jane Kelli" />
    },
    {
      key: uuidv4(),
      content: <img src={Image6} alt="José Maurício" />
    },
    {
      key: uuidv4(),
      content: <img src={Image7} alt="Laiz Pereira" />
    },
    {
      key: uuidv4(),
      content: <img src={Image8} alt="Marcos Torres" />
    }
    ,
    {
      key: uuidv4(),
      content: <img src={Image9} alt="Marilia Suarez" />
    }
    ,
    {
      key: uuidv4(),
      content: <img src={Image10} alt="Nadia Lima" />
    }
    ,
    {
      key: uuidv4(),
      content: <img src={Image11} alt="Rita Fragoso" />
    }
    ,
    {
      key: uuidv4(),
      content: <img src={Image12} alt="Samanta Santos" />
    }
    ,
    {
      key: uuidv4(),
      content: <img src={Image13} alt="Tais Plech" />
    }
    ,
    {
      key: uuidv4(),
      content: <img src={Image14} alt="Vielka Vidal" />
    }
    ,
    {
      key: uuidv4(),
      content: <img src={Image15} alt="Tania Chiartano" />
    }
    ,
    {
      key: uuidv4(),
      content: <img src={Image16} alt="Tanniana Costa" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => setgoToSlide(index) };
  });

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Logo do Anchieta 40 anos" />
      </header>
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius="16"
          animationConfig={config.gentle}
          showNavigation
        />
      </div>
    </div>
  );

};

export default App;
