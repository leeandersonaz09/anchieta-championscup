import './index.css';
import logo from '../../assets/logo.svg';
import React, { useState } from "react";
import Slider from "react-slick";
// import icons
import {BsArrowLeft, BsArrowRight,} from 'react-icons/bs';

import img1 from '../../assets/cards/José Eliomar.png';
import img2 from '../../assets/cards/Alexandre.png';
import img3 from '../../assets/cards/anansa.png';
import img4 from '../../assets/cards/Fernanda.png';
import img5 from '../../assets/cards/Jane Kelli.png';
import img6 from '../../assets/cards/José Maurício.png';
import img7 from '../../assets/cards/Laiz Pereira.png';
import img8 from '../../assets/cards/Marcos Torres.png';
import img9 from '../../assets/cards/Marilia.png';
import img10 from '../../assets/cards/Nadia.png';
import img11 from '../../assets/cards/Rita.png';
import img12 from '../../assets/cards/Samanta.png';
import img13 from '../../assets/cards/Tais.png';
import img14 from '../../assets/cards/Vielka.png';
import img15 from '../../assets/cards/tania.png';
import img16 from '../../assets/cards/Tanianna.png';

import { config } from "react-spring";

function SampleNextArrow({onClick}) {
  return (
    <div className='arrow arrow-right' onClick={onClick}>
      <BsArrowRight/>
    </div>
  );
}
function SamplePrevArrow({onClick}) {
  return (
    <div className='arrow arrow-left' onClick={onClick}>
      <BsArrowLeft/>
    </div>
  );
}
function EmptyArrow({onClick}) {
  return (
    <div></div>
  );
}

const Home = ()=>{

  const [slideIndex, setSlideIndex] = useState(0);
  const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    beforeChange: (current, next)=>setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (current, next) => (
      <div className={current === slideIndex ? 'dot dot-active' : 'dot'}>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <EmptyArrow />,
          prevArrow: <EmptyArrow />,
        }
      }]
  };

  return (
    <div className="container">
      <header>
        <img src={logo} alt="Logo do Anchieta 40 anos" />
      </header>
      <div className="slider">
        <Slider {...settings}>
          {
            images.map((img, index)=>(
              <div className={index === slideIndex ? 'slide slide-active' : 'slide'} key={index}>
                <img src={img} alt=""/>
              </div>
            ))
          }
        </Slider>
        
      </div>
    </div>
  );

};

export default Home;
