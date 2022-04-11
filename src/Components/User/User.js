import React from 'react';

const User = ({user}) => {
    const {id, user, username} = user;
    return (
        <div>
            <span>{id} - {name} - {username}</span>
        </div>
    );
};

export {User};