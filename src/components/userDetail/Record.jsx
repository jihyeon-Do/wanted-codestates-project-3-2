import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Record = props => {
  const matchData = useSelector(state => state.dataReducer.data?.matches);

  let result;
  let addition;
  let subtraction;
  let additionRate;
  let retiredRate;

  if (matchData) {
    result = matchData[0].matches.map(value => {
      return +value.player.matchWin;
    });
    addition = result.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
    subtraction = result.length - addition;
    additionRate = (addition / result.length) * 100;
  }

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
          <div>승률{additionRate}</div>
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
      font-weight: bold;
      em {
        color: #07f;
      }
    }
    p {
      font-weight: bold;
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
      font-weight: bold;
    }
  }
`;

Record.propTypes = {};

export default Record;
