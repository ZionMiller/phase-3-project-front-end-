import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
// play, add-card, about
    return (
      <>
        <NavLink to='/'>
            Home
        </NavLink>
        <NavLink to='/play'>
            Play
        </NavLink>
        <NavLink to='/add-card'>
            Add Card
        </NavLink>
        <NavLink to='/about'>
            About
        </NavLink>
        </>
    )
}

export default NavBar;