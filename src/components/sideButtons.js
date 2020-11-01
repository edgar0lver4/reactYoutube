import React from 'react';

const Sidebutton = (props)=>{
    return(
        <div className="bdashed itemMen">
            <div><img src={props.icon} alt={props.title} className="menuIcons"/></div>
            <div>{props.title}</div>
        </div>
    )
};



export default Sidebutton;