import './App.css';
import Navbar from './components/Navbar/Navbar'
import Blockcomp from './components/BlockComp/Blockcomp';
import FootMessage from './components/FootMessage/FootMessage'
import Cards from './components/Cards/Cards';
import CardsNFT from './components/CardsNFT/CardsNFT';
import React from 'react';

import Carousel from './components/Carousel/Carousel';
import { CarouselData } from './components/Carousel/CarouselData';


function Homepage() {
  return (
    <div className="App">
      <Navbar/>
      <div className="containComps">
      <Blockcomp/>
      </div>
      <span className="v133_304">How The Runway Helps You</span>
      <div id="container"></div>
      <Cards/>
      <Carousel slides={CarouselData} />
      <CardsNFT/>
      <FootMessage/>
      <a className="copyRight" href="#">@2022 by The Runway Inc.</a>
      
      

    </div>
  );
}
 
export default Homepage;
