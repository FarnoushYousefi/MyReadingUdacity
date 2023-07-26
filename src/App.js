import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './views/Home';
import Search from './views/Search';
import Provider, { MyContext } from './Provider/';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Provider>
          <Routes>
            <Route path={'/search'} element={<Search />} />
            <Route
              path={'/'}
              render={() => (
                <MyContext.Consumer>
                  {context => <Home {...context} />}
                </MyContext.Consumer>
              )}
            />
          </Routes>
        </Provider>
      </div>
    );
  }
}

export default BooksApp;
