import { useCallback, useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { notifyError } from './notify';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  
  const auth = useCallback(() => {
    if (!token) {
      navigate('/');
      notifyError('User not logged in.');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate, token]);
  
  return [auth, isAuthenticated];
}

export default useAuth;