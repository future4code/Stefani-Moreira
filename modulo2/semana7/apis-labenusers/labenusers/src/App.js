import React from "react";
import { GlobalStyle }  from "./GeneralStyles"
import SignUpScreen from "./components/SignUpScreen/SignUpScreen";
import UsersListScreen from "./components/UsersListScreen/UsersListScreen";

export default class App extends React.Component {
  state = {
    page: "signup",
  };

  renderPages = () => {
    switch (this.state.page) {
      case "signup":
        return <SignUpScreen pageUsers={this.pageUsers} />;
      case "usersList":
        return <UsersListScreen pageSingUp={this.pageSingUp} />;
      default:
    }
  };

  pageSingUp = () => {
    this.setState({ page: "signup" });
  };

  pageUsers = () => {
    this.setState({ page: "usersList" });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        {this.renderPages()}
      </div>
    );
  }
}
