import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RankingTitle = props => {
  return (
    <RankingTitleComponent>
      <h3>3월 TMI 랭킹</h3>
      <div className="line"></div>
      <p>랭킹 산정기간 2022년 03월 01일 00:00:00 ~ 2022년 03월 31일 24:00:00</p>
      <p>최근 업데이트 2022년 03월 24일 09:15:14</p>
    </RankingTitleComponent>
  );
};
const RankingTitleComponent = styled.section`
  p {
    color: #fff;
    font-size: 0.75rem;
    line-height: 18px;
    letter-spacing: 0;
  }
  h3 {
    font-size: 22px;
    font-weight: 500;
    color: #fff;
  }
  .line {
    width: 35px;
    height: 4px;
    background-color: #fff;
    margin: 15px 0 15px 0;
  }
`;

RankingTitle.propTypes = {};

export default RankingTitle;
