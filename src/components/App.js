import React from "react";
import "./App.css";
import Header from "./Header";
import "./Header.css";
import SearchBar from "./SearchBar";
import "./SearchBar.css";
import Results from "./Results";
import "./Results.css";

const name = require("@rstacruz/startup-name-generator");

class App extends React.Component {
  state = {
    headertext: "NameFY - You got a product, we got a name",
    suggestedNames: [],
  };
  handleInputChange = (userInput) => {
    this.setState({ suggestedNames: userInput ?name(userInput) : []});
  };
  render() {
    return (
      <div>
        <Header myTitle={this.state.headertext} />

        <SearchBar onInputChange={this.handleInputChange} />

        <Results suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;
