import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
// import Employee from "./components/Employee";
import Table from "./components/Table";
import './App.css';

class App extends Component {
  render(){
    return(
    <Wrapper>
      <Header>Employee Directory</Header>
      <Table></Table>
    </Wrapper>
    );
  }
}

export default App;
