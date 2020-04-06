import React from 'react';

const Song = (props) => {
  return(
    <div className="song">
    <h1>{props.name}</h1>
    <img src={props.image} alt="Album Cover" height="170" width="170"/>
    <h4>Artist: {props.artist}</h4>
    <h4>Chart Position: {props.position}</h4>
    <audio controls>
    <source src={props.clip} type="audio/mpeg"/>
    Your browser does not support the audio tag.
    </audio>
    </div>
  )

}

export default Song;
