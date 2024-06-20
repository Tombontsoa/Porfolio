import React from 'react'

function ExpérienceForm(props) {
    return(
        <div className="dfc">
            <img
                src={props.expImgs} 
                alt={props.title} 
                className="expImg"
            /> 
            <h5>{props.title}</h5>
        </div>
    )
}

export default ExpérienceForm;