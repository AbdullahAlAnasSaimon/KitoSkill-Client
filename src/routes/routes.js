import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllCourses from "../Pages/AllCourses/AllCourses";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import UserProfile from "../Pages/UserProfile/UserProfile";
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
        loader: () => fetch('https://kito-skill-server.vercel.app/courses')
      },
      {
        path: '/courses/:courseId',
        element: <CourseDetails></CourseDetails>,
        loader: ({params}) => fetch(`https://kito-skill-server.vercel.app/courses/${params.courseId}`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>
      },
      {
        path: '/profile',
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
      {
        path: '/checkout/:Id',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader: ({params}) => fetch(`https://kito-skill-server.vercel.app/courses/${params.Id}`)
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