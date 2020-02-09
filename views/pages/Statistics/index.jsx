import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Layout from '../../shared-ui/Layout';
import getCandidatesDbData from '../../requests/getCandidates';
import Chart from './Chart';
import fadeIn from '../../shared-ui/animations';

const mainCSS = css`
  display: block;
  margin: 0 auto;
  width: 50%;
  min-height: 100%;
  height: auto;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 15px 20px;
  margin-top: 30px;
  margin-bottom: 50px;
  animation-name: fadeIn;
  animation-duration: 0.5s;
  h1 {
    margin: 5px 0px;
    text-align: center;
    padding: 0;
  }
  @media (max-width: 1199px) {
    width: 80%;
  }
  @media (min-width: 1200px) {
    width: 80%;
    margin-top: 5%;
  }
`;

export default function Statistics(props) {
  const { setPage } = props;
  const [candidates, setCandidates] = useState(undefined);

  async function fetchCandidates() {
    const result = await getCandidatesDbData(true);
    setCandidates(result);
  }

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <Layout navbar="statistics" setPage={setPage}>
      <main className={[mainCSS, fadeIn].join(' ')}>
        <h1>Estadisticas</h1>
        {candidates && <Chart candidates={candidates} />}
      </main>
    </Layout>
  );
}

Statistics.propTypes = {
  setPage: PropTypes.func.isRequired
};
