import React from "react";


const Project = () => {
    return (
        <main className="container-fluid">

            <div className="row p-3 myDashboard">
                <h1>New Project Form</h1>
            </div>

            <div className="row p-3">
                <div className="col">
                    <div className="row p-3 rounded m-2">
                        <div className="dashCard" style={{width: "20rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Land Specifications</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Area(m2): </li>
                                <li className="list-group-item">Location: </li>
                                <li className="list-group-item">Owner: </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row p-3 rounded m-2">
                        <div className="dashCard" style={{width: "20rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Time Specifications</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Work Hours Needed: </li>
                                <li className="list-group-item">Number of trees: </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row p-3 rounded m-2">
                        <div className="dashCard" style={{width: "20rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Resource Specifications</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Trees: </li>
                                <li className="list-group-item">Spades: </li>
                                <li className="list-group-item">Fertilizer: </li>
                                <li className="list-group-item">Stakes: </li>
                                <li className="list-group-item">Spirals: </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-md-4">
                        <button type="button" className="row btn-create">Create</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Project;