import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const bodyCSS = css`
  min-width: 100%;
  max-width: 100%;
  min-height: 100vh;
  height: auto;
  overflow: hidden;
  padding: 0;
  margin: 0;
  background-image: url("./images/home-wallpaper.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function Layout(props) {
  const { children, title } = props;
  return (
    <html lang="es-AR">
      <head>
        <meta charSet="utf-8" />
        <title>{`Votacion - ${title}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={bodyCSS}>
        { children }
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired
};
