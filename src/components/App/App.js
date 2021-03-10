import React, { Component } from 'react';

import Header from '../Header/Header';
import Routes from '../Router/Routes';
import './App.css';

export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    return (
      <div className='App'>
        <Header />
        <main className='main__container'>
          {hasError && <p>There was an error! Oh no!</p>}
          <Routes />
        </main>
      </div>
    );
  }
}
