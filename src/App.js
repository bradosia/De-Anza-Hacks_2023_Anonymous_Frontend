import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";

import Home from './templates/Home';
import CustomerView from './templates/CustomerView'
import Capture from './templates/Capture'
import ComponentTesting from './templates/ComponentTesting.js'

import './styles/App.css'

import TripServiceInit from './components/TripService/TripServiceInit';

// Initialize the trip service only once!
// It also imports the trip socket and makes a connection to the server!
TripServiceInit();

function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
        <Route exact path='/' element={<CustomerView/>} />
        <Route exact path='/Capture' element={<Capture/>} />
    </Routes>
  );
}

export default App;
