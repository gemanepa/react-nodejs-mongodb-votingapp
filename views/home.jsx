import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Layout from './shared-ui/Layout';
import Button from './shared-ui/Button';


export default function Home(props) {
  const { pageName } = props;
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
