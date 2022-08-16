import './App.css';

import React, { Component } from 'react'
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



export default class App extends Component {
  // apiKey = "cfcdf87dcceb4028b6b8a48bc06a1b71";
  apiKey = "64b83af3d87c4c968ac797c9ed2613b1";
  pageSize = 8;
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
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
            {/* <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="science" /> */}
            <LoadingBar
              height={3}
              color='#f11946'
              progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
            />
            <Routes>
              <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />} />
              <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business" />} />
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
              <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />} />
              <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health" />} />
              <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" />} />
              <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
              <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    )
  }
}



