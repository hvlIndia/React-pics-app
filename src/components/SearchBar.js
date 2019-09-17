import React from "react";

class SearchBar extends React.Component {
  /* onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick() {
      console.log("input was clicked");
  }*/

  state = { term: "hi there" };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label> Image Search</label>

            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
