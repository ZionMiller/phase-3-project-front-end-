import React from "react";
import { Menu, Button } from "semantic-ui-react";

import { NavLink } from "react-router-dom";

function NavBar() {
  // play, add-card, about
  return (
    <Menu>
        <NavLink to="/"><img className="nav-logo" src="/images/logo.png" /></NavLink>
        <NavLink className='nav-button' to="/play-game">Play Game</NavLink>
        <NavLink className='nav-button' to="/the-deck">The Deck</NavLink>
        <NavLink className='nav-button' to="/add-card">Add Card</NavLink>
        <NavLink className='nav-button' to="/about">About</NavLink>
    </Menu>
  );
}

export default NavBar;
