import React from "react";
import ProjectElement from "./ProjectElement";
import "./Projects.css";
import { useState } from "react";
import Chucknorris from "./projectComponent.js/quote";
import GridProp from "./ProjectViews/GridProp.js";

const SpecialProjectNames = ["GridProp"];

const Projects = () => {
  const ProjectList = [
    {
      Projectname: "Prosjekter",
      imageSource: "#",
      paragraph: "Forside",
      font: "nabla",
    },
    {
      Projectname: "BildeAPI",
      imageSource: "https://picsum.photos/200",
      paragraph: <Chucknorris />,
      font: "nabla",
    },
    {
      Projectname: "TEST",
      imageSource: "#",
      paragraph: "TEST3",
      font: "nunito",
    },
    {
      Projectname: "GridProp",
      label: "GRID GIRD GIRD",
      paragraph: "Dette er en test",
      font: "nunito",
    },
  ];

  const mapProjects = () => {
    const [ProjectState, setProjectState] = useState(0);
    const handleClick = (e) => {
      if (ProjectState < ProjectList.length - 1) {
        setProjectState(ProjectState + 1);
      } else if (ProjectState === ProjectList.length - 1) {
        setProjectState(0);
      } else {
        console.log("ERROR Usestate project");
      }
    };
    console.log(
      SpecialProjectNames.includes(ProjectList[ProjectState].ProjectName)
    );
    console.log("TEST", ProjectList[ProjectState].Projectname);

    if (SpecialProjectNames.includes(ProjectList[ProjectState].ProjectName)) {
      //Fiks opp i if statement pls
      return (
        <GridProp
          paragraph={ProjectList[ProjectState].paragraph}
          label={ProjectList[ProjectState].label}
        ></GridProp>
      );
    } else {
      return (
        <>
          <button className="ProjectButton" onClick={(e) => handleClick(e)}>
            Neste side
          </button>
          <ProjectElement
            title={ProjectList[ProjectState].Projectname}
            description={ProjectList[ProjectState].paragraph}
            src={ProjectList[ProjectState].imageSource}
            font={ProjectList[ProjectState].font}
          />
        </>
      );
    }
  };
  
  return <>{mapProjects()}</>;
};

export default Projects;
