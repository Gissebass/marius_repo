import React from "react";

const ProjectElement = ({ title, description, src, font, index }) => {
  return (
    <div className="ProjectMain" key={index}>
      <h1 className="ProjectsOverskrift" style={{ fontFamily: font }}>
        {title}
      </h1>
      <div className="ProjectContent">
        <img className="ProjectPictures" src={src} alt={src}></img>
        <p className="ProjectParagraf">{description}</p>
      </div>
    </div>
  );
};

export default ProjectElement;