import React from "react";
import Home from "./Home";
import Text from "./Text";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Components = {
      Home: Home,
      Text: Text
    };
    console.log(this.props, "----------");
    const { page, data } = this.props;
    const MyComponent = Components[page];
    return <MyComponent data={data} />;
  }
}

export default App;
