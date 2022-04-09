import React from 'react';

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <b>{id}</b> - {title}
        </div>
    );
};

export default Post;