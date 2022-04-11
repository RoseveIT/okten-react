
const SingleUser = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <span>{id} - {name} - {username} -- {email}</span>
        </div>
    );
};

export {SingleUser};