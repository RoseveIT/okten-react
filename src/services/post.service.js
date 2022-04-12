import {axiosServer} from "./axios.server";
import {urls} from "../constsnts";

const  postService ={
    getPostByUserId:(userId)=>axiosServer.get(`${urls.posts}?userId=${userId}`)
}

export {postService}