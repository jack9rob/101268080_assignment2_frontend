import React, { useState, useEffect} from 'react'
import axios from 'axios'
import {  useNavigate, useParams, Link} from "react-router-dom";

export default function EmployeeForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')

    const navigate = useNavigate();

    let {id} = useParams()

    console.log(id)

    useEffect(() => {
        async function fetchData() {
            if(id !== undefined) {
                await axios.get(`http://localhost:9090/api/v1/employees/${id}`)
                .then(response => {
                    setFirstName(response.data.firstName)
                    setLastName(response.data.lastName)
                    setEmailId(response.data.emailId)
                    console.log(response.data.firstName)
                })
                .catch(error => console.log(error))
            }
        }
        fetchData()
    }, []);

    let handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            "firstName": firstName,
            "lastName": lastName,
            "emailId": emailId
        }
        console.log(`${firstName} ${lastName} ${emailId}`)
        if(data.firstName === '' || data.lastName === '' || data.emailId === '') {
            alert('Please fill in ')
        }
        else if(id === undefined) {
            axios.post("http://localhost:9090/api/v1/employees", data)
            .then(response => navigate('/employees'))
            .catch(error => console.log(error))
        } else {
            axios.put(`http://localhost:9090/api/v1/employees/${id}`, data)
            .then(response => navigate('/employees'))
            .catch(error => console.log(error))
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit} method="POST" action="http://localhost:9090/api/v1/employees">
                <label>
                    First Name:
                    <input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value) }/>
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)}/>
                </label>
                <label>
                    Email:
                    <input type="email" name="emailId" value={emailId} onChange={e => setEmailId(e.target.value) }/>
                </label>
                <button type="submit">Submit</button>
                <Link to="/employees"><button>Cancel</button></Link>
            </form>
        </div>
    )
}
