import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";

import './App.css';

import Users from './components/Users';

class App extends Component {
  
  render() {
    
    return (
      <div className="container">
        
        <Navbar title =  "User App"/>
        <hr/>
        <AddUser/>  

        <Users />
      </div>
   
   );
  }
}

export default App;