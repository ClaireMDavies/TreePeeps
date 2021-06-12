import React, { useState } from "react";
import { Container, Row, Col} from 'reactstrap';
import Navbar from "../components/NavbarTreePeeps";
import NavItem from "../components/NavItem";
import ProjectCard from "../components/ProjectCard";
import ContributedProjectCard from "../components/ContributedProjectCard";
import ProjectForm from "../components/ProjectForm";
import Footer from "../components/Footer";
import API from "../utils/API";

const Dashboard = (props) => {

    const [createdProjects, setCreatedProjects] = useState([]);
    const [contributedProjects, setContributedProjects] = useState([]);

    React.useEffect(() => {

        const currentUserId = localStorage.getItem("userId");

        if (currentUserId === null) {
            // there is no user logged in
            props.history.push("/");
        }
        else
        {
            // get project lists

            loadCreatedProjectsForUser(currentUserId);
            loadContributedProjectsForUser(currentUserId)
        }

    }, []);

    function loadCreatedProjectsForUser(userId) {

        // get all the projects for this user that haven't gone 
        // beyond their end date i.e. active projects only

        API.getProjectsForUser(userId)
        .then(response => setCreatedProjects(response.data));
    }

    function loadContributedProjectsForUser(userId) {

        API.getContributedProjectsForUser(userId)
        .then(response => setContributedProjects(response.data));
    }

    return (
        <div>
            <Navbar>
                {localStorage.getItem("userId") === null ? "" :
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
                            <div className="card-body row">

                            { createdProjects.map(function(project) {
                                return <ProjectCard key={project._id} {...project} />;
                            })}
 
                            </div>
                        </div>

                        <div className="card text-center mt-3">
                            <div className="card-header">
                                <h4 className="text-center mb-3">My Contributions</h4>
                            </div>
                            <div className="card-body row">

                            { contributedProjects.map(function(project) {
                                return <ContributedProjectCard key={project._id} {...project} />;
                            })}

                            </div>
                        </div>
                    </Col >
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