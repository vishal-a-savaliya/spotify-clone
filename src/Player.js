import React from "react";
import "./player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ spotify }) {
    return (
        <div className="Player">
            <div className="PlayerBody">

                {/* <h1>Wlcome To Spotify</h1> */}
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <Footer spotify={spotify} />
        </div>
    );
}

export default Player;