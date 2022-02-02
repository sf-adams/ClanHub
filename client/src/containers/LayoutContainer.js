import Navbar from '../components/navbar/Navbar';
import Menu from '../components/navbar/Menu';
import { Outlet } from 'react-router';
import { useState } from 'react';

function LayoutContainer({ loggedIn, checkUserCredentials}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [canSeeSidebarContent, setCanSeeSidebarContent] = useState(false);

  const handleClick = ()=> {
    setMenuOpen(!menuOpen);
    setCanSeeSidebarContent(!canSeeSidebarContent);
  }

  return (
    <>
      <Navbar
        checkUserCredentials={checkUserCredentials}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        loggedIn={loggedIn}
        handleClick={handleClick}
      />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} handleClick={handleClick}
      canSeeSidebarContent={canSeeSidebarContent} />
      <Outlet />
    </>
  );
};

export default LayoutContainer;

