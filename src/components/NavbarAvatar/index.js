import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.css";

function NavbarAvatar() {
  const [isOpened, setIsOpened] = useState(false);
  const token = useSelector((state) => state.auth.token);

  const onClickHandler = () => {
    setIsOpened((c) => !c);
  };

  return (
    <div className="relative">
      {!token ? (
        <Link to="/login">Login</Link>
      ) : (
        <div
          className="p-1 text-3xl cursor-pointer hover:bg-gray-200 rounded"
          onClick={onClickHandler}
        >
          <FaRegUserCircle />
        </div>
      )}
      {isOpened && (
        <div className="absolute bg-white w-20 border-2 border-gray-300 rounded-sm p-1 translate-y-1 -translate-x-10">
          <Link to="/settings" className="more-item">
            Settings
          </Link>
          <Link to="/login" className="more-item text-red-600">
            Log out
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavbarAvatar;
