import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Layout from '../shared-ui/Layout';

const mainCSS = css`
display: block;
margin: 0 auto;
width: 50%;
min-height: 100%;
height: auto;
border-radius: 5px;
background-color: #f2f2f2;
padding: 20px;
margin-top: 1.5vh;
@media (max-width: 1199px) {
  width: 80%;;
}
@media (min-width: 1200px) {
  width: 50%;
}
`;

export default function Candidates(props) {
  const { setPage, setVoterData } = props;

  return (
    <Layout title="Selecione Candidato" navbar="votar" setPage={setPage}>
      <main className={mainCSS}>
        <h1>Seleccionar candidato</h1>
      </main>
    </Layout>
  );
}

Candidates.propTypes = {
  pageName: PropTypes.string.isRequired
};
