import React from "react";
import "./SidebarOption.css";

function SidebarOption({title,Icon}){
    return(
        <div className="SidebarOption">
            {Icon && <Icon className="SidebarOptionIcon"/>}
            {Icon ? <h4>{title} </h4>: <p>{title}</p> }
        </div>
    );
}

export default SidebarOption;