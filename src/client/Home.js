import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props, "----------");
    const { data } = this.props;
    const postsList = data.map((post, showText) => {
      return (
        <li key={post.id}>
          <a href={"http://localhost:3000/posts/" + post.id}>{post.title}</a>
        </li>
      );
    });
    return (
      <div>
        <h1>ALL POSTS</h1>
        <ul>{postsList}</ul>
      </div>
    );
  }
}

export default Home;
