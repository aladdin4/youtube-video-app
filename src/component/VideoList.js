import React from "react";
import VideoItem from "./VideoItem";
//a functional component that will render the videos it receives through props
var videolist = (props) => {
  const myVideoList = props.videos.map((video) => {
    //will return alist of items, one at a time, where each one is created for each video in the response list
    return (
      <VideoItem
        key={video.id.videoId}
        videodata={video}
        onVideoSelect={props.onVideoSelect}
      />
    );
  });

  //this will be the container for the whole list of videos
  return <div className="ui relaxed divided list">{myVideoList} </div>;
};
export default videolist;
