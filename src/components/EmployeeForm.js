import React, { useEffect, useState, Redirect } from 'react'
import axios from 'axios'
import {  useHistory } from "react-router-dom";

export default function EmployeeForm() {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [emailId, setEmailId] = useState()

    const history = useHistory();

    let handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            "firstName": firstName,
            "lastName": lastName,
            "emailId": emailId
        }
        
        axios.post("http://localhost:9090/api/v1/employees", {data})
        .then(response => history.push('/api/v1/employees'))
        .catch(error => console.log(error))
   
    }

    return (
        <div>
            <form onSubmit={handleSubmit} method="POST" action="http://localhost:9090/api/v1/employees">
                <label>
                    First Name:
                    <input type="text" name="firstName" onChange={e => setFirstName(e.target.value) }/>
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" onChange={e => setLastName(e.target.value) }/>
                </label>
                <label>
                    Email:
                    <input type="email" name="emailId" onChange={e => setEmailId(e.target.value) }/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
