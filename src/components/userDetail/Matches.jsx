import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Matches = props => {
  const trackData = require('../../assets/track.json');
  const kartData = require('../../assets/kart.json');

  const matchData = useSelector(state => state.dataReducer.data?.matches);

  function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60,
    );
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
  }
  return (
    <MatchesComponent className="matches">
      {matchData &&
        matchData[0].matches.map((value, index) => {
          const matchTrakData = trackData.filter(v => {
            return value.trackId === v.id && v.name;
          });
          const matchKartData = kartData.filter(v => {
            return value.player.kart === v.id && v.name;
          });

          return (
            <section key={index}>
              <p>{timeForToday(value.endTime)}</p>
              {+value.player.matchRank === 99 ||
              +value.player.matchRank === 0 ? (
                <p>
                  <em>#리타이어</em>
                </p>
              ) : (
                <p>
                  <em>{`#${value.player.matchRank}`}</em>/ {value.playerCount}
                </p>
              )}
              <p>{matchTrakData[0].name}</p>
              <p>{matchKartData[0].name}</p>
              <p>
                {(+value.player.matchTime / 1000 / 60).toFixed(4).slice(0, 1)}
                {`'${(+value.player.matchTime / 1000 / 60)
                  .toFixed(4)
                  .slice(2, 4)}'`}
                {(+value.player.matchTime / 1000 / 60).toFixed(4).slice(4, 6)}
              </p>
              <button>
                <IoMdArrowDropdown
                  aria-hidden="true"
                  size={20}
                  color="#a1a1a1"
                />
              </button>
            </section>
          );
        })}
    </MatchesComponent>
  );
};

const MatchesComponent = styled.article`
  ${props => console.log(props)}
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    border-style: solid;
    border-width: 1px 1px 1px 4px;
    border-color: #f2f2f2 #f2f2f2 #f2f2f2 #a1a1a1;
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    background-color: ${props => console.log(props)};
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
      cursor: pointer;
    }
  }
`;
Matches.propTypes = {};

export default Matches;
