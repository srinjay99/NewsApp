import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 8;
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
            {/* <News pageSize={this.pageSize} country="in" category="science" /> */}
            <Routes>
              <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country="in" category="general" />} />
              <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category="business" />} />
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
              <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country="in" category="general" />} />
              <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country="in" category="health" />} />
              <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country="in" category="science" />} />
              <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
              <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    )
  }
}



