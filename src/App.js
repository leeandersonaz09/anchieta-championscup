import './App.css';
import logo from './assets/logo.svg';
import React, { Component, useState } from "react";
import Carousel from "react-spring-3d-carousel";
//import Card from "@material-ui/core/Card";
import { v4 as uuidv4 } from 'uuid';
import TniCard from "./card";
import { config } from "react-spring";

const App = ()=>{

  const [goToSlide, setgoToSlide] = useState("");

  const slides = [
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/801/?random" alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/802/?random" alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/600/803/?random" alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/500/?random" alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/804/?random" alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/500/800/?random" alt="6" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/600/?random" alt="7" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/805/800/?random" alt="8" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => setgoToSlide(index) };
  });

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Logo da NLW Copa" />
      </header>
      <div style={{ width: "40%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius="10"
          animationConfig={config.gentle}
          showNavigation
        />
      </div>
    </div>
  );

};

export default App;
