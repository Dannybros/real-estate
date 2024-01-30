import { useState } from 'react';
import Modal from '../Modal/Modal'
import ProvinceMap from './Province.Map';
import Vientiane from './Provinces/Vientiane';
import { IoArrowBackSharp } from "react-icons/io5";
import './Map.css'
import Bolikhamxay from './Provinces/Bolikhamxay';
import { useAppContext } from '../../context/AppContext';
import VientianeProvince from './Provinces/VientianeProvince';
import Xaysomboun from './Provinces/Xaysomboun';
import Xayabury from './Provinces/Xayabury';
import Khammuane from './Provinces/Khammuane';
import Savannakhet from './Provinces/Savannakhet';
import Salavan from './Provinces/Salavan';
import Sekong from './Provinces/Sekong';
import Attapeu from './Provinces/Attapeu';
import Champasak from './Provinces/Champasak';
import Xiengkhuang from './Provinces/Xiengkhuang';
import LuangPrabang from './Provinces/LuangPrabang';
import Houaphan from './Provinces/Houaphan';
import Oudomxay from './Provinces/Oudomxay';
import LuangNamtha from './Provinces/Luang Namtha';
import Bokeo from './Provinces/Bokeo';
import Phongsali from './Provinces/Phongsali';

export interface ModalContainerProps{
  type: string;
}

function Map({type}:ModalContainerProps) {
  const {updateFilters, filters} = useAppContext();
  const [hoverArea, setHoverArea] = useState<string | null>(null);
  const [isProvinceMap, setIsProvinceMap] = useState<boolean>(true);

  const handleMouseOver = (event: React.MouseEvent<SVGPathElement>)=>{
    const provinceName = event.currentTarget.getAttribute('name');
    setHoverArea(provinceName);
  }
  const handleMouseOut = ()=>{
    setHoverArea(null);
  }

  const handleProvinceClick = ()=>{
    setIsProvinceMap(false);
    updateFilters({province:hoverArea})
  }

  const showProvinceMap = ()=>{
    setIsProvinceMap(true);
    updateFilters({areas:[]})
  }

  const handleCountyClick=(item:string)=>{
      const newSelection = filters.areas.includes(item)
      ? filters.areas.filter((current) => current !== item)
      : [...filters.areas, item];

      updateFilters({ areas: newSelection });
  }

  return (
    <Modal title='Map Location' rightModal={type==="Map"}>
      <div className='map-location'>
        <strong>Current Map Location:</strong> &nbsp;
        {filters.province} / {filters.areas}
      </div>
      <div className='interactive-map'>
        <h2>{hoverArea}</h2>
        <div className={`map-container ${!isProvinceMap && 'zoom-in'}`}>
          <ProvinceMap handleMouseOut={handleMouseOut} handleMouseOver={handleMouseOver} handleClick={handleProvinceClick}/>
        </div>
        <div className={`map-container ${isProvinceMap && 'zoom-out'}`}>
          <div className='btn_provinceMap font-header' onClick={showProvinceMap}>
            <IoArrowBackSharp/>
          </div>
          {filters.province==="Vientiane" && <VientianeProvince/>}
          {filters.province==="Vientiane Capital" && <Vientiane/>}
          {filters.province==="Bolikhamxai" && <Bolikhamxay/>}
          {filters.province==="Xaysomboun" && <Xaysomboun/>}
          {filters.province==="Xayabury" && <Xayabury/>}
          {filters.province==="Khammuane" && <Khammuane/>}
          {filters.province==="Savannakhet" && <Savannakhet handleClick={handleCountyClick}/>}
          {filters.province==="Salavan" && <Salavan/>}
          {filters.province==="Sekong" && <Sekong/>}  
          {filters.province==="Attapeu" && <Attapeu/>}
          {filters.province==="Champasak" && <Champasak/>}
          {filters.province==="Xiengkhouang" && <Xiengkhuang/>}
          {filters.province==="Luang Prabang" && <LuangPrabang/>}
          {filters.province==="Houaphan" && <Houaphan/>}
          {filters.province==="Oudomxay" && <Oudomxay/>}
          {filters.province==="Luang Namtha" && <LuangNamtha/>}
          {filters.province==="Bokeo" && <Bokeo/>}
          {filters.province==="Phongsali" && <Phongsali/>}
        </div>
      </div>
    </Modal>
  )
}

export default Map