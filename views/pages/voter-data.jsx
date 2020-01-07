import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Layout from '../shared-ui/Layout';
import Form from '../shared-ui/Form';
import getVoterDbData from '../requests/getVoterData';

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

export default function VoterData(props) {
  const { setPage, setVoterData } = props;
  const [alreadyVoted, setAlreadyVoted] = useState(false);

  const validateVoterData = async function (submittedData) {
    const voterData = await getVoterDbData(submittedData);

    if (!voterData.dni) {
      setVoterData(submittedData);
      setPage('home');
    } else if (voterData.dni) {
      setAlreadyVoted(true);
    }
  };

  return (
    <Layout title="Voter Data">
      <main className={mainCSS}>
        <h1>Datos del votante</h1>
        <Form validateVoterData={validateVoterData} />
        {alreadyVoted && <h1>Ya voto</h1>}
      </main>
    </Layout>
  );
}

VoterData.propTypes = {
  pageName: PropTypes.string.isRequired
};
