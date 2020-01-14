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
    children, title, navbar, setPage
  } = props;
  return (
    <html lang="es-AR">
      <head>
        <meta charSet="utf-8" />
        <title>{`Votacion - ${title}`}</title>
        <meta name="author" content="Gabriel Ernesto Martínez Cánepa" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={bodyCSS}>
        <NavBar activePage={navbar} setPage={setPage} />
        { children }
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  navbar: PropTypes.elementType.isRequired,
  setPage: PropTypes.func.isRequired
};
