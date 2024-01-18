import { useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";
import './Nav.css';

function Nav() {

  const [showColor, setShowColor] = useState<Boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<Boolean>(false);
  const location = useLocation();

  const changeNavColor = () =>{
    if(window.scrollY >= 80) setShowColor(true);
    else setShowColor(false);
  }

  const toggleShowMobileMenu = ()=>{
    setShowMobileMenu(!showMobileMenu);
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavColor);
    return () => {
    window.removeEventListener('scroll', changeNavColor);
    };
}, []);

  const isHomePage = location.pathname === '/' ? true : false;

  return (
    <>
    <nav className={(isHomePage && !showColor) ? 'nav transparent-wrap' : 'nav'}> 
      <div className="navbar">
        <div className='sidebar-icon' onClick={toggleShowMobileMenu}>
          <CiMenuKebab/>
        </div>
        <div className="logo">
          <Link to='/'>
          <img src="https://sevenstonesdxb.com/wp-content/uploads/2023/02/logo-01.svg" width="127px" alt="logo"/>
          </Link>
        </div>
        <div className="nav-menu">
          <ul className='main-menu'>
            <Link to='/'>
              <li className='nav-link'> Home </li>
            </Link>
            <Link to='/explore'>
              <li className='nav-link'> Buy </li>
            </Link>
            <Link to='/explore'>
              <li className='nav-link'> Rent </li>
            </Link>
            <Link to='/explore'>
              <li className='nav-link'> Sell </li>
            </Link>
            <li className='nav-link dropdown'>
              <span>
                About Us
              </span>
              <ul className='dropdown-menu'>
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
        <div className="sidebar-close-icon" onClick={toggleShowMobileMenu}>

        </div>
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