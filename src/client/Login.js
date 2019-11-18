import React from "react";
import ReactDom from "react-dom";
import NewPost from "./NewPost";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        password:""
    }
  }

  render() {
    return (
      <div>
        <form action="http://localhost:3000/login" method="POST">
          <label htmlFor="userName">User Name</label>
          <input name="userName" type="text" placeholder="user name" id="user" />
          <label htmlFor="password">Password</label>
          <input
          name="password"
            type="password"
            placeholder="password"
            id="password"
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default Login;
