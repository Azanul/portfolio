import "./testimonials.scss";
import React from "react";

export default function Testimonials(props) {
  const data = [{
      id: 1,
      name: "Tom Durden",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: 2,
      name: "Tom Durden",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: 3,
      name: "Tom Durden",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: 4,
      name: "Tom Durden",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: 5,
      name: "Alex Kalinski",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      featured: true,
    },
    {
      id: 6,
      name: "Martin Harold",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: 7,
      name: "Martin Harold",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: 8,
      name: "Martin Harold",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: 9,
      name: "Martin Harold",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  ];

  return (
      <div className="testimonials" id="testimonials">
        <h1>Platforms where you can stalk me</h1>
        <div className="container">
          <div className="column left">
            {data.map((d) => (
                <div className={d.featured ? "card featured" : "card"}>
                  <div className="top">
                    <img
                        className="user"
                        src={d.img}
                        alt=""
                    />
                  </div>
                </div>
            ))}
          </div>
          <div className="column right">
            {props.gitInfo.map((i) => (
                <div className="card">
                  {i.action} --> {i.repo}
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}
