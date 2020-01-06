import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Layout from './shared-ui/Layout';
import Form from './shared-ui/Form';

export default function VoterData(props) {
  const { pageName } = props;
  const mainCSS = css`
  display: block;
  margin: 0 auto;
  width: 50%;
  height: 100%;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin-top: 5.5vh;
  @media (max-width: 1199px) {
    width: 80%;;
  }
  @media (min-width: 1200px) {
    width: 50%;
  }
  `;

  return (
    <Layout title={pageName}>
      <main className={mainCSS}>
        <h1>Datos del votante</h1>
        <Form />
      </main>
    </Layout>
  );
}

VoterData.propTypes = {
  pageName: PropTypes.string.isRequired
};
