import {useContext, useEffect, useState} from "react";
import {postsService} from "../../services";
import {Post} from "../../components";
import {Outlet, useParams, useSearchParams} from "react-router-dom";
import {MyContext} from "../../index";

const PostsPage = () => {
    // const value = useContext(MyContext);
    const [posts, setPosts] = useState([]);
    const {userId} = useParams();
    const [query, setQuery] = useSearchParams({page:'1'});


    useEffect(()=>{
        if (userId){
            postsService.getByUserId(userId).then(({data})=>setPosts(data))
            // console.log(value)
        }else{
            postsService.getAll(query.get('page')).then(({data})=>setPosts(data))
            // console.log(value)
        }
    },[query])
    const nextPage = () => {
        // let page = query.get('page');
        // page = +page +1
        // setQuery({page:page.toString()})
        const queryObj = Object.fromEntries(query.entries())
        queryObj.page++
        setQuery(queryObj)
    }

    return (
        <div style={{display:'flex'}}>
            <div>{posts.map(post=><Post key={post.id} post={post} flag={!userId}/>)}</div>
            <button onClick={()=>nextPage()}>Next</button>
            <div><Outlet/></div>
        </div>
    );
}


export {PostsPage};