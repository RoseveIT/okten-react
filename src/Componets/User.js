import React from 'react';

const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <b>{id} - {name} - {username}</b> - {email}
        </div>
    );
};

export default User;