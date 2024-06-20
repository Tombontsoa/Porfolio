import React from 'react'

import Overview from './Overview';

function ProjectForm(props) {
    return(
        <div className="projectContainer">
            <h3 className="subtitle">{props.name}</h3>
            <img 
                src={props.ProjectImg} 
                alt={props.name} 
                className="certificat"
            />
                <p className="description">{props.projectDescription}</p>
                <Overview projectOverview={props.overview} projectName={props.name} />
            
        </div>
    )
}

export default ProjectForm ;