import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";
import { IoLogoWechat } from "react-icons/io5";
import { Link } from 'react-router-dom';
import logo from "../../assest/logo.svg";

const Footer:React.FC=()=> {
  return (
    <div className='footer'>
      <div className="container">
        <div className='footer-wrapper'>
          <main className='footer-widget'>
            <div className='footer-icon'>
              <img src={logo} alt="" />
            </div>
            <div className='footer-desc'>
              MAXHUB's interactive panels redefine collaboration in both professional and educational spheres. We showcase not just devices but gateways to seamless communication and dynamic engagement. Our mission is to unlock collaborative possibilities, enabling teams and classrooms to connect effortlessly, whether across the room or across the globe.
            </div>
          </main>
          <main className='footer-widget'>
            <div className='title font-subheader'>
              Categories
            </div>
            <ul className='footer-links'>
              <li><Link to="#"> <GoChevronRight/> Villa </Link></li>
              <li><Link to="#"> <GoChevronRight/> Condominum / Apartment </Link></li>
              <li><Link to="#"> <GoChevronRight/> Shop House / Mall Shop </Link></li>
              <li><Link to="#"> <GoChevronRight/> Commercial Building </Link></li>
              <li><Link to="#"> <GoChevronRight/> Land (All types) </Link></li>
              <li><Link to="#"> <GoChevronRight/> Industrial ( Factories, Mining ..etc) </Link></li>
            </ul>
          </main>
          <main className='footer-widget'>
            <div className='title font-subheader'>
              Social Media
            </div>
            <ul className='footer-socials font-subheader'>
              <Link to ="#"> <li>  <FaFacebookF/></li> </Link>
              <Link to ="#"><li> <FaYoutube/> </li></Link>
              <Link to ="#"><li> <FaInstagram/> </li></Link>
              <Link to ="#"><li> <FaTiktok/> </li></Link>
              <Link to ="#"><li> <IoLogoWechat/> </li></Link>
              <Link to ="#"><li> <FaXTwitter/> </li></Link>
            </ul>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Footer