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
      var temp2 = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.tasks).map(function (item) {
        if (item.id === action.payload.id) {
          return _objectSpread(_objectSpread({}, action.payload), {}, {
            task_name: !action.payload.task_name
          });
        } else return item;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2VyL1JlZHVjZXIuanMiXSwibmFtZXMiOlsicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInRhc2tzIiwicGF5bG9hZCIsInRlbXAiLCJtYXAiLCJpdGVtIiwiaWQiLCJ0YXNrX3N0YXR1cyIsImVkaXRlZCIsImZpbHRlciIsInRhc2siLCJwdXQiLCJ0ZW1wMiIsInRhc2tfbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2UsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0JDLE1BQXhCLEVBQWdDO0FBQzdDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssZUFBTDtBQUNFLDZDQUNLRixLQURMO0FBRUVHLGFBQUssRUFBRUYsTUFBTSxDQUFDRztBQUZoQjs7QUFJRixTQUFLLFVBQUw7QUFDRSw2Q0FDS0osS0FETDtBQUVFRyxhQUFLLHlHQUFNSCxLQUFLLENBQUNHLEtBQVosSUFBbUJGLE1BQU0sQ0FBQ0csT0FBMUI7QUFGUDs7QUFJRixTQUFLLFdBQUw7QUFDRSxVQUFNQyxJQUFJLEdBQUcsNkZBQUlMLEtBQUssQ0FBQ0csS0FBVixFQUFpQkcsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzFDLFlBQUlBLElBQUksQ0FBQ0MsRUFBTCxLQUFZUCxNQUFNLENBQUNHLE9BQVAsQ0FBZUksRUFBL0IsRUFBbUM7QUFDakMsaURBQ0tQLE1BQU0sQ0FBQ0csT0FEWjtBQUVFSyx1QkFBVyxFQUFFLENBQUNSLE1BQU0sQ0FBQ0csT0FBUCxDQUFlSztBQUYvQjtBQUlELFNBTEQsTUFLTyxPQUFPRixJQUFQO0FBQ1IsT0FQWSxDQUFiOztBQVFBLFVBQU1HLE1BQU0sR0FBR0wsSUFBSSxDQUFDTSxNQUFMLENBQVksVUFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ0osRUFBTCxLQUFZUCxNQUFNLENBQUNHLE9BQVAsQ0FBZUksRUFBckM7QUFBQSxPQUFaLENBQWY7QUFDQUssOERBQUcsaUJBQVVaLE1BQU0sQ0FBQ0csT0FBUCxDQUFlSSxFQUF6QixxQkFBb0NFLE1BQU0sQ0FBQyxDQUFELENBQTFDLEVBQUg7QUFDQSw2Q0FDS1YsS0FETDtBQUVFRyxhQUFLLEVBQUUsNkZBQUlFLElBQU47QUFGUDs7QUFJRixTQUFLLGFBQUw7QUFDRSxVQUFNUyxLQUFLLEdBQUcsNkZBQUlkLEtBQUssQ0FBQ0csS0FBVixFQUFpQkcsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzNDLFlBQUlBLElBQUksQ0FBQ0MsRUFBTCxLQUFZUCxNQUFNLENBQUNHLE9BQVAsQ0FBZUksRUFBL0IsRUFBbUM7QUFDakMsaURBQ0tQLE1BQU0sQ0FBQ0csT0FEWjtBQUVFVyxxQkFBUyxFQUFFLENBQUNkLE1BQU0sQ0FBQ0csT0FBUCxDQUFlVztBQUY3QjtBQUlELFNBTEQsTUFLTyxPQUFPUixJQUFQO0FBQ1IsT0FQYSxDQUFkOztBQVFBLDZDQUNLUCxLQURMO0FBRUVHLGFBQUssRUFBRSw2RkFBSUUsSUFBTjtBQUZQO0FBbkNKO0FBd0NEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmE5ODZlOTJiZDQxMDQ0MjIxNDU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb3N0LCBwdXQgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIklOSVRJQUxfU1RBVEVcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0YXNrczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiQUREX1RPRE9cIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0YXNrczogWy4uLnN0YXRlLnRhc2tzLCBhY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiRE9ORV9UT0RPXCI6XHJcbiAgICAgIGNvbnN0IHRlbXAgPSBbLi4uc3RhdGUudGFza3NdLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIHRhc2tfc3RhdHVzOiAhYWN0aW9uLnBheWxvYWQudGFza19zdGF0dXMsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSByZXR1cm4gaXRlbTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGVkaXRlZCA9IHRlbXAuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCk7XHJcbiAgICAgIHB1dChgL3Rhc2svJHthY3Rpb24ucGF5bG9hZC5pZH1gLCB7IC4uLmVkaXRlZFswXSB9KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0YXNrczogWy4uLnRlbXBdLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIlVQREFURV9UT0RPXCI6XHJcbiAgICAgIGNvbnN0IHRlbXAyID0gWy4uLnN0YXRlLnRhc2tzXS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICB0YXNrX25hbWU6ICFhY3Rpb24ucGF5bG9hZC50YXNrX25hbWUsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSByZXR1cm4gaXRlbTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGFza3M6IFsuLi50ZW1wXSxcclxuICAgICAgfTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==