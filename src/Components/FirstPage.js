import React ,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../Pictures/LogoLight.png";
import CV from "../Doc/CV_Tombontsoaniaina_Princy2.pdf"

import "./FirstPage.css";
import NavBar from "./Navbar";
import Projets from "./Projet";
import Competences from "./Competences";

import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const FirstPage = () => {
    const [page,setPage] = useState('first');    
    return(
        <div className="borderSytle">
            <div className="p1Contenair dfc">
                <div className="navBar dfr" onClick={()=>{setPage("")}}>
                    <NavBar />
                </div>
                <div className="content dfr">
                    <div className="lContent">
                        {
                            page === 'projets' ? (
                                <div className="typeWriter">
                                    <h1>Projets.</h1>
                                </div>
                            ) : page === 'competences' ? (
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
                        <div className="descriptionBG">
                            <div className="descriContenair">
                                {
                                    page === 'projets' ? (
                                        <Projets />
                                    ) : page === 'competences' ? (
                                        <Competences />
                                    ) : (
                                        <h3 className="description">
                                            Salut! Je suis Princy, developpeur front-end malagasy. Passioner de l'informatique je ne me limite pas qu'aux developpements web/logiciel mais aussi aux differentes maintenances informatiques (logiciel ou matériel).
                                        </h3>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="rContent dfc">
                        <div className="logoContent dgc">
                            <img 
                                src={Logo} 
                                alt='Logo' 
                                className="logo"
                            />
                        </div>
                        <h1 className="about">A propos :</h1>
                        <div className="aboutContenair dfc">                                                        
                            <button 
                                className="aboutTxt"
                                onClick={()=>{setPage('competences')}}
                            >
                                Mes compétences
                            </button>
                            <button 
                                className="aboutTxt"
                                onClick={()=>{setPage('projets')}}
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
                <span className="footer">Copyright 2023 <FontAwesomeIcon icon={faCopyright} /></span>
            </div>            
        </div>
    )
};

export default FirstPage;
