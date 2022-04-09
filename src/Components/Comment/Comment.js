export const Comment = ({comment}) => {
    return (
        <div>
            <span>{comment.id} > {comment.name} > {comment.email}</span>
        </div>
    );
};
