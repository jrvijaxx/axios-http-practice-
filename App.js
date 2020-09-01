import React from "react";
import axios from "axios";
import "./App.css";
// import Props from "./components/Props.js";
// import PropsClass from "./components/ClassProps.js";
// import Comment from "./components/Comment.js";
import Axios from "./components/Axios";

class App extends React.Component {
  state = {
    repos: null,
  };
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`).then((res) => {
        const repos = res.data.public_repos;
        this.setState({ repos: repos });
      });
    } else return;
  };
  render() {
    return (
      <div className="App">
        <h1>Axios HTTP</h1>
        <Axios getUser={this.getUser} className="form" />
        {this.state.repos ? (
          <p>Number of repositories: {this.state.repos}</p>
        ) : (
          <p>Enter username</p>
        )}
      </div>
    );
  }
}

export default App;
