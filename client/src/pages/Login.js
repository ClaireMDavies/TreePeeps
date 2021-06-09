import React from "react";
import { useState } from "react";
import { Container, Row, Col, Card, CardBody, Form, Input, Button } from 'reactstrap';
import Navbar from "../components/NavbarTreePeeps";
import loginImg from '../images/login-img.jpg';
import NavItem from "../components/NavItem";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Link } from "react-router-dom";

const styles = {
    cardStyle: {
        width: '70%',
        padding: 0
    },
    cardSpan: {
        display: "inline - block",
        width: "100px"
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

function Login(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    function signIn()
    {
        API.login(username, password)
        .then(response => {
            if (response.data.userId)
            {
                localStorage.setItem("userId", response.data.userId);
                props.history.push("/dashboard");
            }
            else
            {
                // TODO: failed to log in 
            }
        });
    }

    // const [userName, setUserName] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [emailAddress, setEmailAddress] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    // const [country, setCountry] = useState("");
    // const [city, setCity] = useState("");

    // function handleSubmit(event) {

    //     event.preventDefault();

    // }

    // function validateUesrName() {

    // }

    // function validateFirstName() {

    // }

    // function validateLastName() {

    // }

    // function validateEmailAddress() {

    // }

    // function validatePassword() {

    // }

    // function validateLocation() {

    // }


    // function isUserNameAlreadyInUse() {

    // }

    return (
        <div>
            <Navbar>
                <NavItem
                    link="/about"
                    name="About Us">
                </NavItem>
                <NavItem
                    link="/contact"
                    name="Contact Us">
                </NavItem>
            </Navbar>
            {/* Login Card */}
            <Container className="d-flex justify-content-center mb-3 mt-5">
                <Card className="border-success" style={styles.cardStyle}>
                    <Row>
                        <Col xs="6">
                            <img className="img-fluid" src={loginImg} alt="login" />
                        </Col>
                        <Col xs="6">
                            <CardBody>
                                <Container>
                                    <img className='pe-2 pb-2' src='../../favicon-32x32.png' alt='icon'></img>
                                    <span className="fs-4">TreePeeps</span>
                                </Container>
                                <p className="login-card-description">Sign into your account</p>
                                <Form>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" style={styles.cardSpan} >Email  </span>
                                        <Input type="email" className="form-control" placeholder="Email" aria-label="Email" onChange={e => setUsername(e.target.value)} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" style={styles.cardSpan} >Password </span>
                                        <Input type="password" className="form-control" placeholder="Password" aria-label="Password" onChange={e => setPassword(e.target.value)} />
                                    </div>
                                </Form>
                                <div className="text-center">
                                    <Button type="submit" color="danger" onClick={signIn}>Submit</Button>
                                </div>
                                <p className="login-card-footer-text">Don't have an account? <Link className="text-reset" to="/signup">Register here</Link></p>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>
    )
};


export default Login;