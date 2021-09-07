import "./platforms.scss";
import React from "react";

export default function Platforms(props) {
  const data = [{
      id: 1,
      name: "Leetcode",
      img: "assets/leetcode.png",
      link: "https://leetcode.com/azanulhaque/",
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
      img: "assets/codingame.png",
      link: "https://www.codingame.com/profile/7918894023dcfe28fbf64d7ec1578b3b3137604",
    },
    {
      id: 8,
      name: "HackerEarth",
      img: "assets/hackerearth.png",
      link: "https://www.hackerearth.com/@azanul",
    },
    {
      id: 9,
      name: "HackerRank",
      img: "assets/HackerRank_logo.png",
      link: "https://www.hackerrank.com/azanul",
    },
  ];

  return (
      <div className="platforms" id="platforms">
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
