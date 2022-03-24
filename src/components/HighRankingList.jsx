import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MatchTypeTab from '../components/MatchTypeTab';

const HighRankingList = props => {
  const [matchChannel, setMatchChannel] = useState(1);

  const TabList = [
    {
      id: 1,
      content: '통합',
    },
    {
      id: 2,
      content: '매빠',
    },
    {
      id: 3,
      content: '무부',
    },
  ];
  const tabOnClick = (e, num) => {
    // dispatch(searchUser(await fetchUserData(num)));
    setMatchChannel(num);
  };

  return (
    <section>
      <Wrapper>
        <MatchTypeTab />
        <ChannelTab>
          {TabList && (
            <ul>
              {TabList.map((v, i) => (
                <Tabs
                  key={i}
                  className={`menu ${v.id === matchChannel ? 'active' : ''}`}
                  onClick={e => tabOnClick(e, v.id)}
                >
                  {v.content}
                </Tabs>
              ))}
            </ul>
          )}
        </ChannelTab>
      </Wrapper>
      <HighRanking>
        <li>
          <div>
            <img src="../images/icon_goldmedal.png" alt="1위 금메달" />
            <p>법사케피</p>
            <p>
              순위 <em>1위</em>
            </p>
            <p>
              누적포인트 <em>6,991PT</em>
            </p>
            <img src="../images/rank_character.png" alt="랭킹 캐릭터" />
          </div>
          <Graph>
            <div>
              <p>승률</p>
              <div>
                <p>{`${Math.ceil(0.75 * 100)}%`}</p>
                <svg>
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="#ebebeb"
                    strokeWidth="5"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="#07f"
                    strokeWidth="5"
                    strokeDasharray={`${2 * Math.PI * 28 * 0.75} ${
                      2 * Math.PI * 28 * 0.25
                    }`}
                    // 이 작업을 밑에 애니메이션에서 시도해보기
                    strokeDashoffset={2 * Math.PI * 28 * 0.25}
                  />
                </svg>
              </div>
            </div>
            <div>
              <p>리타이어율</p>
              <div>
                <p>{`${Math.ceil(0.75 * 100)}%`}</p>
                <svg>
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="#ebebeb"
                    strokeWidth="5"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="#f62459"
                    strokeWidth="5"
                    strokeDasharray={`${2 * Math.PI * 28 * 0.75} ${
                      2 * Math.PI * 28 * 0.25
                    }`}
                    // 이 작업을 밑에 애니메이션에서 시도해보기
                    strokeDashoffset={2 * Math.PI * 28 * 0.25}
                  />
                </svg>
              </div>
            </div>
          </Graph>
        </li>
        <li>
          <div>
            <img src="../images/icon_goldmedal.png" alt="1위 금메달" />
            <p>법사케피</p>
            <p>
              순위 <em>1위</em>
            </p>
            <p>
              누적포인트 <em>6,991PT</em>
            </p>
            <img src="../images/rank_character.png" alt="랭킹 캐릭터" />
          </div>
          <Graph>
            <div>
              <p>승률</p>
              <div>
                <p>{`${Math.ceil(0.75 * 100)}%`}</p>
                <svg>
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="#ebebeb"
                    strokeWidth="5"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="#07f"
                    strokeWidth="5"
                    strokeDasharray={`${2 * Math.PI * 28 * 0.75} ${
                      2 * Math.PI * 28 * 0.25
                    }`}
                    // 이 작업을 밑에 애니메이션에서 시도해보기
                    strokeDashoffset={2 * Math.PI * 28 * 0.25}
                  />
                </svg>
              </div>
            </div>
            <div>
              <p>리타이어율</p>
              <div>
                <p>{`${Math.ceil(0.75 * 100)}%`}</p>
                <svg>
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="#ebebeb"
                    strokeWidth="5"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="#f62459"
                    strokeWidth="5"
                    strokeDasharray={`${2 * Math.PI * 28 * 0.75} ${
                      2 * Math.PI * 28 * 0.25
                    }`}
                    // 이 작업을 밑에 애니메이션에서 시도해보기
                    strokeDashoffset={2 * Math.PI * 28 * 0.25}
                  />
                </svg>
              </div>
            </div>
          </Graph>
        </li>
        <li>
          <div>
            <img src="../images/icon_goldmedal.png" alt="1위 금메달" />
            <p>법사케피</p>
            <p>
              순위 <em>1위</em>
            </p>
            <p>
              누적포인트 <em>6,991PT</em>
            </p>
            <img src="../images/rank_character.png" alt="랭킹 캐릭터" />
          </div>
          <Graph>
            <div>
              <p>승률</p>
              <div>
                <p>{`${Math.ceil(0.75 * 100)}%`}</p>
                <svg>
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="#ebebeb"
                    strokeWidth="5"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="#07f"
                    strokeWidth="5"
                    strokeDasharray={`${2 * Math.PI * 28 * 0.75} ${
                      2 * Math.PI * 28 * 0.25
                    }`}
                    // 이 작업을 밑에 애니메이션에서 시도해보기
                    strokeDashoffset={2 * Math.PI * 28 * 0.25}
                  />
                </svg>
              </div>
            </div>
            <div>
              <p>리타이어율</p>
              <div>
                <p>{`${Math.ceil(0.75 * 100)}%`}</p>
                <svg>
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="#ebebeb"
                    strokeWidth="5"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="#f62459"
                    strokeWidth="5"
                    strokeDasharray={`${2 * Math.PI * 28 * 0.75} ${
                      2 * Math.PI * 28 * 0.25
                    }`}
                    // 이 작업을 밑에 애니메이션에서 시도해보기
                    strokeDashoffset={2 * Math.PI * 28 * 0.25}
                  />
                </svg>
              </div>
            </div>
          </Graph>
        </li>
      </HighRanking>
    </section>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 380px;
  margin-top: 20px;
`;
const HighRanking = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 120px;
  margin: 50px 0 30px 0;
  li {
    flex: 1;
    height: 250px;
    position: relative;
    margin: 0 20px;
    background-color: #fff;
    border-radius: 10px;
    & > div:nth-of-type(1) {
      background-image: url('../images/background_flag.png');
      background-position: right;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 10px;
      padding: 40px 40px 10px 40px;
      height: 55%;
      img:nth-of-type(1) {
        position: absolute;
        top: -15px;
        left: 8px;
      }
      img:nth-of-type(2) {
        height: 140px;
        position: absolute;
        top: -15px;
        right: -25px;
      }
      p {
        font-size: 0.85rem;
        line-height: 20px;
        em {
          margin-left: 3px;
          font-weight: 600;
        }
      }
      p:nth-of-type(1) {
        color: #07f;
        font-weight: 600;
        font-size: 1.2rem;
        margin-bottom: 20px;
      }
    }
  }
`;

const Graph = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #07f;
  width: 100%;
  height: 45%;
  padding: 10px 0;
  & > div:nth-child(1) {
    position: relative;
    &::after {
      position: absolute;
      content: ' ';
      display: block;
      top: 20px;
      right: 0;
      width: 1px;
      height: 75px;
      background-color: #f2f2f2;
      border: none;
      opacity: 1;
    }
  }
  div {
    height: 100%;
    width: 100%;
    p {
      font-size: 0.8rem;
      text-align: center;
    }
    div {
      width: 80px;
      height: 80px;
      position: relative;
      margin: 0 auto;
      p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1rem;
      }
      svg {
        width: 80px;
        height: 80px;
        display: block;
        position: relative;
        circle {
          animation: circle-fill-animation 2s ease;
          transition: all 2s;

          @keyframes circle-fill-animation {
            0% {
              stroke-dasharray: 0 ${2 * Math.PI * 40};
            }
            /* 100% {
          stroke-dasharray: 0 ${2 * Math.PI * 40};
        } */
          }
        }
      }
    }
    &:nth-of-type(1) > div > p {
      color: #07f;
    }
    &:nth-of-type(2) > div > p {
      color: #f62459;
    }
  }
`;

const ChannelTab = styled.div`
  ul {
    display: flex;
    align-items: center;
    padding-right: 10px;
    li {
      border-style: solid;
      border-color: #fff;
      width: 50px;
      height: 25px;
      text-align: center;
      line-height: 23px;
      font-size: 0.75rem;
      background-color: #005fcc;
      color: #fff;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: #005fcc;
      }
      &.active {
        background-color: #fff;
        color: #005fcc;
      }
      &:nth-of-type(1) {
        border-width: 0.7px 0 0.7px 0.7px;
        border-radius: 5px 0 0 5px;
      }
      &:nth-of-type(2) {
        border-width: 0.7px 0px 0.7px 0.7px;
        border-radius: 0 0 0 0;
      }
      &:nth-of-type(3) {
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
`;

const Tabs = styled.li``;

HighRankingList.propTypes = {};

export default HighRankingList;
