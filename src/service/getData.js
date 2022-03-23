import axios from 'axios';
import { headers } from '../constants';

export const fetchUserData = async nickname => {
  try {
    const response = await axios({
      method: 'GET',
      url: `/api/users/nickname/${nickname}`,
      headers,
    });
    const accessId = response.data.accessId;
    const userMatchInfo = await axios({
      method: 'GET',
      url: `/api/users/${accessId}/matches?limit=${200}`,
      headers,
    });
    return userMatchInfo.data;
  } catch (error) {
    // 사용자가 없을때 예외처리 해주기
    console.log(error);
  }
};
