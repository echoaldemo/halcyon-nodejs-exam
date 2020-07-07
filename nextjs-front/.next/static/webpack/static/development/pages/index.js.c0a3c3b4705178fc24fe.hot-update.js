webpackHotUpdate("static\\development\\pages\\index.js",{

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
        task_name: action.payload.task_name,
        task_status: action.payload.task_status
      };
      return _objectSpread(_objectSpread({}, state), {}, {
        tasks: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.tasks), [action.payload.id])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2VyL1JlZHVjZXIuanMiXSwibmFtZXMiOlsicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInRhc2tzIiwicGF5bG9hZCIsIm5ld1RvZG8iLCJ0YXNrX25hbWUiLCJ0YXNrX3N0YXR1cyIsImlkIiwidGVtcCIsIm1hcCIsIml0ZW0iLCJlZGl0ZWQiLCJmaWx0ZXIiLCJ0YXNrIiwicHV0IiwidGhlbiIsInJlc3AiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZSxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF3QkMsTUFBeEIsRUFBZ0M7QUFDN0MsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxlQUFMO0FBQ0UsNkNBQ0tGLEtBREw7QUFFRUcsYUFBSyxFQUFFRixNQUFNLENBQUNHO0FBRmhCOztBQUlGLFNBQUssVUFBTDtBQUNFLFVBQU1DLE9BQU8sR0FBRztBQUNkQyxpQkFBUyxFQUFFTCxNQUFNLENBQUNHLE9BQVAsQ0FBZUUsU0FEWjtBQUVkQyxtQkFBVyxFQUFFTixNQUFNLENBQUNHLE9BQVAsQ0FBZUc7QUFGZCxPQUFoQjtBQUlBLDZDQUNLUCxLQURMO0FBRUVHLGFBQUsseUdBQU1ILEtBQUssQ0FBQ0csS0FBWixJQUFtQkYsTUFBTSxDQUFDRyxPQUFQLENBQWVJLEVBQWxDO0FBRlA7O0FBSUYsU0FBSyxXQUFMO0FBQ0UsVUFBTUMsSUFBSSxHQUFHLDZGQUFJVCxLQUFLLENBQUNHLEtBQVYsRUFBaUJPLEdBQWpCLENBQXFCLFVBQUNDLElBQUQsRUFBVTtBQUMxQyxZQUFJQSxJQUFJLENBQUNILEVBQUwsS0FBWVAsTUFBTSxDQUFDRyxPQUFQLENBQWVJLEVBQS9CLEVBQW1DO0FBQ2pDLGlEQUNLUCxNQUFNLENBQUNHLE9BRFo7QUFFRUcsdUJBQVcsRUFBRSxDQUFDTixNQUFNLENBQUNHLE9BQVAsQ0FBZUc7QUFGL0I7QUFJRCxTQUxELE1BS08sT0FBT0ksSUFBUDtBQUNSLE9BUFksQ0FBYjs7QUFRQSxVQUFNQyxNQUFNLEdBQUdILElBQUksQ0FBQ0ksTUFBTCxDQUFZLFVBQUNDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNOLEVBQUwsS0FBWVAsTUFBTSxDQUFDRyxPQUFQLENBQWVJLEVBQXJDO0FBQUEsT0FBWixDQUFmO0FBQ0FPLDhEQUFHLGlCQUFVZCxNQUFNLENBQUNHLE9BQVAsQ0FBZUksRUFBekIscUJBQW9DSSxNQUFNLENBQUMsQ0FBRCxDQUExQyxFQUFILENBQW9ESSxJQUFwRCxDQUF5RCxVQUFDQyxJQUFEO0FBQUEsZUFDdkRDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLENBRHVEO0FBQUEsT0FBekQ7QUFHQSw2Q0FDS2pCLEtBREw7QUFFRUcsYUFBSyxFQUFFLDZGQUFJTSxJQUFOO0FBRlA7QUE1Qko7QUFpQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmMwYTNjM2I0NzA1MTc4ZmMyNGZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb3N0LCBwdXQgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIklOSVRJQUxfU1RBVEVcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0YXNrczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiQUREX1RPRE9cIjpcclxuICAgICAgY29uc3QgbmV3VG9kbyA9IHtcclxuICAgICAgICB0YXNrX25hbWU6IGFjdGlvbi5wYXlsb2FkLnRhc2tfbmFtZSxcclxuICAgICAgICB0YXNrX3N0YXR1czogYWN0aW9uLnBheWxvYWQudGFza19zdGF0dXMsXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGFza3M6IFsuLi5zdGF0ZS50YXNrcywgYWN0aW9uLnBheWxvYWQuaWRdLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIkRPTkVfVE9ET1wiOlxyXG4gICAgICBjb25zdCB0ZW1wID0gWy4uLnN0YXRlLnRhc2tzXS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICB0YXNrX3N0YXR1czogIWFjdGlvbi5wYXlsb2FkLnRhc2tfc3RhdHVzLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIGl0ZW07XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBlZGl0ZWQgPSB0ZW1wLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpO1xyXG4gICAgICBwdXQoYC90YXNrLyR7YWN0aW9uLnBheWxvYWQuaWR9YCwgeyAuLi5lZGl0ZWRbMF0gfSkudGhlbigocmVzcCkgPT5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwKVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRhc2tzOiBbLi4udGVtcF0sXHJcbiAgICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=