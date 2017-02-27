import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import A from './A'
import B from './B'
import {Router, Route, hashHistory} from 'react-router'


ReactDOM.render(
   <Router history={hashHistory}>
    <Route path='/' component={App}/>
    <Route path='/A' component={A}/>
    <Route path='/B' component={B}/>
  </Router>,
  document.getElementById('root')
);
