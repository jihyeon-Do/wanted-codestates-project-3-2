import React from 'react';
import PropTypes from 'prop-types';
import { IoMdArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

const Matches = props => {
  return (
    <MatchesComponent className="matches">
      <section>
        <p>11시간전</p>
        <p>
          <em>#1</em>/ 8
        </p>
        <p>쥐라기 공룡 무덤</p>
        <p>어벤저 V1</p>
        <p>1{'01'}81</p>
        <button>
          <IoMdArrowDropdown aria-hidden="true" size={20} color="#a1a1a1" />
        </button>
      </section>
      <section>
        <p>11시간전</p>
        <p>
          <em>#1</em>/ 8
        </p>
        <p>쥐라기 공룡 무덤</p>
        <p>어벤저 V1</p>
        <p>1{'01'}81</p>
        <button>
          <IoMdArrowDropdown aria-hidden="true" size={20} color="#a1a1a1" />
        </button>
      </section>
      <section>
        <p>11시간전</p>
        <p>
          <em>#1</em>/ 8
        </p>
        <p>쥐라기 공룡 무덤</p>
        <p>어벤저 V1</p>
        <p>1{'01'}81</p>
        <button>
          <IoMdArrowDropdown aria-hidden="true" size={20} color="#a1a1a1" />
        </button>
      </section>
    </MatchesComponent>
  );
};

const MatchesComponent = styled.article`
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    border-style: solid;
    border-width: 1px 1px 1px 4px;
    border-color: #f2f2f2 #f2f2f2 #f2f2f2 #07f;
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    background-color: rgba(0, 119, 255, 0.05);
    // 리타이어
    // background-color : #rgba(246,36,89,.05)
    // border-color: #f2f2f2 #f2f2f2 #f2f2f2 #f62459

    // ?
    // #fff
    // #f2f2f2 #f2f2f2 #f2f2f2 #a1a1a1

    & > p:nth-of-type(1) {
      font-size: 0.7rem;
      flex: 1;
    }
    & > p:nth-of-type(2) {
      font-style: italic;
      flex: 1;
      color: #07f;
      em {
        font-size: 1.9rem;
        font-weight: 500;
        font-style: italic;
        margin-right: 3px;
      }
    }
    & > p:nth-of-type(3) {
      flex: 2;
      text-align: center;
    }
    & > p:nth-of-type(4) {
      flex: 1;
    }
    & > p:nth-of-type(5) {
      flex: 1;
    }
    button {
      display: block;
      height: 100%;
      border: 0;
      border-left: 1px solid #ebebeb;
      padding: 10px;
      background-color: transparent;
    }
  }
`;
Matches.propTypes = {};

export default Matches;
