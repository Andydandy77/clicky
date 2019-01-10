import React from "react";
import "./style.css";

const Header = props => (
    <div className="header">
      <h1 className="title1">{props.children}</h1>
       <h2 className="subtitle">Click on an image to earn points, but don't click on any more than once</h2>
      <h1 className="scores">
        Score: {props.score} | Top Score: {props.topScore}
      </h1>

   
    </div>
      


  );

export default Header;