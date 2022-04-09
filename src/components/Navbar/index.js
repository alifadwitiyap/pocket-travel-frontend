import { NavLink } from "react-router-dom";
import NavbarAvatar from "../NavbarAvatar";
import navSelections from "./navSelections";

function Navbar() {
  return (
    <div className="w-full py-4 bg-white border-b-2 border-gray-300 flex justify-center">
      <div className="w-4/5 flex justify-between items-center">
        <h1 className="flex-auto lg:flex-[2_1_auto] font-bold text-2xl">
          Pocket<span className="text-indigo-500">Travel.</span>
        </h1>
        <div className="flex-auto flex justify-between items-center">
          {navSelections.map((item, index) => (
            <NavLink
              to={item.path}
              className={({ isActive }) => {
                return isActive ? "text-2xl text-blue-700" : "text-2xl";
              }}
              key={index}
            >
              {item.icon}
            </NavLink>
          ))}
          <NavbarAvatar />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
