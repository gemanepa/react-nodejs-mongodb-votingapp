import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import Button from '../../shared-ui/Button';

const modalCSS = css`
position: absolute;
background:rgba(128,128,128,0.9);
width: 100vw;
height: 100vh;
top: 0;
left: 0;
.dialog {
    width: 50vw;
    height: auto;
    margin: 2.5% auto;
    border-radius: 5px;
    background-color: white;
    padding: 5px 35px 35px 35px;
    border-radius: 5px;
    h1 {
        text-align: center;
    }

    h2 {
        margin-bottom: 0px;
    }

    .buttons {
        margin-top: 5%;
    }

    .flex {
        display: flex;
        width: 100%;
    }

    img {
        width: 100px;
        height: 100px;
        display: block;
        margin: auto;
        margin-top: 10px;
        border-radius: 5px;
    }
    @media (max-width: 1199px) {
        .flex {
            flex-direction: column;
        }
    }
    @media (min-width: 1200px) {
        .flex {
            flex-direction: row;
            justify-content: space-around;
        }
    }
}
`;

const cancelButtonCSS = css`
height: 50px;
max-width: 40%;
background-color: red;
`;

const confirmButtonCSS = css`
height: 50px;
max-width: 40%;
background-color: green;
`;

export default function Modal(props) {
  const { data, dataConfirmed, selectCanceled } = props;
  const { voterData: voter, selectedCandidate: candidate } = data;

  return (
    <div className={modalCSS}>
      <div className="dialog">
        <h1>Confirmar datos</h1>
        <h2>Votante</h2>
        <div className="flex">
          <h3>
            Nombre:
            {' '}
            {voter.firstName}
          </h3>
          <h3>
            Apellido:
            {' '}
            {voter.lastName}
          </h3>
        </div>
        <div className="flex">
          <h3>
            DNI:
            {' '}
            {voter.dni}
          </h3>
          <h3>
            Genero:
            {' '}
            {voter.gender}
          </h3>
        </div>

        <h2>Candidato</h2>
        <img src={`./images/candidate-${candidate.img}`} alt="" />
        <div className="flex">
          <h3>
            Nombre:
            {' '}
            {candidate.name}
          </h3>
          <h3>
            Casa:
            {' '}
            {candidate.house}
          </h3>
        </div>
        <div className="flex buttons">
          <Button text="Cancelar" click={() => selectCanceled()} nonDefaultCss={cancelButtonCSS} />
          <Button text="Confirmar" click={() => dataConfirmed({ voter, candidate })} nonDefaultCss={confirmButtonCSS} />
        </div>

      </div>
    </div>
  );
}
