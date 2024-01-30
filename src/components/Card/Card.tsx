import React from 'react'
import {Link} from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { LiaBathSolid } from "react-icons/lia";
import { IoBedOutline } from "react-icons/io5";
import { GoPaperclip } from "react-icons/go";
import card from "../../assest/card.png";
import './Card.css'

interface CardProps {
    footer?:boolean;
    btn?:boolean
    side?:boolean
    id:number
}

const Card:React.FC<CardProps>=({footer=true, btn=true, side=false, id})=>{
  return (
    <Link to={`/property/${id}`} className='card'>
        <div className={`card-wrapper ${side && 'side'}`}>
            <div className='card-thumb'>
                <img src={card} alt="" />
                <div className='card-price font-title'>
                    20,000,000 $
                </div>
                <div className='card-status'>
                    <span> RENT </span>
                    <span> SALE </span>
                </div>
            </div>
            <div className='card-body'>
                <div className='truncate'>
                    Luxurious Living | Prime Location | Resale with PP
                </div>
                <address className='font-small truncate'>
                    Dubai, Downtown Dubai, Burj Khalifa Area, The Residence | Burj Khalifa
                </address>
                <div className='card-info'>
                    <ul>
                        <li>
                            <div className='card-icon-box font-default'>
                                <IoBedOutline className='card-info-icon'/>
                                <span>5</span>
                            </div>
                            <p> Bedrooms</p>
                        </li>
                        <li>
                            <div className='card-icon-box font-default'>
                                <LiaBathSolid className='card-info-icon'/>
                                <span>2</span>
                            </div>
                            <p> Bathrooms</p>
                        </li>
                        <li>
                            <div className='card-icon-box font-default'>
                                <TfiRulerAlt2 className='card-info-icon'/>
                                <span>550</span>
                            </div>
                            <p>Sq / m²</p>
                        </li>
                    </ul>
                    <div className='card-info-list'>
                        <div className='card-type' style={{margin:btn? "0" : "auto"}}>
                            ( Apartment ) 
                        </div>
                        {btn &&
                            <div className='card-detail-btn'>
                                Details
                            </div>
                        }
                    </div>
                </div>
                {footer&& <>
                    <div className='card-divider'/>
                    <div className='card-footer'>
                        <div className='card-footer-item'>
                            <CiUser/>
                            ssdfsdad
                        </div>
                        <div className='card-footer-item'>
                            <GoPaperclip/>
                            2024.03.10
                        </div>
                    </div>
                </>}
            </div>
        </div>
    </Link>
  )
}

export default Card