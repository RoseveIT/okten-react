import {useSelector} from "react-redux";
import {User} from "./User";

const Users7 = () => {
    const {users} = useSelector(state => state.user);
    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users7};