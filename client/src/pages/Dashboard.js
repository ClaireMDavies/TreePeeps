import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Navbar from "../components/NavbarTreePeeps";
import NavItem from "../components/NavItem";
import ProjectCard from "../components/ProjectCard";
import ContributedProjectCard from "../components/ContributedProjectCard";
import ProjectForm from "../components/ProjectForm";
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

            <Container className="mt-3">
                <div className="mb-3">
                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#Modal" >Create New Project</button>
                </div>
                <ProjectForm />
                <Row>
                    <Col >
                        <div className="card text-center">
                            <div className="card-header">
                                <h4 className="text-center mb-3">My Projects</h4>
                            </div>
                            <div className="card-body">
                                <ProjectCard />
                            </div>
                        </div>

                        <div className="card text-center mt-3">
                            <div className="card-header">
                                <h4 className="text-center mb-3">My Contributions</h4>
                            </div>
                            <div className="card-body">
                                <ContributedProjectCard />
                            </div>
                        </div>
                    </Col >

                    {/* <Col className="col-md rounded float-right justify-content">
                        <div className="card text-center">
                            <div className="card-header">
                                <h4 className="text-center mb-3">Projects in your area</h4>
                            </div>
                            <div className="card-body">
                            </div>
                        </div>
                    </Col> */}
                </Row>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div >
    );
}

export default Dashboard;