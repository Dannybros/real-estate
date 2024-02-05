import React, { useState } from 'react';
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

export interface ProvinceProps {
  handleClick: (event: React.MouseEvent<SVGElement>) => void;
  checkActiveArea: (name:string) => boolean;
}

interface CountyProps extends ProvinceProps{
  name: string;
  points?: string;
  d?: string;
}

interface ProvinceComponents {
  [key: string]: React.ComponentType<ProvinceProps>;
}

const provinceComponents: ProvinceComponents = {
  "Vientiane": VientianeProvince,
  "Vientiane Capital": Vientiane,
  "Bolikhamxai": Bolikhamxay,
  "Xaysomboun": Xaysomboun,
  "Xayabury": Xayabury,
  "Khammuane": Khammuane,
  "Savannakhet": Savannakhet,
  "Salavan": Salavan,
  "Sekong": Sekong,
  "Attapeu": Attapeu,
  "Champasak": Champasak,
  "Xiengkhouang": Xiengkhuang,
  "LuangPrabang": LuangPrabang,
  "Houaphan": Houaphan,
  "Oudomxay": Oudomxay,
  "LuangNamtha": LuangNamtha,
  "Bokeo": Bokeo,
  "Phongsali": Phongsali,
};

export const County = ({ name, handleClick, checkActiveArea, points, d }:CountyProps) => (
  <React.Fragment>
    {d!== undefined ? (
      <path
        onClick={handleClick}
        name={name}
        className={`county ${checkActiveArea(name) && 'active'}`}
        d={d}
      />
    ) : (
      <polygon
        onClick={handleClick}
        name={name}
        className={`county ${checkActiveArea(name) && 'active'}`}
        points={points}
      />
    )}
  </React.Fragment>
);

function Map({type}:ModalContainerProps) {
  const {updateFilters, filters} = useAppContext();
  const [hoverArea, setHoverArea] = useState<string | null>(null);
  const [isProvinceMap, setIsProvinceMap] = useState<boolean>(true);

  const SelectedProvinceComponent = filters.province && provinceComponents[filters.province]

  // change color when mouse enters to map area
  const handleMouseOver = (event: React.MouseEvent<SVGPathElement>)=>{
    const provinceName = event.currentTarget.getAttribute('name');
    setHoverArea(provinceName);
  }

  // change color when mouse out map area
  const handleMouseOut = ()=>{
    setHoverArea(null);
  }

  // function for when province area is clicked
  const handleProvinceClick = ()=>{
    setIsProvinceMap(false);
    updateFilters({province:hoverArea})
  }

  // command to go back from county map to province map
  const showProvinceMap = ()=>{
    setIsProvinceMap(true);
    updateFilters({areas:[]})
  }

  // function for when county area is clicked
  const handleCountyClick=(event: React.MouseEvent<SVGElement>)=>{
    const item = event.currentTarget.getAttribute('name');
    if(item!==null){
      const newSelection = filters.areas.includes(item)
      ? filters.areas.filter((current) => current !== item)
      : [...filters.areas, item];
  
      updateFilters({ areas: newSelection });
    }

  }

  // check if the province is the selected province
  const checkActiveProvince=(name:string)=>{
    if(filters.province === name){
      return true
    }
    return false
  }

  // check if the county is the selected counties
  const checkActiveArea=(name:string)=>{
    if(filters.areas.includes(name)){
      return true
    }
    return false
  }

  return (
    <Modal title='Map Location' rightModal={type==="Map"}>
      <div className='map-location'>
        <strong>Current Map Location:</strong> &nbsp;
        {filters.province} / &nbsp;
        {filters.areas.length > 1 ? 
          filters.areas.join(', ')
          : 
          filters.areas
        }
      </div>
      <div className='interactive-map'>
        <h2>{hoverArea}</h2>
        <div className={`map-container ${!isProvinceMap && 'zoom-in'}`}>
          <ProvinceMap checkActiveProvince={checkActiveProvince} handleMouseOut={handleMouseOut} handleMouseOver={handleMouseOver} handleClick={handleProvinceClick}/>
        </div>
        <div className={`map-container ${isProvinceMap && 'zoom-out'}`}>
          <div className='btn_provinceMap font-header' onClick={showProvinceMap}>
            <IoArrowBackSharp/>
          </div>
          {SelectedProvinceComponent && <SelectedProvinceComponent handleClick={handleCountyClick} checkActiveArea={checkActiveArea} />}
        </div>
      </div>
    </Modal>
  )
}

export default Map