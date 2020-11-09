import React from "react";
import './Footer.css';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";



function Footer() {
    return(
        <div className="footer">
            <div className="footer__left">
                <h1>Album and Song Details</h1>
            </div>
            <div className="footer__center">
                <ShuffleIcon classname="footer__green" />
                <SkipPreviousIcon classname="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon classname="footer__icon" />
                <RepeatIcon classname="footer__green" />
            </div>
            <div className="footer__right">
                <h1>Volume Controls</h1>
            </div>
        </div>
    )
}

export default Footer