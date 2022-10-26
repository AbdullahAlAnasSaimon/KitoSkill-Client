import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllCourses from "../Pages/AllCourses/AllCourses";
import Checkout from "../Pages/Checkout/Checkout";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
        path: '/courses/:courseId',
        element: <CourseDetails></CourseDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/courses/${params.courseId}`)
      },
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
    ],
  },
  {
    path: '*',
    element: <h1>404 Not Found!</h1>
  }
]);