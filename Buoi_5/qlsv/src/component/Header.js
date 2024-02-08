import React from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Header() {
    return (
        <>
            <NavLink to="/" className="btn btn-info mr-3">Students</NavLink>
            <NavLink to="/subject" className="btn btn-info mr-3">Subjects</NavLink>
            <NavLink to="/register" className="btn btn-info mr-3">Registers</NavLink>
            <ToastContainer />
        </>
    )
}

export default Header
