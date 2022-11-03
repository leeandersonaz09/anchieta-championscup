import './index.css';
import React, { useState, useEffect } from 'react';
//import logo from '../../assets/logo.svg';
import { useLocation, useNavigate  } from "react-router-dom";

const Details = () => {
  
  //const [img, setImg] = useState();

  //const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    //setImg(location.state.image);

  }, [location]);

  return (
    <div>
      <h1>
        erserser
      </h1>
    </div>
  );

};

export default Details;
