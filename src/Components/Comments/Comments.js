import {useEffect, useState} from "react";
import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";

export const Comments = () => {
    const [comments, setComments] = useState(null);
    useEffect(()=>{
        commentsService.getAllComments().then(data => setComments(data))
    },[])
    return (
        <div>
            {comments && comments.map((comment)=><Comment key={comment.id} comment={comment} />)}
        </div>
    );
};
