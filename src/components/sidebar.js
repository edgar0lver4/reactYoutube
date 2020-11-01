import React from "react";
import Sidebutton from "./sideButtons";
import '../styles.css';

export function Sidebar(props) {
  return (<div className="sidebar sidebar-container">
    {props.icons.map((e) => <Sidebutton icon={e.icon} title={e.title}/>)}
  </div>);
}
