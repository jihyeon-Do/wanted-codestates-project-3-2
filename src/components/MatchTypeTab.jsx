import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../service/getData';
import { searchUser } from '../redux/action/action';
import { BsPersonFill, BsPeopleFill } from 'react-icons/bs';

const MatchTypeTab = ({ nickname }) => {
  const [matchType, setMatchType] = useState(1);
  const dispatch = useDispatch();

  const handleMatchType = async num => {
    dispatch(searchUser(await fetchUserData(nickname, num)));
    setMatchType(num);
  };

  return (
    <ProfileTab>
      <ul>
        <li
          onClick={() => handleMatchType(1)}
          className={`${matchType === 1 ? 'active' : ''}`}
        >
          <span>
            <BsPersonFill aria-hidden="true" size={17} />
          </span>
          개인전
        </li>
        <li
          onClick={() => handleMatchType(2)}
          className={`${matchType === 2 ? 'active' : ''}`}
        >
          <span>
            <BsPeopleFill aria-hidden="true" size={17} />
          </span>
          팀전
        </li>
      </ul>
    </ProfileTab>
  );
};
const ProfileTab = styled.div`
  position: relative;
  ul {
    display: flex;
    align-items: center;
    padding-right: 10px;
    li {
      border-style: solid;
      border-color: #07f;
      width: 100px;
      height: 25px;
      text-align: center;
      line-height: 23px;
      font-size: 0.75rem;
      color: #07f;
      cursor: pointer;
      &:hover {
        background-color: #07f;
        color: #fff;
      }
      &.active {
        background-color: #07f;
        color: #fff;
      }
      &:nth-of-type(1) {
        border-width: 0.7px 0 0.7px 0.7px;
        border-radius: 5px 0 0 5px;
      }
      &:nth-of-type(2) {
        border-width: 0.7px 0.7px 0.7px 0.7px;
        border-radius: 0 5px 5px 0;
      }
      span {
        margin-right: 5px;
        svg {
          vertical-align: text-top;
        }
      }
    }
  }
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 5px;
    right: 0;
    width: 1px;
    height: 14px;
    background-color: #ececec;
  }
`;
MatchTypeTab.propTypes = {
  nickname: PropTypes.string,
};

export default MatchTypeTab;
