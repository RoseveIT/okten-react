import {constants} from "../constsnts";

export const postsService = {
    getAllPosts: () =>fetch(constants.apiUrl + 'posts').then(data => data.json())
}