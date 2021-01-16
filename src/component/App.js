import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  //
  //callback-function for the click event.
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  //the callback-function that will handle the event submit
  onFormSubmit = async (term) => {
    //
    //when the form is submitted we need to send a request with the term
    const response = await Youtube.get("/search", {
      params: {
        //the only dynamic part is the one we didn't insert in the axios instance which is the keyword we are searching for
        q: term,
      },
    });
    //updating state with the response result
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  //we send the callback as prop to the child
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />

        <div className="ui grid">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.onFormSubmit("cat");
  }
}
export default App;
