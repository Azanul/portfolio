import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured", title: "Featured",
        },
        {
            id: "app", title: "App",
        },
        {
            id: "game", title: "Games",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "app":
                setData(webPortfolio);
                break;
            case "game":
                setData(mobilePortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected]);

    return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function PortfolioList({ id, title, active, setSelected }) {
    return (
        <li
            className={active ? "portfolioList active" : "portfolioList"}
            onClick={() => setSelected(id)}
        >
            {title}
        </li>
    );
}