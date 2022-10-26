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
  let slides = [];
  
  slides = [
    {
      key: uuidv4(),
      content: <TniCard />
    },
    {
      key: uuidv4(),
      content: <TniCard />
    },
    {
      key: uuidv4(),
      content: <TniCard />
    },
    {
      key: uuidv4(),
      content: <TniCard />
    },
    {
      key: uuidv4(),
      content: <TniCard />
    },
    {
      key: uuidv4(),
      content: <TniCard />
    },
    {
      key: uuidv4(),
      content: <TniCard />
    },
    {
      key: uuidv4(),
      content: <TniCard />
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
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius="10"
          animationConfig={config.gentle}
          showNavigation
        />
      </div>
    </div>
  );

};

export default App;
