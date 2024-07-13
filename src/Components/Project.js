import React from "react";

import ProjectForm from "./ProjectForm"

import ELearning from "../Media/E-Learning.webp"
import Overview1 from "../Media/E-Learning/Overview0.webp"
import Overview2 from "../Media/E-Learning/Overview.webp"
import Overview3 from "../Media/E-Learning/Overview1.webp"
import Overview4 from "../Media/E-Learning/Overview2.webp"
import Overview5 from "../Media/E-Learning/Overview3.webp"
import Overview6 from "../Media/E-Learning/Overview4.webp"
import Overview7 from "../Media/E-Learning/Overview5.webp"
import Overview8 from "../Media/E-Learning/Overview6.webp"
import Overview9 from "../Media/E-Learning/Overview7.webp"
import Overview10 from "../Media/E-Learning/Overview8.webp"
import Overview11 from "../Media/E-Learning/Overview9.webp"
import Overview12 from "../Media/E-Learning/Overview10.webp"
import Overview13 from "../Media/E-Learning/Overview11.webp"
import Overview14 from "../Media/E-Learning/Overview12.webp"
import Overview15 from "../Media/E-Learning/Overview13.webp"
import Overview16 from "../Media/E-Learning/Overview14.webp"
import Overview17 from "../Media/E-Learning/Overview15.webp"

function Project() {
    let description = `E-learning était notre projet de fin de cycle en vue de l'obtention du diplôme de licence.
    Dévelloper avec MERN Stack.
    C'est une plateforme d'éducation qui à pour but d'uniformiser les cours de l'enseignement téchnique à Madagascar.
    Le projet est en cours de déploiement.`
    let ELearningOverview = [Overview1,Overview2,Overview3,Overview4,Overview5,Overview6,Overview7,
        Overview8,Overview9,Overview10,Overview11,Overview12,Overview13,Overview14,
        Overview15,Overview16,Overview17
    ]
    return(
        <>
        {/* {
            ['E-learning'].map((projects)=>{
                <ProjectForm 
                    name={projects} 
                    ProjectImg={ELearning} 
                    projectDescription={description} 
                />
            })
        } */}
        <ProjectForm 
            name='E-Learning' 
            ProjectImg={ELearning} 
            projectDescription={description} 
            overview={ELearningOverview}
        />
        </>
    )
}

export default Project;