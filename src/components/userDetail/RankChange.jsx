import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// import { Chart, registerables } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const RankChange = props => {
  const matchData = useSelector(state => state.dataReducer.data?.matches);
  const matches = matchData[0].matches;

  let manyGames,
    addAverageRank,
    averageRank,
    fewMatches,
    AddfewMatches,
    fewMatchesRank;

  manyGames = matches
    .map(v => +v.player.matchRank)
    .filter(v => {
      return v !== 99 && v !== 0;
    });
  addAverageRank = manyGames.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  averageRank = (addAverageRank / manyGames.length).toFixed(2);
  fewMatches = manyGames.slice(0, 50);
  AddfewMatches = fewMatches.reduce((acc, cur) => {
    return acc + cur;
  });
  fewMatchesRank = (AddfewMatches / 50).toFixed(2);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );

  const options = {
    responsive: true,
    lineTension: 0.4,

    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        reverse: true,
        max: 8,
      },
    },
  };

  const data = {
    labels: fewMatches,
    datasets: [
      {
        label: 'Dataset 1',
        data: fewMatches,
        borderColor: '#07f',
        pointBackgroundColor: '#07f',
        pointRadius: 2,
        borderWidth: 1,
        pointBorderWidth: 1,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <>
      {matchData && (
        <RankChangeComponent className="rank-change">
          <div>
            <h4>
              <em>순위변동</em> 추이
            </h4>
            <p>
              <span>
                지난200경기 <em>{averageRank}위</em>
              </span>
              <span>
                최근50경기 <em>{fewMatchesRank}위</em>
              </span>
            </p>
          </div>
          <div>
            <Line data={data} options={options} />
          </div>
        </RankChangeComponent>
      )}
    </>
  );
};

const RankChangeComponent = styled.article`
  em {
    color: #07f;
  }
  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px 15px 5px;
    border-bottom: 1px solid #ccc;
    h4 {
      font-size: 0.9rem;
      font-weight: 500;
    }
    p {
      font-weight: 500;
      font-size: 0.8rem;
      span:nth-of-type(1) {
        margin-right: 10px;
      }
    }
  }
  & > div:nth-of-type(2) {
    padding: 60px 0;
  }
`;

RankChange.propTypes = {};

export default RankChange;
