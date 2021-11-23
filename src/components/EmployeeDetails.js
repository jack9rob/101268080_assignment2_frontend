import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {  useParams } from "react-router-dom";
import "../App.css"

export default function EmployeeDetails() {

    const [employee, setEmployee] = useState([])
    const[isMounted, setIsMounted] = useState(false)

    let {id} = useParams()

    useEffect(() => {
        async function fetchData() {
            let mounted = true
            await axios.get(`http://localhost:9090/api/v1/employees/${id}`)
            .then(response => {
                setEmployee(response.data)
                console.log(employee.firstName)
            })
            .then(data => {
                if(mounted){
                  
                }
              })
            .catch(error => console.log(error))
    
            return () => mounted = false
        }
        fetchData()
    }, []);

    
    return (
        <div className="container">

            <h1>{employee.firstName} {employee.lastName}</h1>
            
            <div className="row">
                <h3 className="col-1">Email: </h3>
                <h3 className="col-3">{employee.emailId}</h3>
            </div>
            
        </div>
    )
}
