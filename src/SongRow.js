import React from 'react';
import "./SongRow.css"


function SongRow({track , playSong}) {
    return (
        <div className="SongRow" onClick={()=>playSong(track.id)}>
            <img className="SongNameAlbum" src={track.album.images[0].url} alt="" />

            <div className="SongInfo">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")}-{" "}
                    {track.album.name}
                </p>

            </div>
        </div>
    )
}

export default SongRow;