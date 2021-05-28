import React from "react";

const Navbar = () => {
    return (
        < nav className="navbar navbar-expand-lg navbar-light bg-light shadow mb-3" >
            <div className="container-fluid">
                <img className='ps-3 pe-2' src='../../favicon-32x32.png' alt='icon'></img>
                <a className="navbar-brand">TreePeeps</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Menu
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ps-2"><a className="nav-link" href="#">Dashboard</a></li>
                        <li className="nav-item ps-2"><a className="nav-link" href="#">About us</a></li>
                        <li className="nav-item ps-2"><a className="nav-link" href="#">Contact us</a></li>
                        <li className="nav-item ps-2"><a className="nav-link" href="#">Logout</a></li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;