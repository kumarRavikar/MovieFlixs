
import MovieList from "./components/MovieList.js";
import Navbar from "./components/navBar.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartItems } from "../src/components/CartItems.js";
import {SignUpPage} from "./components/SignUpPage.js"
import LoginPage from "./components/LoginPage.js"
import ProtectedRoute from "./redux/ProtectRout.js";
import { MovieDetails } from "./components/MovieDetails.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { listenToAuthChanges } from "./redux/AuthSlice.js";




const App = () => {
  const dispatch = useDispatch();
  // for listning firebase user prevent for redirect to login page on refresh 
  useEffect(()=>{
    dispatch(listenToAuthChanges())
  },[dispatch])
     const router = createBrowserRouter([
           {path:"/", element:<SignUpPage/>},
           {path:"/login",element:<LoginPage/>},
          {path:"/movie", element:(<ProtectedRoute><Navbar/> </ProtectedRoute>  ), children:[
            {index:true, element:(<ProtectedRoute><MovieList/></ProtectedRoute>)}
          ]},
          {path:"/cartItems", element:(<ProtectedRoute><CartItems/></ProtectedRoute>   )},
          {path:"/movie/:id",element:(<ProtectedRoute><MovieDetails/></ProtectedRoute>)}
     ])
     return <RouterProvider router={router}/>
};

export default App;
