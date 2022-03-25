import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Record = props => {
  const matchData = useSelector(state => state.dataReducer.data?.matches);
  let result,
    addition,
    subtraction,
    additionRate,
    retired,
    retiredRate,
    finishRate;

  result = matchData[0].matches.map(value => {
    return +value.player.matchWin;
  });
  addition = result.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  subtraction = result.length - addition;
  additionRate = addition / result.length;
  retired = matchData[0].matches.map(value => {
    return +value.player.matchRetired;
  });
  retired = retired.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  retiredRate = retired / 200;
  finishRate = 1 - retiredRate;

  return (
    <>
      {matchData && (
        <RecordComponent className="record">
          <div>
            <h4>
              <em>종합</em> 전적
            </h4>
            <p>
              {result.length}전 {addition}승 {subtraction}패
            </p>
          </div>
          <Graph>
            <div>
              <p>{`${Math.ceil(additionRate * 100)}%`}</p>
              <svg>
                <circle
                  cx="60"
                  cy="60"
                  r="40"
                  fill="none"
                  stroke="#ebebeb"
                  strokeWidth="10"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="40"
                  fill="none"
                  stroke="#07f"
                  strokeWidth="10"
                  strokeDasharray={`${2 * Math.PI * 40 * additionRate} ${
                    2 * Math.PI * 40 * (1 - additionRate)
                  }`}
                  // 이 작업을 밑에 애니메이션에서 시도해보기
                  strokeDashoffset={2 * Math.PI * 40 * 0.25}
                />
              </svg>
            </div>
            <div>
              <p>{`${Math.floor(finishRate * 100)}%`}</p>
              <svg>
                <circle
                  cx="60"
                  cy="60"
                  r="40"
                  fill="none"
                  stroke="#ebebeb"
                  strokeWidth="10"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="40"
                  fill="none"
                  stroke="#9bd728"
                  strokeWidth="10"
                  strokeDasharray={`${2 * Math.PI * 40 * finishRate} ${
                    2 * Math.PI * 40 * (1 - finishRate)
                  }`}
                  strokeDashoffset={2 * Math.PI * 40 * 0.25}
                />
              </svg>
            </div>
            <div>
              <p>{`${Math.ceil(retiredRate * 100)}%`}</p>
              <svg>
                <circle
                  cx="60"
                  cy="60"
                  r="40"
                  fill="none"
                  stroke="#ebebeb"
                  strokeWidth="10"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="40"
                  fill="none"
                  stroke="#f62459"
                  strokeWidth="10"
                  strokeDasharray={`${2 * Math.PI * 40 * retiredRate} ${
                    2 * Math.PI * 40 * (1 - retiredRate)
                  }`}
                  strokeDashoffset={2 * Math.PI * 40 * 0.25}
                />
              </svg>
            </div>
          </Graph>
          <div>
            <p>
              <em>최다주행</em> 모드
            </p>
            <p>통합</p>
          </div>
        </RecordComponent>
      )}
    </>
  );
};

const RecordComponent = styled.article`
  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px 15px 5px;
    border-bottom: 1px solid #ccc;
    h4 {
      font-size: 0.9rem;
      font-weight: 500;
      em {
        color: #07f;
      }
    }
    p {
      font-weight: 500;
      font-size: 0.8rem;
    }
  }
  & > div:nth-of-type(2) {
    padding: 60px 0;
  }
  & > div:nth-of-type(3) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #f2f2f2;
    padding: 15px 5px 0 5px;
    p {
      font-size: 0.9rem;
      em {
        color: #07f;
      }
    }
    & > p:nth-of-type(2) {
      font-size: 1.1rem;
      font-weight: 500;
    }
  }
`;

const Graph = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    width: 120px;
    height: 120px;
    position: relative;
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.3rem;
    }
    &:nth-of-type(1) p {
      color: #07f;
    }
    &:nth-of-type(2) p {
      color: #9bd728;
    }
    &:nth-of-type(3) p {
      color: #f62459;
    }
    svg {
      width: 120px;
      height: 120px;
      display: block;
      position: relative;
      circle {
        animation: circle-fill-animation 2s ease;
        transition: all 2s;

        @keyframes circle-fill-animation {
          0% {
            stroke-dasharray: 0 ${2 * Math.PI * 40};
          }
          /* 100% {
          stroke-dasharray: 0 ${2 * Math.PI * 40};
        } */
        }
      }
    }
  }
`;

Record.propTypes = {};

export default Record;
