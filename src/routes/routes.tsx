import { createBrowserRouter } from "react-router-dom";
// pages
import MAIN from '../pages/main';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MAIN />
    }
])