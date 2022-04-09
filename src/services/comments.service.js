import {constants} from "../constsnts";

export const commentsService = {
    getAllComments: () =>fetch(constants.apiUrl + 'comments').then(data => data.json())
}