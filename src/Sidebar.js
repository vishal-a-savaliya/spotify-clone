import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function Sidebar(){
    const [{playlists}, dispatch] = useDataLayerValue();
    return(
        <div className="Sidebar">
            {/* <h1> I am Sidebar</h1> */}

            <img className="SidebarLogo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify logo"/>
            
            <SidebarOption Icon={HomeIcon}  title="Home" />
            <SidebarOption Icon={SearchIcon}  title="Search" />
            <SidebarOption Icon={LibraryMusicIcon}  title="Your Library" />
            <br/>
            <strong className="SidebarTitle">PlAYLISTS</strong>
            <hr/> 

            {playlists ?.items?.map(playlists=>(

            <SidebarOption className="PlaylistSong" title={playlists.name} />

            ))}

        </div>
    );
}

export default Sidebar;