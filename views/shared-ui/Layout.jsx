import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const bodyCSS = css`
  background-color: lightblue;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`;

export default function Layout(props) {
  const { children, title } = props;
  return (
    <html lang="es-AR">
      <head>
        <meta charSet="utf-8" />
        <title>{ title }</title>
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
