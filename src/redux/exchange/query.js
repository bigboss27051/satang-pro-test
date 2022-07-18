import axios from "axios";

export const getExchange = () =>
  axios.get("https://satangcorp.com/api/v3/ticker/24hr");
