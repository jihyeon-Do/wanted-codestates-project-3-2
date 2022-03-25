import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoReloadOutline, IoShareSocialSharp } from 'react-icons/io5';
import { BsFillBellFill } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import MatchTypeTab from './MatchTypeTab';

const UserInfo = props => {
  const matchData = useSelector(state => state.dataReducer.data?.matches);
  const nickname = useSelector(state => state.dataReducer.data?.nickName);

  return (
    <Profile>
      {matchData && (
        <UserCharacter>
          <img
            src={`../images/character/${matchData[0].matches[0].character}.png`}
            alt="유저 캐릭터"
          />
        </UserCharacter>
      )}
      <ProfileView>
        <p>
          {nickname}
          <span>
            <img src="../images/example_license.png" alt="라이센스 등급" />
          </span>
        </p>
        <Wrapper>
          <MatchTypeTab nickname={nickname} />
          <ProfileMenu>
            <ul>
              <li>
                <span>
                  <IoReloadOutline aria-hidden="true" size={14} />
                </span>
                전적갱신
              </li>
              <li>
                <span>
                  <BsFillBellFill aria-hidden="true" size={14} />
                </span>
                신고하기
              </li>
              <li>
                <span>
                  <IoShareSocialSharp aria-hidden="true" size={14} />
                </span>
                공유하기
              </li>
            </ul>
          </ProfileMenu>
        </Wrapper>
      </ProfileView>
      <PageView>
        <p>
          <span>
            <FaEye aria-hidden="true" size={15} />
            페이지뷰
          </span>
          <span>2,053</span>
        </p>
      </PageView>
    </Profile>
  );
};

const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

const UserCharacter = styled.div`
  img {
    height: 120px;
    display: block;
  }
`;

const ProfileView = styled.div`
  p {
    font-size: 45px;
    font-weight: 700;
    color: #1f334a;
    margin-bottom: 30px;
    span {
      img {
        height: 25px;
        margin-bottom: 5px;
        margin-left: 5px;
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ProfileMenu = styled.div`
  ul {
    display: flex;
    align-items: center;
    padding-left: 10px;
    li {
      font-size: 0.75rem;
      padding: 6px 10px;
      border-style: solid;
      border-radius: 20px;
      border-width: 0.7px;
      margin-right: 10px;
      cursor: pointer;
      span {
        margin-right: 5px;
        svg {
          vertical-align: text-bottom;
        }
      }
    }
  }
`;
const PageView = styled.div`
  width: 200px;
  padding: 10px;
  text-align: center;
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -30px;
  color: #6c7a89;
  p {
    span {
      font-size: 0.9rem;
      display: block;
      svg {
        vertical-align: top;
        margin-right: 5px;
      }
    }
    & > span:nth-of-type(2) {
      font-size: 1.3rem;
      margin-top: 10px;
    }
  }
`;

UserInfo.propTypes = {};

export default UserInfo;
