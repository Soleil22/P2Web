import { createBrowserRouter } from "react-router-dom";
//import App from "../App";
import Home from "../Pages/Home";
import PlanetInformation from "../Pages/PlanetInformation";

const router = createBrowserRouter([

    {
        path: "/", 
        element: <Home/>,
    },
    {
        path: "/PlanetInfo", 
        element: <PlanetInformation />,
    },
    


]);

export default router