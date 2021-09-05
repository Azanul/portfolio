import Header from "./components/header/Header";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"
import React, {useEffect, useState} from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [gitInfo,setGitInfo] = useState([{"Action": "None", "Repo": "None"}]);

  useEffect(() => {fetch(`${window.location.origin.toString()}/gitInfo`)
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
          setGitInfo(data)
      })
      .catch((err) => console.log("error: "+err))
  ;
  }, []);

  return (
    <div className="app">
     <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Works/>
       <Testimonials gitInfo={gitInfo}/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
