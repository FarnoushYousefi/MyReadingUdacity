import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './views/Home';
import Search from './views/Search';

class App extends React.Component {
 

  render() {
    return (
      <div className="app">
        <Routes>
          <Route path={"/search"} element={<Search />} />
          <Route path={"/"} element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;
