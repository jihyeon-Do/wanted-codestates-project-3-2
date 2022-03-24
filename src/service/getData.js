import axios from 'axios';
import { headers } from '../constants';

export const fetchUserData = async (nickname, num) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `/api/users/nickname/${nickname}`,
      headers,
    });
    const accessId = response.data.accessId;
    if (num === 1) {
      const userMatchInfo = await axios({
        method: 'GET',
        url: `/api/users/${accessId}/matches?limit=${200}&match_types=7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a`,
        headers,
      });
      return userMatchInfo.data;
    } else {
      const userMatchInfo = await axios({
        method: 'GET',
        url: `/api/users/${accessId}/matches?limit=${200}&match_types=effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e`,
        headers,
      });
      return userMatchInfo.data;
    }
  } catch (error) {
    // 사용자가 없을때 예외처리 해주기
    console.log(error);
  }
};
