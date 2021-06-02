import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Navbar from "../components/NavbarTreePeeps";
import loginImg from '../images/login-img.jpg';
import NavItem from "../components/NavItem";

const styles = {
    cardStyle: {
        width: '60%',
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

function Login() {

    return (
        <div>
            <Navbar>
                <NavItem
                    link="/"
                    name="About Us">
                </NavItem>
                <NavItem
                    link="/contact"
                    name="Contact Us">
                </NavItem>
            </Navbar>
            {/* Login Card */}
            <Container>
                <div className="card border-success" style={styles.cardStyle}>
                    <Row>
                        <Col xs="6">
                            <img className="img-fluid" src={loginImg} alt="login" />
                        </Col>
                        <Col xs="6">
                            <div className="card-body">
                                <div className="brand-wrapper">
                                    <img className='pe-2 pb-2' src='../../favicon-32x32.png' alt='icon'></img>
                                    <span className="fs-4">TreePeeps</span>
                                </div>
                                <p className="login-card-description">Sign into your account</p>
                                <form >
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" style={styles.cardSpan} >Email  </span>
                                        <input type="email" className="form-control" placeholder="Email" aria-label="Email" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" style={styles.cardSpan} >Password </span>
                                        <input type="password" className="form-control" placeholder="Password" aria-label="Password" />
                                    </div>
                                </form>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-danger btn-sm m-2">Submit</button>
                                </div>
                                <p className="login-card-footer-text">Don't have an account? <a href="#!" className="text-reset">Register here</a></p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
};


export default Login;