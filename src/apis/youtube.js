import axios from "axios";

const KEY = "AIzaSyBYkZvFMFNmm_dj_SOZcc81TmeGDsrGpyI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet",
    maxResult: 5,
  },
});
