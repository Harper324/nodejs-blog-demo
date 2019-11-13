import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const postsList = data.map(post => {
      return (
        <li key={post.id}>
          <a href={"http://localhost:3000/posts/" + post.id}>{post.title}</a>
        </li>
      );
    });
    return (
      <div>
        <header>
            <a href="http://localhost:3000/login">Login</a>
            <button className="registration">Registration</button>
        </header>
        <main>
          <h1>ALL POSTS</h1>
          <ul>{postsList}</ul>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default Home;
