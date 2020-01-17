import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Layout from '../../shared-ui/Layout';
import getCandidatesDbData from '../../requests/getCandidates';
import Chart from './Chart';

// @media (max-width: 1199px) {
//   padding-top: 40vh;
// }
// @media (min-width: 1200px) {
//   padding-top: 30%;
// }
const mainCSS = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
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
      <main className={mainCSS}>
        <h1>Statistics</h1>
        {candidates && <Chart candidates={candidates} />}
      </main>
    </Layout>
  );
}

Statistics.propTypes = {
  setPage: PropTypes.func.isRequired
};
