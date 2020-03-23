import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const chartCSS = css`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    height: 100%;
    position: relative;
    width: 100%;

    article {
      margin: 20px 0px;
      width: 40%;
      overflow: hidden;
      display: flex;
      flex-direction: row;
    }

    h4 {
      padding: 0;
      margin: 0;
    }

    img {
      min-width: 100px;
      min-height: 100px;
      max-width: 100px;
      max-height: 100px;
      border-radius: 5px;
    }
    
    .datacontainer {
      height: 100%;
      max-width: 300px;
      margin-left: 25px;
      .bar {
        width: 100%;
        min-width: 300px;
        height: 35px;
        margin-top: 10px;
      }

      .votes {
        width: 100%;
        overflow: hidden;
        text-align: center;
        font-size: 30px;
        margin-top: -35px;

      }

      h4.name {
        font-size: 200%;
      };
      h4.house {
          font-style: italic;
      };
    }

    @media screen and (max-width: 1199px) {
      flex-direction: column;
      article {
        width: 100%;
        .datacontainer {
          width: 62%;
        }
      }
    }
`;

export default function Chart(props) {
  const { candidates } = props;
  const sortedCandidates = candidates.sort((a, b) => ((a.votes < b.votes) ? 1 : -1));
  let totalVotes = 0;
  candidates.forEach((candidate) => {
    totalVotes += candidate.votes;
  });

  return (
    <section className={chartCSS}>
      {sortedCandidates.map((candidate) => (
        <article key={candidate.name}>
          <img src={`./images/candidate-${candidate.img}.jpg`} alt="" />

          <div className="datacontainer">
            <h4 className="name">{candidate.name}</h4>
            <h4 className="house">{candidate.house !== 'White Walkers' ? `House ${candidate.house}` : candidate.house}</h4>
            <meter value={candidate.votes} min="0" max={totalVotes} className="bar" />
            <h4 className="votes">
              {candidate.votes}
              {' ('}
              {!isNaN(((candidate.votes * 100) / totalVotes).toFixed(1)) ? ((candidate.votes * 100) / totalVotes).toFixed(1) : 0}
            %)
            </h4>
          </div>

        </article>
      ))}
    </section>
  );
}

Chart.propTypes = {
  candidates: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
};
