import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Employee from "./components/Employee";
import './App.css';

class App extends Component {
  render(){
    return(
    <Wrapper>
      <Header>Employee List Here</Header>
      <Employee></Employee>
      <Employee></Employee>
    </Wrapper>
    );
  }
}

export default App;
