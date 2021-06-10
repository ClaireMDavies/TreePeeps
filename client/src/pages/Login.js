import React from "react";
import { useState } from "react";
import { Container, Card, CardBody, CardHeader, Form, Input, Button } from 'reactstrap';
import Navbar from "../components/NavbarTreePeeps";
import loginImg from '../images/login-img.jpg';
import NavItem from "../components/NavItem";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';


function Login(props) {
   
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");

    function signIn() {
        
        API.login(username, password)
            .then(response => {
                if (response.data.userId) {
                    localStorage.setItem("userId", response.data.userId);
                    props.history.push("/dashboard");
                    setLoginError("");
                }
                else {
                     setLoginError("There was an error with your login please try again");
                }
            })
            .catch(e => {
                setLoginError("There was an error with your login please try again");
            })
   
    }

    

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
                <Card className="border-success" style={{width:'70%'}}>
                    <div className="row no-gutters">
                        <div className="col-md-5 pe-0">
                            <img className="img-fluid" src={loginImg} alt="login" />
                        </div>
                        <div className="col-md-7 ps-0">
                            <CardHeader className="border-success" >  <img className='pe-2 pb-2' src='../../favicon-32x32.png' alt='icon'></img>
                                <span className="fs-4">TreePeeps</span></CardHeader>
                            <CardBody>
                                <h5 className="text-center mb-3">Sign into your account</h5>
                                <Form>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" style={{ width: '100px' }}>Email  </span>
                                        <Input type="email" className="form-control" placeholder="Email" aria-label="Email" onChange={e => setUsername(e.target.value)} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" style={{ width: '100px' }} >Password </span>
                                        <Input type="password" className="form-control" placeholder="Password" aria-label="Password" onChange={e => setPassword(e.target.value)} />
                                    </div>
                                    <span className="has-error col-md-6"><p className="text-center text-danger">{loginError}</p></span>
                                </Form>
                                <div className="text-center">
                                    <Button className="mt-3" type="submit" color="success" onClick={signIn}>Login</Button>
                                    
                                </div>
                                <p className="mt-3 text-center">Don't have an account? <Link className="text-reset" to="/signup">Register here</Link></p>
                            </CardBody>
                        </div>
                    </div>
                </Card>
            </Container>
            <Footer />
        </div>
    )
};


export default Login;