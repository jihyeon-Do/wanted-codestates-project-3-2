import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { searchUser } from '../redux/action/action';
import { fetchUserData } from '../service/getData';
import { useDispatch } from 'react-redux';
import RankingTitle from '../components/RankingTitle';
import HighRankingList from '../components/HighRankingList';
import OtherRankingList from '../components/OtherRankingList';

const Rank = props => {
  // const dispatch = useDispatch();

  return (
    <>
      <AnimationBackground>
        <div></div>
        <div></div>
      </AnimationBackground>
      <RankMainComponent>
        <RankingTitle />
        <HighRankingList />
        <OtherRankingList />
      </RankMainComponent>
    </>
  );
};

const AnimationBackground = styled.div`
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
  @keyframes swell {
    0%,
    100% {
      transform: translate3d(0, -60px, 0);
    }
    50% {
      transform: translate3d(0, 5px, 0);
    }
  }
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 610px;
  background-color: #005fcc;
  z-index: -10;
  margin-top: 100px;
  overflow: hidden;
  div {
    background: url('../images/background_wave.svg') repeat-x;
    position: absolute;
    bottom: 0;
    width: 6400px;
    height: 198px;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
  }
  & > div:nth-of-type(1) {
  }
  & > div:nth-of-type(2) {
    bottom: 0;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.3s infinite,
      swell 7s ease -0.5s infinite;
    opacity: 1;
  }
`;

const RankMainComponent = styled.main`
  width: 1300px;
  background-color: transparent;
  margin: 0 auto;
  padding-top: 70px;
`;

Rank.propTypes = {};

export default Rank;
