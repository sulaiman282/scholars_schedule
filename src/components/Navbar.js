import React from 'react'
import "../css/navbar.css"
import mlogo from "../images/mlogo.png"
import {Link } from "react-router-dom";

export default function
    () {
    return (
        <div className='mnavbar'>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/home"><img src={mlogo} className="mlogo" alt="Scholars Academy"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggle-button"><i className="fa-solid fa-bars text-danger"></i></span>
                    </button>
                    
                        <div className="collapse navbar-collapse links" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active  text-white expand" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active  text-white expand" aria-current="page" to="/information">Informain</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active  text-white expand" aria-current="page" to="/islamic_scholars">Scholar Schedule</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active  text-white expand" aria-current="page" to="/donation">Donation</Link>
                                </li>


                            </ul>
                        </div>

                

                </div>
            </nav>
        </div>
    )
}
