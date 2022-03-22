import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TrackOrCart = props => {
  const TabList = [
    {
      id: 1,
      content: '트랙',
    },
    {
      id: 2,
      content: '카트',
    },
  ];
  const [tabNumber, setTabNumber] = useState(1);
  const [clickedTab, setClickedTab] = useState([]);

  function tabOnClick(e, id) {
    if (!e.target.matches('.menu')) return;
    setTabNumber(id);
  }

  return (
    <article className="track-or-kart">
      <TabWrapper>
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
      </TabWrapper>
      <TrackOrKartComponent className="graph">
        <div>
          <h4>
            <em>트랙</em> 전적
          </h4>
          <p>
            평균 상위
            <span>5.61</span>%
          </p>
        </div>
        <div>
          <p>차이나 용의 운하 기록분포</p>
          <div>그래프</div>
        </div>
      </TrackOrKartComponent>
      <table className="select-list">
        <thead>
          <tr>
            <th>선택</th>
            <th>트랙</th>
            <th>횟수</th>
            <th>승률</th>
            <th>기록</th>
            <th>상위</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="radio" name="track" />
            </td>
            <td>
              <img src="" alt="" />
              마비노기 티르코네
            </td>
            <td>10</td>
            <td>80%</td>
            <td>1{'01'}81</td>
            <td>1%</td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="track" />
            </td>
            <td>
              <img src="" alt="" />
              마비노기 티르코네
            </td>
            <td>10</td>
            <td>80%</td>
            <td>1{'01'}81</td>
            <td>1%</td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="track" />
            </td>
            <td>
              <img src="" alt="" name="track" />
              마비노기 티르코네
            </td>
            <td>10</td>
            <td>80%</td>
            <td>1{'01'}81</td>
            <td>1%</td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="track" />
            </td>
            <td>
              <img src="" alt="" />
              마비노기 티르코네
            </td>
            <td>10</td>
            <td>80%</td>
            <td>1{'01'}81</td>
            <td>1%</td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="track" />
            </td>
            <td>
              <img src="" alt="" />
              마비노기 티르코네
            </td>
            <td>10</td>
            <td>80%</td>
            <td>1{'01'}81</td>
            <td>1%</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};

const TabWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  background: transparent;
  border-bottom: 1px solid #ccc;
  margin-top: 20px;
  ul {
    display: flex;
    list-style: none;
    padding-bottom: 0;
  }
  div {
    display: flex;
    align-items: center;
  }
`;
const Tabs = styled.li`
  text-align: center;
  font-weight: 500;
  font-size: 0.8rem;
  width: 120px;
  height: 40px;
  line-height: 40px;
  color: #a1a1a1;
  background-color: #ebebeb;
  cursor: pointer;
  &.active {
    background: #fff;
    color: #07f;
    transition: all 0.5s;
  }
  &.active::after {
    content: ' ';
    display: block;
    width: 100%;
    bottom: -1px;
    height: 2px;
    background-color: #07f;
    border: none;
    opacity: 1;
  }
`;

const TrackOrKartComponent = styled.div`
  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px 15px 5px;
    border-bottom: 1px solid #ccc;
    h4 {
      font-size: 0.9rem;
      font-weight: bold;
      em {
        color: #07f;
      }
    }
    p {
      font-weight: bold;
      font-size: 0.8rem;
    }
  }
  & > div:nth-of-type(2) {
    padding: 60px 0;
  }
`;
TrackOrCart.propTypes = {};

export default TrackOrCart;
