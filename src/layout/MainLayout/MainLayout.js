import {Outlet, Link, NavLink, useNavigate} from "react-router-dom"
import css from "./MainLayout.module.css"
import {useAuth} from "../../hooks";

const MainLayout = () => {
    const navigate = useNavigate();
    const {user, logOut} = useAuth()
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/users">users</NavLink>
                <NavLink to="/posts" replace>posts</NavLink>
                <NavLink to="/about">about</NavLink>
                {user && <h1>{user}<button onClick={()=>logOut(()=>navigate('/'))}>LogOut</button></h1>}
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};