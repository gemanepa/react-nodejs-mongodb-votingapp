import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Layout from '../../shared-ui/Layout';


export default function Statistics(props) {
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

  return (
    <Layout title="Statistics" navbar="statistics" setPage={setPage}>
      <main className={mainCSS}>
        <h1>Statistics</h1>
      </main>
    </Layout>
  );
}

Statistics.propTypes = {
  setPage: PropTypes.func.isRequired
};
