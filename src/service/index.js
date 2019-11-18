const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test",
  database: "my_blogs"
});

connection.connect(function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected!");
  }
});

export const getAllPosts = () => {
  const queryAllPosts = "SELECT * FROM posts";
  return new Promise((reslove, reject) => {
    connection.query(queryAllPosts, (err, result, fields) => {
      if (err) throw err;
      if (result === undefined) {
        reject(new Error("Can not find posts!"));
      } else {
        reslove(JSON.stringify(result));
      }
    });
  });
};

export const getPost = id => {
  const queryPost = "SELECT * FROM posts WHERE id = ?";
  return new Promise((reslove, reject) => {
    connection.query(queryPost, [id], (err, result, fields) => {
      if (err) throw err;
      if (result === undefined) {
        reject(new Error("Can not find this post"));
      } else {
        reslove(JSON.stringify(result));
      }
    });
  });
};

export const validateUser = (userName, password) => {
  console.log(userName, password, "------------------------");
  const getUser = "SELECT * FROM users WHERE user_name = ? AND password = ?";
  return new Promise((reslove, reject) => {
    connection.query(getUser, [userName, password], (err, result, fields) => {
      if (err) throw err;
      if (result === undefined) {
        reject(new Error("User is not exist or Wrong password!"));
      } else {
        reslove(JSON.stringify(result));
      }
    });
  });
};

export const getUserPosts = id => {
  const queryUserPosts = "SELECT * FROM posts WHERE user_id =?";
  return new Promise((reslove, reject) => {
    connection.query(queryUserPosts, [id], (err, result, fields) => {
      if (err) throw err;
      if (result === undefined) {
        reject(new Error("Can not find this user"));
      } else {
        reslove(JSON.stringify(result));
      }
    });
  });
};

export const addPost = (newTitle, newText, userId) => {
  const insertPost =
    "INSERT INTO posts (id, title, text, user_id, time) VALUES (NULL, ?, ?, ?, CURRENT_TIMESTAMP)";
  connection.query(
    insertPost,
    [newTitle, newText, userId],
    (err, result, fields) => {
      if (err) throw err;
      return result;
    }
  );
};
