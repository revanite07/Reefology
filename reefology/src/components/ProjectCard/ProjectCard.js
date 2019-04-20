import React from 'react';
import './ProjectCard.css';

const ProjectCard = props => (

  <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img className="project-image" src={props.image}  />
        </div>
        <div class="card-action">
          <a href={props.link}>{props.name}</a>
          
        </div>
      </div>
    </div>
  </div>
);
export default ProjectCard;