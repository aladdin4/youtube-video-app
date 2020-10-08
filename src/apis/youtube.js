import axios from "axios";

const KEY = "AIzaSyAoaXFQYWcr2gRsrJTSCIJFSKg0KUWyX9k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet",
    maxResult: 5,
  },
});
