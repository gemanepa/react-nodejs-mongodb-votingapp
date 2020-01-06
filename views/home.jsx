import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Layout from './shared-ui/Layout';
import Button from './shared-ui/Button';


export default function Home(props) {
  const { pageName } = props;
  const mainCSS = css`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 100%;
  @media (max-width: 1199px) {
    padding-top: 40vh;
  }
  @media (min-width: 1200px) {
    padding-top: 30%;
  }
  `;

  const buttonCSS = css`

`;
  return (
    <Layout title={pageName}>
      <main className={mainCSS}>
        <Button withLink="/voter-data" text="Iniciar" nonDefaultCss={buttonCSS} />
      </main>
    </Layout>
  );
}

Home.propTypes = {
  pageName: PropTypes.string.isRequired
};
