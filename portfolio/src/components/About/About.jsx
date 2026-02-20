import React from 'react'
import "./about.css"
import Card from '../Card/Card'
import mern from "../../assets/mern.png"
import laravel from "../../assets/laravel-vs-php.png"
import next from "../../assets/next.png"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function About() {
  useGSAP(()=>{
    gsap.from('.circle',{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      ScrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
        markers:true,
       start:"top 60%",
       end:"top 30%"
      }
    })
    gsap.from('.line',{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      ScrollTrigger:{
        trigger:".line",
        scroll:"body",
        scrub:2,
        markers:true,
       start:"top 60%",
       end:"top 30%"
      }
    })
     gsap.from('.aboutdetails h1',{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      ScrollTrigger:{
        trigger:".aboutdetails h1",
        scroll:"body",
        scrub:2,
        markers:true,
       start:"top 60%",
       end:"top 30%"
      }
    })
     gsap.from('.aboutdetails li',{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      ScrollTrigger:{
        trigger:".aboutdetails li",
        scroll:"body",
        scrub:2,
        markers:true,
       start:"top 60%",
       end:"top 30%"
      }
    })
     gsap.from('.rightabout ',{
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      ScrollTrigger:{
        trigger:".rightabout",
        scroll:"body",
        scrub:2,
        markers:true,
       start:"top 60%",
       end:"top 30%"
      }
    })
  })
  return (
    <div id="about">
      <div className="leftabout">
      <div className="circle-line">
        <div className="circle"></div>
          <div className="line"> </div>
         <div className="circle"> </div>
          <div className="line"></div>
           <div className="circle"> </div>
          
      </div>
      <div className="aboutdetails">
        <div className="personalinfo">
          <h1>Personal Info</h1>
          <ul>
            <li>
            <span>Name</span>:DINESH PAL
            </li>
            <li>
            <span>Age</span>:40 Years
            </li>
            <li>
            <span>Gender</span>:Male
            </li>
             <li>
            <span>Language Known</span>:HINDI,ENGLISH
            </li>
          </ul>
        </div>
        <div className="education">
          <h1>Education</h1>
          <ul>
            <li>
            <span>DEGREE</span>:B.E.
            </li>
            <li>
            <span>BRANCH</span>:COMPUTER SCIENCE & ENGG.
            </li>
           
          </ul>
        </div>
        <div className="skills">
          <h1>Skills</h1>
          <ul>
            <li>
            MERN STACK WEB DEVELOPER
            </li>
            <li>
            PHP
            </li>
            <li>
            LARAVEL
            </li>
             <li>
            Next.js
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div className="rightabout">
        <Card title="MERN STACK DEVELOPER" image={mern}/>
        <Card title="PHP DEVELOPER" image={laravel}/>
        <Card title=" Next.js DEVELOPER" image={next}/>
      </div>
    </div>
  )
}

export default About
