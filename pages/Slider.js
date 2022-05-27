import React, { useState, useEffect } from "react";
import arrowRight from "../public/rightArrow.svg";
import Image from "next/image";
import { SliderData } from "./SliderData";
import arrowLeft from '../public/leftArrow.svg'


const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Intervalo");
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  });
  
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="Slider">
      <div className="arrows">
        <div className="arrowLeft" onClick={prevSlide}>
          <Image src={arrowLeft} height={"50px"} width={"50px"}/>
        </div>

        <div className="arrowRight" onClick={nextSlide}>
          <Image src={arrowRight} height={"50px"} width={"50px"} />
        </div>
      </div>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <>
                <img
                  src={slide.image}
                  alt="afsjfh"
                  index={index}
                  className="image"
                />
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
                <button><a href={slide.link} target="_blank" rel="noopener noreferrer">Ver Oferta</a></button>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
