/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
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
    <nav className={navbarCSS}>
      <ul className="topnav">
        <li><a className={activePage === navpages[0] ? 'active' : 'inactive'} onClick={() => setPage('home')} role="button" tabIndex={0}>Home</a></li>
        <li><a className={activePage === navpages[1] ? 'active' : 'inactive'} onClick={() => setPage('voterdata')} role="button" tabIndex={0}>Votar</a></li>
        <li><a className={activePage === navpages[2] ? 'active' : 'inactive'} onClick={() => setPage('statistics')} role="button" tabIndex={0}>Estadisticas</a></li>
        <li className="right"><a>Gabriel E. Martínez Cánepa</a></li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  activePage: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
};
