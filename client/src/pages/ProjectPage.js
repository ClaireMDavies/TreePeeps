import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NavItem from "../components/NavItem";
import env from "react-dotenv";
import "../styles/project.css"
import API from "../utils/API"

import MapPicker from 'react-google-map-picker'

const DefaultLocation = { lat: 51.5073509, lng: -0.1277583 };
const DefaultZoom = 10;
const styles = {
    cardStyle: {
        width: '70%',
        padding: 0
    }
}

const Project = () => {
    const [city, setCity] = useState('London')
    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);

    useEffect(() => {
        if (!city) {
            return;
        }
        API.convert(city)
            .then(results => {
                setDefaultLocation({ lat: results.data.results[0].geometry.location.lat, lng: results.data.results[0].geometry.location.lng });
            })
            .catch(err => console.log(err));
    }, [city]);

    function handleChangeCity(event) {
        setCity(event.target.value);
    }
    function handleChangeLocation(lat, lng) {
        setLocation({ lat: lat, lng: lng });
    }

    function handleChangeZoom(newZoom) {
        setZoom(newZoom);
    }

    // function handleResetLocation() {
    //     setDefaultLocation({ ...DefaultLocation });
    //     setZoom(DefaultZoom);
    // }

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
                <div className="container-fluid ">


                    <h2 className="text-center">New Project Form</h2>
                    <div className="row d-flex justify-content-center mb-3 p-3">
                        <div className="card" style={styles.cardStyle}>
                            <div className="card-header pb-0">
                                <h5 className="card-title">Land Specifications</h5>
                            </div>
                            <div className="card-body">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" >Area (m²) </span>
                                    <input type="text" className="form-control" placeholder="Area" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" >Location </span>
                                    <input type='text' className="form-control" value={city} onChange={handleChangeCity} />
                                    <span className="input-group-text" >Latitude </span>
                                    <input type='text' className="form-control" value={location.lat} disabled />
                                    <span className="input-group-text" >Longitude </span>
                                    <input type="text" className="form-control" value={location.lng} disabled />
                                    {/* <button className="btn btn-secondary" onClick={handleResetLocation}>Reset Location</button> */}
                                </div>
                                <div className="border">
                                    <MapPicker defaultLocation={defaultLocation}
                                        zoom={zoom}
                                        style={{ height: '400px' }}
                                        onChangeLocation={handleChangeLocation}
                                        onChangeZoom={handleChangeZoom}
                                        apiKey={env.API_KEY} />
                                </div>
                                <div className="input-group mb-3 pt-3">
                                    <span className="input-group-text" >Owner </span>
                                    <input type="text" className="form-control" placeholder="Owner" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mb-3 p-3">
                        <div className="card" style={styles.cardStyle}>
                            <div className="card-header pb-0">
                                <h5 className="card-title">Time Specifications</h5>
                            </div>
                            <div className="card-body">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" >Work Hours Needed </span>
                                    <input type="text" className="form-control" placeholder="Hours" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" >Number of trees </span>
                                    <input type="text" className="form-control" placeholder="Trees" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mb-3 p-3">
                        <div className="card" style={styles.cardStyle}>
                            <div className="card-header pb-0">
                                <h5 className="card-title">Resource Specifications</h5>
                            </div>
                            <div className="card-body">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" >Trees </span>
                                    <input type="text" className="form-control" placeholder="Trees" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" >Spades </span>
                                    <input type="text" className="form-control" placeholder="Spades" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" >Fertilizer </span>
                                    <input type="text" className="form-control" placeholder="Fertilizer" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" >Stakes </span>
                                    <input type="text" className="form-control" placeholder="Stakes" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" >Spades </span>
                                    <input type="text" className="form-control" placeholder="Spirals" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" >Others </span>
                                    <input type="text" className="form-control" placeholder="Others" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="text-center mb-3 p-3">
                    <button type="button" className="btn btn-success">Create New Project</button>
                </div>


            </main>
        </div>
    );
}

export default Project;