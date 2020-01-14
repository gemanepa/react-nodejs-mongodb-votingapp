import React from 'react';
import { css } from 'emotion';
import data from './candidates-data.json';

const listCSS = css`
list-style-type: none;
display: flex;
flex-flow: row wrap;
justify-content: space-around;
width: 100%;
padding-left: 0px;
.candidate {
    display: flex;
    flex-direction: row;
    margin-bottom: 3%;
    cursor: pointer;
    border: 4px solid darkblue;
    border-radius: 5px;
    width: 45%;

    img {
        min-width: 100px;
        min-height: 100px;
        max-width: 100px;
        max-height: 100px;
    }

    .text {
        padding-top: 2.5%;
        padding-left: 2.5%;
        padding-bottom: 2.5%;
        padding-right: 0;
        width: 300px;
        span.name {
            font-size: 200%;
            margin-bottom: 1%;
            width: 300px;
        };
        span.house {
            font-style: italic;
        };
    }
}
.candidate:hover {
    border-color: #4CAF50;
}
  @media screen and (max-width: 1199px) {
    .candidate {
      width: 100%;
    }
  }
`;

export default function List(props) {
  const { onCandidateSelect } = props;
  return (
    <ul className={listCSS}>
      {data.candidates.map((candidate) => (
        <li className="candidate" key={candidate.name} onClick={() => onCandidateSelect({ name: candidate.name, house: candidate.house, img: candidate.img })} title={`Seleccionar ${candidate.name}`}>
          <img src={`./images/candidate-${candidate.img}.jpg`} alt="" />
          <div className="text">
            <span className="name">{candidate.name}</span>
            <br />
            <span className="house">
              {`${candidate.house}`}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
