import React from "react";
import Navbar from "../components/NavbarTreePeeps";
import NavItem from "../components/NavItem";

import "../styles/project.css"


const Project = () => {
    return (
        <div>
            <Navbar>
                <NavItem
                    link="/dashboard"
                    name="Dashboard">
                </NavItem>
                <NavItem
                    link="/"
                    name="About Us">
                </NavItem>
                <NavItem
                    link="/contact"
                    name="Contact Us">
                </NavItem>
                <NavItem
                    link="/"
                    name="Logout">
                </NavItem>
            </Navbar>
            <main className="container-fluid p-3">
                <div className="container-fluid ">

                    <div className="row p-3 myDashboard">
                        <h1>New Project Form</h1>

                        <div className="row p-3">
                            <div className="row p-3 rounded m-2 dashCard">
                                <div className="" >
                                    {/* // style={{ width: "80" }}> */}
                                    <div className="card-body">
                                        <h5 className="card-title">Land Specifications</h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Area(m2): </li>
                                        <li className="list-group-item">Location: </li>
                                        <li className="list-group-item">Owner: </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row p-3 rounded m-2 dashCard">
                                <div className="">
                                    {/* // style={{ width: "100" }}> */}
                                    <div className="card-body">
                                        <h5 className="card-title">Time Specifications</h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Work Hours Needed: </li>
                                        <li className="list-group-item">Number of trees: </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row p-3 rounded m-2 dashCard">
                                <div className="" >
                                    {/* // style={{ width: "100" }}> */}
                                    <div className="card-body">
                                        <h5 className="card-title">Resource Specifications</h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Trees: </li>
                                        <li className="list-group-item">Spades: </li>
                                        <li className="list-group-item">Fertilizer: </li>
                                        <li className="list-group-item">Stakes: </li>
                                        <li className="list-group-item">Spirals: </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row p-3 float-right">
                            <div className="float-right">
                                <button type="button" className="row btn-create">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Project;