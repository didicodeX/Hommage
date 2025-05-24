import axios from "axios";
import { API_URL } from "../config/env.config";

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, 
});
