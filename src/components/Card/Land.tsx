import React from 'react'
import './Land.css'

interface LandProps {
    imgUrl:string
}

const Land:React.FC<LandProps>=({imgUrl})=>{
  return (
    <div className='land-item'>
        <div className='land-item-wrapper'>
            <div className="land-thumb">
                <img src={imgUrl} alt="" />
                <div className='land-price font-default'>
                    20,000,000 $
                </div>
                <div className='land-status'>
                    <span> RENT </span>
                    <span> SALE </span>
                </div>
            </div>
            <div className='land-item-body font-small'>
                <div className='land-item-area'>
                    Area: 5000 m<sup>2</sup>
                </div>
                <address className='truncate'>
                    Dubai, Downtown Dubai, Burj Khalifa Area, The Residence | Burj Khalifa
                </address>
            </div>
        </div>
    </div>
  )
}

export default Land