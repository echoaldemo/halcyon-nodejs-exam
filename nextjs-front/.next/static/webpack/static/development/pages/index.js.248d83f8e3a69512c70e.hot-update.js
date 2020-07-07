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
    id: "1648553939",
    __self: _this
  }, ".input-container.jsx-1648553939{display:grid;grid-template-columns:1fr 100px;width:485px;margin-right:1%;grid-gap:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWNob1xcRG9jdW1lbnRzXFxIQUxDWU9OXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JTLEFBRzBCLGFBQ21CLGdDQUNwQixZQUNJLGdCQUNGLGNBQ2hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRWNob1xcRG9jdW1lbnRzXFxIQUxDWU9OXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IGdldCwgcG9zdCB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9Db250ZXh0XCI7XHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFN0YXRlQ29udGV4dCk7XHJcbiAgY29uc3QgW3Rhc2ssIHNldFRhc2tdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJJTklUSUFMX1NUQVRFXCIsIHBheWxvYWQ6IHByb3BzLnRhc2tzIH0pO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBzdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcG9zdChcIi90YXNrc1wiLCB7IHRhc2tfbmFtZTogdGFzaywgdGFza19zdGF0dXM6IGZhbHNlIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQUREX1RPRE9cIiwgcGF5bG9hZDogcmVzLmRhdGEgfSk7XHJcbiAgICAgIHNldFRhc2soXCJcIik7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDg1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCIgb25TdWJtaXQ9e3N1Ym1pdH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgd2lkdGg9XCI0ODVweFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGFzayhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0YXNrfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgdGFzayBmb3IgdG9kYXlcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICBBZGQgVGFza1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyXCIgfX0+XHJcbiAgICAgICAge3N0YXRlLnRhc2tzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIHN0YXRlLnRhc2tzLm1hcCgodGFzaykgPT4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Rhc2sudGFza19zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBcIkRPTkVfVE9ET1wiLCBwYXlsb2FkOiB0YXNrIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgdGFzay50YXNrX3N0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgID8geyB0ZXh0RGVjb3JhdGlvbjogXCJsaW5lLXRocm91Z2hcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Rhc2sudGFza19uYW1lfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0KFwiL3Rhc2tzXCIpO1xyXG4gIGNvbnN0IHRhc2tzID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcclxuICByZXR1cm4geyB0YXNrcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Echo\\\\Documents\\\\HALCYON\\\\pages\\\\index.js */"), __jsx("div", {
    className: "jsx-1648553939",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("form", {
    onSubmit: submit,
    className: "jsx-1648553939" + " " + "input-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("input", {
    width: "485px",
    onChange: function onChange(e) {
      return setTask(e.target.value);
    },
    value: task,
    placeholder: "Enter a task for today",
    className: "jsx-1648553939" + " " + "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), __jsx("button", {
    type: "submit",
    className: "jsx-1648553939" + " " + "btn btn-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "Add Task"))), __jsx("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    },
    className: "jsx-1648553939",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      className: "jsx-1648553939",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 15
      }
    }), __jsx("span", {
      style: task.task_status ? {
        textDecoration: "line-through"
      } : {
        textDecoration: "none"
      },
      className: "jsx-1648553939",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwidXNlQ29udGV4dCIsIlN0YXRlQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInRhc2siLCJzZXRUYXNrIiwidXNlRWZmZWN0IiwidHlwZSIsInBheWxvYWQiLCJ0YXNrcyIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ0YXNrX25hbWUiLCJ0YXNrX3N0YXR1cyIsInRoZW4iLCJyZXMiLCJkYXRhIiwidGFyZ2V0IiwidmFsdWUiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImxlbmd0aCIsIm1hcCIsInRleHREZWNvcmF0aW9uIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0IiwicmVzcG9uc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxvQkFDS0Msd0RBQVUsQ0FBQ0MsNkRBQUQsQ0FEZjtBQUFBLE1BQ2ZDLEtBRGUsZUFDZkEsS0FEZTtBQUFBLE1BQ1JDLFFBRFEsZUFDUkEsUUFEUTs7QUFBQSxrQkFFQ0Msc0RBQVEsQ0FBQyxFQUFELENBRlQ7QUFBQSxNQUVoQkMsSUFGZ0I7QUFBQSxNQUVWQyxPQUZVOztBQUd2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RKLFlBQVEsQ0FBQztBQUFFSyxVQUFJLEVBQUUsZUFBUjtBQUF5QkMsYUFBTyxFQUFFVixLQUFLLENBQUNXO0FBQXhDLEtBQUQsQ0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBR0EsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3BCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsNkRBQUksQ0FBQyxRQUFELEVBQVc7QUFBRUMsZUFBUyxFQUFFVixJQUFiO0FBQW1CVyxpQkFBVyxFQUFFO0FBQWhDLEtBQVgsQ0FBSixDQUF3REMsSUFBeEQsQ0FBNkQsVUFBQ0MsR0FBRCxFQUFTO0FBQ3BFZixjQUFRLENBQUM7QUFBRUssWUFBSSxFQUFFLFVBQVI7QUFBb0JDLGVBQU8sRUFBRVMsR0FBRyxDQUFDQztBQUFqQyxPQUFELENBQVI7QUFDQWIsYUFBTyxDQUFDLEVBQUQsQ0FBUDtBQUNELEtBSEQ7QUFJRCxHQU5EOztBQVFBLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGt5SEFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFrQyxZQUFRLEVBQUVLLE1BQTVDO0FBQUEsd0NBQWdCLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUMsT0FEUjtBQUVFLFlBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLGFBQU9OLE9BQU8sQ0FBQ00sQ0FBQyxDQUFDUSxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBLEtBRlo7QUFHRSxTQUFLLEVBQUVoQixJQUhUO0FBS0UsZUFBVyxFQUFDLHdCQUxkO0FBQUEsd0NBSVksY0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFRRTtBQUFvQyxRQUFJLEVBQUMsUUFBekM7QUFBQSx3Q0FBa0IsaUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkYsQ0FERixDQVpGLEVBMEJFO0FBQUssU0FBSyxFQUFFO0FBQUVpQixhQUFPLEVBQUUsTUFBWDtBQUFtQkMseUJBQW1CLEVBQUU7QUFBeEMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3JCLEtBQUssQ0FBQ1EsS0FBTixDQUFZYyxNQUFaLEdBQXFCLENBQXJCLElBQ0N0QixLQUFLLENBQUNRLEtBQU4sQ0FBWWUsR0FBWixDQUFnQixVQUFDcEIsSUFBRDtBQUFBLFdBQ2QsbUVBQ0U7QUFDRSxVQUFJLEVBQUMsVUFEUDtBQUVFLGFBQU8sRUFBRUEsSUFBSSxDQUFDVyxXQUZoQjtBQUdFLGNBQVEsRUFBRTtBQUFBLGVBQU1iLFFBQVEsQ0FBQztBQUFFSyxjQUFJLEVBQUUsV0FBUjtBQUFxQkMsaUJBQU8sRUFBRUo7QUFBOUIsU0FBRCxDQUFkO0FBQUEsT0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU1FO0FBQ0UsV0FBSyxFQUNIQSxJQUFJLENBQUNXLFdBQUwsR0FDSTtBQUFFVSxzQkFBYyxFQUFFO0FBQWxCLE9BREosR0FFSTtBQUFFQSxzQkFBYyxFQUFFO0FBQWxCLE9BSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0dyQixJQUFJLENBQUNVLFNBUFIsQ0FORixDQURjO0FBQUEsR0FBaEIsQ0FGSixDQTFCRixDQURGO0FBa0RELENBaEVEOztHQUFNakIsSzs7S0FBQUEsSztBQWtFTkEsS0FBSyxDQUFDNkIsZUFBTixpTUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDQ0Msd0RBQUcsQ0FBQyxRQUFELENBREo7O0FBQUE7QUFDaEJDLGtCQURnQjtBQUFBO0FBQUEsaUJBRUZBLFFBQVEsQ0FBQ1YsSUFGUDs7QUFBQTtBQUVoQlQsZUFGZ0I7QUFBQSwyQ0FHZjtBQUFFQSxpQkFBSyxFQUFMQTtBQUFGLFdBSGU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEI7QUFNZVosb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjI0OGQ4M2Y4ZTNhNjk1MTJjNzBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IGdldCwgcG9zdCB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9Db250ZXh0XCI7XHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFN0YXRlQ29udGV4dCk7XHJcbiAgY29uc3QgW3Rhc2ssIHNldFRhc2tdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJJTklUSUFMX1NUQVRFXCIsIHBheWxvYWQ6IHByb3BzLnRhc2tzIH0pO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBzdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcG9zdChcIi90YXNrc1wiLCB7IHRhc2tfbmFtZTogdGFzaywgdGFza19zdGF0dXM6IGZhbHNlIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQUREX1RPRE9cIiwgcGF5bG9hZDogcmVzLmRhdGEgfSk7XHJcbiAgICAgIHNldFRhc2soXCJcIik7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDg1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCIgb25TdWJtaXQ9e3N1Ym1pdH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgd2lkdGg9XCI0ODVweFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGFzayhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0YXNrfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgdGFzayBmb3IgdG9kYXlcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICBBZGQgVGFza1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyXCIgfX0+XHJcbiAgICAgICAge3N0YXRlLnRhc2tzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIHN0YXRlLnRhc2tzLm1hcCgodGFzaykgPT4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Rhc2sudGFza19zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBcIkRPTkVfVE9ET1wiLCBwYXlsb2FkOiB0YXNrIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgdGFzay50YXNrX3N0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgID8geyB0ZXh0RGVjb3JhdGlvbjogXCJsaW5lLXRocm91Z2hcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Rhc2sudGFza19uYW1lfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0KFwiL3Rhc2tzXCIpO1xyXG4gIGNvbnN0IHRhc2tzID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcclxuICByZXR1cm4geyB0YXNrcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=