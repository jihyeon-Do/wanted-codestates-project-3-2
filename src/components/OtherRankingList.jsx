import React from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';

const OtherRankingList = props => {
  return (
    <OtherRanking>
      <ul>
        <li>
          <p>#</p>
          <p>닉네임{`(순위변동)`}</p>
          <p>누적포인트{`(전일대비)`}</p>
          <p>주행횟수</p>
          <p>평균순위</p>
        </li>
        <li>
          <p>4</p>
          <p>
            1234Kcm
            <span>
              <IoIosArrowUp color="#07f" size={10} />1
            </span>
          </p>
          <p>3,272 PT</p>
          <p>602회</p>
          <p>1.5위</p>
        </li>
        <li>
          <p>4</p>
          <p>
            1234Kcm
            <span>
              <IoIosArrowUp color="#07f" size={10} />1
            </span>
          </p>
          <p>3,272 PT</p>
          <p>602회</p>
          <p>1.5위</p>
        </li>
      </ul>
    </OtherRanking>
  );
};
const OtherRanking = styled.section`
  ul {
    width: 100%;

    li {
      width: 100%;
      display: flex;
      padding-left: 60px;
      height: 40px;
      margin-bottom: 10px;
      background-color: #fff;
      border: 1px solid #f2f2f2;

      p {
        display: flex;
        align-items: center;
        span {
          margin: 0 10px;
          font-size: 0.8rem;
          margin-top: 4px;
          display: block;
        }
      }
      p:nth-of-type(1) {
        flex: 1;
        font-size: 1.1rem;
      }
      p:nth-of-type(2) {
        flex: 3;
        font-size: 1.1rem;
      }
      p:nth-of-type(3) {
        flex: 3;
      }
      p:nth-of-type(4) {
        flex: 1;
      }
      p:nth-of-type(5) {
        flex: 1;
      }
    }
    li:nth-of-type(1) {
      background-color: transparent;
      border: none;
      p {
        color: #fff;
        font-size: 0.8rem;
      }
    }
  }
`;

OtherRankingList.propTypes = {};

export default OtherRankingList;
