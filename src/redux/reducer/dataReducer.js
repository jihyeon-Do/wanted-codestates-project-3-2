import { SEARCH_USER } from '../action/action';
import data from '../../data';

const initialState = {
  data: data,
};

export const dataReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case SEARCH_USER: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
