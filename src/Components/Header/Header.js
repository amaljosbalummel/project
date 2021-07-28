
/* eslint-disable */
import React from'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header= () => {
    return (
        <header className={classes.header}>
            <h1>POSTS</h1>
             <nav>
              <ul>
                  <li><NavLink activeClassName={classes.active} to="/Welcome">Home</NavLink></li>
                  <li><NavLink  activeClassName={classes.active} to="/posts">posts</NavLink></li>
                  <li><NavLink  activeClassName={classes.active} to="/Contact">contact</NavLink></li>
              </ul>
          </nav>
            
        </header>

        
    )

}
export default Header;