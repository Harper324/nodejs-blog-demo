/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ \"./src/client/Home.js\");\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Text */ \"./src/client/Text.js\");\n/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Login */ \"./src/client/Login.js\");\n/* harmony import */ var _PostList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostList */ \"./src/client/PostList.js\");\n/* harmony import */ var _NewPost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NewPost */ \"./src/client/NewPost.js\");\n\n\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  handleClick() {\n    console.log('hhhhhhh');\n  }\n\n  render() {\n    const Components = {\n      Home: _Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      Text: _Text__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      Login: _Login__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n      PostList: _PostList__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n      NewPost: _NewPost__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    };\n    console.log(this.props, \"App props ----------\");\n    const {\n      page,\n      data\n    } = this.props;\n    const MyComponent = Components[page];\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: page\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyComponent, {\n      data: data\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: this.handleClick.bind(this)\n    }, \"click\"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),

/***/ "./src/client/Home.js":
/*!****************************!*\
  !*** ./src/client/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    const {\n      data\n    } = this.props;\n    console.log('yesyesyes-------------');\n    const postsList = data.map(post => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        key: post.id\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"http://localhost:3000/posts/\" + post.id\n      }, post.title));\n    });\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"http://localhost:3000/login\"\n    }, \"Login\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"registration\"\n    }, \"Registration\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"ALL POSTS\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, postsList)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", null));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/client/Home.js?");

/***/ }),

/***/ "./src/client/Login.js":
/*!*****************************!*\
  !*** ./src/client/Login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NewPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewPost */ \"./src/client/NewPost.js\");\n\n\n\n\nclass Login extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      password: \"\"\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      action: \"http://localhost:3000/login\",\n      method: \"POST\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"userName\"\n    }, \"User Name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      name: \"userName\",\n      type: \"text\",\n      placeholder: \"user name\",\n      id: \"user\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"password\"\n    }, \"Password\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      name: \"password\",\n      type: \"password\",\n      placeholder: \"password\",\n      id: \"password\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"submit\"\n    })));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/client/Login.js?");

/***/ }),

/***/ "./src/client/NewPost.js":
/*!*******************************!*\
  !*** ./src/client/NewPost.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass NewPost extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    const userId = this.props.data;\n    console.log(userId, 'datadatadata');\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      action: `http://localhost:3000/user/${userId}/writer`,\n      method: \"POST\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      name: \"newTitle\",\n      id: \"newTitle\",\n      placeholder: \"Please write your title here\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n      name: \"newText\",\n      id: \"newText\",\n      cols: \"30\",\n      rows: \"10\",\n      placeholder: \"Please write your text here\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"submit\",\n      name: \"addPost\",\n      id: \"addPost\",\n      value: \"Add\"\n    })));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPost);\n\n//# sourceURL=webpack:///./src/client/NewPost.js?");

/***/ }),

/***/ "./src/client/PostList.js":
/*!********************************!*\
  !*** ./src/client/PostList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass PostList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    const {\n      data\n    } = this.props;\n    const userId = data[0].user_id;\n    const postList = data.map(post => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        key: post.id\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: `http://localhost:3000/user/${userId}/posts/` + post.id\n      }, post.title));\n    });\n    console.log(data, \"postlist-------\");\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: `http://localhost:3000/user/${userId}/writer`\n    }, \"Write Blog\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"My Posts\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, postList));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostList);\n\n//# sourceURL=webpack:///./src/client/PostList.js?");

/***/ }),

/***/ "./src/client/Text.js":
/*!****************************!*\
  !*** ./src/client/Text.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Text extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    const {\n      data\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, data[0].title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, data[0].text));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Text);\n\n//# sourceURL=webpack:///./src/client/Text.js?");

/***/ }),

