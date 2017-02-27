import React, { Component } from 'react'
import { Link } from 'react-router'

import './App.css'
class App extends Component {
  constructor() {
    super()
    this.state = {
      tab: 'cost'
    }
  }
  update(e) {
    this.setState({ tab: e.target.value })
  }
  render() {
    console.log(this.props.params.comp)
    const param = this.props.params.comp
    let display
    if (param === undefined) {
      console.log(1)
      display = (<div className='button'>
        <button><Link to='A'>A</Link></button>
        <button><Link to='B'>B</Link></button>
      </div>)
    } else if (param === 'A') {
      display = (<div>
        <button><Link to='/B'>Goto B</Link></button>
        <select onChange={this.update.bind(this)} value={this.state.tab}>
          <option value="cost">cost</option>
          <option value="fte">fte</option>
        </select>
        <div> This is A with {this.state.tab}</div>
      </div>)
    } else if(param === 'B') {
      display = (<div>
        <button><Link to='/A'>Goto A</Link></button>
        <select onChange={this.update.bind(this)} value={this.state.tab}>
          <option value="cost" >cost</option>
          <option value="fte" >fte</option>
        </select>
        <div> This is B with {this.state.tab}</div>
      </div>)
    } else{
      display = (<div>Error: 404</div>)
    }

    return (display)
  }
}

export default App
