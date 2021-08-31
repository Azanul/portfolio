import "./header.scss";
import { Mail } from "@material-ui/icons";

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <div className={"header " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            brilliant.
          </a>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>azanulhaque@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
