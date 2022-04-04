import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';

function Main() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Main;
