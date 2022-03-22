import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const RankChange = props => {
  const matchData = useSelector(state => state.dataReducer.data?.matches);

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
          <div>그래프</div>
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
      font-weight: bold;
    }
    p {
      font-weight: bold;
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
