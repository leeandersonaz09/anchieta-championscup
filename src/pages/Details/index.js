import './index.css';
import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
//import { useLocation, useNavigate  } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Details = () => {

  const [img, setImg] = useState();

  //const navigate = useNavigate();
  const location = useLocation();
  setImg(location.state.image); 
  console.log(img)
  
  return (
    <div className="container">
      <div className='content'>
        <header>
          <img src={logo} alt="Logo do Anchieta 40 anos" />
        </header>

        <div >
          tfgfhfhfgh
        </div>

      </div>
    </div>
  );

};

export default Details;
