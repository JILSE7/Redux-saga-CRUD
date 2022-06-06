
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from "../components";
import { Home, UserInfo, User, NotFound, About } from "../pages";


// import your route components too



const SagaRouter = () => {
  return (
      <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route index element={<Home />} />
            <Route path="user" element={<User/>} >
                <Route path=":id" element={<User/>}/>
            </Route>
            <Route path="userInfo" >
                <Route path=":id" element={<UserInfo/>}/>
            </Route>
            
            <Route path="about" element={<About/>}/>
            <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
      </>

  )
}

export default SagaRouter;

