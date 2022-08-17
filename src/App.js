import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';




// HARDIK PANCHAL
// 3 months ago
// For anyone having error in installing top loading bar use this
// npm i react-top-loading-bar --force 



const App = () => {
  //const apiKey = "cfcdf87dcceb4028b6b8a48bc06a1b71";
  const apiKey = "64b83af3d87c4c968ac797c9ed2613b1";
  const pageSize = 8;
  const [progress, setProgress] = useState(0);
  return (
    <>
      {/* **IMPORTANT **
      For React Router Dom, in React v6 and above:
      Anshika Paliwal
      3 months ago (edited)(May 2022)
      For who so ever has made it till here, might find a blank screen appearing when compiling, so help yourself by making the changes as indicated below:
      First import:
      import {
        BrowserRouter,
        Routes,
        Route,
        Link
      } from "react-router-dom";

      Then,
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          < Route path="/"
            element={<TextForm heading="Enter the text to analyse: " mode={mode} />} />
        </Routes>
      </BrowserRouter>

      The issue is due to upgradation of React from v5 to v6. */}
      <div>
        <BrowserRouter>
          <Navbar />
          {/* <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="science" /> */}
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;



