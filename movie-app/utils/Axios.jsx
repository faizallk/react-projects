import axios from 'axios';

const instance = axios.create({

  baseURL: 'https://www.omdbapi.com/',
  
 params: {
    apikey: "e61afff"
  }
});

export default instance
