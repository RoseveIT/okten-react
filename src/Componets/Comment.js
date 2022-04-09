import React from 'react';

const Comment = ({comment}) => {
    const {id, name, email}=comment;
    return (
        <div>
            <b>{id}</b> - {name} - {email}
        </div>
    );
};

export default Comment;