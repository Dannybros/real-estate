import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Nav.css';

function Nav() {

  const [showColor, setShowColor] = useState<Boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<Boolean>(false);
  const [showDropMenu, setShowDropMenu] = useState<Boolean>(true);
  const location = useLocation();
  const pathname = location.pathname;

  const changeNavColor = () =>{
    if(window.scrollY >= 80) setShowColor(true);
    else setShowColor(false);
  }

  const toggleShowMobileMenu = ()=>{
    setShowMobileMenu(!showMobileMenu);
  }

  window.addEventListener("scroll", changeNavColor);

  const toggleSubMenu=()=>{
    setShowDropMenu(!showDropMenu);
  }

  return (
    <>
    <nav className={showColor? 'nav': 'nav transparent-wrap'}> 
      <div className="navbar">
        <div className='sidebar-icon' onClick={toggleShowMobileMenu}>
          <div className="sidebar-line"></div>
          <div className="sidebar-line"></div>
          <div className="sidebar-line"></div>
        </div>
        <div className="logo">
          <img src="https://sevenstonesdxb.com/wp-content/uploads/2023/02/logo-01.svg" width="127px" alt="logo"/>
        </div>
        <div className="nav-menu">
          <ul className='main-menu nav-text-style'>
            <li className='nav-link'>Home</li>
            <li className='nav-link'>Buy</li>
            <li className='nav-link'>Rent</li>
            <li className='nav-link'>Off-Plan</li>
            <li className='nav-link dropdown'>
              <span>
                About Us
              </span>
              <ul className={showDropMenu? 'dropdown-menu active' : 'dropdown-menu'}>
                <li>Our Story</li>
                <li>Our Team</li>
                <li>Contact</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className={`sidebar-mobile ${showMobileMenu && 'show'}`}>
      <div className='sidebar-overlay' onClick={toggleShowMobileMenu}></div>
      <div className='sidebar-menu'>
        <div className="sidebar-close-icon" onClick={toggleShowMobileMenu}></div>
        <ul className='sidebar-list'>
          <li>Home</li>
          <li>Buy</li>
          <li>Rent</li>
          <li>Off-Plan</li>
          <li>
            <span>About Us</span>
            <ul className='sidebar-about-submenu'>
              <li>Our Story</li>
              <li>Our Team</li>
              <li>Contact</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    
    </>
  )
}

export default Nav