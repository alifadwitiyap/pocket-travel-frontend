import { useSelector, useDispatch } from "react-redux";
import { reset } from '../../features/authSlice';
import { Link } from "react-router-dom";
import "./index.css";

function NavbarAvatar() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
          to="/"
          onClick={() => {
            localStorage.removeItem("user");
            dispatch(reset());
          }}
        >
          Logout
        </Link>
      )}
    </div>
  );
}

export default NavbarAvatar;
