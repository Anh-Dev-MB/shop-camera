import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Body } from './styles/Body';
import { Header } from './components/Header';

function App() {
  return (
    <Body className="App">
        <Header/>
    </Body>
  );
}

export default App;
