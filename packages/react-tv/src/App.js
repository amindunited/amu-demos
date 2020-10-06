import React from 'react';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Routing from './components/Routing';
import ListPage from './components/ListPage';

function App() {
  return (
    <div className="App container">
      {/* <Header/> */}
      <brand-header></brand-header>
      <ListPage></ListPage>
      {/* <brand-footer></brand-footer> */}
      <Footer/>
    </div>
  );
}

export default App;
