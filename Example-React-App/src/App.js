import React, { Component } from 'react'
import { Link } from 'react-router'
import './App.css'
class App extends Component {
  render() {
    console.log(1)
    return (
      <div>
        <div className='button'>
          <button><Link to='/A'>A</Link></button>
          <button><Link to='/B'>B</Link></button>
        </div>
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
