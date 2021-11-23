import React from 'react'

export default function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
            <a class="navbar-brand">My Employees</a>
            
           
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">View Employees</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/employees/add">Add Employee</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
