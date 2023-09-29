import { Outlet } from "react-router-dom";
import Navber from "../components/Header/Navber/Navber";


const MainLayout = () => {
    return (
        <div>
           <Navber></Navber>
           <div className="py-20">
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default MainLayout;