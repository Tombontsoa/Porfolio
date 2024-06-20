import React, { useState }  from "react";

import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../Media/LogoLight.png";
import CV from "../Document/CV_Tombontsoaniaina_Princy.pdf"

import NavBar from "./NavBar"
import Project from "./Project";
import Skills from "./Skills";
import "./Style.css";

function HomePage() {
    const [page,setPage] =  useState('first')
    return(
        <div className="borderPage dfc">
            <div className="container dfc">
                <div className="navBar dfr" onClick={()=>setPage('')}>
                    <NavBar />
                </div>
                <div className="content dfr form1">
                    <div className="lContent">
                        {
                            page === 'project' ? (
                                <div className="typeWriter">
                                    <h1>Projets.</h1>
                                </div>
                            ) : page === 'skill' ? (
                                <div className="typeWriter">
                                    <h1>Competences et éxpériences.</h1>
                                </div>
                            ) : (
                                <div className="helloWord">
                                    <section className="animationText">
                                        <p className="txtAnim first">Welcome</p>
                                        <p className="txtAnim second">Bienvenue</p>
                                        <p className="txtAnim third">Tongasoa</p>
                                    </section>
                                </div>
                            )
                        }
                        <div className="descriptionBorder">
                            <div className="descriContainer">
                                {
                                    page === 'project' ? (
                                        <Project />
                                    ) : page === 'skill' ? (
                                        <Skills />
                                    ) : (
                                        <h3 className="description">
                                            Salut! Je suis Princy, developpeur front-end malagasy. Passioner de l'informatique je ne me limite pas qu'aux developpements web/logiciel mais aussi aux differentes maintenances informatiques (logiciel ou matériel).
                                        </h3>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="rContent">
                        <div className="logoContent dgc">
                            <img 
                                src={Logo} 
                                alt='LogoPixi' 
                                className="logoPixi"
                            />
                        </div>
                        <h1 className="about">A propos :</h1>
                        <div className="aboutContenair dfc">
                            <button 
                                className="aboutTxt"
                                onClick={()=>{setPage('skill')}}
                            >
                                Mes compétences
                            </button>
                            <button 
                                className="aboutTxt"
                                onClick={()=>{setPage('project')}}
                            >
                                Mes projets
                            </button>
                            <button 
                                className="aboutTxt"
                            >
                                <a
                                    href={CV}
                                    download
                                >
                                    Télecharger mon CV
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="form2">
                    <div className="heading" >
                        {
                            page === 'project' ? (
                                <div className="typeWriter">
                                    <h1>Projets.</h1>
                                </div>
                            ) : page === 'skill' ? (
                                <div className="typeWriter">
                                    <h1>Competences et éxpériences.</h1>
                                </div>
                            ) : (
                                <div className="helloWord">
                                    <section className="animationText">
                                        <p className="txtAnim first">Welcome</p>
                                        <p className="txtAnim second">Bienvenue</p>
                                        <p className="txtAnim third">Tongasoa</p>
                                    </section>
                                </div>
                            )
                        }
                    </div>
                    <div className="aboutContent" >
                        <div className="descriptionBorder">
                            <div className="descriContainer">
                                {
                                    page === 'project' ? (
                                        <Project />
                                    ) : page === 'skill' ? (
                                        <Skills />
                                    ) : (
                                        <h3 className="description">
                                            Salut! Je suis Princy, developpeur front-end malagasy. Passioner de l'informatique je ne me limite pas qu'aux developpements web/logiciel mais aussi aux differentes maintenances informatiques (logiciel ou matériel).
                                        </h3>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="aboutContenair dfc">
                        <div className="logoContent dgc">
                            <img 
                                src={Logo} 
                                alt='LogoPixi' 
                                className="logoPixi"
                            />
                        </div>
                        <button 
                            className="aboutTxt"
                            onClick={()=>{setPage('skill')}}
                        >
                            Mes compétences
                        </button>
                        <button 
                            className="aboutTxt"
                            onClick={()=>{setPage('project')}}
                        >
                            Mes projets
                        </button>
                        <button 
                            className="aboutTxt"
                        >
                            <a
                                href={CV}
                                download
                            >
                                Télecharger mon CV
                            </a>
                        </button>
                    </div>
                </div>
            <footer >Copyright 2023 <FontAwesomeIcon icon={faCopyright} /></footer>
            </div>
        </div>
    )
}

export default HomePage;
