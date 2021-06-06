import React, { useState, useEffect } from "react";
import Moment from 'react-moment';
import API from "../../utils/API";
const styles = {
    cardStyle: {
        width: '40%',
        padding: 0
    }
};

function ProjectCard() {
    // const [checked, setChecked] = useState(true);
    const [projects, setProjects] = useState({});

    // Load all projects and store them with setProjects
    useEffect(() => {
        loadProjects()
    }, [])

    // Loads all projects and sets them to projects
    function loadProjects() {
        // try {
        //     const response = await API.getProjects()
        //     if (response.ok) {
        //         console.log(response.data)
        //         setProjects(response.data);
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
        API.getProjects()
            .then(res => {
                const projectObj = {};
                for (var i = 0; i < res.data.length; i++) {
                    projectObj[res.data[i]._id] = res.data[i];
                }
                setProjects(projectObj);
                console.log(projectObj)
            }
            )
            .catch(err => console.log(err));
    };

    function onChangeChecked(id) {
        const updatedProject = projects[id];
        updatedProject.status = !updatedProject.status;
        projects[id] = updatedProject;
        setProjects(projects);
    };

    return (
        <div>
            {/* {Object.keys(projects).length ? ( */}
                <div>
                    {Object.keys(projects).map(key => {
                        return (
                            <div className="d-flex justify-content-center mb-3" key={projects[key]._id}>
                                <div className="card" style={styles.cardStyle}>
                                    <div className="card-header p-2 pb-0">
                                        <h5 className="card-title text-center">{projects[key].name}</h5>
                                    </div>
                                    <div className="card-body p-0 text-center">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Status :
                                <div className="btn-group ms-3" role="group" aria-label="Basic radio toggle button group">
                                                    <input type="radio" className="btn-check" name="btnradio" id="radiobtn" autoComplete="off" defaultChecked onClick={() => {onChangeChecked(projects[key]._id)}} />
                                                    <label className="btn btn-sm btn-outline-success" htmlFor="radiobnt">Ongoing</label>
                                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                                                    <label className="btn btn-sm btn-outline-danger" htmlFor="btnradio3">Closed</label>
                                                </div>
                                            </li>
                                            <li className="list-group-item">Start Date : <Moment format="YYYY/MM/DD">{projects[key].startDate}</Moment> </li>
                                            <li className="list-group-item">Location : {projects[key].latitude} , {projects[key].longitude}</li>
                                            <li className="list-group-item">Contributors :
                                <div className="list-group mt-2">
                                                    {projects[key].ContributorNames.map(contributor => {
                                                        return (
                                                            <button type="button" className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#cntModal" >{contributor}</button>
                                                            // <button type="button" className="list-group-item list-group-item-action">Contributor 2</button>
                                                            // <button type="button" className="list-group-item list-group-item-action">Contributor 3</button>
                                                        )
                                                    })}
                                                </div>
                                                {/* Contributor Modal */}
                                                <div className="modal fade" id="cntModal" tabIndex="-1" aria-labelledby="contributorModal" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="contributorModal">{projects[key].ContributorNames[0]}</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                Do you want to delete {projects[key].ContributorNames[0]} from the project?
                                                    </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-danger">Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </li>
                                            <li className="list-group-item">End Date : <Moment format="YYYY/MM/DD">{projects[key].endDate}</Moment></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    }
                </div>

            {/* ) : (
                <h3>No Results to Display</h3> */}

            {/* )} */}

        </div>
    )
};


export default ProjectCard;