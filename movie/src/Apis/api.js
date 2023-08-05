import { Axios } from "./@core";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const PATH = "/movie";
const LANGUAGE = "ko-KR";

export const getMovies = async (pageParam) => {
  const res = await Axios.get(`${PATH}/popular?api_key=${API_KEY}`, {
    params: {
      page: pageParam,
      language: LANGUAGE,
    },
  });
  return res.data;
};

export const getUpComing = async (pageParam) => {
  const res = await Axios.get(`${PATH}/upcoming?api_key=${API_KEY}`, {
    params: {
      page: pageParam,
      language: LANGUAGE,
    },
  });
  return res.data;
};

export const getTopRated = async (pageParam) => {
  const res = await Axios.get(`${PATH}/top_rated?api_key=${API_KEY}`, {
    params: {
      page: pageParam,
      language: LANGUAGE,
    },
  });
  return res.data;
};

export const getNowPlaying = async (pageParam) => {
  const res = await Axios.get(`${PATH}/now_playing?api_key=${API_KEY}`, {
    params: {
      page: pageParam,
      language: LANGUAGE,
    },
  });
  return res.data;
};

export const getSearch = async ({ title }) => {
  const res = await Axios.get(`/search/movie?api_key=${API_KEY}`, {
    params: {
      page: 1,
      language: LANGUAGE,
      query: title,
      include_adult: false,
    },
  });
  return res.data;
};

export const getDetail = async ({ movieId }) => {
  const res = await Axios.get(`${PATH}/${movieId}?api_key=${API_KEY}`, {
    params: {
      language: LANGUAGE,
      append_to_response: ("images", "videos"),
    },
  });
  return res.data;
};
