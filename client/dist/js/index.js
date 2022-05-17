"use strict";

var _App = _interopRequireDefault(require("./components/App.js"));

var _router = _interopRequireDefault(require("./router.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// fetch("http://localhost:3000/").then((res) => {
//   console.log(res.json());
// });
new _App["default"]({
  $target: document.querySelector(".App")
});
(0, _router["default"])();