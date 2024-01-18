import React from 'react'
import './Province.css'

interface ProvinceProps {
  title:string;
  img:string;
  number:number
}

const Province:React.FC<ProvinceProps>=({img, title, number})=>{
  return (
    <div className='province-card'>
      <img src={img} alt="" />
      <div className='province-text'>
        <div className='font-small'>{number} property</div>
        <div className='province-title'>{title}</div>
      </div>
    </div>
  )
}

export default Province