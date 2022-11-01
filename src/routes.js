import React from 'react';
import { Routes as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import history from './services/history';

export default function Routes() {

  return (

      <Router history={history}>
        <Route path="/" element={<Home />} />
      </Router>

  );
}