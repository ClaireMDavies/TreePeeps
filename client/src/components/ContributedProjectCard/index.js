import React, { useState, useEffect } from "react";
import Moment from 'react-moment';
import API from "../../utils/API";
import Wrapper from "../Wrapper";
import "./style.css";

function ContributedProjectCard() {
    const [projects, setProjects] = useState([]);

    // Load all projects and store them with setProjects
    useEffect(() => {
        loadProjects()
    }, [])

    // Loads all projects and sets them to projects
    function loadProjects() {
        API.getProjects()
            .then(res => {
                setProjects(res.data);
            }
            )
            .catch(err => console.log(err));
    };

    return (
        <div className='container'>
            { projects.length ? (
                <div className='row'>
                    {projects.map(project => {
                        return (
                           project.Contributors.includes(localStorage.getItem('userId'))  ? (
                            <div className="col-md-4 d-flex justify-content-center mb-3" key={project._id}>
                                <div className="card card-style" >
                                    <div className="card-header p-2 pb-0">
                                        <h5 className="card-title text-center">{project.name}</h5>
                                    </div>
                                    <div className="card-body p-0 text-center">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Status :
                                                <button className={`btn btn-sm ms-3 ${project.status ? 'btn-success' : 'btn-outline-success'}`} >Ongoing</button>
                                                <button className={`btn btn-sm ms-2 ${!project.status ? 'btn-danger' : 'btn-outline-danger'}`} >Closed</button>
                                            </li>
                                            <li className="list-group-item">Start Date : <Moment format="YYYY/MM/DD">{project.startDate}</Moment></li>
                                            <li className="list-group-item">End Date : <Moment format="YYYY/MM/DD">{project.endDate}</Moment></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                             ) : null
                        );
                    })
                    }
                </div>

            ) : (
                <h3 className="text-center m-3 p-2">No Results to Display</h3>

            )}
        </div>
    )
};


export default ContributedProjectCard;