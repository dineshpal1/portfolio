import React from 'react'
import Card from "../Card/Card"
import "./projects.css"
import va from "../../assets/va.png"
// import fw from "../../assets/fw.png"
// import tti from "../../assets/tti.png"
import xe from "../../assets/xeniall.jfif"
import edental from "../../assets/edental.png"
// import multi from "../../assets/multicart.png"
import ict from "../../assets/ict.png"
import snapcart from "../../assets/snapcart.png"
function Projects() {
  return (
    <div id="projects">
        <h1 id="para">8+ YEARS EXPERIENCED IN PROJECTS</h1>
        <div className="slider">
        <Card title="VIRTUAL ASSISTANT" image={va}/>
        <Card title="www.ict.ae" image={ict}/>
        <Card title="www.snapcart.com" image={snapcart}/>
        <Card title="www.edentalportal.com" image={edental}/>
        <Card title="www.xenialindia.com" image={xe}/>
        </div>
    </div>
  )
}

export default Projects
