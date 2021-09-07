import React, { useState } from "react";
import "./experience.scss";

export default function Experience() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
      {
          id: "1",
          icon: "./assets/globe.png",
          title: "Machine Learning Intern",
          desc: "Performed different machine learning tasks on various data sets",
          img: "./assets/TSF.jpg",
      },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Freelancer",
      desc: "Designed, Developed & Deployed a web app for NPO Rehana Foundation",
      img: "./assets/rehana.png",
    },

    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Data Analytics Intern",
      desc: "Analysed various real life data sets, found insights for improving business model and increasing revenue.",
      img: "./assets/Forage.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="experience" id="experience">
        <h1>Experience</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
