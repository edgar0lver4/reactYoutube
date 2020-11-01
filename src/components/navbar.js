import React from "react";

/* Importar los componentes */

/* Importar los iconos */

export default function Navbar(props) {

return <div className="navbar">
      <div className="bdashed"><img src={props.logo} alt="youtube logo" className="ytbImg"></img></div>
      <div className="search bdashed">search</div>
      <div className="bdashed"><img src={props.videoIcon} alt="videoIcon" className="imageIcon"/></div>
      <div className="bdashed"><img src={props.vmoduleIcon} alt="videoModuleIcon" className="imageIcon"/></div>
      <div className="bdashed"><img src={props.bellIcon} alt="bellIcon" className="imageIcon"/></div>
      <div className="bdashed login-container">Login</div>
  </div>;
}
