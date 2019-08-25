import axios from "axios";

const KEY = "AIzaSyB0V4SoeHorbrVkFGs8YngDveGE1qHAuxA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
