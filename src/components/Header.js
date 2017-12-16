import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">lightbulb_outline</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/igcse">IGCSE</NavLink></li>
      <li><NavLink to="/a-level">A Level</NavLink></li>
    </ul>
  </header>
);

export default Header;
