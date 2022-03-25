import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Comment = props => {
  const matchData = useSelector(state => state.dataReducer.data?.matches);
  const [comments, setComments] = useState([]);

  const formtag = useRef(null);
  const nickRef = useRef(null);
  const commentRef = useRef(null);

  const maxId = () => {
    let commentsId = comments.map(v => v.id);
    return Math.max(0, ...commentsId) + 1;
  };

  function handleAddComment() {
    const commentNickName = nickRef.current.value;
    const comment = commentRef.current.value;
    setComments([
      ...comments,
      { id: maxId(), nickName: commentNickName, comment: comment },
    ]);
  }

  return (
    <>
      {matchData && (
        <CommentComponent className="cheering">
          <div>
            <h4>
              <em>응원</em> 한마디
            </h4>
            <p>
              <span>오늘 {comments.length}개</span>
              <span>전체 {comments.length}개</span>
            </p>
          </div>
          <div>
            <ul>
              {comments.map((v, i) => (
                <li key={i}>
                  <p>{v.nickName}</p>
                  <p>{v.comment}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <form action="/detail" ref={formtag}>
              <input type="text" placeholder="닉네임" ref={nickRef} />
              <input type="text" placeholder="최대 30자" ref={commentRef} />
              <button type="button" onClick={handleAddComment}>
                남기기
              </button>
            </form>
          </div>
        </CommentComponent>
      )}
    </>
  );
};

const CommentComponent = styled.article`
  position: relative;
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
      span:nth-of-type(1) {
        margin-right: 10px;
      }
    }
  }
  & > div:nth-of-type(2) {
    padding: 20px 10px 0 10px;
    width: 100%;
    ul {
      li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        font-size: 0.9rem;
        p:nth-child(1) {
          color: #07f;
          margin-right: 10px;
          flex: 1;
        }
        p:nth-child(2) {
          flex: 7;
          border: 1px solid #c3ced5;
          padding: 10px 15px;
          border-radius: 10px;
        }
      }
    }
  }
  & > div:nth-of-type(3) {
    border-top: 1px solid #f2f2f2;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0%);
    width: calc(100% - 40px);
    form {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
      input {
        display: block;
        height: 30px;
        margin-right: 10px;
        border: 0;
        outline: 0;
        border-bottom: 1px solid #ccc;
      }
      & > input:nth-of-type(1) {
        width: 20%;
      }
      & > input:nth-of-type(2) {
        width: 60%;
      }
      button {
        display: block;
        width: 18%;
        background-color: #f62459;
        color: #fff;
        border: 0;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        font-weight: 600;
        font-size: 0.8rem;
      }
    }
  }
`;

Comment.propTypes = {};

export default Comment;
