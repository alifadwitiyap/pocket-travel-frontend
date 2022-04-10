import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

function NavbarAvatar() {
  const { token } = useSelector((state) => state.auth);

  return (
    <div className={`relative ${!token && "ml-8"}`}>
      {!token ? (
        <>
          <Link className="login mr-6" to="/login">Login</Link>
          <Link className="register" to="/register">Sign Up</Link>
        </>
      ) : (
        <Link
          className="logout"
          to="/login"
          onClick={() => localStorage.removeItem("user")}
        >
          Logout
        </Link>
      )}
    </div>
  );
}

export default NavbarAvatar;
