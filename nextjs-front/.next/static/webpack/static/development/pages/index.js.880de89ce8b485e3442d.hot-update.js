webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/Context */ "./context/Context.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Echo\\Documents\\HALCYON\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Index = function Index(props) {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_5__["StateContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      task = _useState[0],
      setTask = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch({
      type: "INITIAL_STATE",
      payload: props.tasks
    });
  }, []);

  var submit = function submit(e) {
    e.preventDefault();
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["post"])("/tasks", {
      task_name: task,
      task_status: false
    }).then(function (res) {
      dispatch({
        type: "ADD_TODO",
        payload: res.data
      });
      setTask("");
    });
  };

  console.log(state);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "alert alert-dismissible alert-warning",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("button", {
    type: "button",
    className: "close",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "\xD7"), __jsx("h4", {
    className: "alert-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Warning!"), __jsx("p", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna,", " ", __jsx("a", {
    href: "#",
    className: "alert-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "vel scelerisque nisl consectetur et"), ".")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("form", {
    onSubmit: submit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("input", {
    onChange: function onChange(e) {
      return setTask(e.target.value);
    },
    value: task,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "Add Task"))), __jsx("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, state.tasks.length > 0 && state.tasks.map(function (task) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("input", {
      type: "checkbox",
      checked: task.task_status,
      onChange: function onChange() {
        return dispatch({
          type: "DONE_TODO",
          payload: task
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }), __jsx("span", {
      style: task.task_status ? {
        textDecoration: "line-through"
      } : {
        textDecoration: "none"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 15
      }
    }, task.task_name));
  })));
};

_s(Index, "tCc0QZVXUdwsdffEt27V/Wdj+Vo=");

_c = Index;
Index.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var response, tasks;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["get"])("/tasks");

        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.data;

        case 5:
          tasks = _context.sent;
          return _context.abrupt("return", {
            tasks: tasks
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwidXNlQ29udGV4dCIsIlN0YXRlQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInRhc2siLCJzZXRUYXNrIiwidXNlRWZmZWN0IiwidHlwZSIsInBheWxvYWQiLCJ0YXNrcyIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ0YXNrX25hbWUiLCJ0YXNrX3N0YXR1cyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJsZW5ndGgiLCJtYXAiLCJ0ZXh0RGVjb3JhdGlvbiIsImdldEluaXRpYWxQcm9wcyIsImdldCIsInJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsb0JBQ0tDLHdEQUFVLENBQUNDLDZEQUFELENBRGY7QUFBQSxNQUNmQyxLQURlLGVBQ2ZBLEtBRGU7QUFBQSxNQUNSQyxRQURRLGVBQ1JBLFFBRFE7O0FBQUEsa0JBRUNDLHNEQUFRLENBQUMsRUFBRCxDQUZUO0FBQUEsTUFFaEJDLElBRmdCO0FBQUEsTUFFVkMsT0FGVTs7QUFHdkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkSixZQUFRLENBQUM7QUFBRUssVUFBSSxFQUFFLGVBQVI7QUFBeUJDLGFBQU8sRUFBRVYsS0FBSyxDQUFDVztBQUF4QyxLQUFELENBQVI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUdBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLENBQUQsRUFBTztBQUNwQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLDZEQUFJLENBQUMs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QkFEZ0I7QUFBQTtBQUFBLGlCQUVGQSxRQUFRLENBQUNaLElBRlA7O0FBQUE7QUFFaEJULGVBRmdCO0FBQUEsMkNBR2Y7QUFBRUEsaUJBQUssRUFBTEE7QUFBRixXQUhlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCO0FBTWVaLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy44ODBkZTg5Y2U4YjQ4NWUzNDQyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBnZXQsIHBvc3QgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvQ29udGV4dFwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpO1xyXG4gIGNvbnN0IFt0YXNrLCBzZXRUYXNrXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiSU5JVElBTF9TVEFURVwiLCBwYXlsb2FkOiBwcm9wcy50YXNrcyB9KTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgc3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHBvc3QoXCIvdGFza3NcIiwgeyB0YXNrX25hbWU6IHRhc2ssIHRhc2tfc3RhdHVzOiBmYWxzZSB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkFERF9UT0RPXCIsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgICBzZXRUYXNrKFwiXCIpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGlzbWlzc2libGUgYWxlcnQtd2FybmluZ1wiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCI+XHJcbiAgICAgICAgICAmdGltZXM7XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImFsZXJ0LWhlYWRpbmdcIj5XYXJuaW5nITwvaDQ+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgQmVzdCBjaGVjayB5byBzZWxmLCB5b3UncmUgbm90IGxvb2tpbmcgdG9vIGdvb2QuIE51bGxhIHZpdGFlIGVsaXRcclxuICAgICAgICAgIGxpYmVybywgYSBwaGFyZXRyYSBhdWd1ZS4gUHJhZXNlbnQgY29tbW9kbyBjdXJzdXMgbWFnbmEse1wiIFwifVxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJhbGVydC1saW5rXCI+XHJcbiAgICAgICAgICAgIHZlbCBzY2VsZXJpc3F1ZSBuaXNsIGNvbnNlY3RldHVyIGV0XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0fT5cclxuICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpID0+IHNldFRhc2soZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17dGFza30gLz5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBUYXNrPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyXCIgfX0+XHJcbiAgICAgICAge3N0YXRlLnRhc2tzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIHN0YXRlLnRhc2tzLm1hcCgodGFzaykgPT4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Rhc2sudGFza19zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBcIkRPTkVfVE9ET1wiLCBwYXlsb2FkOiB0YXNrIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgdGFzay50YXNrX3N0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgID8geyB0ZXh0RGVjb3JhdGlvbjogXCJsaW5lLXRocm91Z2hcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Rhc2sudGFza19uYW1lfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0KFwiL3Rhc2tzXCIpO1xyXG4gIGNvbnN0IHRhc2tzID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcclxuICByZXR1cm4geyB0YXNrcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=