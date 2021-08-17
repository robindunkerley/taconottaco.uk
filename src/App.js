import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";


//import components
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Bookings from './Components/Bookings';
import Block from './Components/Description';
import BlockFactory from './Components/BlockFactory';

//import css
import './style.css';
import './flickity.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Taco Not Taco</title>
      </Helmet>
      <Header />
      <Carousel />
      <BlockFactory />
      <Bookings />
    </div>
  );
}

export default App;
