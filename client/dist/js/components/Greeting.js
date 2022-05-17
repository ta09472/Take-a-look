"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Greeting;

function Greeting(_ref) {
  var _this = this;

  var $target = _ref.$target,
      initialState = _ref.initialState;
  this.$element = document.createElement("div");
  this.$element.className = "Greeting-container";
  this.state = initialState;
  $target.appendChild(this.$element);

  this.render = function () {
    _this.$element.innerHTML = "\n    <h1 class=\"Greeting\" value=\"".concat(_this.state, "\">\uC548\uB155\uD558\uC138\uC694</h1>\n    ");
  };

  this.render();
}