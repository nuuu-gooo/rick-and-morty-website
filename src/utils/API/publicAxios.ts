import axios from "axios";

export const public_axios = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});
