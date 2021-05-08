import React, { Component } from 'react';
import Filter from '../Filter';
import API from '../../utils/API';

class Table extends Component {

    state = {
        result: [],
        search: ""
    }


    generateUsers = () => {
        API.generateUser()
            .then(res => this.setState({ result: res.data.results }))
            .catch(err => console.log(err));
    }

    handleFormSubmit = e => {
        e.preventDefault();
    }

    handleInputChange = e => {
        this.setState({search: e.target.value})
    }

    componentDidMount(){
        this.generateUsers()
    }

    render() {

        return (
            <div>

            <Filter
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            />

                <table className="table">
                    <thead>
                        <tr>
                            <th className="">First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Image</th>

                        </tr>

                    </thead>

                    <tbody>
                    {this.state.result
                    .filter((employee)=>{
                        if (this.state.search === "") {
                            return employee
                        } else if (employee.name.first.toLowerCase().includes(this.state.search.toLowerCase())){
                            return employee
                        }
                         else if (employee.name.last.toLowerCase().includes(this.state.search.toLowerCase())){
                            return employee
                        }
                    })
                    .map(employee => (
                    <tr>
                    <td value={employee.name.first}>{employee.name.first}</td>
                    <td value={employee.name.last}>{employee.name.last}</td>
                    <td value={employee.dob.age}>{employee.dob.age}</td>
                    <td value={employee.location.city}>{employee.location.city}</td>
                    <td>{employee.email}</td>
                    <td>{employee.cell}</td>
                    <td><img src={employee.picture.thumbnail} height="50" width="50"></img></td>
                </tr>

                    ))}

                    </tbody>

                </table>

            </div>
        )

    }

};

export default Table;