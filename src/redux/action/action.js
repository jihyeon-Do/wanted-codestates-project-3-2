export const SEARCH_USER = 'SEARCH_USER';

export const searchUser = payload => {
  return {
    type: SEARCH_USER,
    payload,
  };
};
