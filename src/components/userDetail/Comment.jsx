import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Comment = props => {
  const matchData = useSelector(state => state.dataReducer.data?.matches);

  return (
    <>
      {matchData && (
        <CommentComponent className="cheering">
          <div>
            <h4>
              <em>응원</em> 한마디
            </h4>
            <p>
              <span>오늘 1개</span>
              <span>전체 1개</span>
            </p>
          </div>
          <div>댓글등록창</div>
          <div>댓글입력창</div>
        </CommentComponent>
      )}
    </>
  );
};

const CommentComponent = styled.article`
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
      span:nth-of-type(1) {
        margin-right: 10px;
      }
    }
  }
  & > div:nth-of-type(2) {
    padding: 60px 0;
  }
  & > div:nth-of-type(3) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #f2f2f2;
    padding: 15px 5px 0 5px;
    p {
      font-size: 0.9rem;
      em {
        color: #07f;
      }
    }
    & > p:nth-of-type(2) {
      font-size: 1.1rem;
      font-weight: bold;
    }
  }
`;

Comment.propTypes = {};

export default Comment;
