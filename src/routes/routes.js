import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllCourses from "../Pages/AllCourses/AllCourses";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/courses',
        element: <AllCourses></AllCourses>,
        loader: () => fetch('http://localhost:5000/courses')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
    ]
  }
]);