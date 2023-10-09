import React from "react";
import "./Badge.scss";

const Footer: React.FC = () => {
  return (
    <div className="badge-container">
      <p className="para1">
        <em>Your</em> local
      </p>
      <p className="para2">
        Restaurant <br />
        Finder
      </p>
    </div>
  );
};

export default Footer;
