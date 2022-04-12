import css from './App.module.css'
import {Posts, UserDetails, Users} from "./components";
import {useState} from "react";
import {postService} from "./services";

function App() {
    const [userDetails, setUserDetails] = useState(null);
    const [posts, setPosts] = useState([]);

    const getUserId = async (userId) => {
        const {data} = await postService.getPostByUserId(userId);
        setPosts(data)
    }

    const trigger = () =>{
        setPosts([])
    }
  return (
    <div>
      <div className={css.wrap} >
        <Users setUserDetails={setUserDetails} trigger={trigger} />
          {userDetails && <UserDetails userDetails={userDetails} getUserId={getUserId} />}
      </div>
        <div className={css.center}>
            <Posts posts={posts} />
        </div>
    </div>
  );
}

export default App;