/***/ "./src/client/html.js":
/*!****************************!*\
  !*** ./src/client/html.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst html = ({\n  body,\n  title,\n  initialState\n}) => `\n  <!DOCTYPE html>\n  <html>\n    <head>\n    <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>\n      <title>${title}</title>\n    </head>\n    <body>\n      <div id=\"root\">${body}</div>\n    </body>\n  </html>\n`;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (html);\n\n//# sourceURL=webpack:///./src/client/html.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/App */ \"./src/client/App.js\");\n/* harmony import */ var _client_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/html */ \"./src/client/html.js\");\n/* harmony import */ var _service_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/index */ \"./src/service/index.js\");\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nconst cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\n\n\n\n\n\nconst port = 3000;\nconst server = express();\nconst middlewares = [bodyParser.urlencoded(), cookieParser()];\nserver.use(middlewares);\nserver.get(\"/\", (req, res) => {\n  Object(_service_index__WEBPACK_IMPORTED_MODULE_4__[\"getAllPosts\"])().then(result => {\n    const page = \"Home\";\n    const data = JSON.parse(result);\n    const initialState = {\n      page: page,\n      data: data\n    };\n    const body = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState)); // const body = renderToNodeStream(<App {...initialState} />);\n\n    const title = \"Hello World from the server\";\n    res.send(Object(_client_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n      body: body,\n      title: title,\n      initialState: initialState\n    }));\n  });\n});\nserver.get(\"/posts/:id\", (req, res) => {\n  // console.log(req.headers,'----------------header-----------------');\n  console.log(req.headers.token, \"----------------header token-----------------\");\n  Object(_service_index__WEBPACK_IMPORTED_MODULE_4__[\"getPost\"])(req.params.id).then(result => {\n    const initialState = {\n      page: \"Text\",\n      data: JSON.parse(result)\n    };\n    const body = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState));\n    const title = \"The Text\";\n    res.send(Object(_client_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n      body: body,\n      title: title,\n      initialState: initialState\n    }));\n  });\n});\nserver.get(\"/login\", (req, res) => {\n  const initialState = {\n    page: \"Login\"\n  };\n  const body = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState));\n  const title = \"Login\";\n  const payload = {\n    userName: \"aaa\"\n  };\n  const privateKey = \"caoxi\";\n  var token = jwt.sign(payload, privateKey);\n  res.setHeader(\"token\", token);\n  res.send(Object(_client_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    body: body,\n    title: title,\n    initialState: initialState\n  }));\n});\nserver.post(\"/login\", (req, res) => {\n  const {\n    userName,\n    password\n  } = req.body;\n  console.log(userName, password, \"login from fronted---------\");\n  Object(_service_index__WEBPACK_IMPORTED_MODULE_4__[\"validateUser\"])(userName, password).then(result => {\n    const data = JSON.parse(result);\n    console.log(data, \"user from data----------\");\n    const id = data[0].id;\n    const payload = {\n      userName: userName\n    };\n    const privateKey = \"caoxi\";\n    const token = jwt.sign(payload, privateKey);\n    console.log(token, \"token from backend----------\");\n    res.cookie(\"token\", token, {\n      httpOnly: true\n    }); //   res.setHeader(\"token\",token);\n\n    res.redirect(`/user/${id}/posts`); // res.send(data);\n  }).catch(err => {\n    console.log(err);\n    res.redirect(\"/login\");\n  });\n});\nserver.get(\"/user/:id/posts\", (req, res) => {\n  console.log(req.headers, \"-----------header---------------\");\n  const token = req.cookies.token;\n  console.log(token, \"-----------cookies---------------\");\n  const privateKey = \"caoxi\";\n  jwt.verify(token, privateKey);\n\n  if (req.cookies === undefined) {\n    throw new Error(\"Do not login\");\n  }\n\n  Object(_service_index__WEBPACK_IMPORTED_MODULE_4__[\"getUserPosts\"])(req.params.id).then(result => {\n    const page = \"PostList\";\n    const data = JSON.parse(result);\n    const initialState = {\n      page: page,\n      data: data\n    };\n    const body = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState));\n    const title = \"PostList\";\n    res.send(Object(_client_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n      body: body,\n      title: title,\n      initialState: initialState\n    }));\n  });\n});\nserver.get(\"/user/:userId/posts/:id\", (req, res) => {\n  const token = req.cookies.token;\n  const privateKey = \"caoxi\";\n\n  if (token === undefined) {\n    res.redirect(\"/login\");\n  }\n\n  jwt.verify(token, privateKey);\n  Object(_service_index__WEBPACK_IMPORTED_MODULE_4__[\"getPost\"])(req.params.id).then(result => {\n    const initialState = {\n      page: \"Text\",\n      data: JSON.parse(result)\n    };\n    const body = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState));\n    const title = \"The Text\";\n    res.send(Object(_client_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n      body: body,\n      title: title,\n      initialState: initialState\n    }));\n  });\n});\nserver.post(\"/user/:userId/writer\", (req, res) => {\n  const token = req.cookies.token;\n  const privateKey = \"caoxi\";\n\n  if (token === undefined) {\n    res.redirect(\"/login\");\n  }\n\n  jwt.verify(token, privateKey);\n  const {\n    newTitle,\n    newText\n  } = req.body;\n  const userId = req.params.userId;\n  console.log(userId, 'userId-------------');\n  Object(_service_index__WEBPACK_IMPORTED_MODULE_4__[\"addPost\"])(newTitle, newText, userId);\n  res.redirect(`/user/${userId}/posts`);\n});\nserver.get(\"/user/:userId/writer\", (req, res) => {\n  const initialState = {\n    page: \"NewPost\",\n    data: req.params.userId\n  };\n  const body = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState));\n  const title = \"Writer\";\n  res.send(Object(_client_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    body: body,\n    title: title,\n    initialState: initialState\n  }));\n});\nserver.listen(port);\nconsole.log(`server is listenning on http://localhost:${port}`);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/service/index.js":
