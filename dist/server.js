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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ \"./src/client/Home.js\");\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Text */ \"./src/client/Text.js\");\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    const Components = {\n      Home: _Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      Text: _Text__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    };\n    console.log(this.props, \"----------\");\n    const {\n      page,\n      data\n    } = this.props;\n    const MyComponent = Components[page];\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyComponent, {\n      data: data\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),

/***/ "./src/client/Home.js":
/*!****************************!*\
  !*** ./src/client/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    console.log(this.props, \"----------\");\n    const {\n      data\n    } = this.props;\n    const postsList = data.map((post, showText) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        key: post.id\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"http://localhost:3000/posts/\" + post.id\n      }, post.title));\n    });\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"ALL POSTS\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, postsList));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/client/Home.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nconst html = ({\n  body,\n  title,\n  initialState\n}) => `\n  <!DOCTYPE html>\n  <html>\n    <head>\n    <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>\n      <title>${title}</title>\n    </head>\n    <body style=\"margin:0\">\n      <div id=\"app\">${body}</div>\n    </body>\n  </html>\n`;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (html);\n\n//# sourceURL=webpack:///./src/client/html.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/App */ \"./src/client/App.js\");\n/* harmony import */ var _client_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/html */ \"./src/client/html.js\");\n/* harmony import */ var _service_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/index */ \"./src/service/index.js\");\nconst express = __webpack_require__(/*! express */ \"express\");\n\n\n\n\n\n\nconst port = 3000;\nconst server = express();\nserver.get(\"/\", (req, res) => {\n  Object(_service_index__WEBPACK_IMPORTED_MODULE_4__[\"getAllPosts\"])().then(result => {\n    const page = \"Home\";\n    const initialState = {\n      page: page,\n      data: JSON.parse(result)\n    };\n    const body = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState));\n    const title = \"Hello World from the server\";\n    res.send(Object(_client_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n      body: body,\n      title: title,\n      initialState: initialState\n    }));\n  });\n});\nserver.get(\"/posts/:id\", (req, res) => {\n  Object(_service_index__WEBPACK_IMPORTED_MODULE_4__[\"getPost\"])(req.params.id).then(result => {\n    const page = \"Text\";\n    const initialState = {\n      page: page,\n      data: JSON.parse(result)\n    };\n    const body = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState));\n    const title = \"The Text\";\n    res.send(Object(_client_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n      body: body,\n      title: title,\n      initialState: initialState\n    }));\n  });\n});\nserver.listen(port);\nconsole.log(`server is listenning on http://localhost:${port}`);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/service/index.js":
/*!******************************!*\
  !*** ./src/service/index.js ***!
  \******************************/
/*! exports provided: getAllPosts, getPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPosts\", function() { return getAllPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPost\", function() { return getPost; });\nconst mysql = __webpack_require__(/*! mysql */ \"mysql\");\n\nconst connection = mysql.createConnection({\n  host: \"localhost\",\n  user: \"root\",\n  password: \"test\",\n  database: \"my_blogs\"\n});\nconnection.connect(function (err) {\n  if (err) {\n    console.log(err);\n  } else {\n    console.log(\"Connected!\");\n  }\n});\nconst getAllPosts = () => {\n  const queryAllPostsSql = \"SELECT * FROM posts\";\n  return new Promise((reslove, reject) => {\n    connection.query(queryAllPostsSql, (err, result, fields) => {\n      if (err) throw err;\n\n      if (result === undefined) {\n        reject(new Error(\"Can not find posts!\"));\n      } else {\n        reslove(JSON.stringify(result));\n      }\n    });\n  });\n};\nconst getPost = id => {\n  const queryPostSql = \"SELECT * FROM posts WHERE id = ?\";\n  return new Promise((reslove, reject) => {\n    connection.query(queryPostSql, [id], (err, result, fields) => {\n      if (err) throw err;\n\n      if (result === undefined) {\n        reject(new Error(\"Can not find this post\"));\n      } else {\n        reslove(JSON.stringify(result));\n      }\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/service/index.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

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

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });