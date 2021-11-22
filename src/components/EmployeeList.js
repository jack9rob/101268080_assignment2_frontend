import '../App.css';
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class EmployeesList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employees: [],
            employeeIdDelete: 0,
        }
    }

    componentDidMount() {
        this.getEmployees()
    }

    getEmployees = () => {
        axios.get("http://localhost:9090/api/v1/employees")
        .then(response => {
            this.setState({employees: response.data.employees})
            console.log(response)
        })
        .catch(error => console.log(error))
    }

    handleSubmit = (id) => {
        console.log("ID: " + id)
        axios.delete(`http://localhost:9090/api/v1/employees/${id}`)
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div class="mt-5">
                <div>
                <Link to="/employees/add"><button class="btn btn-primary">Add Employee</button></Link>
                </div>
                <br/>
                <div>
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Employee First Name</th>
                            <th scope="col">Employee Last Name</th>
                            <th scope="col">Employee Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                    {
                        this.state.employees.map(e => (
                            <tr key={e._id}>
                                <td>{e.firstName}</td>
                                <td>{e.lastName}</td>
                                <td>{e.emailId}</td>
                                <td>
                                    <a class="btn btn-primary mr-2" href={`/employees/${e._id}`}>Details</a>
                                    <a class="btn btn-danger mr-2" href={`/employees/delete/${e._id}`}> Delete </a>
                                    <a class="btn btn-primary" href={`/employees/add/${e._id}`}> Update </a>
                                </td>

                            </tr>
                        ))
                    }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
