import React from "react";


const dashboard = () => {
    return (

        <main class="container-fluid">

            <div class="row p-3">
                <div class="col-md-4">
                    <button type="button" class="row btn-create">Create</button>
                </div>
            </div>

            <div class="row p-3">
                <div class="col col-md-7">
                    <div class="row p-3 rounded m-2 myDashboard">
                        <div class="row ">
                            <h5>Projects you have created</h5>
                        </div>
                        <div class="row ">
                            <div class="dashCard" style="width: 15rem;">
                                <div class="card-body">
                                    <h5 class="card-title">Project title</h5>
                                    <p class="card-text">Description text goes here.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Status</li>
                                    <li class="list-group-item">Start Date</li>
                                    <li class="list-group-item">Location</li>
                                    <li class="list-group-item">Contributors</li>
                                    <li class="list-group-item">End Date</li>
                                </ul>
                                <div class="card-body">
                                    <a href="#" class="card-link">Project link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                            </div>

                        </div>


                        <div class="row p-3 rounded m-2 myDashboard">
                            <div class="row">
                                <ul>
                                    <h5>Projects you are contributing to</h5>
                                    <li><a>Item</a></li>
                                    <li><a>Another item</a></li>
                                    <li><a>Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div class="col col-md-4 p-3 m-2 rounded object-fit float-right myDashboard">
                        <ul>
                            <h5>Projects in your area</h5>
                            <li><a>Item</a></li>
                            <li><a>Another item</a></li>
                            <li><a>Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default dashboard;