import React from "react";

function SkillsForm(props) {
    return(
        <div className="dfc">
            <img
                src={props.logo} 
                alt={props.skills} 
                className="logoskill"
            /> 
            <h5>{props.skills}</h5>
        </div>
    )
}

export default SkillsForm ;