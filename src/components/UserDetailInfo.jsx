import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Record from './userDetail/Record';
import RankChange from './userDetail/RankChange';
import Comment from './userDetail/Comment';
import TrackOrCart from './userDetail/TrackOrCart';
import Matches from './userDetail/Matches';
import styled from 'styled-components';

const UserDetailInfo = props => {
  const TabList = [
    {
      id: 1,
      content: '통합',
    },
    {
      id: 2,
      content: '매우빠름',
    },
    {
      id: 3,
      content: '무한부스터',
    },
  ];

  const [tabNumber, setTabNumber] = useState(1);
  const [clickedTab, setClickedTab] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  function tabOnClick(e, id) {
    if (!e.target.matches('.menu')) return;
    setTabNumber(id);
  }

  function handleChecked(e) {
    if (e.target.matches('.back')) return;
    setIsChecked(!isChecked);
  }
  return (
    <UserDetailInfoComponent className="userDetailInfo">
      <h3 className="readable-hidden">유저상세정보</h3>
      <div className="info1">
        <Record />
        <RankChange />
        <Comment />
      </div>
      <div className="info2">
        <TabWrapper className="tab">
          {TabList && (
            <ul>
              {TabList.map((v, i) => (
                <Tabs
                  key={i}
                  className={`menu ${v.id === tabNumber ? 'active' : ''}`}
                  onClick={e => tabOnClick(e, v.id)}
                >
                  {v.content}
                </Tabs>
              ))}
            </ul>
          )}
          <div>
            <p>리타이어 노출</p>
            <Label className="back" ischecked={isChecked}>
              <SwitchBack ischecked={isChecked}></SwitchBack>
              <Input
                type="checkbox"
                checked={isChecked}
                onChange={e => handleChecked(e)}
              />
              <Switch className="slide-button" ischecked={isChecked}></Switch>
            </Label>
          </div>
        </TabWrapper>
        <TrackOrCart />
        <Matches />
      </div>
    </UserDetailInfoComponent>
  );
};

const UserDetailInfoComponent = styled.section`
  @keyframes borderLength {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  .info1 {
    display: flex;
    & > article {
      flex: 1;
      margin-right: 10px;
      border: 1px solid #f2f2f2;
      background-color: #fff;
      padding: 15px;
    }
    & > article:nth-of-type(3) {
      margin-right: 0;
    }
  }
  .info2 {
    display: grid;
    margin-top: 10px;
    grid-template-rows: repeat(4);
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      'tab tab tab tab'
      'track match match match';
    div {
      grid-area: tab;
    }
    article:nth-of-type(1) {
      grid-area: track;
      margin-right: 15px;
    }
    article:nth-of-type(2) {
      grid-area: match;
      margin-top: 60px;
    }
  }
`;

const TabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: transparent;
  border-bottom: 1px solid #ccc;
  padding: 3px;
  ul {
    display: flex;
    list-style: none;
    padding-bottom: 0;
  }
  div {
    display: flex;
    align-items: center;
    p {
      font-size: 0.75rem;
      margin-right: 10px;
    }
  }
`;
const Tabs = styled.li`
  text-align: center;
  font-weight: 400;
  font-size: 0.8rem;
  width: 90px;
  height: 50px;
  line-height: 50px;
  color: #a1a1a1;
  cursor: pointer;
  &:hover {
    color: #07f;
    transition: all 0.4s;
  }
  &:hover::after {
    content: ' ';
    display: block;
    width: 100%;
    bottom: -1px;
    height: 3px;
    background-color: #07f;
    border: none;
    opacity: 1;
    animation-name: borderLength;
    animation-duration: 0.4s;
  }
  &.active {
    color: #07f;
  }
  &.active::after {
    content: ' ';
    display: block;
    width: 100%;
    bottom: -1px;
    height: 3px;
    background-color: #07f;
    border: none;
    opacity: 1;
    animation-name: borderLength;
    animation-play-state: pause;
  }
`;

const Label = styled.label`
  display: block;
  width: 40px;
  height: 22px;
  position: relative;
  background-color: #f0f0f0;
  border-radius: 20px;
  overflow: hidden;
`;

const SwitchBack = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  background-color: ${props => (props.ischecked ? '#f62459' : '#f0f0f0')};
  transform: translateX(${props => (props.ischecked ? '0' : '-100%')});
  transition: all 0.3s Ease-out;
  transition-delay: 0.2s;
`;

const Switch = styled.span`
  display: block;
  width: 18px;
  height: 18px;
  background-color: #ffffff;
  position: absolute;
  top: 2px;
  left: 2px;
  transform: translateX(${props => (props.ischecked ? '18px' : '')});
  border-radius: 50px;
  transition: all 0.3s Ease-out;
  transition-delay: 0.2s;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

UserDetailInfo.propTypes = {};

export default UserDetailInfo;
