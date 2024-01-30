import { useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import logo from "../../assest/logo.svg";
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

  const test = false;
  const user = false;

  return (
    <>
    <nav className={(isHomePage && !showColor) ? 'nav transparent-wrap' : 'nav'}> 
      <div className="navbar container">
        <div className='sidebar-icon' onClick={toggleShowMobileMenu}>
          <CiMenuKebab/>
        </div>
        <div className="logo">
          <Link to='/'>
          <img src={logo} width="127px" alt="logo"/>
          </Link>
        </div>
        <div className={`nav-menu ${test && 'end'}`}>
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
            <Link to='/about'>
              <li className='nav-link'> About Us </li>
            </Link>
          </ul>
          {!test &&
            <div className='nav-local-auth'>
              <div className='nav-link dropdown'>
                <GrLanguage/>
                Language
                <ul className='dropdown-menu'>
                  <li>English</li>
                  <li>Chinese</li>
                  <li>Korean</li>
                  <li>Lao</li>
                </ul>
              </div>
              {user?
                <div className='nav-link dropdown'>
                  <div className='user-name'>
                    DL
                  </div>
                  <ul className='dropdown-menu'>
                    <li>English</li>
                    <li>Chinese</li>
                    <li>Korean</li>
                    <li>Lao</li>
                  </ul>
                </div>
                :
                <div className='nav-link sign-in'>
                  <FaUser/>
                  Sign In
                </div>
              }
            </div>
          }
        </div>
        {test&&
          <div className='test'>
            <div className='lang-list'>
              <li className='active'>English</li>
              <li>Chinese</li>
              <li>Korean</li>
              <li>Lao</li>
            </div>
            <div className='nav-link sign-in'>
              <FaUser/>
              Sign In
            </div>
          </div>
        }
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