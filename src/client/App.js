import React from "react";
import ReactDom from "react-dom";
import Home from "./Home";
import Text from "./Text";
import Login from "./Login";
import PostList from "./PostList";
import NewPost from "./NewPost";
import Register from "./Register";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Components = {
      Home: Home,
      Text: Text,
      Login: Login,
      PostList: PostList,
      NewPost: NewPost,
      Register: Register
    };

    const { page, data } = this.props;
    const MyComponent = Components[page];
    return (
      <div id={page}>
        <MyComponent data={data} />
      </div>
    );
  }
}

export default App;
