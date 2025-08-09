import axios from '../../../utils/Axios';
export {clearTvInfo} from '../reducers/tvSlice';
import { setTvInfo } from '../reducers/tvSlice';
export const getTvDetails = (id) => async (dispatch,setState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const credits = await axios.get(`/tv/${id}/credits`);
    const watchProviders = await axios.get(`/tv/${id}/watch/providers`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const reviews = await axios.get(`/tv/${id}/reviews`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const externalIds = await axios.get(`/tv/${id}/external_ids`);
    
  const ultimateDetails = {
      details: detail.data,
      externalIds: externalIds.data,
      recommendations: recommendations.data.results,
      credits: credits.data,
      videos: videos.data.results.find(video => video.type === "Trailer"),
      reviews: reviews.data.results,
      similar: similar.data.results,
      watchProviders:watchProviders.data.results.IN
      
  };

 dispatch(setTvInfo(ultimateDetails))
  } catch (error) {
    console.log(error);
  }
};
