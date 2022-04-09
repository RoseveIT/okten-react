export const User = ({user}) => {

    return  (
        <div>
            <span>{user.id}-{user.name}-{user.username}-{user.email}</span>
            <hr/>
        </div>
    );
};
