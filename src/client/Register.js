import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form action="http://localhost:3000/register" method="POST">
        <label htmlFor="userName">User Name</label>
        <input type="text" name="userName" id="userName" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"/>
        <input type="submit" value="Register"/>
      </form>
    );
  }
}

export default Register;
