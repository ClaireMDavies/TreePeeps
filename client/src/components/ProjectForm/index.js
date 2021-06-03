
import React, { useState, useEffect } from "react";
import env from "react-dotenv";
import API from "../../utils/API"

import MapPicker from 'react-google-map-picker'

const DefaultLocation = { lat: 51.5073509, lng: -0.1277583 };
const DefaultZoom = 10;

const ProjectForm = () => {
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

    function handleResetLocation() {
        setDefaultLocation({ ...DefaultLocation });
        setZoom(DefaultZoom);
        setCity('London');
    }

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Project Specifications</h5>
                </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <span className="input-group-text" >Description</span>
                        <input type="textarea" className="form-control" placeholder="Description" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" >Start Date </span>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" >End Date </span>
                        <input type="date" className="form-control" />
                    </div>
                </div>
            </div>
            <div className="card mt-2">
                <div className="card-header">
                    <h5 className="card-title">Land Specifications</h5>
                </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <span className="input-group-text" >Area (m²) </span>
                        <input type="number" className="form-control" placeholder="0" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" >Location </span>
                        <input type='text' className="form-control" value={city} onChange={handleChangeCity} />
                        {/* <span className="input-group-text" >Latitude </span>
                                <input type='text' className="form-control" value={location.lat} disabled />
                                <span className="input-group-text" >Longitude </span>
                                <input type="text" className="form-control" value={location.lng} disabled /> */}
                        <button className="btn btn-secondary" onClick={handleResetLocation}>Reset Location</button>
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
            <div className="card mt-2">
                <div className="card-header pb-0">
                    <h5 className="card-title">Time Specifications</h5>
                </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <span className="input-group-text" >Work Hours Needed </span>
                        <input type="number" className="form-control" placeholder="0" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" >Number of trees </span>
                        <input type="number" className="form-control" placeholder="0" />
                    </div>
                </div>
            </div>
            <div className="card mt-2">
                <div className="card-header pb-0">
                    <h5 className="card-title">Resource Specifications</h5>
                </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <span className="input-group-text" >Trees </span>
                        <input type="number" className="form-control" placeholder="0" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" >Spades </span>
                        <input type="number" className="form-control" placeholder="0" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" >Fertilizer </span>
                        <input type="number" className="form-control" placeholder="0" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" >Stakes </span>
                        <input type="number" className="form-control" placeholder="0" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" >Spades </span>
                        <input type="number" className="form-control" placeholder="0" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" >Others </span>
                        <input type="number" className="form-control" placeholder="0" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectForm;