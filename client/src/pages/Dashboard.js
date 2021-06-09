import React, { useEffect } from "react";
import { Container, Row, Col } from 'reactstrap';
import Navbar from "../components/NavbarTreePeeps";
import NavItem from "../components/NavItem";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";
import "../styles/dashboard.css";
import Footer from "../components/Footer";

const Dashboard = (props) => {

    React.useEffect(() => {

        if (localStorage.getItem("userId") === null)
        {
            props.history.push("/");
        }

    }, []);
    
    return (
        <div>
            <Navbar>
                { localStorage.getItem("userId") === null ? "" : 
                <NavItem
                    link="/dashboard"
                    name="Dashboard">
                </NavItem>
                }
                <NavItem
                    link="/search"
                    name="Search">
                </NavItem>
                <NavItem
                    link="/about"
                    name="About Us">
                </NavItem>
                <NavItem
                    link="/contact"
                    name="Contact Us">
                </NavItem>
                <NavItem
                    link="/logout"
                    name="Logout">
                </NavItem>
            </Navbar>

            <Container>
                <div className="mb-3 p-3">
                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#Modal" >Create New Project</button>
                </div>
                <ProjectForm />
                <Row>
                    <Col xs="9">
                        <Row className="p-3 rounded m-2 myDashboard">
                            <Row>
                                <h4 className="text-center mb-3">My Projects</h4>
                            </Row>
                            <Row className="row">
                                <ProjectCard />
                            </Row>
                        </Row>

                        <Row className=" p-3 rounded m-2 myDashboard">
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
                        </Row>
                    </Col >

                    <Col className="col col-md p-3 m-2 rounded object-fit float-right justify-content myDashboard">
                        <ul>
                            <h5>Projects in your area</h5>
                            <li><a>Item</a></li>
                            <li><a>Another item</a></li>
                            <li><a>Something else here</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default Dashboard;