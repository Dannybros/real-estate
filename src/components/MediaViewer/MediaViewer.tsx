import React, {useRef} from 'react'
import './MediaViewer.css'
import { IoIosClose } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";

interface ImageViewerProps {
    imgs:string[];
    viewImgIndex:number,
    setViewImgIndex:React.Dispatch<React.SetStateAction<number>>
}

interface MediaProps extends ImageViewerProps{
    toggleImgView: () => void;
    activeTab:string,
    setActiveTab:React.Dispatch<React.SetStateAction<string>>
}

const ImageViewer:React.FC<ImageViewerProps>=({imgs, viewImgIndex, setViewImgIndex})=>{
    const imgSliderRef = useRef<Slider>(null);

    const sliderNextClick = ()=>{
        if (imgSliderRef.current) {

            imgSliderRef.current.slickNext();

            if(viewImgIndex >=imgs.length){
                setViewImgIndex(1)
            }else{
                setViewImgIndex(viewImgIndex+1)
            }
        }
    }

    const sliderPreviousClick = () => {
        if(imgSliderRef.current){

            imgSliderRef.current.slickPrev();

            if(viewImgIndex <= 1){
                setViewImgIndex(imgs.length)
            }else{
                setViewImgIndex(viewImgIndex-1)
            }
        }

    };
 
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        initialSlide: viewImgIndex,
    };

    return(
        <div className='picture-container'>
            <div className='img-number font-title'>
                {viewImgIndex + 1} of {imgs.length}
            </div>
            <div className='img-slider-btn'>
                <span className='viewer-btn' onClick={sliderPreviousClick}>
                    <FaChevronLeft/>
                </span>
                <span className='viewer-btn' onClick={sliderNextClick}>
                    <FaChevronRight/>
                </span>
            </div>
            <Slider {...settings} ref={imgSliderRef}>
                {imgs.map((img, i)=>(
                    <div className='img-view-item' key={i}>
                        <img src={img} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

const VdoViewer:React.FC = () =>{
    return(
       <div className='vdo-container'>
        <iframe className='property-vdo' src="https://www.youtube.com/embed/cXyxwp39S1I" title="MAXHUB V5 Interactive Flat Panel Officially Launched" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

       </div>
    )
}

const MediaViewer:React.FC<MediaProps>=({toggleImgView, imgs, viewImgIndex, setViewImgIndex, activeTab, setActiveTab})=> {
  
    return (
    <div className='image-viewer'>
        <div className='viewer-header'>
            <ul className='font-title'>
                <li 
                    className={`${activeTab==="Pic" && 'active'}`}
                    onClick={()=>setActiveTab("Pic")}
                >
                    Pictures
                </li>
                <li 
                    className={`${activeTab==="Vdo" && 'active'}`}
                    onClick={()=>setActiveTab("Vdo")}
                >
                    Videos
                </li>
            </ul>
            <IoIosClose className="close-viewer" onClick={toggleImgView}/>
        </div>
        {activeTab==="Pic" &&
            <ImageViewer imgs={imgs} setViewImgIndex={setViewImgIndex} viewImgIndex={viewImgIndex}/>
        }
        {activeTab==="Vdo" &&
            <VdoViewer/>
        }
    </div>
  )
}

export default MediaViewer