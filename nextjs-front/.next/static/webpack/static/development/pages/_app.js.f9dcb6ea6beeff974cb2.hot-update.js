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
      return _objectSpread(_objectSpread({}, state), {}, {
        tasks: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.tasks), [action.payload])
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
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["put"])("/task/".concat(action.payload.id), _objectSpread({}, edited[0]));
      return _objectSpread(_objectSpread({}, state), {}, {
        tasks: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(temp)
      });

    case "UPDATE_TODO":
      var updateTemp = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.tasks).map(function (item) {
        if (item.id === action.payload.id) {
          return _objectSpread(_objectSpread({}, action.payload), {}, {
            task_name: action.payload.task_name
          });
        } else return item;
      });

      return _objectSpread(_objectSpread({}, state), {}, {
        tasks: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(updateTemp)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2VyL1JlZHVjZXIuanMiXSwibmFtZXMiOlsicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInRhc2tzIiwicGF5bG9hZCIsInRlbXAiLCJtYXAiLCJpdGVtIiwiaWQiLCJ0YXNrX3N0YXR1cyIsImVkaXRlZCIsImZpbHRlciIsInRhc2siLCJwdXQiLCJ1cGRhdGVUZW1wIiwidGFza19uYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZSxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF3QkMsTUFBeEIsRUFBZ0M7QUFDN0MsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxlQUFMO0FBQ0UsNkNBQ0tGLEtBREw7QUFFRUcsYUFBSyxFQUFFRixNQUFNLENBQUNHO0FBRmhCOztBQUlGLFNBQUssVUFBTDtBQUNFLDZDQUNLSixLQURMO0FBRUVHLGFBQUsseUdBQU1ILEtBQUssQ0FBQ0csS0FBWixJQUFtQkYsTUFBTSxDQUFDRyxPQUExQjtBQUZQOztBQUlGLFNBQUssV0FBTDtBQUNFLFVBQU1DLElBQUksR0FBRyw2RkFBSUwsS0FBSyxDQUFDRyxLQUFWLEVBQWlCRyxHQUFqQixDQUFxQixVQUFDQyxJQUFELEVBQVU7QUFDMUMsWUFBSUEsSUFBSSxDQUFDQyxFQUFMLEtBQVlQLE1BQU0sQ0FBQ0csT0FBUCxDQUFlSSxFQUEvQixFQUFtQztBQUNqQyxpREFDS1AsTUFBTSxDQUFDRyxPQURaO0FBRUVLLHVCQUFXLEVBQUUsQ0FBQ1IsTUFBTSxDQUFDRyxPQUFQLENBQWVLO0FBRi9CO0FBSUQsU0FMRCxNQUtPLE9BQU9GLElBQVA7QUFDUixPQVBZLENBQWI7O0FBUUEsVUFBTUcsTUFBTSxHQUFHTCxJQUFJLENBQUNNLE1BQUwsQ0FBWSxVQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDSixFQUFMLEtBQVlQLE1BQU0sQ0FBQ0csT0FBUCxDQUFlSSxFQUFyQztBQUFBLE9BQVosQ0FBZjtBQUNBSyw4REFBRyxpQkFBVVosTUFBTSxDQUFDRyxPQUFQLENBQWVJLEVBQXpCLHFCQUFvQ0UsTUFBTSxDQUFDLENBQUQsQ0FBMUMsRUFBSDtBQUNBLDZDQUNLVixLQURMO0FBRUVHLGFBQUssRUFBRSw2RkFBSUUsSUFBTjtBQUZQOztBQUlGLFNBQUssYUFBTDtBQUNFLFVBQU1TLFVBQVUsR0FBRyw2RkFBSWQsS0FBSyxDQUFDRyxLQUFWLEVBQWlCRyxHQUFqQixDQUFxQixVQUFDQyxJQUFELEVBQVU7QUFDaEQsWUFBSUEsSUFBSSxDQUFDQyxFQUFMLEtBQVlQLE1BQU0sQ0FBQ0csT0FBUCxDQUFlSSxFQUEvQixFQUFtQztBQUNqQyxpREFDS1AsTUFBTSxDQUFDRyxPQURaO0FBRUVXLHFCQUFTLEVBQUVkLE1BQU0sQ0FBQ0csT0FBUCxDQUFlVztBQUY1QjtBQUlELFNBTEQsTUFLTyxPQUFPUixJQUFQO0FBQ1IsT0FQa0IsQ0FBbkI7O0FBUUEsNkNBQ0tQLEtBREw7QUFFRUcsYUFBSyxFQUFFLDZGQUFJVyxVQUFOO0FBRlA7QUFuQ0o7QUF3Q0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuZjlkY2I2ZWE2YmVlZmY5NzRjYjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBvc3QsIHB1dCB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiSU5JVElBTF9TVEFURVwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRhc2tzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJBRERfVE9ET1wiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRhc2tzOiBbLi4uc3RhdGUudGFza3MsIGFjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJET05FX1RPRE9cIjpcclxuICAgICAgY29uc3QgdGVtcCA9IFsuLi5zdGF0ZS50YXNrc10ubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgdGFza19zdGF0dXM6ICFhY3Rpb24ucGF5bG9hZC50YXNrX3N0YXR1cyxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHJldHVybiBpdGVtO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgZWRpdGVkID0gdGVtcC5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKTtcclxuICAgICAgcHV0KGAvdGFzay8ke2FjdGlvbi5wYXlsb2FkLmlkfWAsIHsgLi4uZWRpdGVkWzBdIH0pO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRhc2tzOiBbLi4udGVtcF0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiVVBEQVRFX1RPRE9cIjpcclxuICAgICAgY29uc3QgdXBkYXRlVGVtcCA9IFsuLi5zdGF0ZS50YXNrc10ubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgdGFza19uYW1lOiBhY3Rpb24ucGF5bG9hZC50YXNrX25hbWUsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSByZXR1cm4gaXRlbTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGFza3M6IFsuLi51cGRhdGVUZW1wXSxcclxuICAgICAgfTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==