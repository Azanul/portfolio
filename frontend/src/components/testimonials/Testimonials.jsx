import "./testimonials.scss";
import React from "react";

export default function Testimonials(props) {
  const data = [{
      id: 1,
      name: "Twitter",
      img: "assets/twitterr.png",
      link: "https://twitter.com/AzanulZ",
    },
    {
      id: 2,
      name: "Instagram",
      img: "assets/Instagram_logo.png",
      link: "https://www.instagram.com/john.doe_297/",

    },
    {
      id: 3,
      name: "facebook",
      img: "assets/fb.png",
      link: "https://www.facebook.com/azanul.haque/",

    },
    {
      id: 4,
      name: "CodeChef",
      img: "assets/codechef.png",
      link: "https://www.codechef.com/users/johndoe_297",

    },
    {
      id: 5,
      name: "LinkedIn",
      img: "assets/linkedinn.png",
      link: "https://www.linkedin.com/in/azanul-haque/",

      featured: true,
    },
    {
      id: 6,
      name: "Codeforces",
      img: "assets/codeforces.jpg",
      link: "https://codeforces.com/profile/JohnDoe_297",
    },
    {
      id: 7,
      name: "Codingame",
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
                    <a href={d.link}>
                    <img
                        className="user"
                        src={d.img}
                        alt=""
                    />
                    </a>
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
