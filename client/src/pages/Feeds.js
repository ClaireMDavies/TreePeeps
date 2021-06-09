import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardSubtitle, CardBody, CardText, Button } from 'reactstrap';
import Navbar from "../components/NavbarTreePeeps";
import NavItem from "../components/NavItem";
import ContributeCard from "../components/ContributeCard";
import Footer from "../components/Footer";
import Moment from 'react-moment';
import API from "../utils/API";

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

function Feeds(props) {
    const ContactNotify = () => toast("Your contact info is sent to the project creator");
    const [nearestProjects, setNearestProjects] = useState([]);
    const [city, setCity] = useState('');
    const [distance, setDistance] = useState(1000);
    const [location, setLocation] = useState({ lat: "", lng: "" });
    const [showCardId, setShowCardId] = useState(null);

    const showContribute = id => () => {
        setShowCardId(prevId => {
            if (prevId === id) {
                return null;
            } else {
                return id;
            }
        });
    }

    useEffect(() => {

        if (localStorage.getItem("userId") === null)
        {
            props.history.push("/");
            return;
        }

        if (!city) {
            return;
        }
        API.convert(city)
            .then(results => {
                setLocation({ lat: results.data.results[0].geometry.location.lat, lng: results.data.results[0].geometry.location.lng });
            })
            .catch(err => console.log(err));
    }, [city]);

    function handleCityChange(event) {
        setCity(event.target.value);
    }
    function handleDistanceChange(event) {
        setDistance(event.target.value * 1000);
    }
    function handleFormSubmit(event) {
        event.preventDefault();
        API.searchByLocation(
            location.lat,
            location.lng,
            distance
        )
            .then(res => {
                setNearestProjects(res.data);
                console.log(nearestProjects);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Navbar handleFormSubmit={handleFormSubmit} handleCityChange={handleCityChange} handleDistanceChange={handleDistanceChange}>
            { localStorage.getItem("userId") === null ? "" : 
                <NavItem
                    link="/dashboard"
                    name="Dashboard">
                </NavItem>
                }
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
            {/* Post Card */}
            { nearestProjects.length ? (
                <div className="mt-3">
                    {
                        nearestProjects.map(project => {
                            return (
                                <div className="row d-flex justify-content-center mb-3" key={project._id}>
                                    <Card style={styles.cardStyle}>
                                        <CardTitle tag="h5" className="card-title mt-2 ps-3">{project.title}
                                            {project.area || project.location ? <i className="fas fa-map-marked-alt ps-3" style={styles.mapIcon} data-bs-toggle="tooltip" data-bs-placement="top" title="Land needed"></i> : null}
                                            {project.hoursNeeded ? <i className="fas fa-clock ps-3" style={styles.clockIcon} data-bs-toggle="tooltip" data-bs-placement="top" title="Time needed"></i> : null}
                                            {project.numTrees || project.numStakes || project.numSpirals || project.amtFertilizer || project.otherResources ? <i className="fas fa-tree ps-3" style={styles.treeIcon} data-bs-toggle="tooltip" data-bs-placement="top" title="Resources needed"></i> : null}
                                        </CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 ps-3 text-muted">Username <br /> <Moment format="YYYY/MM/DD">{project.startDate}</Moment> -- <Moment format="YYYY/MM/DD">{project.endDate}</Moment></CardSubtitle>
                                        <CardBody className="ps-2">
                                            <CardText>{project.description}
                                                <ul className="pt-3">Specifications :
                                                    {project.latitude ? <li>Latitude :  {project.latitude}</li> : null}
                                                    {project.longitude ? <li>Longitude :  {project.longitude} </li> : null}
                                                    {project.area ? <li>Area (m²) :  {project.area}</li> : null}
                                                    {project.landOwner ? <li>Owner : {project.landOwner}</li> : null}
                                                    {project.hoursNeeded ? <li>Work hours needed :  {project.hoursNeeded}</li> : null}
                                                    {project.numTrees ? <li>Trees:  {project.numTrees}</li> : null}
                                                    {project.numStakes ? <li>Stakes : {project.numStakes}</li> : null}
                                                    {project.amtFertilizer ? <li>Fertilizer:  {project.amtFertilizer}</li> : null}
                                                    {project.numSpirals ? <li>Spirals:  {project.numSpirals}</li> : null}
                                                    {project.otherResources ? <li>Other Resources:  {project.otherResources} </li> : null}
                                                </ul>
                                            </CardText>
                                        </CardBody>
                                        <div className="card-footer text-center">
                                            <Button className="me-3" color="success" id={project._id} onClick={showContribute(project._id)} ><i className="fas fa-hands-helping"></i> Contribute</Button>
                                        </div>
                                    </Card>
                                    {/* Contribute Card */}
                                    {showCardId === project._id ? <ContributeCard /> : null}
                                </div>
                            )
                        }
                        )
                    };
                </div>
            ) : (
                <h3 className="text-center m-3 p-2">No Results to Display</h3>

            )}
            <Footer />
        </div >
    )
};


export default Feeds;