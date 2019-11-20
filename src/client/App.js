import React from "react";
import ReactDom from "react-dom";
import Home from "./Home";
import Text from "./Text";
import Login from "./Login";
import PostList from "./PostList";
import NewPost from "./NewPost";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
      console.log('hhhhhhh');
  }

  render() {
    const Components = {
      Home: Home,
      Text: Text,
      Login: Login,
      PostList: PostList,
      NewPost: NewPost
    };
    console.log(this.props, "App props ----------");

    const { page, data } = this.props;
    const MyComponent = Components[page];
    return (
      <div id={page}>
        <MyComponent data={data} />
        <button onClick={this.handleClick.bind(this)}>click</button>
      </div>
    )
  }
}


export default App;
