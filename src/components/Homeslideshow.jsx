import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/homeslideshow.css";

import sliderimage1 from "../images/slider1.jpg"
import sliderimage2 from "../images/slider2.jpg"
import sliderimage3 from "../images/slider3.jpg"
import sliderimage4 from "../images/slider4.jpg"
import sliderimage5 from "../images/slider5.jpg"
import sliderimage6 from "../images/slider6.jpg"
import sliderimage7 from "../images/slider7.jpg"
import sliderimage8 from "../images/slider8.jpg"






const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1// optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 200 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:
    sliderimage1,

  },
  {
    url:
    sliderimage2
  }, {
    url:
    sliderimage3
  }, {
    url:
    sliderimage4
  }, {
    url:
    sliderimage5
  }, {
    url:
    sliderimage6
  }, {
    url:
    sliderimage7
  }, {
    url:
    sliderimage8
  }
];
const Brandslider = () => {
  return (
    <div className="parent ">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListclassName="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <div className="row d-flex justify-content-center align-items-center ">
              <img src={imageUrl.url} className="brandlogoimg" alt="movie" />
              <span className="slidertext h4">A scholar who cherishes the love of comfort is not fit to be deemed a scholar.</span>
              </div>
             
              
              
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Brandslider;