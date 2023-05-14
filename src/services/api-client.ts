// this api needs vpn otherwise it does not show the components of the games
import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "70efeecf71a04218bb043d6703a7f4c9",
  },
});
