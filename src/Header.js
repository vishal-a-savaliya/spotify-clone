import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar} from "@material-ui/core";
import { useDataLayerValue } from './DataLayer';


function Header(){
    const [{user}] = useDataLayerValue();
    return(
        <div className="Header">
            <div className="HeaderLeft">
                <SearchIcon />
                <input type="text" placeholder="Search for Artists, Songs, or Podcasts"/>
            </div>
            <div className="HeaderRight">
                <Avatar src={user?.images[0]?.url} alt={user?.dispaly_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}
export default Header;