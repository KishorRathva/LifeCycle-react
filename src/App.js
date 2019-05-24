import React, { Component } from 'react'
import './App.css'
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';

export class App extends Component {
  render() {
    return (
      <div>
      <ClickCounterTwo/>
      </div>
    )
  }
}

export default App
