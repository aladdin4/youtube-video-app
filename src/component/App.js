import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [] };
  //
  //the callback-function that will handle the event submit
  onFormSubmit = async (term) => {
    //
    //when the form is submitted we need to send a request with the term
    const response = await youtube.get("/search", {
      params: {
        //the only dynamic part is the one we didn't insert in the axios instance which is the keyword we are searching for
        q: term,
      },
    });
    //updating state with the response result
    this.setState({ videos: response.data.items });
  };

  //we send the callback as prop to the child
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div>i have {this.state.videos.length} videos</div>
      </div>
    );
  }
}
export default App;
