import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../service/getData';
import { searchUser } from '../redux/action/action';

const Search = props => {
  const dispatch = useDispatch();

  const searchValue = async e => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    const nickname = e.target.value;
    if (nickname === '') {
      alert('올바른 닉네임을 입력해주세요');
    } else {
      dispatch(searchUser(await fetchUserData(nickname)));
    }
  };

  return (
    <>
      <h3 className="readable-hidden">유저검색</h3>
      <Form>
        <fieldset>
          <input
            type="text"
            id="search"
            placeholder="닉네임 검색"
            onKeyDown={searchValue}
          />
          <button type="button" aria-label="검색버튼">
            <FiSearch size={20} aria-hidden="true" />
          </button>
        </fieldset>
      </Form>
    </>
  );
};

const Form = styled.form`
  fieldset {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    input {
      background-color: transparent !important;
      border: none;
      color: white;
      padding: 7px 10px;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }
    button {
      border: 0;
      background-color: transparent;
      cursor: pointer;
      svg {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
`;

Search.propTypes = {};

export default Search;
