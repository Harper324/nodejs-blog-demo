import React from "react";
import Home from "./Home";
import Text from "./Text";
import Login from "./Login";
import PostList from "./PostList";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Components = {
      Home: Home,
      Text: Text,
      Login: Login,
      PostList: PostList
    };
    console.log(this.props, "----------");
    const { page, data } = this.props;
    const MyComponent = Components[page];
    return <MyComponent data={data} />;
  }
}

export default App;
