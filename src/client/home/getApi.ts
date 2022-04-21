import Axios from '../services';

export const Service = async () => {
  try {
    return await Axios.get(`/api/digimon`);
  } catch (error: any) {
    return error.response;
  }
};
