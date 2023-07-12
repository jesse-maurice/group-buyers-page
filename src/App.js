import './App.css';

import React, { useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import background
  from './images/horizontal-shot-happy-surprised-woman-reacts-something-funny-carries-freshly-picked-vegetables-from-garden-keeps-clean-eating-prefers-vegetarian-food-poses-indoor-empty-space-text.jpg';

function App() {
  const [lang, setLang] = useState("en");

  return (
    <>
      <div className="w-full h-screen overflow-hidden ">
        <div className="relative w-full h-full ">
          <img
            className="object-cover w-full h-screen transition-all "
            src={background}
            alt=""
          ></img>
        </div>
        <div className="absolute inset-0 ">
          <Header lang={lang} setLang={setLang} />
          <Main lang={lang} setLang={setLang}/>
        </div>
      </div>
    </>
  );
}

export default App;
