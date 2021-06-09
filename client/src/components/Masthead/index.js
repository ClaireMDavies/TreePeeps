import React from 'react';
import './style.css';
import logo from "../../assets/TREEPEEPS.png"

function Masthead() {
    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <header className="masthead">
                <div className="container d-flex h-100 align-items-center">
                    <div className="wrapper mx-auto text-center">
                        <img id="logo" src={logo} />
                        <h3 className="mx-auto mt-4"><b>A tree-planting app for tree-minded people</b></h3>

                        <p>Tiny Forests bring all the benefits of a forest – reconnecting people with nature and raising awareness, helping to mitigate the impacts of climate change, as well as providing nature-rich habitat patches to support urban wildlife – right into the heart of our cities and urban spaces.
                        Earthwatch, 2021</p>
                        <ul className="buttons">
                            <li>
                                <button className="btn btn-light m-2" >Login</button>
                            </li>
                            <li>
                                <button className="btn btn-light m-2" >Sign Up</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Masthead;