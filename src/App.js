import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import './App.css';

class App extends Component {
  render(){
    return(
    <Wrapper>
      <Header>Employee List Here</Header>
    </Wrapper>
    );
  }
}

export default App;
