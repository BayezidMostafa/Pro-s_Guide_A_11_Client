import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Banner from "../../Pages/Home/Banner/Banner";
import Login from "../../Pages/Login/Login";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Banner /> },
            {path: '/login', element: <Login/>}
        ]
    }
])