import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {  useParams, useNavigate, Link } from "react-router-dom";
import "../App.css"


export default function EmployeeDetails() {
    
    
    const [employee, setEmployee] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)

    let {id} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:9090/api/v1/employees/${id}`)
        .then(response => {
            setEmployee(response.data)
            if(employee == null) {
                setIsDeleted(true)
            } else{
                console.log(response.data.firstName)
            }
        })
        .catch(error => console.log(error))
    }, []);

    const onDelete = (event) => {
        event.preventDefault()
        axios.delete(`http://localhost:9090/api/v1/employees/${employee._id}`)
        .then(reponse => {
            console.log(reponse.data)
            setIsDeleted(true)
        })
        .catch(error => console.log(error))
       
    }


    return (
        <div>
            {
                isDeleted ? 
                <div>
                    <h2>Employee Deleted!</h2>
                    <button onClick={navigate('/employees')}>OK</button>
                </div>
                : 
                <div>
                    <h1>Delete {employee.firstName} {employee.lastName}</h1>
                    <form onSubmit={onDelete}>
                        <button type="Submit"> DELETE</button>
                        <Link to='/employees'><button>Cancel</button> </Link> 
                    </form>
            <p>{isDeleted ? "Deleted" : ""}</p>
                </div>
            }

        </div>
    )
}