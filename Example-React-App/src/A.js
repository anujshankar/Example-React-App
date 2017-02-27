import React, { Component } from 'react'
import { Link } from 'react-router'

class A extends Component {
  constructor() {
    super()
    this.state = {
      tab: 'cost'
    }
  }
  update(e) {
    console.log(e.target.value)
    this.setState({ tab: e.target.value })
  }
  render() {
    console.log('A')
    return (
      <div>
        <button><Link to='/B'>Goto B</Link></button>
        <select onChange={this.update.bind(this)} value={this.state.tab}>
          <option value="cost" >cost</option>
          <option value="fte" >fte</option>
        </select>
        <div> This is A with {this.state.tab}</div>
      </div>
    )
  }
}

export default A