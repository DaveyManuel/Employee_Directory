import React, { Component } from 'react';
import Filter from '../Filter';
import API from '../../utils/API';

class Table extends Component {

    state = {
        result: [],
        search: "",
        dropdown: ""
    }


    generateUsers = () => {
        API.generateUser()
            .then(res => this.setState({ result: res.data.results }))
            .catch(err => console.log(err));
    }

    handleSortBy = e => {
        e.preventDefault();
        console.log("string here I made it")
        console.log(e.target)
        console.log(e.target.value)
        this.setState({dropdown: e.target.value})

        if (e.target.value === 'age'){
            const sortedAge = this.state.result.sort(function (a, b) {
                return a.dob.age - b.dob.age;
              })
              this.setState({result: sortedAge})
        } else if (e.target.value === 'first'){
            const sortedFirst = this.state.result.sort(function(a, b) {
                var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
              
              })
              console.log(this.state.dropdown)
              this.setState({result: sortedFirst})
        } else if (e.target.value === 'last'){
            const sortedLast = this.state.result.sort(function(a, b) {
                var nameA = a.name.last.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.last.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
              
              })
              this.setState({result: sortedLast})
        }

      // .sort((a,b)=>(a.name.first > b.name.first) ? 1)


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
            handleSortBy={this.handleSortBy}
            dropdown={this.state.dropdown}
            />

                <table className="table text-white">
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