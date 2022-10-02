import './App.css';
import Blockcomp from './components/BlockComp/Blockcomp';
import Cards from './components/Cards/Cards';
import React from 'react';


function Homepage() {
  return (
    <div className="App">
      <div className="containComps">
      <Blockcomp/>
      </div>
      <span className="v133_304">How The Runway Helps You</span>
      <div id="container"><Cards/>
      </div>
      <a className="copyRight" href="#">@2022 by The Runway Inc.</a>
    
      {/* <div className="block"><Blockcomp/></div>
      
      <div className="block"><Blockcomp/></div>
      
      <div className="block">
        <Blockcomp/>
      </div> */}
      
      

    </div>
  );
}
 
export default Homepage;
