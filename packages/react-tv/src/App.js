import React from 'react';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer'
import Routing from './components/Routing';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routing></Routing>
      <Footer></Footer>
    </div>
  );
}

export default App;
