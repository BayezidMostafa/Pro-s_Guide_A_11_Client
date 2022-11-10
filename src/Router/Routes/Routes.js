import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Signup from "../../Pages/Signup/Signup";
import AddService from "../../Pages/AddService/AddService";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/signup', element: <Signup /> },
            { path: '/myreviews', element: <MyReviews /> },
            { path: '/services', element: <Services /> },
            {
                path: '/services/:id',
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            { path: '/blog', element: <Blog /> },
            { path: '/addservice', element: <AddService/> }
        ]
    }
])