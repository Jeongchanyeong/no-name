import axios from 'axios';
import { BASE_URL } from '../share/utils/OAuth';
import { getCookie } from '../cookie';

const token = getCookie('Authorization');
// 서버에서 isClean true false 받아오는 함수
export const trashStatusCheck = async (): Promise<boolean> => {
  try {
    const res = await axios.get<{ data: { isClean: boolean } }>(`${BASE_URL}/trash/status`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return res.data.data.isClean;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('err:', error.response?.data);
    } else {
      console.error('err:', error);
    }
    throw error;
  }
};
