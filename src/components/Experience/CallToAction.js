import React from "react";
import CV from '../../assets/cv_oumisalam.pdf';
import './Experience.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";


function CallToAction() {
  return (
    <div className="cta">
      
      <a href={CV} className="cta__dtl ">
        <FontAwesomeIcon icon={faLink}/>
      </a>
      <span className="line"></span>
      <p className="myCv">CV</p>
      {/* <span className="line"></span> */}


    </div>
  )
}

export default CallToAction;