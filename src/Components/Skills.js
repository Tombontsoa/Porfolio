import React ,{useState} from "react";

import HTMLLogo from '../Media/HTML.png'
import CSSLogo from '../Media/CSS.png'
import JSLogo from '../Media/JavaScript.png'
import PHPLogo from '../Media/PHP.png'
import GitHubLogo from '../Media/GitHub.png'
import FigmaLogo from '../Media/Figma.png'
import TrelloLogo from '../Media/Trello.png'
import PodioLogo from '../Media/Podio.png'
import ReactLogo from '../Media/React.png'
import CertificateJS from "../Media/JSCertificate.webp"
import FrontEndAwardImg from "../Media/FrontendAward.webp"

import SkillsForm from "./SkilksForm";
import ExpérienceForm from "./ExperienceForm";
import CertificateForm from "./CertificateForm"

function Skills() {
    const [skillAndExp,setSkillAndExp] = useState('')
    let logoSkillsList = [HTMLLogo,CSSLogo,JSLogo,PHPLogo]
    let logoToolsList = [GitHubLogo,FigmaLogo,TrelloLogo,PodioLogo]
    // let logoFrameworksList = [HTMLLogo]
    // let expImg = [HTMLLogo]
    // let certImg = [CertificateJS]
    // let certLink  = ['https://www.codingame.com/certification/qZJZIk_lPM5CDVpEmRO06w']
    return(
        <>
        <div className="skillContainer dfc">
            <button className="skillTitle skill" onClick={()=>setSkillAndExp('skill')} ><h1>Compétences</h1></button>
            <button className="skillTitle exp" onClick={()=>setSkillAndExp('exp')} ><h1>Expériences</h1></button>
            <button className="skillTitle cer" onClick={()=>setSkillAndExp('cert')} ><h1>Certificat</h1></button>
            { 
                skillAndExp === 'skill' ? (
                    <>
                    <div className="skillContent dfr">
                    {['HTML','CSS','JavaScript','PHP'].map((skill,ind)=>(
                        <SkillsForm 
                            key={skill} 
                            skills={skill} 
                            logo={logoSkillsList[ind]} 
                        />
                    ))}
                    </div>
                    <h1 className="subtitle" >Outils :</h1>
                    <div className="skillContent dfr">
                    {['GitHub','Figma','Trello','Podio'].map((tool,ind)=>(
                        <SkillsForm 
                            key={tool} 
                            skills={tool} 
                            logo={logoToolsList[ind]} 
                        />
                    ))}
                    </div>
                    <h1 className="subtitle">Framework(s) :</h1>
                    <div className="skillContent dfr">
                    {/* {['ReactJS'].map((framework,ind)=>(
                        <SkillsForm 
                            key={framework} 
                            skills={framework} 
                            logo={logoFrameworksList[ind]} 
                        />
                    ))} */}
                        <SkillsForm 
                            skills='ReactJS' 
                            logo={ReactLogo} 
                        />
                    </div>
                    </>
                ) : skillAndExp === 'exp' ? (
                    <>
                    <div className="skillContent dfr">
                    {/* {['Participation à Front-end Award 2021'].map((exp,ind)=>(
                        <ExpérienceForm 
                            key={exp} 
                            title={exp} 
                            expImgs={expImg[ind]} 
                        />
                    ))} */}
                        <ExpérienceForm 
                            title='Participation à Front-end Award 2021' 
                            expImgs={FrontEndAwardImg} 
                        />
                    </div>
                    </>
                ) : skillAndExp === 'cert' ? (
                    <>
                    <div className="skillContent dfc">
                    {/* {['Certificat JavaScript CodinGame'].map((cer,ind)=>(
                        <CertificateForm 
                            key={cer} 
                            name={cer} 
                            certificateImg={certImg[ind]} 
                            certificateLink={certLink[ind]} 
                        />
                    ))} */}
                        <CertificateForm 
                            name='Certificat JavaScript CodinGame' 
                            certificateImg={CertificateJS} 
                            certificateLink='https://www.codingame.com/certification/qZJZIk_lPM5CDVpEmRO06w' 
                        />
                    </div>
                    </>
                ) : null
            }
        </div>
        </>
    )
}

export default Skills ;