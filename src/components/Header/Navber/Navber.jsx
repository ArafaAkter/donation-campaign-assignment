import { NavLink } from "react-router-dom";
import Logo from "./logo";
const Navber = () => {
    return (
        <div>
           <nav className="lg:flex justify-around items-start  py-10 md:flex">
                <Logo></Logo>
                <ul className="flex gap-5 ">
                    <li>
                    <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }
                    >
                    Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                    to="/donation"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }
                    >
                    Donation
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                    to="/statistics"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }
                    >
                    Statistics
                    </NavLink>
                    </li>
                </ul>
            </nav>
           </div>
       
    );
};

export default Navber;