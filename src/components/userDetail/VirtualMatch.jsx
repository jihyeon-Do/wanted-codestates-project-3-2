import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { HiCalculator } from 'react-icons/hi';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const VirtualMatch = props => {
  // const [colors, setColors] = useState(['#f62459', '#07f']);

  const nickname = useSelector(state => state.dataReducer.data?.nickName);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     let color1 = '#' + Math.round(Math.random() * 0xffffff).toString(16);
  //     let color2 = '#' + Math.round(Math.random() * 0xffffff).toString(16);
  //     setColors([color1, color2]);
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, [colors]);

  return (
    <Matching className="matching">
      <p>1대1 매칭 시뮬레이터 - {nickname}와 가상 대결을 펼쳐보세요.</p>
      <button>
        <span>
          <HiCalculator aria-hidden="true" size={15} />
        </span>
        매칭하기
      </button>
    </Matching>
  );
};
const Matching = styled.aside`
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  margin: 20px 0;
  p {
    color: #fff;
    font-weight: 500;
  }
  button {
    color: #fff;
    background-color: transparent;
    border: 1px solid #fff;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.75rem;
    vertical-align: middle;
    cursor: pointer;
    svg {
      vertical-align: text-bottom;
    }
  }
`;

VirtualMatch.propTypes = {};

export default VirtualMatch;
