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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/Context */ "./context/Context.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Echo\\Documents\\HALCYON\\pages\\index.js",
    _s = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var Index = function Index(props) {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_6__["StateContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      task = _useState[0],
      setTask = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch({
      type: "INITIAL_STATE",
      payload: props.tasks
    });
  }, []);

  var submit = function submit(e) {
    e.preventDefault();
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["post"])("/tasks", {
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

  var rowClass = function rowClass(task) {
    return task.task_status ? "table-success" : "table-primary";
  };

  var textStyle = function textStyle(task) {
    return task.task_status ? "strike" : "basic";
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1148190065",
    __self: _this
  }, ".input-container.jsx-1148190065{display:grid;grid-template-columns:1fr 100px;width:485px;margin-right:1%;grid-gap:15px;}.strike.jsx-1148190065{-webkit-text-decoration:line-through;text-decoration:line-through;}.basic.jsx-1148190065{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWNob1xcRG9jdW1lbnRzXFxIQUxDWU9OXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJTLEFBRzBCLEFBT2dCLEFBR1IsYUFUVyxnQ0FDcEIsS0FTZCxPQVJrQixTQUtsQixPQUpnQixjQUNoQiIsImZpbGUiOiJDOlxcVXNlcnNcXEVjaG9cXERvY3VtZW50c1xcSEFMQ1lPTlxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBnZXQsIHBvc3QgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvQ29udGV4dFwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpO1xyXG4gIGNvbnN0IFt0YXNrLCBzZXRUYXNrXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiSU5JVElBTF9TVEFURVwiLCBwYXlsb2FkOiBwcm9wcy50YXNrcyB9KTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgc3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHBvc3QoXCIvdGFza3NcIiwgeyB0YXNrX25hbWU6IHRhc2ssIHRhc2tfc3RhdHVzOiBmYWxzZSB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkFERF9UT0RPXCIsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgICBzZXRUYXNrKFwiXCIpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCByb3dDbGFzcyA9ICh0YXNrKSA9PiB7XHJcbiAgICByZXR1cm4gdGFzay50YXNrX3N0YXR1cyA/IFwidGFibGUtc3VjY2Vzc1wiIDogXCJ0YWJsZS1wcmltYXJ5XCI7XHJcbiAgfTtcclxuICBjb25zdCB0ZXh0U3R5bGUgPSAodGFzaykgPT4ge1xyXG4gICAgcmV0dXJuIHRhc2sudGFza19zdGF0dXMgPyBcInN0cmlrZVwiIDogXCJiYXNpY1wiO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0ODVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyaWtlIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmFzaWMge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIiBvblN1Ym1pdD17c3VibWl0fT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB3aWR0aD1cIjQ4NXB4XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUYXNrKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgdmFsdWU9e3Rhc2t9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSB0YXNrIGZvciB0b2RheVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIEFkZCBUYXNrXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlR5cGU8L3RoPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFjdGlvbnM8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtzdGF0ZS50YXNrcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIHN0YXRlLnRhc2tzLm1hcCgodGFzaykgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9e3Jvd0NsYXNzKHRhc2spfT5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Rhc2sudGFza19zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiRE9ORV9UT0RPXCIsIHBheWxvYWQ6IHRhc2sgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17dGV4dFN0eWxlKHRhc2spfT57dGFzay50YXNrX25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5FZGl0IHwgRGVsZXRlPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICB7LyogPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyXCIgfX0+XHJcbiAgICAgICAge3N0YXRlLnRhc2tzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIHN0YXRlLnRhc2tzLm1hcCgodGFzaykgPT4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Rhc2sudGFza19zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBcIkRPTkVfVE9ET1wiLCBwYXlsb2FkOiB0YXNrIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgdGFzay50YXNrX3N0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgID8geyB0ZXh0RGVjb3JhdGlvbjogXCJsaW5lLXRocm91Z2hcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Rhc2sudGFza19uYW1lfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldChcIi90YXNrc1wiKTtcclxuICBjb25zdCB0YXNrcyA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcbiAgcmV0dXJuIHsgdGFza3MgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Echo\\\\Documents\\\\HALCYON\\\\pages\\\\index.js */"), __jsx("div", {
    className: "jsx-1148190065",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("form", {
    onSubmit: submit,
    className: "jsx-1148190065" + " " + "input-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("input", {
    width: "485px",
    onChange: function onChange(e) {
      return setTask(e.target.value);
    },
    value: task,
    placeholder: "Enter a task for today",
    className: "jsx-1148190065" + " " + "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }), __jsx("button", {
    type: "submit",
    className: "jsx-1148190065" + " " + "btn btn-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "Add Task"))), __jsx("table", {
    className: "jsx-1148190065" + " " + "table table-hover",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx("thead", {
    className: "jsx-1148190065",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("tr", {
    className: "jsx-1148190065",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("th", {
    scope: "col",
    className: "jsx-1148190065",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Type"), __jsx("th", {
    scope: "col",
    className: "jsx-1148190065",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "Description"), __jsx("th", {
    scope: "col",
    className: "jsx-1148190065",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Actions"))), __jsx("tbody", {
    className: "jsx-1148190065",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, state.tasks.length > 0 && state.tasks.map(function (task) {
    return __jsx("tr", {
      className: "jsx-1148190065" + " " + (rowClass(task) || ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }
    }, __jsx("th", {
      scope: "row",
      className: "jsx-1148190065",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }, __jsx("input", {
      type: "checkbox",
      checked: task.task_status,
      onChange: function onChange() {
        return dispatch({
          type: "DONE_TODO",
          payload: task
        });
      },
      className: "jsx-1148190065",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 19
      }
    })), __jsx("td", {
      className: "jsx-1148190065" + " " + (textStyle(task) || ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, task.task_name), __jsx("td", {
      className: "jsx-1148190065",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, "Edit | Delete"));
  }))));
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
          return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["get"])("/tasks");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwidXNlQ29udGV4dCIsIlN0YXRlQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInRhc2siLCJzZXRUYXNrIiwidXNlRWZmZWN0IiwidHlwZSIsInBheWxvYWQiLCJ0YXNrcyIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ0YXNrX25hbWUiLCJ0YXNrX3N0YXR1cyIsInRoZW4iLCJyZXMiLCJkYXRhIiwicm93Q2xhc3MiLCJ0ZXh0U3R5bGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIm1hcCIsImdldEluaXRpYWxQcm9wcyIsImdldCIsInJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsb0JBQ0tDLHdEQUFVLENBQUNDLDZEQUFELENBRGY7QUFBQSxNQUNmQyxLQURlLGVBQ2ZBLEtBRGU7QUFBQSxNQUNSQyxRQURRLGVBQ1JBLFFBRFE7O0FBQUEsa0JBRUNDLHNEQUFRLENBQUMsRUFBRCxDQUZUO0FBQUEsTUFFaEJDLElBRmdCO0FBQUEsTUFFVkMsT0FGVTs7QUFHdkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkSixZQUFRLENBQUM7QUFBRUssVUFBSSxFQUFFLGVBQVI7QUFBeUJDLGFBQU8sRUFBRVYsS0FBSyxDQUFDVztBQUF4QyxLQUFELENBQVI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUdBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLENBQUQsRUFBTztBQUNwQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLDZEQUFJLENBQUMsUUFBRCxFQUFXO0FBQUVDLGVBQVMsRUFBRVYsSUFBYjtBQUFtQlcs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O0FBQUEsMkNBQWVnQixTQUFTLENBQUNoQixJQUFELENBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaUNBLElBQUksQ0FBQ1UsU0FBdEMsQ0FWRixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYRixDQURjO0FBQUEsR0FBaEIsQ0FGSixDQVJGLENBaENGLENBREY7QUFtRkQsQ0F2R0Q7O0dBQU1qQixLOztLQUFBQSxLO0FBeUdOQSxLQUFLLENBQUM0QixlQUFOLGlNQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNDQyx3REFBRyxDQUFDLFFBQUQsQ0FESjs7QUFBQTtBQUNoQkMsa0JBRGdCO0FBQUE7QUFBQSxpQkFFRkEsUUFBUSxDQUFDVCxJQUZQOztBQUFBO0FBRWhCVCxlQUZnQjtBQUFBLDJDQUdmO0FBQUVBLGlCQUFLLEVBQUxBO0FBQUYsV0FIZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQU1lWixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZDAxMDQ3ZmQxZGFhMGYyNTdhODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgZ2V0LCBwb3N0IH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCB7IFN0YXRlQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L0NvbnRleHRcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KTtcclxuICBjb25zdCBbdGFzaywgc2V0VGFza10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIklOSVRJQUxfU1RBVEVcIiwgcGF5bG9hZDogcHJvcHMudGFza3MgfSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBwb3N0KFwiL3Rhc2tzXCIsIHsgdGFza19uYW1lOiB0YXNrLCB0YXNrX3N0YXR1czogZmFsc2UgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJBRERfVE9ET1wiLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgICAgc2V0VGFzayhcIlwiKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3Qgcm93Q2xhc3MgPSAodGFzaykgPT4ge1xyXG4gICAgcmV0dXJuIHRhc2sudGFza19zdGF0dXMgPyBcInRhYmxlLXN1Y2Nlc3NcIiA6IFwidGFibGUtcHJpbWFyeVwiO1xyXG4gIH07XHJcbiAgY29uc3QgdGV4dFN0eWxlID0gKHRhc2spID0+IHtcclxuICAgIHJldHVybiB0YXNrLnRhc2tfc3RhdHVzID8gXCJzdHJpa2VcIiA6IFwiYmFzaWNcIjtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDg1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN0cmlrZSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJhc2ljIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCIgb25TdWJtaXQ9e3N1Ym1pdH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgd2lkdGg9XCI0ODVweFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGFzayhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0YXNrfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgdGFzayBmb3IgdG9kYXlcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICBBZGQgVGFza1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5UeXBlPC90aD5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BY3Rpb25zPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7c3RhdGUudGFza3MubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICBzdGF0ZS50YXNrcy5tYXAoKHRhc2spID0+IChcclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtyb3dDbGFzcyh0YXNrKX0+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0YXNrLnRhc2tfc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkRPTkVfVE9ET1wiLCBwYXlsb2FkOiB0YXNrIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3RleHRTdHlsZSh0YXNrKX0+e3Rhc2sudGFza19uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+RWRpdCB8IERlbGV0ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgICAgey8qIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiIH19PlxyXG4gICAgICAgIHtzdGF0ZS50YXNrcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICBzdGF0ZS50YXNrcy5tYXAoKHRhc2spID0+IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0YXNrLnRhc2tfc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogXCJET05FX1RPRE9cIiwgcGF5bG9hZDogdGFzayB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgIHRhc2sudGFza19zdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICA/IHsgdGV4dERlY29yYXRpb246IFwibGluZS10aHJvdWdoXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIDogeyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0YXNrLnRhc2tfbmFtZX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXQoXCIvdGFza3NcIik7XHJcbiAgY29uc3QgdGFza3MgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xyXG4gIHJldHVybiB7IHRhc2tzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==