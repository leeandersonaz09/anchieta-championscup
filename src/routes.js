import React from 'react';
import { Routes as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Details from './pages/Details'
import history from './services/history';

export default function Routes() {

  return (

      <Router history={history}>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Router>

  );
}