import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Calculator from './pages/dashboard/component/Calculator'

function App() {
  return (
    <div className="App">
      <Calculator/>
    </div>
  );
}

export default App;
