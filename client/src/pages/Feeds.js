import React from "react";


function Feeds() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
                <div class="container-fluid">
                    <img className='ps-3 pe-2' src='../../favicon-32x32.png' alt='icon'></img>
                    <a className="navbar-brand">TreePeeps</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Menu 
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ps-2"><a className="nav-link" href="#">Dashboard</a></li>
                            <li className="nav-item ps-2"><a className="nav-link" href="#">About us</a></li>
                            <li className="nav-item ps-2"><a className="nav-link" href="#">Contact us</a></li>
                            <li className="nav-item ps-2"><a className="nav-link" href="#">logout</a></li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
};


export default Feeds;