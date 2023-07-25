import axios from 'axios';

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  params: {
    api_key: '5e2ffb3029a0682b7fb21b7f3e8432ec',
  },
});

export const requestMovies = async endPoint => {
  const { data } = await instance.get(endPoint);
  return data;
};
