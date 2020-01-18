import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import NavBar from './Navbar';

const bodyCSS = css`
  min-width: 100%;
  max-width: 100%;
  min-height: 100vh;
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  background-image: url("./images/home-wallpaper.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function Layout(props) {
  const {
    children, navbar, setPage
  } = props;
  return (
    <div className={bodyCSS}>
      <NavBar activePage={navbar} setPage={setPage} />
      { children }
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  navbar: PropTypes.elementType.isRequired,
  setPage: PropTypes.func.isRequired
};
