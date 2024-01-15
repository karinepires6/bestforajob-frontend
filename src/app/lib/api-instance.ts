import axios from "axios";

export function useApiClient() {
  const instance = axios.create({
    baseURL: "http://localhost:8000/",
  });

  return instance;
}
