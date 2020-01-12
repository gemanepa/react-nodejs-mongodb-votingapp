import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Layout from '../../shared-ui/Layout';
import Snackbar from '../../shared-ui/Snackbar';
import List from './List';
import Modal from './Modal';
import postVoterDbData from '../../requests/postVote';

const mainCSS = css`
display: block;
margin: 0 auto;
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
  width: 90%;
}
`;

export default function Candidates(props) {
  const { setPage, voterData } = props;
  const [modal, setModal] = useState({ opened: false, data: null });
  const [voted, setVoted] = useState(false);
  const [snackbar, setSnackbar] = useState(null);

  function onCandidateSelect(selectedCandidate) {
    setModal({ opened: true, data: { voterData, selectedCandidate } });
  }

  function closeModal() {
    setModal({ opened: false, data: null });
  }

  async function dataConfirmed(data) {
    const postReqData = data;
    delete postReqData.candidate.img;
    const request = await postVoterDbData(data);
    closeModal();
    setSnackbar(request.success);
    setVoted(true);
    setTimeout(() => {
      setPage('statistics');
    }, 2500);
  }

  return (
    <Layout title="Seleccione Candidato" navbar="votar" setPage={setPage}>
      <main className={mainCSS}>
        <h1>Seleccionar candidato al trono</h1>
        <List onCandidateSelect={onCandidateSelect} />

        {(modal.opened && !voted)
        && (
        <Modal
          data={modal.data}
          dataConfirmed={dataConfirmed}
          closeModal={closeModal}
        />
        )}

        {snackbar === true && <Snackbar text="Voto realizado con exito" />}
        {snackbar === false && <Snackbar text="Voto no realizado" />}
      </main>
    </Layout>
  );
}

Candidates.propTypes = {
  pageName: PropTypes.string.isRequired
};
