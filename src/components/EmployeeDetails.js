import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {  useParams } from "react-router-dom";
import "../App.css"

export default function EmployeeDetails() {

    const [employee, setEmployee] = useState([])

    let {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:9090/api/v1/employees/${id}`)
        .then(response => {
            //this.setState({employees: response.data.employees})
            
            setEmployee(response.data)
            console.log(employee.firstName)
        })
        .catch(error => console.log(error))
    }, []);

    
    return (
        <div>
            <h1>EmployeeDetails</h1>
            {   
            <div>
                <h2>{employee.firstName} {employee.lastName}</h2>
                <h3>{employee.emailId}</h3>
            </div>
            }
        </div>
    )
}
