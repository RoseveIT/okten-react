import {axiosServer} from "./axios.server";
import {urls} from "../constsnts";

const userService ={
    getAll:()=> axiosServer.get(urls.users)
}

export { userService}