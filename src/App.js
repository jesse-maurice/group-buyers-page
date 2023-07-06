import './App.css';

import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import background
  from './images/horizontal-shot-happy-surprised-woman-reacts-something-funny-carries-freshly-picked-vegetables-from-garden-keeps-clean-eating-prefers-vegetarian-food-poses-indoor-empty-space-text.jpg';

function App() {
  return (
    <>
      <div className=" w-full h-screen overflow-hidden ">
        <div className=" w-full h-full relative ">
          <img
            className=" w-full h-screen object-cover transition-all"
            src={background}
            alt=""
          ></img>
        </div>
        <div className=" absolute inset-0">
          <Header />
          <Main/>
        </div>
      </div>
    </>
  );
}

export default App;
