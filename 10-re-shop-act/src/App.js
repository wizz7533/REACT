import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Produits from './components/product/Produits';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Produits />
    </React.Fragment>
  );
}

export default App;
