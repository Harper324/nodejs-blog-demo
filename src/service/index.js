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
  const queryAllPostsSql = "SELECT * FROM posts";
  return new Promise((reslove, reject) => {
    connection.query(queryAllPostsSql, (err, result, fields) => {
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
  const queryPostSql = "SELECT * FROM posts WHERE id = ?";
  return new Promise((reslove, reject) => {
    connection.query(queryPostSql, [id], (err, result, fields) => {
      if (err) throw err;
      if (result === undefined) {
        reject(new Error("Can not find this post"));
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




