import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
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