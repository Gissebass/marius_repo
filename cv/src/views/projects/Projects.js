import React from "react";
import ProjectElement from "./ProjectElement";
import "./Projects.css";

const Projects = () => {

  const ProjectList = [
    {
      Projectname: "Prosjekter",
      imageSource: "#",
      paragraph: "",
      font:'Nabla'
    },
    {
      Projectname: "TEST",
      imageSource: "#",
      paragraph: "TESTTESTTEST",
      font:"nunito",
    },
    {
      Projectname: "TEST",
      imageSource: "#",
      paragraph: "",
      font:"nunito"
    },
  ];

  const mapProjects = () => {
    return ProjectList.map((project, index) => (
      <ProjectElement
        title={project.Projectname}
        description={project.paragraph}
        src={project.imageSource}
        font={project.font}
        key={index}
      />
    ));
  };

  return (<>{mapProjects()}</>)
}

export default Projects;
