import React from "react";
import "./NavBar.css";
import NavBarText from "../NavBarText";


const NavBar = props => (
    <nav className="navbar">
    <ul>
        <li className="brand">
        <a href="/">Clicky Game</a>
        </li>
        <NavBarText score={props.score} topScore={props.topScore} />
        <li>
            Score: {props.score} | Top Score: {props.topScore}
        </li>
    </ul>
    </nav>
);

export default NavBar;