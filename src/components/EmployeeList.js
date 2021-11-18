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
            console.log(this.state.employees)
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
            <div>
                {
                    this.state.employees.map(e => (
                        <div key={e._id}>
                            {e.firstName}
                            <Link to={`/api/v1/employees/${e._id}`}>Details</Link>

                            <form onSubmit={this.handleSubmit(e._id)}>
                                <input type='submit'/>
                            </form>
                            
                        </div>
                    ))
                }
            </div>
        )
    }
}
