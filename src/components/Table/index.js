import React, { Component } from 'react';
import API from '../../utils/API';

class Table extends Component {

    state = {
        result: [{}]
    }
    

    generateUsers = () =>{
        API.generateUser()
        .then(res => this.setState([{ result: res.data }]))
        .catch(err => console.log(err));
    }

    render(){

        return(
            <div>
    
             <table>
      <tr>
        <th className="">First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>City</th>
        <th>Email</th>
        <th>Phone</th>
    
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
        <td>Charleston</td>
        <td>Email@email.com</td>
        <td>543-890-9876</td>
        <td><img alt="" src="https://i.pinimg.com/564x/f0/3a/34/f03a349219e07c262f961a9afefb9a66.jpg" height="50" width="50"></img></td>
      </tr>
      {/* <tr>
        <td>{this.state.result.name.first}</td>
        <td>{this.state.result.name.last}</td>
        <td>{this.state.result.dob.age}</td>
        <td>{this.state.result.location.city}</td>
        <td>{this.state.result.email}</td>
        <td>{this.state.result.cell}</td>
        <td><img src="https://i.pinimg.com/564x/f0/3a/34/f03a349219e07c262f961a9afefb9a66.jpg" height="50" width="50"></img></td>
      </tr> */}
    
            </table>
    
            </div>
        )
    
    }

};

export default Table;