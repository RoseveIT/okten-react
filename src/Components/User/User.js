import React from 'react';

const User = ({user, getUserId, getUser}) => {
    const {id, name, username} = user;
    return (
        <div>
            <span>{id} - {name} - {username}</span>
            <button onClick={()=> {
                getUserId(id)
                getUser(user)
            }} >clc</button>
        </div>
    );
};

export {User};