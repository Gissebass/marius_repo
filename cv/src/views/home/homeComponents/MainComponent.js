import "./MainComponent.css";
import React from "react";
import image from "../../../pictures/profile_pic.png";

const MainComponent = () => {
  return (
    <div className="MainComponent">
      <h1 className="mainOverskrift">Marius Gisleberg</h1>
      <div className="mainContent">
        {<img className="profile_picture" src={image} alt="profilbilde"></img>}
        <div className="mainParagraph">
          <p>
            Hi! My name is Marius and i´m a student, studying computer science
            at the Norwegian institute of technology. in my freetime i often
            like to try a new restaurant in town or get in some exercise.
          </p>
        </div>
      </div>
    </div>
  );
};
export default MainComponent;