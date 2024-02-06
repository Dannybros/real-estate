import React from 'react'
import './City.css'

interface CityProps {
  title:string;
  img:string;
  number:number
}

const City:React.FC<CityProps>=({img, title, number})=>{
  return (
    <div className='city-card'>
      <img src={img} alt="" />
      <div className='city-text'>
        <div className='font-small'>{number} property</div>
        <div className='city-title'>{title}</div>
      </div>
    </div>
  )
}

export default City