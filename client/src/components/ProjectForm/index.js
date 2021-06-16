import React, { useState, useEffect } from "react";
import env from "react-dotenv";
import API from "../../utils/API";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const DefaultLocation = { lat: 51.5073509, lng: -0.1277583 };

const ProjectForm = () => {
    const [city, setCity] = useState('London')
    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
    let lat;
    let lng;
    const [formObject, setFormObject] = useState({
        title: "",
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        latitude: "",
        longitude: "",
        area: "",
        landOwner: "",
        hoursNeeded: "",
        numTrees: "",
        numStakes: "",
        amtFertilizer: "",
        numSpirals: "",
        otherResources: ""
    });
    useEffect(() => {
        if (!city) {
            return;
        }
        API.convert(city)
            .then(results => {
                setTimeout(() => {
                    setDefaultLocation({ lat: results.data.results[0].geometry.location.lat, lng: results.data.results[0].geometry.location.lng });
                }, 500);
            })
            .catch(err => console.log(err));
    }, [city]);
    function handleChangeCity(event) {
        setCity(event.target.value);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.name) {
            API.saveProject({
                title: formObject.title,
                owner: localStorage.getItem('userId'),
                name: formObject.name,
                description: formObject.description,
                startDate: formObject.startDate,
                endDate: formObject.endDate,
                location: { type: "Point", coordinates: [lng, lat] },
                latitude: lat,
                longitude: lng,
                area: formObject.area,
                landOwner: formObject.landOwner,
                hoursNeeded: formObject.hoursNeeded,
                numTrees: formObject.numTrees,
                numStakes: formObject.numStakes,
                amtFertilizer: formObject.amtFertilizer,
                numSpirals: formObject.numSpirals,
                otherResources: formObject.otherResources
            })
                .then(() => {
                    setFormObject({
                        title: "",
                        name: "",
                        description: "",
                        startDate: "",
                        endDate: "",
                        location: { type: "Point", coordinates: [] },
                        latitude: "",
                        longitude: "",
                        area: "",
                        landOwner: "",
                        hoursNeeded: "",
                        numTrees: "",
                        numStakes: "",
                        amtFertilizer: "",
                        numSpirals: "",
                        otherResources: ""
                    });
                    window.location.reload();
                })
                .catch(err => console.log(err));
        }
    };

    function handleResetLocation() {
        setDefaultLocation({ ...DefaultLocation });
        setCity('London');
    };

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
            defaultZoom={10}
            defaultCenter={defaultLocation}
        >
            <Marker
                position={defaultLocation}
                draggable={true}
                onDragEnd={(e) => {
                    const { latLng } = e;
                    return (
                        lat = latLng.lat(),
                        lng = latLng.lng(),
                        console.log(lat, lng)
                    )
                }}
            />
        </GoogleMap>
    ));

    return (
        <div>
            <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="projectModal" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header bg-success ">
                            <h5 className="modal-title" id="projectModal">New Project Form</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Project Specifications</h5>
                                </div>
                                <div className="card-body">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" >Project name</span>
                                        <input type="textarea" className="form-control" placeholder="Name" name="name" value={formObject.name} onChange={handleInputChange} required />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" >Post title</span>
                                        <input type="textarea" className="form-control" placeholder="Title" name="title" value={formObject.title} onChange={handleInputChange} required />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" >Description</span>
                                        <input type="textarea" className="form-control" placeholder="Description" name="description" value={formObject.description} onChange={handleInputChange} required />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" >Start Date </span>
                                        <input type="date" className="form-control" name="startDate" value={formObject.startDate} onChange={handleInputChange} required />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" >End Date </span>
                                        <input type="date" className="form-control" name="endDate" value={formObject.endDate} onChange={handleInputChange} required />
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
                                        <input type="number" className="form-control" placeholder="0" name="hoursNeeded" value={formObject.hoursNeeded} onChange={handleInputChange} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" >Number of trees </span>
                                        <input type="number" className="form-control" placeholder="0" name="numTrees" value={formObject.numTrees} onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-2">
                                <div className="card-header pb-0">
                                    <h5 className="card-title">Resource Specifications</h5>
                                </div>
                                <div className="card-body">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" >Fertilizer </span>
                                        <input type="number" className="form-control" placeholder="0" name="amtFertilizer" value={formObject.amtFertilizer} onChange={handleInputChange} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" >Stakes </span>
                                        <input type="number" className="form-control" placeholder="0" name="numStakes" value={formObject.numStakes} onChange={handleInputChange} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" >Spirals </span>
                                        <input type="number" className="form-control" placeholder="0" name="numSpirals" value={formObject.numSpirals} onChange={handleInputChange} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" >Others </span>
                                        <input type="text" className="form-control" placeholder="..." name="otherResources" value={formObject.otherResources} onChange={handleInputChange} />
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
                                        <input type="number" className="form-control" placeholder="0" name="area" value={formObject.area} onChange={handleInputChange} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" >Owner </span>
                                        <input type="text" className="form-control" placeholder="Owner" name="landOwner" value={formObject.landOwner} onChange={handleInputChange} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" >Location </span>
                                        <input type='text' className="form-control" value={city} onChange={handleChangeCity} />
                                        <button className="btn btn-secondary" onClick={handleResetLocation}>Reset Location</button>
                                    </div>
                                    <div className="border">
                                        <MapWithAMarker
                                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${env.GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                                            loadingElement={<div style={{ height: `100%` }} />}
                                            containerElement={<div style={{ height: `400px` }} />}
                                            mapElement={<div style={{ height: `100%` }} />}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={handleFormSubmit}>Create New Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectForm;