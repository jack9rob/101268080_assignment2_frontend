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
            alert('Please enter your information!')
        }
        else if(id === undefined) {
            axios.post("http://localhost:9090/api/v1/employees", data)
            .then(response => navigate('/'))
            .catch(error => console.log(error))
        } else {
            axios.put(`http://localhost:9090/api/v1/employees/${id}`, data)
            .then(response => navigate('/'))
            .catch(error => console.log(error))
        }
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit} method="POST" action="http://localhost:9090/api/v1/employees">
                <div className="row d-flex justify-content-start mb-2">
                    <label className="col-1">
                        First Name:
                    </label>
                    <input className="col-3" type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value) }/>
                </div>
                <div className="row d-flex justify-content-start mb-2 ">
                    <label className="col-1">
                        Last Name:
                    </label>
                    <input className="col-3" type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)}/>
                </div>
                <div className="row d-flex justify-content-start mb-2">
                    <label className="col-1">
                        Email:
                    </label>
                    <input className="col-3" type="email" name="emailId" value={emailId} onChange={e => setEmailId(e.target.value) }/>
                </div>
                <div className="row d-flex justify-content-start">
                    <button className="btn btn-primary col-1" type="submit">Submit</button>
                    &nbsp;
                    <Link className="btn btn-danger col-1" to="/">Cancel</Link>
                </div>
            </form>
        </div>
    )
}
