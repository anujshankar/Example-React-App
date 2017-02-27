import React, { Component } from 'react'
import { Link } from 'react-router'

class B extends Component {
  constructor() {
    super()
    this.state = {
      tab: 'cost'
    }
  }
  update(e){
    console.log(e.target.value)
    this.setState({tab: e.target.value})
  }
  render() {
    let dropdown;
    if (this.state.tab === 'cost') {
      dropdown = <select onChange={this.update.bind(this)}>
        <option value="cost" selected >cost</option>
        <option value="fte" >fte</option>
      </select>
    } else {
      dropdown = <select onChange={this.update.bind(this)}>
        <option value="cost" >cost</option>
        <option value="fte" selected> fte</option>
      </select>
    }
    return (
      <div>
        <button><Link to='/A'>Goto A</Link></button>
        {dropdown}
        <div> This is B with {this.state.tab}</div>
      </div>
    )
  }
}

export default B