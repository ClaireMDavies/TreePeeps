import React from "react";
import SearchForm from "../SearchForm";

const NavbarTreePeeps = (props) => {
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
                        {props.children}

                    </ul>
                    {window.location.pathname === "/dashboard" || window.location.pathname === "/feeds" || window.location.pathname === "/project"
                        ? <SearchForm />
                        : ""
                    }
                </div>
            </div>
        </nav >
    );
}

export default NavbarTreePeeps;