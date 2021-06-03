import React, { useState } from "react";
import { Modal } from "reactstrap";
import Navbar from "../components/NavbarTreePeeps";
import NavItem from "../components/NavItem";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";
import "../styles/dashboard.css";

const Dashboard = () => {


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
            <main className="container-fluid">

                <div className="mb-3 p-3">
                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#Modal" >Create New Project</button>
                </div>
                {/* <Modal /> */}
                <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="projectModal" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header bg-success ">
                                <h5 className="modal-title" id="projectModal">New Project Form</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <ProjectForm />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success">Create New Project</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col col-md-9">
                        <div className="row p-3 rounded m-2 myDashboard">
                            <div className="row ">
                                <h4 className="text-center mb-3">My Projects</h4>
                            </div>
                            <div className="row myCards">
                                <ProjectCard />
                                {/* <div className="dashCard " style={{ width: "20rem" }}>
                                    <div className="card-body ">
                                        <h5 className="card-title">Project Title</h5>
                                        <p className="card-text">Description text goes here.</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Status
                                        <div className="btn-group ms-2" role="group" aria-label="Basic radio toggle button group">
                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked={checked} onChange={() => setChecked(!checked)} />
                                                <label className="btn btn-sm btn-outline-success" htmlFor="btnradio1">Ongoing</label>
                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                                                <label className="btn btn-sm btn-outline-danger" htmlFor="btnradio3">Closed</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item">Start Date</li>
                                        <li className="list-group-item">Location</li>
                                        <li className="list-group-item">Contributors
                                        <div className="list-group mt-2">
                                                <button type="button" className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#cntModal" >Contributor 1</button>
                                                <button type="button" className="list-group-item list-group-item-action">Contributor 2</button>
                                                <button type="button" className="list-group-item list-group-item-action">Contributor 3</button>
                                            </div>
                                        </li>
                                        {/* Contributor Modal */}
                                {/* <div className="modal fade" id="cntModal" tabIndex="-1" aria-labelledby="contributorModal" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="contributorModal">Contributor</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                                    </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <li className="list-group-item">End Date</li>
                                    </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">Project link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div> */}
                                {/* <div className="dashCard" style={{ width: "20rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Project Title</h5>
                                        <p className="card-text">Description text goes here.</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Status</li>
                                        <li className="list-group-item">Start Date</li>
                                        <li className="list-group-item">Location</li>
                                        <li className="list-group-item">Contributors</li>
                                        <li className="list-group-item">End Date</li>
                                    </ul>
                                    <div className="card-body">
                                        <a href="#" className="card-link">Project link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                                <div className="dashCard" style={{ width: "20rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Project Title</h5>
                                        <p className="card-text">Description text goes here.</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Status</li>
                                        <li className="list-group-item">Start Date</li>
                                        <li className="list-group-item">Location</li>
                                        <li className="list-group-item">Contributors</li>
                                        <li className="list-group-item">End Date</li>
                                    </ul>
                                    <div className="card-body">
                                        <a href="#" className="card-link">Project link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className="row p-3 rounded m-2 myDashboard">
                            <div className="row ">
                                <h5>Projects you have contributed to</h5>
                            </div>
                            <div className="row ">
                                <div className="dashCard" style={{ width: "25rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Total Projects: </h5>
                                        <p className="card-text"></p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Project 1</li>
                                        <li className="list-group-item">Project 2</li>
                                        <li className="list-group-item">Project 3</li>
                                    </ul>
                                    <div className="card-body">
                                        <a href="#" className="card-link">Project 1 link</a>
                                        <a href="#" className="card-link">Project 2 link</a>
                                        <a href="#" className="card-link">Project 3 link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-md p-3 m-2 rounded object-fit float-right justify-content myDashboard">
                        <ul>
                            <h5>Projects in your area</h5>
                            <li><a>Item</a></li>
                            <li><a>Another item</a></li>
                            <li><a>Something else here</a></li>
                        </ul>
                    </div>

                </div>
            </main >
        </div >
    );
}

export default Dashboard;