"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = routerInit;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var routes, potentialMatches, match;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            routes = [// 해당 path로 이동하면 view의 함수가 실행됨
            {
              path: "/",
              view: function view() {
                return console.log("viewing Dashboard");
              }
            }, {
              path: "/posts",
              view: function view() {
                return console.log("viewing Posts");
              }
            }, {
              path: "/setting",
              view: function view() {
                return console.log("viewing Settings");
              }
            }]; // url이 일치하는지 검사

            potentialMatches = routes.map(function (route) {
              return {
                route: route,
                isMatch: location.pathname === route.path
              };
            });
            match = potentialMatches.find(function (potentialMatch) {
              return potentialMatch.isMatch;
            });

            if (!match) {
              match = {
                route: routes[0],
                isMatch: true
              };
            }

            console.log(match);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function router() {
    return _ref.apply(this, arguments);
  };
}();

function routerInit() {
  document.addEventListener("DOMContentLoaded", function () {
    router();
  });
}