import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layouts/Main";
import NewsLayout from "../layouts/NewsLayout";
import Category from "../pages/Home/Category/Category";
import Home from "../pages/Home/Home/Home";
import News from "../pages/News/News";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
                
            },
            {
                path: "/category/:id",
                element:<Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
           

        ]
    },
    {
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id',
                element:<News></News>,
                loader: ({params}) => fetch(`https://the-news-dragon-server-jhankarphero.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;