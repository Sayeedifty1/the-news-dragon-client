import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../layouts/Main";
import NewsLayout from "../layouts/NewsLayout";
import Category from "../pages/Home/Category/Category";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register/Register";
import News from "../pages/News/News";
import Terms from "../pages/Shared/Terms/Terms";
import PrivateRoute from '../routes/PrivateRoute'

const router = createBrowserRouter([

    {
        path:"/",
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:'terms',
                element:<Terms></Terms>
            }
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            // {
            //     path: '/',
            //     element: <Navigate to="/category/0"></Navigate>
                
            // },
            {
                path: ":id",
                element:<Category></Category>,
                loader: ({params}) => fetch(`https://the-news-dragon-server-sayeedifty1.vercel.app/categories/${params.id}`)
            },
           

        ]
    },
    {
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id',
                element:<PrivateRoute><News></News></PrivateRoute> ,
                loader: ({params}) => fetch(`https://the-news-dragon-server-sayeedifty1.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;