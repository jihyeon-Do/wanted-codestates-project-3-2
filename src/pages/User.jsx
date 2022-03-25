import React from 'react';
import PropTypes from 'prop-types';
import { AiFillInfoCircle } from 'react-icons/ai';
import styled from 'styled-components';
import UserInfo from '../components/UserInfo';
import VirtualMatch from '../components/userDetail/VirtualMatch';
import UserDetailInfo from '../components/UserDetailInfo';
import { useSelector } from 'react-redux';

const User = props => {
  // const matchData = useSelector(state => state.dataReducer.data[0]?.matches);

  return (
    <UserMainComponent>
      <p>
        <span>
          <AiFillInfoCircle size={13} aria-hidden="true" />
        </span>
        카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다.
      </p>
      <BasicInfo className="userInfo">
        <h3 className="readable-hidden">유저기본정보</h3>
        <UserInfo />
      </BasicInfo>
      <VirtualMatch />
      <UserDetailInfo />
    </UserMainComponent>
  );
};

const UserMainComponent = styled.main`
  width: 1300px;
  margin: 0 auto;
  & > p {
    display: flex;
    font-size: 0.7rem;
    align-items: center;
    color: #1f334a;
    padding: 20px 0 10px 0;
    span {
      margin-right: 7px;
    }
  }
`;

const BasicInfo = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  background-image: url('../images/background_flag.png');
  border-width: 1px 1px 1px 4px;
  border-style: solid;
  border-color: #f2f2f2 #f2f2f2 #f2f2f2 #07f;
  padding: 30px 0;
`;

User.propTypes = {};

export default User;
