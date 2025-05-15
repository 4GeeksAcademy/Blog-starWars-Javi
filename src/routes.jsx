import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/favorites";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/favorites", element: <Favorites /> },
        ],
    },
]);

export default router;
