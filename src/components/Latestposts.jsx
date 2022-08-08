import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/latestposts.css";

import sliderimage1 from "../images/slider1.jpg";
import sliderimage2 from "../images/slider2.jpg";
import sliderimage3 from "../images/slider3.jpg";
import sliderimage4 from "../images/slider4.jpg";
import sliderimage5 from "../images/slider5.jpg";
import sliderimage6 from "../images/slider6.jpg";
import sliderimage7 from "../images/slider7.jpg";
import sliderimage8 from "../images/slider8.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 5, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 5, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 200 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    url: sliderimage1,
  },
  {
    url: sliderimage2,
  },
  {
    url: sliderimage3,
  },
  {
    url: sliderimage4,
  },
  {
    url: sliderimage5,
  },
  {
    url: sliderimage6,
  },
  {
    url: sliderimage7,
  },
  {
    url: sliderimage8,
  },
];
const Latestposts = () => {
  return (
    <div className="parent container">
      <h3 className="mt-5 mb-2 fw-bold ">Latest Posts</h3>
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
           
             
              
              <div className="slider " key={index}>
                <span className="title1111 ps-2 pe-2">9th Nov<br/>2022</span>
                <div className="row d-flex justify-content-center align-items-center m-4 ">
                  <img
                    src={imageUrl.url}
                    className="brandlogoimg brandll"
                    alt="movie"
                  />
                  <span className="slidertext h4 ms-5 slidertext2 me-5">
                    A scholar who cherishes the love of comfort is not fit to be
                    deemed a scholar.
                  </span>
                </div>
              </div>
          
          );
        })}
      </Carousel>
    </div>
  );
};
export default Latestposts;
