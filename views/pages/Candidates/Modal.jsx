import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import Button from '../../shared-ui/Button';
import zoomIn from '../../shared-ui/animations';

const modalCSS = css`
position: absolute;
background:rgba(128,128,128,0.9);
width: 100vw;
height: ${typeof document !== 'undefined' ? `${document.body.clientHeight}px` : '100vh'};
top: 0;
left: 0;
overflow: hidden;
.dialog {
    height: auto;
    margin: 2.5% auto;
    border-radius: 5px;
    background-color: white;
    padding: 5px 35px 35px 35px;
    border-radius: 5px;
    animation-name: zoomIn;
    animation-duration: 0.5s;
    h1 {
        text-align: center;
    }

    h2 {
        margin-bottom: 0px;
        text-decoration: underline;
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
}
@media (max-width: 1199px) {
  .dialog {
    width: 75%;
    h3 {
      margin-bottom: 0px;
    }
    .flex {
      flex-direction: column;
    }
    .flex.buttons {
      flex-direction: column-reverse;
    }
  }

}
@media (min-width: 1200px) {
  .dialog {
    width: 50vw;

    .flex {
      flex-direction: row;
      justify-content: space-around;
    }
  }
}
`;

const cancelButtonCSS = css`
height: 50px;

background-color: red;
@media (min-width: 1200px) {
  max-width: 40%;
}
@media (max-width: 1199px) {
  margin-bottom: 10px;
  min-width: 80%;
}
`;

const confirmButtonCSS = css`
height: 50px;
background-color: green;
@media (min-width: 1200px) {
  max-width: 40%;
}
@media (max-width: 1199px) {
  min-width: 80%;
}
`;

export default function Modal(props) {
  const { data, dataConfirmed, closeModal } = props;
  const { voterData: voter, selectedCandidate: candidate } = data;

  return (
    <div className={modalCSS}>
      <div className={[zoomIn, 'dialog'].join(' ')}>
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
            {voter.gender === 'male' ? 'Hombre' : 'Mujer'}
          </h3>
        </div>

        <h2>Candidato</h2>
        <img src={`./images/candidate-${candidate.img}.jpg`} alt="" />
        <div className="flex">
          <h3>
            Nombre:
            {' '}
            {candidate.name}
          </h3>
          <h3>
            Casa:
            {' '}
            {candidate.house.replace('House ', '')}
          </h3>
        </div>
        <div className="flex buttons">
          <Button text="Cancelar" click={() => closeModal()} nonDefaultCss={cancelButtonCSS} />
          <Button text="Confirmar" click={() => dataConfirmed({ voter, candidate })} nonDefaultCss={confirmButtonCSS} />
        </div>

      </div>
    </div>
  );
}

Modal.propTypes = {
  dataConfirmed: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};
