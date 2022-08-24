import React from "react";
import { Menu } from 'semantic-ui-react';

import { NavLink } from "react-router-dom";

function NavBar(){
// play, add-card, about
    return (
    <Menu className='menu'>
        <Menu.Item>
            <NavLink to='/'>
                Home
            </NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink to='/play'>
                Play
            </NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink to='/add-card'>
                Add Card
            </NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink to='/about'>
                About
            </NavLink>
        </Menu.Item>
    </Menu>
    )
}

export default NavBar;