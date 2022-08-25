import React from "react";
import { Menu } from 'semantic-ui-react';

import { Link } from "react-router-dom";

function NavBar(){
// play, add-card, about
    return (
    <Menu className='menu'>
        <Menu.Item>
            <Link to='/'>
                Home
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/the-deck'>
                The Deck
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/add-card'>
                Add Card
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/about'>
                About
            </Link>
        </Menu.Item>
    </Menu>
    )
}

export default NavBar;