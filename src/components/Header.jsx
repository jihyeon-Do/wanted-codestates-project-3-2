import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Search from './Search';

const Header = props => {
  return (
    <HeaderComponent>
      <HeaderUtil>
        <nav className="inner">
          <div>
            <h1 className="kart-logo">
              <Link to="/">
                <img src="../images/logo_kart.png" alt="카트라이더" />
              </Link>
            </h1>
            <h2 className="tmi-logo">
              <Link to="/">
                <img
                  src="../images/tmi_logo_default_b.svg"
                  alt="카트라이더 전적 사이트"
                />
              </Link>
            </h2>
          </div>
          <Link to="/">카트라이더 홈페이지 바로가기</Link>
        </nav>
      </HeaderUtil>
      <HeaderSection>
        <nav className="inner">
          <h3 className="readable-hidden">메인메뉴</h3>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/">랭킹</Link>
            </li>
            <li>
              <Link to="/">카트</Link>
            </li>
            <li>
              <Link to="/">트렉</Link>
            </li>
          </ul>
          <Search />
        </nav>
      </HeaderSection>
    </HeaderComponent>
  );
};

const HeaderComponent = styled.header`
  width: 100%;
  background: transparent;
  box-sizing: border-box;
  & > div {
    width: 100%;
  }
  nav {
    width: 1300px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }
  a {
    color: #6c7a89;
  }
  li {
    list-style: none;
  }
`;
const HeaderUtil = styled.div`
  z-index: 20;
  nav {
    a {
      font-size: 0.7rem;
    }
    div {
      display: flex;
      height: 48px;
      align-items: center;
      a {
        display: block;
        cursor: pointer;
      }
      h1,
      h2 {
        padding: 10px;
      }
    }
  }
`;
const HeaderSection = styled.div`
  width: 100%;
  position: relative;
  background-color: #005fcc;
  nav {
    position: relative;
    height: 55px;
    z-index: 15;
    ul {
      line-height: 55px;
      display: flex;
      li {
        padding: 0 30px;
        margin-right: 30px;
        box-shadow: inset 0 -4px 0 0 pink;
        a {
          color: white;
          font-size: 0.9rem;
          font-weight: 500;
        }
      }
    }
  }
`;

Header.propTypes = {};

export default Header;
