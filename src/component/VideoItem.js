import "./VideoItem.css";

import React from "react";

const VideoItem = (props) => {
  return (
    <div className="item video-item">
      <img
        className="ui image"
        src={props.videodata.snippet.thumbnails.default.url}
        alt="a thumbnail of the video"
      />

      <div
        onClick={() => {
          props.onVideoSelect(props.videodata);
        }}
        className="content"
      >
        <div className="header">{props.videodata.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
