import Navbar from '../components/navbar/Navbar';
import Menu from '../components/navbar/Menu';
import { Outlet } from 'react-router';

function LayoutContainer() {
  return (
    <>
      <Navbar />
      <Menu />
      <Outlet />
    </>
  );
};

export default LayoutContainer;

