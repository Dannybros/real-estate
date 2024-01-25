import React, {useRef} from 'react'
import './ImageViewer.css'
import { IoIosClose } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";

const settings = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    arrows:false
};

const ImageViewer:React.FC=()=> {
    const imgSliderRef = useRef<Slider>(null);

    const sliderNextClick = ()=>{
        if (imgSliderRef.current) {
            imgSliderRef.current.slickNext();
        }
    }
    const sliderPreviousClick = () => {
        if (imgSliderRef.current) {
            imgSliderRef.current.slickPrev();
        }
    };
    
    
  return (
    <div className='image-viewer'>
        <div className='viewer-header'>
            <ul className='font-title'>
                <li className='active'>Pictures</li>
                <li>Videos</li>
            </ul>
            <IoIosClose className="close-viewer font-header"/>
        </div>
        <div className='img-viewer-container'>
            <div className='img-view-list'>
                <div className='img-slider-btn'>
                    <span className='viewer-btn' onClick={sliderPreviousClick}>
                        <FaChevronLeft/>
                    </span>
                    <span className='viewer-btn' onClick={sliderNextClick}>
                        <FaChevronRight/>
                    </span>
                </div>
                <Slider {...settings} ref={imgSliderRef}>
                    <div className='img-view-item'>
                        <img src="https://photos.zillowstatic.com/fp/586948ae371f15d6ff8b5ae6742b22ee-uncropped_scaled_within_1536_1152.webp" alt="" />
                    </div>
                    <div className='img-view-item'>
                        <img src="https://photos.zillowstatic.com/fp/02899d22e6277228156088332d9a24d1-uncropped_scaled_within_1536_1152.webp" alt="" />
                    </div>
                    <div className='img-view-item'>
                        <img src="https://photos.zillowstatic.com/fp/ab442adbf0598fd38a76c4a47798354d-uncropped_scaled_within_1536_1152.webp" alt="" />
                    </div>
                    <div className='img-view-item'>
                        <img src="https://photos.zillowstatic.com/fp/7c87b87eabbe739c3cfea3ce90f16e81-uncropped_scaled_within_1536_1152.webp" alt="" />
                    </div>
                    <div className='img-view-item'>
                        <img src="https://photos.zillowstatic.com/fp/23b2c6b98887bfe47caa01058b5a53a8-uncropped_scaled_within_1536_1152.webp" alt="" />
                    </div>
                    <div className='img-view-item'>
                        <img src="https://photos.zillowstatic.com/fp/6340a29570ecb6797bde3f9f0ecf49f5-uncropped_scaled_within_1536_1152.webp" alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default ImageViewer