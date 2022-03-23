import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Chart, registerables } from 'chart.js';

const TrackOrCart = props => {
  const canvasDom = useRef(null);
  const chartX = [
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
    '이전1경기',
  ];
  useEffect(() => {
    const ctx = canvasDom.current.getContext('2d');
    Chart.register(...registerables);

    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: chartX,
        datasets: [
          {
            label: '순위',
            data: [
              1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2,
              3, 4, 5, 6, 4, 3, 2, 1,
            ],
            backgroundColor: 'rgba(0,119,255,.05)',
            borderColor: '#07f',
            borderWidth: 1,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        lineTension: 0.8,
        animations: {
          radius: {
            duration: 400,
            easing: 'linear',
            loop: context => context.active,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
    return () => {
      myChart.destroy();
    };
  }, []);
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
            평균 상위<em>5.61</em>%
          </p>
        </div>
        <Graph>
          <p>
            차이나 용의 운하 <span>기록분포</span>
          </p>
          <div>
            <canvas ref={canvasDom}></canvas>
          </div>
        </Graph>
      </TrackOrKartComponent>
      <Table>
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
                <img src="../images/unknown_1.png" alt="" />
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
                <img src="../images/unknown_1.png" alt="" />
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
                <img src="../images/unknown_1.png" alt="" />
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
                <img src="../images/unknown_1.png" alt="" />
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
                <img src="../images/unknown_1.png" alt="" />
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
                <img src="../images/unknown_1.png" alt="" />
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
                <img src="../images/unknown_1.png" alt="" />
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
                <img src="../images/unknown_1.png" alt="" />
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
                <img src="../images/unknown_1.png" alt="" />
                마비노기 티르코네
              </td>
              <td>10</td>
              <td>80%</td>
              <td>1{'01'}81</td>
              <td>1%</td>
            </tr>
          </tbody>
        </table>
      </Table>
    </article>
  );
};

const TabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: transparent;
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
  background-color: #fff;
  padding: 30px;
  border-top: 1px solid #f2f2f2;
  border-left: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;
  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px 15px 5px;
    border-bottom: 1px solid #ccc;
    h4 {
      font-size: 0.9rem;
      font-weight: 500;
      em {
        color: #07f;
      }
    }
    p {
      font-weight: 500;
      font-size: 0.8rem;
      em {
        color: #07f;
        margin-left: 7px;
      }
    }
  }
`;

const Graph = styled.div`
  font-weight: 400;
  font-size: 0.9rem;
  p {
    padding: 20px 0;
    span {
      color: #a1a1a1;
      margin-left: 5px;
    }
  }
  div {
  }
`;

const Table = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid #f2f2f2;
  border-collapse: collapse;
  font-weight: 300;
  font-size: 0.8rem;
  overflow-y: scroll;
  table {
    width: 100%;
  }
  tbody {
    background-color: #fff;
  }
  th {
    border-right: 1px solid #f2f2f2;
    padding: 10px;
    font-weight: 500;
  }
  td {
    padding: 8px 0;
    text-align: center;
    img {
      height: 25px;
      vertical-align: middle;
      display: inline-block;
      margin-right: 10px;
    }
  }
`;

TrackOrCart.propTypes = {};

export default TrackOrCart;
