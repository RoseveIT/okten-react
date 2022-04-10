import React from 'react';

const User = ({user}) => {

    return (
        <div>
            {user.id} - {user.name} - {user.username}
        </div>
    );
};

export {User};