import React from 'react'
import "../css/navbar.css"
import mlogo from "../images/mlogo.png"


export default function
    () {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <div class="container">
                    <a class="navbar-brand" href="#"><img src={mlogo} className="mlogo" alt="Scholars Academy"/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="toggle-button"><i class="fa-solid fa-bars text-danger"></i></span>
                    </button>
                    
                        <div class="collapse navbar-collapse links" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active  text-white expand" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active  text-white expand" aria-current="page" href="#">Informain</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active  text-white expand" aria-current="page" href="#">Scholar Schedule</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active  text-white expand" aria-current="page" href="#">Donation</a>
                                </li>


                            </ul>
                        </div>

                

                </div>
            </nav>
        </div>
    )
}
