import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Layout from '../../shared-ui/Layout';
import Button from '../../shared-ui/Button';
import { flipInX } from '../../shared-ui/animations';


export default function Home(props) {
  const { setPage } = props;
  const mainCSS = css`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  @media (max-width: 1199px) {
    padding-top: 40vh;
  }
  @media (min-width: 1200px) {
    padding-top: 30%;
  }
  `;

  const buttonCSS = css`
    height: 100px;
    font-size: 24px;
    background-color: darkblue;
    animation-name: flipInX;
    animation-duration: 0.75s;
  `;

  return (
    <Layout navbar="home" setPage={setPage}>
      <main className={mainCSS}>
        <Button className={flipInX} text="Iniciar" click={setPage} nonDefaultCss={buttonCSS} />
      </main>
    </Layout>
  );
}

Home.propTypes = {
  setPage: PropTypes.func.isRequired
};
