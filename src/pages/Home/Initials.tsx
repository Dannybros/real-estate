export const newPropertySliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows:false,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3, 
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
           
        }
    },
    {
        breakpoint: 480,
            settings: {
            slidesToShow: 1.4,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 370,
            settings: {
            slidesToShow: 1
        }
    }
    ]
};
