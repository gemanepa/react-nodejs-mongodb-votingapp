import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Layout from '../../shared-ui/Layout';
import Form from './Form';
import Snackbar from './Snackbar';
import getVoterDbData from '../../requests/getVoterData';

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

export default function VoterData(props) {
  const { setPage, setVoterData } = props;
  const [alreadyVoted, setAlreadyVoted] = useState(false);

  const validateVoterData = async function (submittedData) {
    const voterData = await getVoterDbData(submittedData);

    if (!voterData.dni) {
      setVoterData(submittedData);
      setPage('candidates');
      console.log('voterData ', voterData)
    } else if (voterData.dni) {
      setAlreadyVoted(true);
      setTimeout(() => { setAlreadyVoted(false); }, 3000);
    }
  };

  return (
    <Layout title="Voter Data" navbar="votar" setPage={setPage}>
      <main className={mainCSS}>
        <h1>Datos del votante</h1>
        <Form validateVoterData={validateVoterData} />
        {alreadyVoted && <Snackbar text="Este votante ya voto" />}
      </main>
    </Layout>
  );
}

VoterData.propTypes = {
  pageName: PropTypes.string.isRequired
};
