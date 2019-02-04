import React from "react";

const JobResume = (props) => {
  return(
    <div className="job-resume">
      <div className="inner-content">
        <h4 className="text-center">{props.info.title}</h4>
        <figure className="block-image">
          <img src={props.info.img} alt={props.info.description}/>
        </figure>
        <p>{props.info.description}</p>
        <footer className="visit-link-container text-center">
          <a target="_blank" href={props.info.url} className="btn-simple visit-link">Visitar</a>
        </footer>
      </div>
    </div>
  )
}

export default JobResume;