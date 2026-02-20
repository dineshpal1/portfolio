import React from 'react'
import "./home.css"
import man from "../../assets/man.png"
// import TypingEffect from "react-typing-effect"
import { Typewriter } from "react-simple-typewriter"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
function Home() {
  useGSAP(()=>{
     let tl1=gsap.timeline()
    tl1.from(".line1",{
      y:80,
      duration:1,
      opacity:0
    })
     tl1.from(".line2",{
      y:80,
      duration:1,
      opacity:0
    })
     tl1.from(".line3",{
      y:80,
      duration:1,
      opacity:0
    })
    gsap.from(".righthome img",{
       x:200,
      duration:1,
      opacity:0
    })
     
  })
  return (
    <div id="home">
      <div className="lefthome">
      <div className="homedetails">
        <div className="line1">
          I'M
        </div>
        <div className="line2">
          DINESH PAL
        </div>
        <div className="line3">
         {/* <TypingEffect 
         text={["FULL STACK DEVELOPER","WEB DEVELOPER","MERN DEVELOPER","PHP DEVELOPER"]}
         speed={100}
         eraseSpeed={50}
         eraseDelay={1000}
         typingDelay={500}
         cursor="|"
         /> */}
         <Typewriter 
              words={["FULL STACK DEVELOPER","WEB DEVELOPER","MERN DEVELOPER","PHP DEVELOPER"]}
              loop={0} // 0 means infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
        </div>
        <button>HIRE ME</button>
      </div>
      </div>
      <div className="righthome">
        <img src={man} alt="man"/>
      </div>
    </div>
  )
}

export default Home
