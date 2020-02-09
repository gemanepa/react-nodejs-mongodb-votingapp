import React from 'react';
import {
  Document,
  Head,
  Main
} from '@react-ssr/express';

export default class extends Document {
  render() {
    return (
      <html lang="es-AR">
        <Head>
          <meta charSet="utf-8" />
          <title>Voting App - React+Nodejs+Mongodb</title>
          <meta name="author" content="gemanepa" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="shortcut icon" href="/images/head-icon.ico" />
        </Head>
        <body style={{margin: 0 }}>
          <Main />
        </body>
      </html>
    );
  }
}
