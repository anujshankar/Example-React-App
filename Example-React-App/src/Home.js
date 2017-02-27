import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
  render() {
    return (<div className='button'>
      <button><Link to='/A'>A</Link></button>
      <button><Link to='/B'>B</Link></button>
    </div>)
  }
}

export default Home
