import React from "react";
import { Container, Row, Button, CardBody, CardTitle } from 'reactstrap';
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
                <Container>

                    <Row className="p-3 myDashboard">
                        <h1>New Project Form</h1>

                        <Row>
                            <Row className="p-3 rounded m-2 dashCard">
                                <CardBody>
                                    {/* // style={{ width: "80" }}> */}
                                    <CardTitle>
                                        <h5>Land Specifications</h5>
                                    </CardTitle>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Area(m2): </li>
                                        <li className="list-group-item">Location: </li>
                                        <li className="list-group-item">Owner: </li>
                                    </ul>
                                </CardBody>
                            </Row>

                            <Row className="p-3 rounded m-2 dashCard">
                                <CardBody>
                                    {/* // style={{ width: "100" }}> */}
                                    <CardTitle>
                                        <h5>Time Specifications</h5>
                                    </CardTitle>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Work Hours Needed: </li>
                                        <li className="list-group-item">Number of trees: </li>
                                    </ul>
                                </CardBody>
                            </Row>

                            <Row className="p-3 rounded m-2 dashCard">
                                <CardBody>
                                    {/* // style={{ width: "100" }}> */}
                                    <CardTitle>
                                        <h5 className="card-title">Resource Specifications</h5>
                                    </CardTitle>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Trees: </li>
                                        <li className="list-group-item">Spades: </li>
                                        <li className="list-group-item">Fertilizer: </li>
                                        <li className="list-group-item">Stakes: </li>
                                        <li className="list-group-item">Spirals: </li>
                                    </ul>
                                </CardBody>
                            </Row>
                        </Row>
                        <Row className="p-3 float-right">
                            <div className="float-right">
                                <Button className="create" color="success">Create</Button>
                            </div>
                        </Row>
                    </Row>
                </Container>
            </main>
        </div>
    );
}

export default Project;