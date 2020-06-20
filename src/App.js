import'bootstrap/dist/css/bootstrap.min.css';
import $ from'jquery';
import Popper from 'popper.js';
import'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
import { createPortal } from 'react-dom';
import Todo from './Component/TodoApp'
import PresDetails from './Component/ApiApp'


class App extends Component {
  render(){
  return (
    <div>
    
    <Todo></Todo>
    {/*<PresDetails></PresDetails>*/}
    
    </div>
  )};
}

export default App;
