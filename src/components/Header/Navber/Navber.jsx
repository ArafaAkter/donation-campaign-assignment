import { NavLink } from "react-router-dom";
const Navber = () => {
    return (
        <div className="flex justify-around items-center">
            <div>
               <img src="/Resources/Logo.png" alt="" srcset="" />
            </div>
           <div>
           <nav>
                
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
        </div>
    );
};

export default Navber;