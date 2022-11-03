import './index.css';
import logo from '../../assets/logo.svg';
import React, { useState } from "react";
import Slider from "react-slick";
// import icons
import { BsArrowLeft, BsArrowRight, } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

function SampleNextArrow({ onClick }) {
  return (
    <div className='arrow arrow-right' onClick={onClick}>
      <BsArrowRight />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className='arrow arrow-left' onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
}

function EmptyArrow({ onClick }) {
  return (
    <div></div>
  );
}

const Home = () => {

  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);

    const data = [
      {
        key: 1,
        img: 'https://drive.google.com/uc?export=download&id=14BAmsVeiM0r_NwIQkdgbWFMEIWhWX_o9',
        nome:'',
        disciplina:'',
        descrição:''
      },
      {
        key: 2,
        img: 'https://drive.google.com/uc?export=download&id=1E4e_XpmIs5MgQesFFZgXKwTsroZen2GT',
        nome:'',
        disciplina:'',
        descrição:''
      },
      {
        key: 3,
        img: 'https://drive.google.com/uc?export=download&id=1HY7JOwGvYHkUh7eR4yPfetB0vPeVarIM',
        nome:'',
        disciplina:'',
        descrição:''
      },
      {
        key: 4,
        img: 'https://drive.google.com/uc?export=download&id=1PAUg742AqAkwYbOA0C69mYJBJORWzegP',
        nome:'',
        disciplina:'',
        descrição:''
      },
      {
        key: 5,
        img: 'https://drive.google.com/uc?export=download&id=1R2GN3D5tmX2xFX1OfIROgDXnz4ta5Xw9',
        nome:'',
        disciplina:'',
        descrição:''
      },
      {
        key: 6,
        img: 'https://drive.google.com/uc?export=download&id=1V5XTRf6awshQnYkxVck19aHOpDUzAXLR',
        nome:'',
        disciplina:'',
        descrição:''
      },
      {
        key: 7,
        img: 'https://drive.google.com/uc?export=download&id=1uWtbRtEV9M77CTUxszEpCO6Vui8TGDA1',
        nome:'',
        disciplina:'',
        descrição:''
      },
      {
        key: 8,
        img: 'https://drive.google.com/uc?export=download&id=1H_4CR-Bk3jLevgxTOXZRJhrdiw3iVxsI',
        nome:'',
        disciplina:'',
        descrição:''
      },
      {
        key: 9,
        img: 'https://drive.google.com/uc?export=download&id=1LO7X4mnMJnYJx5sOmL-K8joU6e7TxK9z',
        nome:'',
        disciplina:'',
        descrição:''
      },
      {
        key: 10,
        img: 'https://drive.google.com/uc?export=download&id=1ZanZNBzDJEpqj6tXxfLFhnQilYquceaJ',
        nome:'',
        disciplina:'',
        descrição:''
      },
      {
        key: 11,
        img: 'https://drive.google.com/uc?export=download&id=1_n-Cq_R5VfTgl3sharS-AUMaZ9fEl2SY',
        nome:'',
        disciplina:'',
        descrição:''
      },
      {
        key: 12,
        img: 'https://drive.google.com/uc?export=download&id=1iFa_P3SaNkhHcARHGBQgCmV-Rll0Y_pX',
        nome:'',
        disciplina:'',
        descrição:''
      },
      {
        key: 13,
        img: 'https://drive.google.com/uc?export=download&id=1jFVuzjZhhV2T-QzFWtfWV2ArBQPXEt-Z',
        nome:'',
        disciplina:'',
        descrição:''
      },
      {
        key: 14,
        img: 'https://drive.google.com/uc?export=download&id=12vYLMb3x8yQh2pmXtU-XEirDoIulw_nH',
        nome:'',
        disciplina:'',
        descrição:''
      },
      {
        key: 15,
        img: 'https://drive.google.com/uc?export=download&id=1VAAxx8OGioVyrs4Xo5zl-1TRPh9TZP_5',
        nome:'Tania Chiartano',
        disciplina:'Supervisora',
        descrição:''
      },
      {
        key: 16,
        img: 'https://drive.google.com/uc?export=download&id=1gJreTqQqox7Qthxe188n28svM4OcM0yh',
        nome:'Tanniana Costa',
        disciplina:'Orientadora',
        descrição:''
      },
      {
        key: 17,
        img: 'https://drive.google.com/uc?export=download&id=10KXfibF6ZWRCqq6npcxUISJH7bbCdq1d',
        nome:'Marisol Melo',
        disciplina:'Auxiliar de Supervisão',
        descrição:''
      },

    ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setSlideIndex(next),
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


  const pushPage = (event) => {
   
    navigate({
      pathname: '/Details',
      search: '?query=abc',
      state: {
        image: event,
      }
    });

  }

  return (
    <div className="container">
      <div className='content'>
        <header>
          <img src={logo} alt="Logo do Anchieta 40 anos" />
        </header>
        <div className="slider">
          <Slider {...settings}>
            {
              data.map((item, index) => (
                <div className={index === slideIndex ? 'slide slide-active' : 'slide'} key={item.key}>
                  <img src={item.img} alt="" onClick={() => pushPage(item.img)} />
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  );

};

export default Home;
