import React,{useEffect,useState} from "react";
import "./Footer.css";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";
// icons
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";



function Footer({spotify}) {
    
    const [{item,playing}, dispatch] = useDataLayerValue();

    useEffect(()=>{
        
        spotify.getMyCurrentPlaybackState().then((list)=>{
            console.log(list);

            dispatch({
                type:"SET_PLAYING",
                playing: list.is_playing,
            });

            dispatch({
                type:"SET_ITEM",
                item:list.item,
            });
        });

    }, [spotify]);

    const PlayPaush=()=>{

        if(playing){
            spotify.pause();
            dispatch({
                type:"SET_PALYING",
                playing:false,
            });
        }else{
            spotify.play();
            dispatch({
                type:"SET_PLATING",
                playing: true,
            });
        }
    };

    const SkipNext =()=>{
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack().then((song)=>{
            
            dispatch({
                type:"SET_ITEM",
                item:song.item,
            });

            dispatch({
                type:"SET_PALYING",
                playing:true,
            });
        });
    };

    const SkipPrevious=()=>{
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack().then((song)=>{
            
            dispatch({
                type:"SET_ITEM",
                item:song.item,
            });

            dispatch({
                type:"SET_PALYING",
                playing:true,
            });
        });
    }

    return (
        <div className="Footer">
            {/* <h1> I am Footer</h1> */}
            <div className="FooterLeft">
                <img className="FooterAlbumLogo"  src={item?.album.images[0].url} alt={item?.name} />

                {item? (
                <div className="FooterSongInfo">
                <h4>{item.name}</h4>
                <p>{item.artists.map((artist=>artist.name).join(", "))}</p>
                </div>
                ):(
                <div className="FooterSongInfo">
                <h4>Song...</h4>
                <p>...</p>
                </div>

                )}
                
            </div>

            <div className="FooterCenter">

                <ShuffleIcon className="FooterGreen" />

                <SkipPreviousIcon onClick={SkipPrevious}  className="FooterIcon" />

                {playing ? (

                    <PauseCircleOutlineIcon 
                    onClick={PlayPaush} className="CircleOutlinePlayIcon FooterIcon" fontSize="large"/>

                 ):(
                     <PlayCircleOutlineIcon 
                     onClick={PlayPaush} className="CircleOutlinePlayIcon FooterIcon" fontSize="large"/>
                  )}

                <SkipNextIcon onClick={SkipNext} className="FooterIcon" />

                <RepeatIcon className="FooterGreen" />

            </div>

            <div className="FooterRight">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                        {/* <Slider /> */}
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;