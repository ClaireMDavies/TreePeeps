import React, { useState } from "react";
import { Container, Card, CardTitle, CardSubtitle, CardBody, CardText, Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/NavbarTreePeeps";
import NavItem from "../components/NavItem";
import ContributeCard from "../components/ContributeCard";

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
    const [showCard, setShowCard] = useState(false)
    const showContribute = () => { if (!showCard) { setShowCard(true) } else { setShowCard(false) } }

    function sendEmail(e) {
        e.preventDefault();
        window.Email.send({
            Host: "smtp.elasticemail.com",
            Username: "treepeeps@hotmail.com",
            Password: "A5AD02A0D6C4DE5041F65A10ABAFD7151952",
            To: 'treepeeps@hotmail.com',
            Cc: 'treepeeps@hotmail.com',
            From: "treepeeps@hotmail.com",
            Subject: "Test Email",
            Body: "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
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
            <div className="row d-flex justify-content-center mb-3">
                <Card style={styles.cardStyle}>
                    <Container>
                        <CardTitle><h5>Project Name <i className="fas fa-map-marked-alt ps-3" style={styles.mapIcon} data-bs-toggle="tooltip" data-bs-placement="top" title="Land needed"></i><i className="fas fa-clock ps-3" style={styles.clockIcon} data-bs-toggle="tooltip" data-bs-placement="top" title="Time needed"></i><i className="fas fa-tree ps-3" style={styles.treeIcon} data-bs-toggle="tooltip" data-bs-placement="top" title="Resources needed"></i></h5></CardTitle>
                        <CardSubtitle><h6>Username</h6></CardSubtitle>
                        <CardBody>
                            <CardText>Project description</CardText>
                        </CardBody>
                        <div className="card-footer text-center">
                            <Button color="success" onClick={showContribute} ><i className="fas fa-hands-helping"></i> Contribute</Button>
                            <Button color="success" onClick={sendEmail, ContactNotify}><i className="fas fa-envelope" ></i> Contact me</Button>
                            <ToastContainer />
                        </div>
                    </Container>
                </Card>
            </div>
            {/* Contribute Card */}
            {showCard ? <ContributeCard /> : null}
        </div>
    )
};


export default Feeds;