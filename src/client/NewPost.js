import React from "react";

class NewPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const userId = this.props.data;
    return (
      <div>
        <form action={`http://localhost:3000/user/${userId}/writer`} method="POST">
          <input
            type="text"
            name="newTitle"
            id="newTitle"
            placeholder="Please write your title here"
          />
          <textarea
            name="newText"
            id="newText"
            cols="30"
            rows="10"
            placeholder="Please write your text here"
          ></textarea>
          <input
            type="submit"
            name="addPost"
            id="addPost"
            value="Add"
          />
        </form>
      </div>
    );
  }
}

export default NewPost;
