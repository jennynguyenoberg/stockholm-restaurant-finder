import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/st-food-logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        Design inspiration from{" "}
        <a
          href="https://regrocery.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          regrocery.co
        </a>
      </div>
      <div className="footer-logo">
        <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />{" "}
      </div>
      <div className="footer-right">
        Development by{" "}
        <a
          href="https://jennynguyenoberg.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jenny Nguyen Öberg
        </a>{" "}
        © 2023
      </div>
    </footer>
  );
};

export default Footer;
