import React from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
    return (
        <li className="nav-item ps-2">
            <Link
                to={props.link}
                className={
                    window.location.pathname === `${props.link}`
                        ? "nav-link active"
                        : "nav-link"
                }
            >{props.name}</Link>
        </li>
    );
}

export default NavItem ;