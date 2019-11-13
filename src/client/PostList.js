import React from "react";

class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const postList = data.map(post => {
      return (
        <li key={post.id}>
          <a href={"http://localhost:3000/user/1/" + post.id}>{post.title}</a>
        </li>
      );
    });
    console.log(data, "postlist-------");
    return (
      <div>
        <h2>My Posts</h2>
        <ul>{postList}</ul>
      </div>
    );
  }
}

export default PostList;
