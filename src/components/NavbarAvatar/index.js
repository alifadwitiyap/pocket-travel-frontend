import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.css";

function NavbarAvatar() {
  const token = useSelector((state) => state.auth.token);

  return (
    <div className="relative">
      {!token ? (
        <Link className="login" to="/login">Login</Link>
      ) : (
        <Link className="logout" to="/login">Logout</Link>
      )}
    </div>
  );
}

export default NavbarAvatar;
