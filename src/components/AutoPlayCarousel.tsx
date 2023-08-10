import { FC } from 'react'
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface AutoPlayCarouselProps { }

const AutoPlayCarousel: FC<AutoPlayCarouselProps> = ({}) => {
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
  
    
  
    return (
      <div>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <div className="relative h-screen w-full flex flex-col bg-[url('/caroussel_images/IMG_8036.jpg')] bg-cover bg-center"></div>
          </div>
          <div>
          <div className="relative h-screen w-full flex flex-col bg-[url('/caroussel_images/IMG_8060.jpg')] bg-cover"></div>
          </div>
          {/* <div>
            <div className="relative h-screen w-full flex flex-col bg-[url('/caroussel_images/IMG_8136.jpg')] bg-cover bg-center"></div>
          </div> */}
          <div>
            <div className="relative h-screen w-full flex flex-col bg-[url('/caroussel_images/IMG_8279.jpg')] bg-cover bg-center"></div>
          </div>
          <div>
            <div className="relative h-screen w-full flex flex-col bg-[url('/caroussel_images/IMG_8316.jpg')] bg-cover bg-center"></div>
          </div>

        </Slider>
      </div>
    );
}

export default AutoPlayCarousel