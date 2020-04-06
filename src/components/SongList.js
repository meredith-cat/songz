import React from "react";
import Song from "./Song";

const SongList = (props) => {
  const songs = props.songs.map(song => {
    return<Song name={song['im:name']['label']}
    artist={song['im:artist']['label']}
    position={props.songs.indexOf(song) + 1}
    image={song["im:image"][2]["label"]}
    clip={song["link"][1]["attributes"]["href"]}
    key={song["id"]["attributes"]["im:id"]}/>
  })

  return(
    <div className="song-list">
    {songs}
    </div>
  )

}
export default SongList;
