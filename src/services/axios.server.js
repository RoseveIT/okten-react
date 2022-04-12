import axios from "axios";
import baseURL from "../constsnts/urls";

const axiosServer = axios.create({baseURL})

export {axiosServer}