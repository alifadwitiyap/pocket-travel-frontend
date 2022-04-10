import { Link } from "react-router-dom";
import "./index.css";

function NavbarAvatar() {
  const user = localStorage.getItem("user");
  const { token } = JSON.parse(user);

  return (
    <div className="relative">
      {!token ? (
        <Link className="login" to="/login">
          Login
        </Link>
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
