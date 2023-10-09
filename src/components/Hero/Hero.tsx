import React from "react";
import "./Hero.scss";
import logo from "../../assets/images/st-food-logo.svg";
import Badge from "../Badge/Badge";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="background-image">
        <img
          src={logo}
          alt="Photo by Nadya Spetnitskaya on Unsplash"
          className="logo"
        />
        <div className="photo-tag">
          <p>
            Photo by{" "}
            <a href="https://unsplash.com/@kiboka?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Nadya Spetnitskaya
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/PGerVkBA4WM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              {" "}
              Unsplash.
            </a>
          </p>
        </div>
        <div className="badge">
          <Badge />
        </div>
      </div>
    </div>
  );
};

export default App;
