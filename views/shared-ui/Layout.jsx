import React from 'react'
import { css } from 'emotion'

const Layout = (props) => (
        <html lang="es-AR">
        <head>
          <meta charSet="utf-8" />
          <title>{ props.title }</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body className={bodyCSS}>
          { props.children }
        </body>
      </html>
)

const bodyCSS = css`
  background-color: lightblue;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`

export default Layout