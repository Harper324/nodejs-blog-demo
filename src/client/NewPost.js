import React from "react";
import ReactDom from "react-dom";

class NewPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form action="">
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
            type="button"
            name="addPost"
            id="addPost"
          />
        </form>
      </div>
    );
  }
}

export default NewPost;
