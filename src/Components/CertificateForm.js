import React from "react";

function CertificateForm(props) {
    return(
        <div className="dfc">
            <a href={props.certificateLink}>
                <img
                    src={props.certificateImg} 
                    alt={props.name} 
                    className="certificat"
                />
                <h5>{props.name}</h5>
            </a>
        </div>
    )
}

export default CertificateForm ;