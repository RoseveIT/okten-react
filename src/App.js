import {Routes, Route} from "react-router-dom";
import {MainLayout} from "./layout";
import {AboutPage, HomePage, PostsPage, UsersPage} from "./pages";

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route path={'/home'} element={<HomePage/>}/>
            <Route path={'/users'} element={<UsersPage/>}/>
            <Route path={'/posts'} element={<PostsPage/>}/>
            <Route path={'/about'} element={<AboutPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
