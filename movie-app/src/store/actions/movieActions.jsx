import axios from '../../../utils/Axios';
export {clearMovieInfo} from '../reducers/movieSlice';
import { setMovieInfo } from '../reducers/movieSlice';
export const getMovieDetails = (id) => async (dispatch,setState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const credits = await axios.get(`/movie/${id}/credits`);
    const watchProviders = await axios.get(`/movie/${id}/watch/providers`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const reviews = await axios.get(`/movie/${id}/reviews`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const externalIds = await axios.get(`/movie/${id}/external_ids`);
    
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
  dispatch(setMovieInfo(ultimateDetails));
  } catch (error) {
    console.log(error);
  }
};
