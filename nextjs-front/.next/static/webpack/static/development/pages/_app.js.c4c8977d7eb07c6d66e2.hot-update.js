webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducer/Reducer.js":
/*!****************************!*\
  !*** ./reducer/Reducer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function reducer(state, action) {
  switch (action.type) {
    case "INITIAL_STATE":
      return _objectSpread(_objectSpread({}, state), {}, {
        tasks: action.payload
      });

    case "ADD_TODO":
      var newTodo = {
        task_name: action.payload,
        task_status: false
      };
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["post"])("/tasks", newTodo).then(function (res) {
        console.log(res);
        return _objectSpread(_objectSpread({}, state), {}, {
          tasks: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.tasks), [res.data])
        });
      });

    case "DONE_TODO":
      var temp = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.tasks).map(function (item) {
        if (item.id === action.payload.id) {
          return _objectSpread(_objectSpread({}, action.payload), {}, {
            task_status: !action.payload.task_status
          });
        } else return item;
      });

      var edited = temp.filter(function (task) {
        return task.id === action.payload.id;
      });
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["put"])("/task/".concat(action.payload.id), _objectSpread({}, edited[0])).then(function (resp) {
        return console.log(resp);
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        tasks: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(temp)
      });
  }
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2VyL1JlZHVjZXIuanMiXSwibmFtZXMiOlsicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInRhc2tzIiwicGF5bG9hZCIsIm5ld1RvZG8iLCJ0YXNrX25hbWUiLCJ0YXNrX3N0YXR1cyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ0ZW1wIiwibWFwIiwiaXRlbSIsImlkIiwiZWRpdGVkIiwiZmlsdGVyIiwidGFzayIsInB1dCIsInJlc3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNlLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCQyxNQUF4QixFQUFnQztBQUM3QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLGVBQUw7QUFDRSw2Q0FDS0YsS0FETDtBQUVFRyxhQUFLLEVBQUVGLE1BQU0sQ0FBQ0c7QUFGaEI7O0FBSUYsU0FBSyxVQUFMO0FBQ0UsVUFBTUMsT0FBTyxHQUFHO0FBQ2RDLGlCQUFTLEVBQUVMLE1BQU0sQ0FBQ0csT0FESjtBQUVkRyxtQkFBVyxFQUFFO0FBRkMsT0FBaEI7QUFJQUMsK0RBQUksQ0FBQyxRQUFELEVBQVdILE9BQVgsQ0FBSixDQUF3QkksSUFBeEIsQ0FBNkIsVUFBQ0MsR0FBRCxFQUFTO0FBQ3BDQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLCtDQUNLVixLQURMO0FBRUVHLGVBQUsseUdBQU1ILEtBQUssQ0FBQ0csS0FBWixJQUFtQk8sR0FBRyxDQUFDRyxJQUF2QjtBQUZQO0FBSUQsT0FORDs7QUFRRixTQUFLLFdBQUw7QUFDRSxVQUFNQyxJQUFJLEdBQUcsNkZBQUlkLEtBQUssQ0FBQ0csS0FBVixFQUFpQlksR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzFDLFlBQUlBLElBQUksQ0FBQ0MsRUFBTCxLQUFZaEIsTUFBTSxDQUFDRyxPQUFQLENBQWVhLEVBQS9CLEVBQW1DO0FBQ2pDLGlEQUNLaEIsTUFBTSxDQUFDRyxPQURaO0FBRUVHLHVCQUFXLEVBQUUsQ0FBQ04sTUFBTSxDQUFDRyxPQUFQLENBQWVHO0FBRi9CO0FBSUQsU0FMRCxNQUtPLE9BQU9TLElBQVA7QUFDUixPQVBZLENBQWI7O0FBUUEsVUFBTUUsTUFBTSxHQUFHSixJQUFJLENBQUNLLE1BQUwsQ0FBWSxVQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDSCxFQUFMLEtBQVloQixNQUFNLENBQUNHLE9BQVAsQ0FBZWEsRUFBckM7QUFBQSxPQUFaLENBQWY7QUFDQUksOERBQUcsaUJBQVVwQixNQUFNLENBQUNHLE9BQVAsQ0FBZWEsRUFBekIscUJBQW9DQyxNQUFNLENBQUMsQ0FBRCxDQUExQyxFQUFILENBQW9EVCxJQUFwRCxDQUF5RCxVQUFDYSxJQUFEO0FBQUEsZUFDdkRYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxJQUFaLENBRHVEO0FBQUEsT0FBekQ7QUFHQSw2Q0FDS3RCLEtBREw7QUFFRUcsYUFBSyxFQUFFLDZGQUFJVyxJQUFOO0FBRlA7QUFoQ0o7QUFxQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuYzRjODk3N2Q3ZWIwN2M2ZDY2ZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBvc3QsIHB1dCB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiSU5JVElBTF9TVEFURVwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRhc2tzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJBRERfVE9ET1wiOlxyXG4gICAgICBjb25zdCBuZXdUb2RvID0ge1xyXG4gICAgICAgIHRhc2tfbmFtZTogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgdGFza19zdGF0dXM6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgICBwb3N0KFwiL3Rhc2tzXCIsIG5ld1RvZG8pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgdGFza3M6IFsuLi5zdGF0ZS50YXNrcywgcmVzLmRhdGFdLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNhc2UgXCJET05FX1RPRE9cIjpcclxuICAgICAgY29uc3QgdGVtcCA9IFsuLi5zdGF0ZS50YXNrc10ubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgdGFza19zdGF0dXM6ICFhY3Rpb24ucGF5bG9hZC50YXNrX3N0YXR1cyxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHJldHVybiBpdGVtO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgZWRpdGVkID0gdGVtcC5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKTtcclxuICAgICAgcHV0KGAvdGFzay8ke2FjdGlvbi5wYXlsb2FkLmlkfWAsIHsgLi4uZWRpdGVkWzBdIH0pLnRoZW4oKHJlc3ApID0+XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcClcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0YXNrczogWy4uLnRlbXBdLFxyXG4gICAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9