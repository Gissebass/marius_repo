import React from "react";
import ProjectElement from "./ProjectElement";
import "./Projects.css";
import {useState} from "react";

const Projects = () => {

  const ProjectList = [
    {
      Projectname: "Prosjekter",
      imageSource: "#",
      paragraph: "Forside",
      font:"nabla"
      
    },
    {
      Projectname: "TEST",
      imageSource: "#",
      paragraph: "TESTTESTTEST",
      font:"nabla",
    },
    {
      Projectname: "TEST",
      imageSource: "#",
      paragraph: "TEST3",
      font:"nunito"
    },
  ];
    
  
let i = 0;
  const mapProjects = () => {
    const [ProjectState, setProjectState] = useState(i);
    const handleClick = (e) => {
      if (i < ProjectList.length) {
        console.log(ProjectList.length,"Lengde")
        i++;
        console.log(i,"i")
        setProjectState(i)
      } else if (i === ProjectList.length) {
        i = 0
        console.log(i,"TEST")
        setProjectState(i)
      }else {
        console.log("ERROR")
      }
    }
    return (
      <>
      <button className="ProjectButton" onClick={(e)=>handleClick(e)} >TEST</button>
      <ProjectElement
        title={ProjectList[ProjectState].Projectname}
        description={ProjectList[ProjectState].paragraph}
        src={ProjectList[ProjectState].imageSource}
        font={ProjectList[ProjectState].font}
      />
      </>
    )
    
  };

  return (<>{mapProjects()}</>)
}

export default Projects;



