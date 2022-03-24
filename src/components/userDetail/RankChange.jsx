import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Chart, registerables } from 'chart.js';

const RankChange = props => {
  const matchData = useSelector(state => state.dataReducer.data?.matches);
  const canvasDom = useRef(null);
  const chartX = [
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
  ];
  useEffect(() => {
    const ctx = canvasDom.current.getContext('2d');
    Chart.register(...registerables);

    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: chartX,
        datasets: [
          {
            label: '순위',
            data: [
              1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 4, 3, 3, 7, 8, 4, 1, 2,
              1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 4, 3, 3, 7, 8, 4, 1, 2, 3, 4,
              4, 4, 4, 5, 6, 3,
            ],
            borderColor: '#07f',
            borderWidth: 1,
            pointBorderWidth: 1,
            pointRadius: 2,
            pointBackgroundColor: '#07f',
          },
        ],
      },
      options: {
        responsive: true,
        lineTension: 0.4,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            reverse: true,
          },
        },
      },
    });
    return () => {
      myChart.destroy();
    };
  }, []);
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
                지난200경기 <em>1.56위</em>
              </span>
              <span>
                최근50경기 <em>2.12위</em>
              </span>
            </p>
          </div>
          <div>
            <canvas ref={canvasDom}></canvas>
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
