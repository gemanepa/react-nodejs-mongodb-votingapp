import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const chartCSS = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    height: 100%;
    position: relative;
`;

export default function Chart(props) {
  const { candidates } = props;

  let totalVotes = 0;
  candidates.forEach((candidate) => {
    totalVotes += candidate.votes;
  });

  return (
    <section className={chartCSS}>
      {candidates.map((candidate) => (
        <article key={candidate.name}>
          <progress value={candidate.votes} max={totalVotes} />
          {' '}
          <span>{candidate.votes}</span>
        </article>
      ))}
    </section>
  );
}
