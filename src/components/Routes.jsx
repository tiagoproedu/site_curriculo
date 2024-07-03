import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import Repos from "../pages/Repos/Repos";

const AppRoutes = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="/repos" Component={Repos}/>
                </Routes>
            </BrowserRouter>
    );
}

export default AppRoutes;