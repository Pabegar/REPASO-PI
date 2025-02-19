import React from 'react';
import { Link } from 'react-router-dom';
// import style from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>LOGO</Link>
        </li>
        <li>
          <Link to='/home'>HOME</Link>
        </li>
      </ul>
      <input type="search" placeholder="Search character..."/>
      <ul>
        <li>
          <Link to='/createCharacter'>CREATE CHARACTER</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;