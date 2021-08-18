import React from 'react';
import Taco1 from '../images/Taco1.jpg';
import Taco2 from '../images/Taco2.jpg';
import Taco3 from '../images/Taco3.jpg';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";



function Carousel(props) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slidesPerView: 3,
    spacing: 5,
    centered: true,
    breakpoints: {
      '(max-width: 720px)': {
        slidesPerView: 1,
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })


  

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide"><img className="carousel-img" src={Taco1} alt="" /></div>
          <div className="keen-slider__slide"><img className="carousel-img" src={Taco2} alt="" /></div>
          <div className="keen-slider__slide"><img className="carousel-img" src={Taco3} alt="" /></div>
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            )
          })}
        </div>
      )}
    </>
  )
}

function ArrowLeft(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left" + disabled}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  )
}

function ArrowRight(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right" + disabled}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}


export default Carousel
