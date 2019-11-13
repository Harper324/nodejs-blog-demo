import React from "react";

class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>{data[0].title}</h1>
        <p>{data[0].text}</p>
      </div>
    );
  }
}

export default Text;
