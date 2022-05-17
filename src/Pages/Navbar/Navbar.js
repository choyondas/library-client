// import React, { useState, useEffect } from 'react';
import { Badge } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import ChatIcon from '@material-ui/icons/Chat';
import { useEffect, useState } from "react";

// import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import logo from "../../images/logo.jpg";
import './Navbar.css';

const Navbar = () => {
    const { user, logout } = useAuth();

    // Masseges fetch based on email because of showing cart
    const [massege, setMassege] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/masseges?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMassege(data));
    }, []);
    return (
        <div className='nav-p'>
            <div className="navmother">
                <nav className="navbar navbar-expand-lg navbar-light nav-bgcolor">
                    <div className="container-fluid navbar-side">
                        <div className='d-flex'><img style={{ borderRadius: '50%' }} src={logo} alt="" width="90" height="80" />
                            <h2 style={{ color: 'white', paddingTop: '20px', paddingLeft: '3px', }}> <i>YNU</i></h2></div>
                        <button className="navbar-toggler togol-cl" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon " ></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/teacher">Teachers</Link>
                                </li>
                                {user?.email ? (
                                    < >
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#redi-pro">Faculty</a>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/dashboard">Dassboard</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/register"> <button style={{ color: 'white', backgroundColor: '#1010E09F', fontStyle: 'none' }} onClick={logout}>SignOut</button></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/">"{user.displayName}"</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/yourmasseges"><Badge badgeContent={massege.length} color="primary">
                                                <ChatIcon style={{ color: "f01795" }} />
                                            </Badge></Link>
                                        </li>
                                    </>
                                ) : (

                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/login">Register</Link>
                                    </li>
                                )}
                                <li style={{ paddingTop: '8px', listStyle: 'none' }}><span style={{ cursor: 'pointer', color: 'white', fontWeight: '500' }}>EN</span></li>
                            </ul>

                            <li style={{ paddingTop: '8px', paddingLeft: '70px', listStyle: 'none' }}>
                                <input placeholder="Search" />
                                <Search style={{ color: "white", fontSize: 30 }} />
                            </li>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;