import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardSubtitle, CardBody, CardText, Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/NavbarTreePeeps";
import NavItem from "../components/NavItem";
import ContributeCard from "../components/ContributeCard";
import Footer from "../components/Footer";
import API from "../utils/API"

const styles = {
    cardStyle: {
        width: '60%',
        padding: 0
    },
    treeIcon: {
        color: "green"
    },
    clockIcon: {
        color: "red"
    },
    mapIcon: {
        color: "brown"
    }

};

function Feeds() {
    const ContactNotify = () => toast("Your contact info is sent to the project creator");
    const [projects, setProjects] = useState([]);
    const [showCard, setShowCard] = useState(false);
    const showContribute = id => () => {
        console.log(id);
        if (!showCard) { setShowCard(true) } else { setShowCard(false) }
    }

    // Load all projects and store them with setProjects
    useEffect(() => {
        loadProjects()
    }, [])

    // Loads all projects and sets them to projects
    function loadProjects() {

        API.getProjects()
            .then(res => {
                setProjects(res.data);
            }
            )
            .catch(err => console.log(err));
    };
    function sendEmail(e, name) {
        e.preventDefault();
        window.Email.send({
            Host: "smtp.elasticemail.com",
            Username: "treepeeps@hotmail.com",
            Password: "A5AD02A0D6C4DE5041F65A10ABAFD7151952",
            To: 'treepeeps@hotmail.com',// the user email from the session
            Cc: 'saadiaelfekak@gmail.com',
            From: "treepeeps@hotmail.com",
            Subject: "Test Email",
            Body: `<html><h2>${name}</h2><strong>Bold text</strong><br></br><em>Italic</em></html>`
        }).then(
            console.log("email sent"))
    }
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
            {/* Post Card */}
            {projects.map(project => {
                return (
                    <div className="row d-flex justify-content-center mb-3" key={project._id}>
                        <Card style={styles.cardStyle}>
                            <CardTitle tag="h5" className="card-title mt-2 ps-2">{project.title}
                                {project.area ? <i className="fas fa-map-marked-alt ps-3" style={styles.mapIcon} data-bs-toggle="tooltip" data-bs-placement="top" title="Land needed"></i> : null}
                                {project.hoursNeeded ? <i className="fas fa-clock ps-3" style={styles.clockIcon} data-bs-toggle="tooltip" data-bs-placement="top" title="Time needed"></i> : null}
                                {project.numTrees || project.numStakes || project.numSpirals || project.amtFertilizer || project.otherResources ? <i className="fas fa-tree ps-3" style={styles.treeIcon} data-bs-toggle="tooltip" data-bs-placement="top" title="Resources needed"></i> : null }
                            </CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 ps-2 text-muted">Username</CardSubtitle>
                            <CardBody className="ps-2">
                                <CardText>{project.description}</CardText>
                            </CardBody>
                            <div className="card-footer text-center">
                                <Button className="me-3" color="success" id={project._id} onClick={showContribute(project._id)} ><i className="fas fa-hands-helping"></i> Contribute</Button>
                                <Button color="success" onClick={(e) => { sendEmail(e, project.name) }, ContactNotify}><i className="fas fa-envelope" ></i> Contact me</Button>
                                <ToastContainer />
                            </div>
                        </Card>
                        {/* Contribute Card */}
                        {showCard ? <ContributeCard /> : null}
                    </div>
                )
            }
            )};

            <Footer />
        </div >
    )
};


export default Feeds;