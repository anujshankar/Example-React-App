import React, { Component } from 'react'
import { Link } from 'react-router'

class A extends Component {
  update(e) {
    console.log(e.target.value)
    this.setState({ tab: e.target.value })
  }
  render() {
    return (
      <div>
        <button><Link to='/B'>Goto B</Link></button>
        <select onChange={this.update.bind(this)} value={this.state.tab}>
          <option value="cost">cost</option>
          <option value="fte">fte</option>
        </select>
        <div> This is A with {this.state.tab}</div>
      </div>
    )
  }
}

export default A