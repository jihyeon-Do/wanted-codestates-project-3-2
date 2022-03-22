import React from 'react';
import PropTypes from 'prop-types';
import { IoMdArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

const Matches = props => {
  return (
    <MatchesComponent className="matches">
      <section>
        <div>
          <p>11시간전</p> <p>#리타이어</p>
        </div>
        <div>
          <p>쥐라기 공룡 무덤</p>
          <p>어벤저 V1</p>
          <p>1{'01'}81</p>
          <button>
            <IoMdArrowDropdown aria-hidden="true" />
          </button>
        </div>
      </section>
      <section>
        <div>
          <p>11시간전</p> <p>#리타이어</p>
        </div>
        <div>
          <p>쥐라기 공룡 무덤</p>
          <p>어벤저 V1</p>
          <p>1{'01'}81</p>
          <button>
            <IoMdArrowDropdown aria-hidden="true" />
          </button>
        </div>
      </section>
      <section>
        <div>
          <p>11시간전</p> <p>#리타이어</p>
        </div>
        <div>
          <p>쥐라기 공룡 무덤</p>
          <p>어벤저 V1</p>
          <p>1{'01'}81</p>
          <button>
            <IoMdArrowDropdown aria-hidden="true" />
          </button>
        </div>
      </section>
    </MatchesComponent>
  );
};

const MatchesComponent = styled.article`
  flex: 1;
`;
Matches.propTypes = {};

export default Matches;
