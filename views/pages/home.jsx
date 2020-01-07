import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Layout from '../shared-ui/Layout';
import Button from '../shared-ui/Button';


export default function Home(props) {
  const { setPage } = props;
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
    <Layout title="Home">
      <main className={mainCSS}>
        <Button text="Iniciar" nonDefaultCss={buttonCSS} setPage={setPage} />
      </main>
    </Layout>
  );
}

Home.propTypes = {
  pageName: PropTypes.string.isRequired
};
