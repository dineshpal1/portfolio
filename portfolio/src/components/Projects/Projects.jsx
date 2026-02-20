import React from 'react'
import Card from "../Card/Card"
import "./projects.css"
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import tti from "../../assets/tti.png"
function Projects() {
  return (
    <div id="projects">
        <h1 id="para">8+ YEARS EXPERIENCED IN PROJECTS</h1>
        <div className="slider">
        <Card title="VIRTUAL ASSISTANT" image={va}/>
        <Card title="AI PWERED FITNESS WEBSITE" image={fw}/>
        <Card title="AI TEXT TO IMAGE GENERATOR" image={tti}/>
        <Card title="AI TEXT TO IMAGE GENERATOR" image={tti}/>
        <Card title="AI TEXT TO IMAGE GENERATOR" image={tti}/>
        </div>
    </div>
  )
}

export default Projects
