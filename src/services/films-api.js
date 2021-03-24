import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ffddee44025dd24685ea61d637d56d24';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

const fetchTrends = async () => {
  const response = await axios.get('/trending/all/day');

  //   console.log(response.data.results);

  return response.data.results;
};

const filmsApi = { fetchTrends };

export default filmsApi;