/*!******************************!*\
  !*** ./src/service/index.js ***!
  \******************************/
/*! exports provided: getAllPosts, getPost, validateUser, getUserPosts, addPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPosts\", function() { return getAllPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPost\", function() { return getPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateUser\", function() { return validateUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserPosts\", function() { return getUserPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\nconst mysql = __webpack_require__(/*! mysql */ \"mysql\");\n\nconst connection = mysql.createConnection({\n  host: \"localhost\",\n  user: \"root\",\n  password: \"test\",\n  database: \"my_blogs\"\n});\nconnection.connect(function (err) {\n  if (err) {\n    console.log(err);\n  } else {\n    console.log(\"Connected!\");\n  }\n});\nconst getAllPosts = () => {\n  const queryAllPosts = \"SELECT * FROM posts\";\n  return new Promise((reslove, reject) => {\n    connection.query(queryAllPosts, (err, result, fields) => {\n      if (err) throw err;\n\n      if (result === undefined) {\n        reject(new Error(\"Can not find posts!\"));\n      } else {\n        reslove(JSON.stringify(result));\n      }\n    });\n  });\n};\nconst getPost = id => {\n  const queryPost = \"SELECT * FROM posts WHERE id = ?\";\n  return new Promise((reslove, reject) => {\n    connection.query(queryPost, [id], (err, result, fields) => {\n      if (err) throw err;\n\n      if (result === undefined) {\n        reject(new Error(\"Can not find this post\"));\n      } else {\n        reslove(JSON.stringify(result));\n      }\n    });\n  });\n};\nconst validateUser = (userName, password) => {\n  const getUser = \"SELECT * FROM users WHERE user_name = ? AND password = ?\";\n  return new Promise((reslove, reject) => {\n    connection.query(getUser, [userName, password], (err, result, fields) => {\n      if (err) throw err;\n      console.log(userName, password, \"login-----------\");\n      console.log(result, 'result from db--------------');\n\n      if (result.length === 0) {\n        reject(new Error(\"User is not exist or Wrong password!\"));\n      } else {\n        reslove(JSON.stringify(result));\n      }\n    });\n  });\n};\nconst getUserPosts = id => {\n  const queryUserPosts = \"SELECT * FROM posts WHERE user_id =?\";\n  return new Promise((reslove, reject) => {\n    connection.query(queryUserPosts, [id], (err, result, fields) => {\n      if (err) throw err;\n\n      if (result === undefined) {\n        reject(new Error(\"Can not find this user\"));\n      } else {\n        reslove(JSON.stringify(result));\n      }\n    });\n  });\n};\nconst addPost = (newTitle, newText, userId) => {\n  const insertPost = \"INSERT INTO posts (id, title, text, user_id, time) VALUES (NULL, ?, ?, ?, CURRENT_TIMESTAMP)\";\n  connection.query(insertPost, [newTitle, newText, userId], (err, result, fields) => {\n    if (err) throw err;\n    return result;\n  });\n};\n\n//# sourceURL=webpack:///./src/service/index.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });