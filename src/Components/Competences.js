import React ,{useState} from "react";

import CertificateJS from "../Pictures/JSCertificate.PNG"

function Competences () {
    const [compAndExp,setCompAndExp] = useState('')
    return(
        <div className="comContenair dfc">
            <button className="comTitle com" onClick={()=>setCompAndExp('com')} ><h1>Compétences</h1></button>                                    
            <button className="comTitle exp" onClick={()=>setCompAndExp('exp')} ><h1>Expériences</h1></button>                                                
            <button className="comTitle cer" onClick={()=>setCompAndExp('cert')} ><h1>Certificat</h1></button>                                                
            {
                compAndExp === 'com' ? (
                    <>
                        <h2 className="subtitle">Languages</h2>
                        <li className="description descriLi">HTML</li>
                        <li className="description descriLi">CSS</li>
                        <li className="description descriLi">JavaScript</li>
                        <li className="description descriLi">Arduino</li>
                        <h2 className="subtitle">Outils</h2>
                        <li className="description descriLi">Figma</li>
                        <li className="description descriLi">Github</li>
                        <li className="description descriLi">Trello</li>
                        <li className="description descriLi">Podio</li>
                        <h2 className="subtitle">Framework(s)</h2>
                        <li className="description descriLi">ReactJs</li>
                    </>
                ) : compAndExp === 'exp' ? (
                    <>
                        <li className="description descriLi">Participation à Front-end Award 2021</li>
                    </>
                ) : compAndExp === 'cert' ? (
                    <>
                        <div className="certContenair dgc">                                                    
                            <a href="https://www.codingame.com/certification/qZJZIk_lPM5CDVpEmRO06w">
                                <img 
                                    src={CertificateJS} 
                                    alt='Certificat' 
                                    className="certificat"
                                />
                            </a>
                            <h3 className="subtitle">Certificat JavaScript CodinGame</h3>                                                            
                        </div>
                    </>
                ) : null
                }
        </div>
    )
}

export default Competences;