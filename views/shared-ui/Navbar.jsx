import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const navbarCSS = css`
ul.topnav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }
  
  ul.topnav li {float: left; cursor: pointer;}
  
  ul.topnav li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  ul.topnav li a:hover:not(.active) {background-color: #111;}
  
  ul.topnav li a.active {background-color: #4CAF50;}
  
  ul.topnav li.right {float: right;}
  
  @media screen and (max-width: 600px) {
    ul.topnav li.right, 
    ul.topnav li {float: none;}
  }
`;

export default function Navbar(props) {
  const { activePage, setPage } = props;
  const navpages = ['home', 'votar', 'statistics'];

  return (
    <div className={navbarCSS}>
      <ul className="topnav">
        <li><a className={activePage === navpages[0] && 'active'} onClick={() => setPage('home')}>Home</a></li>
        <li><a className={activePage === navpages[1] && 'active'} onClick={() => setPage('voterdata')}>Votar</a></li>
        <li><a className={activePage === navpages[2] && 'active'} onClick={() => setPage('statistics')}>Estadisticas</a></li>
        <li className="right"><a>Gabriel E. Martínez Cánepa</a></li>
      </ul>
    </div>
  );
}
