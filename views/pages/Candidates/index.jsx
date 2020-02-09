import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Layout from '../../shared-ui/Layout';
import Snackbar from '../../shared-ui/Snackbar';
import List from './List';
import Modal from './Modal';
import postVoterDbData from '../../requests/postVote';
import getCandidatesDbData from '../../requests/getCandidates';
import fadeIn from '../../shared-ui/animations';

const mainCSS = css`
display: block;
margin: 0 auto;
min-height: 100%;
height: auto;
border-radius: 5px;
background-color: #f2f2f2;
padding: 20px;
margin-top: 1.5vh;
animation-name: fadeIn;
animation-duration: 0.5s;
@media (max-width: 1199px) {
  width: 80%;
  margin-top: 30px;
  margin-bottom: 50px;
  h1 {
    text-align: center;
  }
}
@media (min-width: 1200px) {
  width: 90%;
  margin-top: 5%;
}
`;


export default function Candidates(props) {
  const { setPage, voterData } = props;
  const [candidates, setCandidates] = useState(undefined);
  const [modal, setModal] = useState({ opened: false, data: null });
  const [voted, setVoted] = useState(false);
  const [snackbar, setSnackbar] = useState(null);

  async function fetchCandidates() {
    const result = await getCandidatesDbData(false);
    setCandidates(result);
  }

  useEffect(() => {
    fetchCandidates();
  }, []);


  function onCandidateSelect(selectedCandidate) {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }

    setModal({ opened: true, data: { voterData, selectedCandidate } });
  }

  function closeModal() {
    setModal({ opened: false, data: null });
  }

  async function dataConfirmed(postReqData) {
    const request = await postVoterDbData(postReqData);
    closeModal();
    setSnackbar(request.success);
    setVoted(true);
    setTimeout(() => {
      setPage('statistics');
    }, 2500);
  }


  return (
    <Layout navbar="votar" setPage={setPage}>
      <main className={[mainCSS, fadeIn].join(' ')}>

        {candidates
          ? (
            <>
              <h1>Seleccionar candidato al trono</h1>
              <List candidates={candidates} onCandidateSelect={onCandidateSelect} />
            </>
          ) : (<h1>Cargando candidatos...</h1>)}

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
  setPage: PropTypes.func.isRequired,
  voterData: PropTypes.exact({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired
  }).isRequired
};
