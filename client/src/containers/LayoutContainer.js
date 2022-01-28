import Navbar from '../components/navbar/Navbar';
import Menu from '../components/navbar/Menu';
import { Outlet } from 'react-router';
import { useState } from 'react';

function LayoutContainer({ loggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        loggedIn={loggedIn}
      />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Outlet />
    </>
  );
};

export default LayoutContainer;

