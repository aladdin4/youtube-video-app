import React from "react";

class SearchBar extends React.Component {
  //the state
  state = {
    term: "",
  };
  //on change callBack function
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  //on submitting the form
  onFormSubmit = (e) => {
    //the first thing we stop the default behavior
    e.preventDefault();
    console.log("form submitted" + {e.target.value});
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
