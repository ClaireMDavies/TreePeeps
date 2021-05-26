import Navbar from "Navbar";



const Project = () => {
    return (
        <main class="container-fluid">

            <div class="row p-3 myDashboard">
                <h1>New Project Form</h1>
            </div>

            <div class="row p-3">
                <div class="col">
                    <div class="row p-3 rounded m-2">
                        <div class="dashCard" style="width: 20rem;">
                            <div class="card-body">
                                <h5 class="card-title">Land Specifications</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Area(m2): </li>
                                <li class="list-group-item">Location: </li>
                                <li class="list-group-item">Owner: </li>
                            </ul>
                        </div>
                    </div>

                    <div class="row p-3 rounded m-2">
                        <div class="dashCard" style="width: 20rem;">
                            <div class="card-body">
                                <h5 class="card-title">Time Specifications</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Work Hours Needed: </li>
                                <li class="list-group-item">Number of trees: </li>
                            </ul>
                        </div>
                    </div>

                    <div class="row p-3 rounded m-2">
                        <div class="dashCard" style="width: 20rem;">
                            <div class="card-body">
                                <h5 class="card-title">Resource Specifications</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Trees: </li>
                                <li class="list-group-item">Spades: </li>
                                <li class="list-group-item">Fertilizer: </li>
                                <li class="list-group-item">Stakes: </li>
                                <li class="list-group-item">Spirals: </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Project;