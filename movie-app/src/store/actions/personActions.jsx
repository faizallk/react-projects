import axios from '../../../utils/Axios';
export {clearPersonInfo} from '../reducers/personSlice';
import { setPersonInfo } from '../reducers/personSlice';
export const getPersonDetails = (id) => async (dispatch,setState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    const externalIds = await axios.get(`/person/${id}/external_ids`);
    
  const ultimateDetails = {
       details: detail.data,
       externalIds: externalIds.data,
       combinedCredits: combinedCredits.data,
       movieCredits:movieCredits.data,
       tvCredits:tvCredits.data,
      
  };

 dispatch(setPersonInfo(ultimateDetails))
  } catch (error) {
    console.log(error);
  }
};
