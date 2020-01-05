import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import Layout from './shared-ui/Layout';
import Button from './shared-ui/Button';


export default function Index() {
  const mainCSS = css`
  display: block;
  margin: 0 auto;
  width: 50%;
  height: 100%
  `;

  const buttonCSS = css`
  @media (max-width: 1199px) {
    margin-top: 40vh;
  }
  @media (min-width: 1200px) {
    margin-top: 60%;
  }
`;
  return (
    <Layout title="Home">
      <main className={mainCSS}>
        <Button withLink="/votacion" text="Votar" nonDefaultCss={buttonCSS} />
      </main>
    </Layout>
  );
}

Index.propTypes = {
  message: PropTypes.string.isRequired
};
