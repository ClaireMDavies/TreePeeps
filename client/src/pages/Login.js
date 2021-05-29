import React from "react";
import loginImg from '../images/login-img.jpg';

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
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow mb-3">
                <div className="container-fluid">
                    <img className='ps-3 pe-2' src='../../favicon-32x32.png' alt='icon'></img>
                    <a className="navbar-brand">TreePeeps</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Menu
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ps-2"><a className="nav-link" href="#">About us</a></li>
                            <li className="nav-item ps-2"><a className="nav-link" href="#">Contact us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Login Card */}
            <div className="container d-flex justify-content-center mb-3 mt-5">
                <div className="card border-success" style={styles.cardStyle}>
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img className="img-fluid" src={loginImg} alt="login" />
                        </div>
                        <div className="col-md-6">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Login;