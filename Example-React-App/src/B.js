import React, { Component } from 'react'
import { Link } from 'react-router'

class B extends Component {
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
    console.log('B')
    return (
      <div>
        <button><Link to='/A'>Goto A</Link></button>
        <select onChange={this.update.bind(this)} value={this.state.tab}>
          <option value="cost" >cost</option>
          <option value="fte" >fte</option>
        </select>
        <div> This is B with {this.state.tab}</div>
      </div>
    )
  }
}

export default B