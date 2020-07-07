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

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1358334248",
    __self: _this
  }, ".input-container2.jsx-1358334248{display:grid;grid-template-columns:1fr 20px;width:485px;margin-right:1%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWNob1xcRG9jdW1lbnRzXFxIQUxDWU9OXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JTLEFBRzBCLGFBQ2tCLCtCQUNuQixZQUNJLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXEVjaG9cXERvY3VtZW50c1xcSEFMQ1lPTlxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBnZXQsIHBvc3QgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvQ29udGV4dFwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpO1xyXG4gIGNvbnN0IFt0YXNrLCBzZXRUYXNrXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiSU5JVElBTF9TVEFURVwiLCBwYXlsb2FkOiBwcm9wcy50YXNrcyB9KTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgc3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHBvc3QoXCIvdGFza3NcIiwgeyB0YXNrX25hbWU6IHRhc2ssIHRhc2tfc3RhdHVzOiBmYWxzZSB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkFERF9UT0RPXCIsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgICBzZXRUYXNrKFwiXCIpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5pbnB1dC1jb250YWluZXIyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQ4NXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCIgb25TdWJtaXQ9e3N1Ym1pdH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgd2lkdGg9XCI0ODVweFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGFzayhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0YXNrfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgdGFzayBmb3IgdG9kYXlcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBUYXNrPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyXCIgfX0+XHJcbiAgICAgICAge3N0YXRlLnRhc2tzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIHN0YXRlLnRhc2tzLm1hcCgodGFzaykgPT4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Rhc2sudGFza19zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBcIkRPTkVfVE9ET1wiLCBwYXlsb2FkOiB0YXNrIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgdGFzay50YXNrX3N0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgID8geyB0ZXh0RGVjb3JhdGlvbjogXCJsaW5lLXRocm91Z2hcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Rhc2sudGFza19uYW1lfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0KFwiL3Rhc2tzXCIpO1xyXG4gIGNvbnN0IHRhc2tzID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcclxuICByZXR1cm4geyB0YXNrcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Echo\\\\Documents\\\\HALCYON\\\\pages\\\\index.js */"), __jsx("div", {
    className: "jsx-1358334248",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("form", {
    onSubmit: submit,
    className: "jsx-1358334248" + " " + "input-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("input", {
    width: "485px",
    onChange: function onChange(e) {
      return setTask(e.target.value);
    },
    value: task,
    placeholder: "Enter a task for today",
    className: "jsx-1358334248" + " " + "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }), __jsx("button", {
    type: "submit",
    className: "jsx-1358334248",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Add Task"))), __jsx("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    },
    className: "jsx-1358334248",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, state.tasks.length > 0 && state.tasks.map(function (task) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("input", {
      type: "checkbox",
      checked: task.task_status,
      onChange: function onChange() {
        return dispatch({
          type: "DONE_TODO",
          payload: task
        });
      },
      className: "jsx-1358334248",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    }), __jsx("span", {
      style: task.task_status ? {
        textDecoration: "line-through"
      } : {
        textDecoration: "none"
      },
      className: "jsx-1358334248",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwidXNlQ29udGV4dCIsIlN0YXRlQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInRhc2siLCJzZXRUYXNrIiwidXNlRWZmZWN0IiwidHlwZSIsInBheWxvYWQiLCJ0YXNrcyIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ0YXNrX25hbWUiLCJ0YXNrX3N0YXR1cyIsInRoZW4iLCJyZXMiLCJkYXRhIiwidGFyZ2V0IiwidmFsdWUiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImxlbmd0aCIsIm1hcCIsInRleHREZWNvcmF0aW9uIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0IiwicmVzcG9uc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxvQkFDS0Msd0RBQVUsQ0FBQ0MsNkRBQUQsQ0FEZjtBQUFBLE1BQ2ZDLEtBRGUsZUFDZkEsS0FEZTtBQUFBLE1BQ1JDLFFBRFEsZUFDUkEsUUFEUTs7QUFBQSxrQkFFQ0Msc0RBQVEsQ0FBQyxFQUFELENBRlQ7QUFBQSxNQUVoQkMsSUFGZ0I7QUFBQSxNQUVWQyxPQUZVOztBQUd2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RKLFlBQVEsQ0FBQztBQUFFSyxVQUFJLEVBQUUsZUFBUjtBQUF5QkMsYUFBTyxFQUFFVixLQUFLLENBQUNXO0FBQXhDLEtBQUQsQ0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBR0EsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3BCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsNkRBQUksQ0FBQyxRQUFELEVBQVc7QUFBRUMsZUFBUyxFQUFFVixJQUFiO0FBQW1CVyxpQkFBVyxFQUFFO0FBQWhDLEtBQVgsQ0FBSixDQUF3REMsSUFBeEQsQ0FBNkQsVUFBQ0MsR0FBRCxFQUFTO0FBQ3BFZixjQUFRLENBQUM7QUFBRUssWUFBSSxFQUFFLFVBQVI7QUFBb0JDLGVBQU8sRUFBRVMsR0FBRyxDQUFDQztBQUFqQyxPQUFELENBQVI7QUFDQWIsYUFBTyxDQUFDLEVBQUQsQ0FBUDtBQUNELEtBSEQ7QUFJRCxHQU5EOztBQVFBLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9wSEFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFrQyxZQUFRLEVBQUVLLE1BQTVDO0FBQUEsd0NBQWdCLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUMsT0FEUjtBQUVFLFlBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLGFBQU9OLE9BQU8sQ0FBQ00sQ0FBQyxDQUFDUSxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBLEtBRlo7QUFHRSxTQUFLLEVBQUVoQixJQUhUO0FBS0UsZUFBVyxFQUFDLHdCQUxkO0FBQUEsd0NBSVksY0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFRRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRixDQURGLENBWEYsRUF1QkU7QUFBSyxTQUFLLEVBQUU7QUFBRWlCLGFBQU8sRUFBRSxNQUFYO0FBQW1CQyx5QkFBbUIsRUFBRTtBQUF4QyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHckIsS0FBSyxDQUFDUSxLQUFOLENBQVljLE1BQVosR0FBcUIsQ0FBckIsSUFDQ3RCLEtBQUssQ0FBQ1EsS0FBTixDQUFZZSxHQUFaLENBQWdCLFVBQUNwQixJQUFEO0FBQUEsV0FDZCxtRUFDRTtBQUNFLFVBQUksRUFBQyxVQURQO0FBRUUsYUFBTyxFQUFFQSxJQUFJLENBQUNXLFdBRmhCO0FBR0UsY0FBUSxFQUFFO0FBQUEsZUFBTWIsUUFBUSxDQUFDO0FBQUVLLGNBQUksRUFBRSxXQUFSO0FBQXFCQyxpQkFBTyxFQUFFSjtBQUE5QixTQUFELENBQWQ7QUFBQSxPQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBTUU7QUFDRSxXQUFLLEVBQ0hBLElBQUksQ0FBQ1csV0FBTCxHQUNJO0FBQUVVLHNCQUFjLEVBQUU7QUFBbEIsT0FESixHQUVJO0FBQUVBLHNCQUFjLEVBQUU7QUFBbEIsT0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPR3JCLElBQUksQ0FBQ1UsU0FQUixDQU5GLENBRGM7QUFBQSxHQUFoQixDQUZKLENBdkJGLENBREY7QUErQ0QsQ0E3REQ7O0dBQU1qQixLOztLQUFBQSxLO0FBK0ROQSxLQUFLLENBQUM2QixlQUFOLGlNQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNDQyx3REFBRyxDQUFDLFFBQUQsQ0FESjs7QUFBQTtBQUNoQkMsa0JBRGdCO0FBQUE7QUFBQSxpQkFFRkEsUUFBUSxDQUFDVixJQUZQOztBQUFBO0FBRWhCVCxlQUZnQjtBQUFBLDJDQUdmO0FBQUVBLGlCQUFLLEVBQUxBO0FBQUYsV0FIZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQU1lWixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMzE2NGUyMWJmOGRlNGY0M2E4YzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgZ2V0LCBwb3N0IH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCB7IFN0YXRlQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L0NvbnRleHRcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KTtcclxuICBjb25zdCBbdGFzaywgc2V0VGFza10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIklOSVRJQUxfU1RBVEVcIiwgcGF5bG9hZDogcHJvcHMudGFza3MgfSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBwb3N0KFwiL3Rhc2tzXCIsIHsgdGFza19uYW1lOiB0YXNrLCB0YXNrX3N0YXR1czogZmFsc2UgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJBRERfVE9ET1wiLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgICAgc2V0VGFzayhcIlwiKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuaW5wdXQtY29udGFpbmVyMiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0ODVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiIG9uU3VibWl0PXtzdWJtaXR9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHdpZHRoPVwiNDg1cHhcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRhc2soZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17dGFza31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIHRhc2sgZm9yIHRvZGF5XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQgVGFzazwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiIH19PlxyXG4gICAgICAgIHtzdGF0ZS50YXNrcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICBzdGF0ZS50YXNrcy5tYXAoKHRhc2spID0+IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0YXNrLnRhc2tfc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogXCJET05FX1RPRE9cIiwgcGF5bG9hZDogdGFzayB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgIHRhc2sudGFza19zdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICA/IHsgdGV4dERlY29yYXRpb246IFwibGluZS10aHJvdWdoXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIDogeyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0YXNrLnRhc2tfbmFtZX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldChcIi90YXNrc1wiKTtcclxuICBjb25zdCB0YXNrcyA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcbiAgcmV0dXJuIHsgdGFza3MgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9