import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Signup from "../../Pages/Signup/Signup";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage/>,
        children: [
            { path: '/', element: <Home /> },
            {path: '/login', element: <Login/>},
            {path: '/signup', element: <Signup/>},
            {path: '/myreviews', element: <MyReviews/>}
        ]
    }
])