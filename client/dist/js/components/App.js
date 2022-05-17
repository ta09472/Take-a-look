"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;

var _Greeting = _interopRequireDefault(require("./Greeting.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App(_ref) {
  var $target = _ref.$target;
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: []
  };

  this.setState = function (nextState) {// TODO: 구현해야함
  };

  var greeting = new _Greeting["default"]({
    $target: $target,
    initialState: ""
  });
}