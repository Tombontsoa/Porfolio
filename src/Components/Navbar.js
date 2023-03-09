import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function NavBar () {

    return(
        <>
            <div className="title">
                <Link to="">
                    <h2>Portfolio.</h2>
                    <h2>Portfolio.</h2>
                </Link>
            </div>
            <div className="connexion dfr">
                <a href="https://github.com/Tombontsoa" >
                    <FontAwesomeIcon icon={faGithub} className="fa-2xl"/>
                </a>
                <a href="mailto:printom2@gmail.com" >
                    <FontAwesomeIcon icon={faEnvelope} className="fa-2xl" />
                </a>
                <a href="https://www.linkedin.com/in/princy-tombontsoaniaina-179950239/" >
                    <FontAwesomeIcon icon={faLinkedin} className="fa-2xl" />
                </a>
                <a href="https://www.facebook.com/princy.tombontsoaniaina" >
                    <FontAwesomeIcon icon={faFacebook} className="fa-2xl" />
                </a>
            </div>
        </>
    )
}

export default NavBar;