import React from 'react'

export default function Layout(props) {
    return (
        <html lang="es-AR">
        <head>
          <meta charSet="utf-8" />
          <title>{ props.title }</title>
          <meta name="viewport"
            content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="/assets/css/style.css" />
        </head>
        <body>
          { props.children }
        </body>
      </html>
    )
}