import { useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import logo from "../../assest/logo.svg";
import './Nav.css';
import { useAppContext } from '../../context/AppContext';

function Nav() {

  const location = useLocation();
  const [showColor, setShowColor] = useState<Boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<Boolean>(false);
  const {toggleModal, user, setUser} = useAppContext();

  const changeNavColor = () =>{
    if(window.scrollY >= 80) setShowColor(true);
    else setShowColor(false);
  }

  const toggleShowMobileMenu = ()=>{
    setShowMobileMenu((showMobileMenu)=>!showMobileMenu);
  }

  const handleSignOut = () =>{
    setUser(null);
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
      <div className="navbar container">
        <div className='sidebar-icon' onClick={toggleShowMobileMenu}>
          <CiMenuKebab/>
        </div>
        <div className="logo">
          <Link to='/'>
          <img src={logo} width="127px" alt="logo"/>
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
            <Link to='/about'>
              <li className='nav-link'> About Us </li>
            </Link>
          </ul>
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
            {user!==null?
              <div className='nav-link dropdown'>
                <div className='user-name'>
                  {user.given_name.charAt(0)} {user.family_name.charAt(0)}
                </div>
                <ul className='dropdown-menu'>
                  <li>Favourites</li>
                  <li>Schedules</li>
                  <li>Setting </li>
                  <li onClick={handleSignOut}>Sign Out</li>
                </ul>
              </div>
              :
              <div className='nav-link sign-in' onClick={()=>toggleModal('SignIn')}>
                <FaUser/>
                Sign In
              </div>
            }
          </div>
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