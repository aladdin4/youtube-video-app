import React from "react";

const VideoDetail = (props) => {
  if (props.video) {
    const videoSrc = "https://www.youtube.com/embed/" + props.video.id.videoId;

    return (
      <div>
        <div className="ui embed">
          <iframe title="the video player" src={videoSrc} />
        </div>
        <div className="ui segment">
          <h2 className="ui header">{props.video.snippet.title}</h2>

          <p>{props.video.snippet.description}</p>
        </div>
      </div>
    );
  } else {
    return <div>Search for a video and Click on it to display</div>;
  }
};

export default VideoDetail;
