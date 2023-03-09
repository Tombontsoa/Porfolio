import React  from "react";

import ELearning from "../Pictures/E-Learning.PNG"

function Projets () {
    return(
        <>
            <div className="certContenair">
                <div className="projectContent">
                    <h3 className="subtitle">E-learning</h3>
                    <img 
                        src={ELearning} 
                        alt='E-Learning' 
                        className="certificat"
                    />
                    <p className="description">
                        E-learning était notre projet de fin de cycle en vue de l'obtention du diplôme de licence.
                        Dévelloper avec MERN Stack.
                        C'est une plateforme d'éducation qui à pour but d'uniformiser les cours de l'enseignement téchnique à Madagascar.
                        Le projet est en cours de déploiement.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Projets;