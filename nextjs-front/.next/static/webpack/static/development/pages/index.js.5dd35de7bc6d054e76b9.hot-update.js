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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      editToggle = _useState2[0],
      setEdit = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      selected = _useState3[0],
      setSelected = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch({
      type: "INITIAL_STATE",
      payload: props.tasks
    });
  }, []);

  var submit = function submit(e) {
    e.preventDefault();

    if (editToggle) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["put"])("/task/".concat(selected.id), {
        task_name: task,
        task_status: selected.task_status
      }).then(function (res) {
        dispatch({
          type: "UPDATE_TODO",
          payload: res.data
        });
        setTask("");
        setSelected("");
        setEdit(false);
      });
    } else {
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
    }
  };

  var rowClass = function rowClass(task) {
    return task.id === selected.id ? "table-light" : task.task_status ? "table-secondary" : "table-primary";
  };

  var textStyle = function textStyle(task) {
    return task.task_status ? "strike" : "basic";
  };

  var editTask = function editTask(task) {
    setTask(task.task_name);
    setSelected(task);
    setEdit(true);
  };

  var editOff = function editOff() {
    setTask("");
    setSelected(null);
    setEdit(false);
  };

  var deleteTask = function deleteTask(task) {
    dispatch({
      type: "DELETE_TODO",
      payload: task
    });
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "981118849",
    __self: _this
  }, ".input-container.jsx-981118849{display:grid;grid-template-columns:1fr 100px;width:485px;margin-right:1%;grid-gap:15px;padding:15px 0px 30px;}.strike.jsx-981118849{-webkit-text-decoration:line-through;text-decoration:line-through;}.basic.jsx-981118849{-webkit-text-decoration:none;text-decoration:none;}.center.jsx-981118849{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWNob1xcRG9jdW1lbnRzXFxIQUxDWU9OXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERTLEFBRzBCLEFBUWdCLEFBR1IsQUFHSCxhQWJjLEtBY2xDLDJCQWJjLEtBVWQsT0FUa0IsU0FNbEIsT0FMZ0IsY0FDUSxzQkFDeEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxFY2hvXFxEb2N1bWVudHNcXEhBTENZT05cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgZ2V0LCBwb3N0LCBwdXQgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvQ29udGV4dFwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpO1xyXG4gIGNvbnN0IFt0YXNrLCBzZXRUYXNrXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlZGl0VG9nZ2xlLCBzZXRFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiSU5JVElBTF9TVEFURVwiLCBwYXlsb2FkOiBwcm9wcy50YXNrcyB9KTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgc3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlZGl0VG9nZ2xlKSB7XHJcbiAgICAgIHB1dChgL3Rhc2svJHtzZWxlY3RlZC5pZH1gLCB7XHJcbiAgICAgICAgdGFza19uYW1lOiB0YXNrLFxyXG4gICAgICAgIHRhc2tfc3RhdHVzOiBzZWxlY3RlZC50YXNrX3N0YXR1cyxcclxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9UT0RPXCIsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgICAgIHNldFRhc2soXCJcIik7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoXCJcIik7XHJcbiAgICAgICAgc2V0RWRpdChmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcG9zdChcIi90YXNrc1wiLCB7IHRhc2tfbmFtZTogdGFzaywgdGFza19zdGF0dXM6IGZhbHNlIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJBRERfVE9ET1wiLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgICAgICBzZXRUYXNrKFwiXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJvd0NsYXNzID0gKHRhc2spID0+IHtcclxuICAgIHJldHVybiB0YXNrLmlkID09PSBzZWxlY3RlZC5pZFxyXG4gICAgICA/IFwidGFibGUtbGlnaHRcIlxyXG4gICAgICA6IHRhc2sudGFza19zdGF0dXNcclxuICAgICAgPyBcInRhYmxlLXNlY29uZGFyeVwiXHJcbiAgICAgIDogXCJ0YWJsZS1wcmltYXJ5XCI7XHJcbiAgfTtcclxuICBjb25zdCB0ZXh0U3R5bGUgPSAodGFzaykgPT4ge1xyXG4gICAgcmV0dXJuIHRhc2sudGFza19zdGF0dXMgPyBcInN0cmlrZVwiIDogXCJiYXNpY1wiO1xyXG4gIH07XHJcbiAgY29uc3QgZWRpdFRhc2sgPSAodGFzaykgPT4ge1xyXG4gICAgc2V0VGFzayh0YXNrLnRhc2tfbmFtZSk7XHJcbiAgICBzZXRTZWxlY3RlZCh0YXNrKTtcclxuICAgIHNldEVkaXQodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBlZGl0T2ZmID0gKCkgPT4ge1xyXG4gICAgc2V0VGFzayhcIlwiKTtcclxuICAgIHNldFNlbGVjdGVkKG51bGwpO1xyXG4gICAgc2V0RWRpdChmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBkZWxldGVUYXNrID0gKHRhc2spID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJERUxFVEVfVE9ET1wiLCBwYXlsb2FkOiB0YXNrIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQ4NXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAwcHggMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJpa2Uge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5iYXNpYyB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jZW50ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIiBvblN1Ym1pdD17c3VibWl0fT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB3aWR0aD1cIjQ4NXB4XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUYXNrKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgdmFsdWU9e3Rhc2t9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSB0YXNrIGZvciB0b2RheVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIHtlZGl0VG9nZ2xlID8gXCJVcGRhdGVcIiA6IFwiQWRkIFRhc2tcIn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+PC90aD5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICBBY3Rpb25zXHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge3N0YXRlLnRhc2tzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgc3RhdGUudGFza3MubWFwKCh0YXNrKSA9PiAoXHJcbiAgICAgICAgICAgICAgPHRyIGtleT17dGFzay5pZH0gY2xhc3NOYW1lPXtyb3dDbGFzcyh0YXNrKX0+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0YXNrLnRhc2tfc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkRPTkVfVE9ET1wiLCBwYXlsb2FkOiB0YXNrIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3RleHRTdHlsZSh0YXNrKX0+e3Rhc2sudGFza19uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtlZGl0VG9nZ2xlICYmIHNlbGVjdGVkLmlkID09PSB0YXNrLmlkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGVkaXRPZmYoKX0+Q2FuY2VsIDwvYT5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBlZGl0VGFzayh0YXNrKX0+RWRpdCA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHwgPGEgb25DbGljaz17KCkgPT4gZGVsZXRlVGFzayh0YXNrKX0+RGVsZXRlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldChcIi90YXNrc1wiKTtcclxuICBjb25zdCB0YXNrcyA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcbiAgcmV0dXJuIHsgdGFza3MgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Echo\\\\Documents\\\\HALCYON\\\\pages\\\\index.js */"), __jsx("div", {
    className: "jsx-981118849",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx("form", {
    onSubmit: submit,
    className: "jsx-981118849" + " " + "input-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("input", {
    width: "485px",
    onChange: function onChange(e) {
      return setTask(e.target.value);
    },
    value: task,
    placeholder: "Enter a task for today",
    className: "jsx-981118849" + " " + "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }), __jsx("button", {
    type: "submit",
    className: "jsx-981118849" + " " + "btn btn-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, editToggle ? "Update" : "Add Task"))), __jsx("table", {
    className: "jsx-981118849" + " " + "table table-hover",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx("thead", {
    className: "jsx-981118849",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("tr", {
    className: "jsx-981118849",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("th", {
    scope: "col",
    className: "jsx-981118849",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }), __jsx("th", {
    scope: "col",
    className: "jsx-981118849",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, "Description"), __jsx("th", {
    scope: "col",
    className: "jsx-981118849" + " " + "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, "Actions"))), __jsx("tbody", {
    className: "jsx-981118849",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, state.tasks.length > 0 && state.tasks.map(function (task) {
    return __jsx("tr", {
      key: task.id,
      className: "jsx-981118849" + " " + (rowClass(task) || ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 15
      }
    }, __jsx("th", {
      scope: "row",
      className: "jsx-981118849",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
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
      className: "jsx-981118849",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 19
      }
    })), __jsx("td", {
      className: "jsx-981118849" + " " + (textStyle(task) || ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }, task.task_name), __jsx("td", {
      className: "jsx-981118849" + " " + "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }, editToggle && selected.id === task.id ? __jsx("a", {
      onClick: function onClick() {
        return editOff();
      },
      className: "jsx-981118849",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 21
      }
    }, "Cancel ") : __jsx("a", {
      onClick: function onClick() {
        return editTask(task);
      },
      className: "jsx-981118849",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }
    }, "Edit "), "| ", __jsx("a", {
      onClick: function onClick() {
        return deleteTask(task);
      },
      className: "jsx-981118849",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }
    }, "Delete")));
  }))));
};

_s(Index, "FotLaSfOguKcc815nEokPLWqhWg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwidXNlQ29udGV4dCIsIlN0YXRlQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInRhc2siLCJzZXRUYXNrIiwiZWRpdFRvZ2dsZSIsInNldEVkaXQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlRWZmZWN0IiwidHlwZSIsInBheWxvYWQiLCJ0YXNrcyIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1dCIsImlkIiwidGFza19uYW1lIiwidGFza19zdGF0dXMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInBvc3QiLCJyb3dDbGFzcyIsInRleHRTdHlsZSIsImVkaXRUYXNrIiwiZWRpdE9mZiIsImRlbGV0ZVRhc2siLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIm1hcCIsImdldEluaXRpYWxQcm9wcyIsImdldCIsInJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsb0JBQ0tDLHdEQUFVLENBQUNDLDZEQUFELENBRGY7QUFBQSxNQUNmQyxLQURlLGVBQ2ZBLEtBRGU7QUFBQSxNQUNSQyxRQURRLGVBQ1JBLFFBRFE7O0FBQUEsa0JBRUNDLHNEQUFRLENBQUMsRUFBRCxDQUZUO0FBQUEsTUFFaEJDLElBRmdCO0FBQUEsTUFFVkMsT0FGVTs7QUFBQSxtQkFHT0Ysc0RBQVEsQ0FBQyxLQUFELENBSGY7QUFBQSxNQUdoQkcsVUFIZ0I7QUFBQSxNQUdKQyxPQUhJOztBQUFBLG1CQUlTSixzREFBUSxDQUFDLElBQUQsQ0FKakI7QUFBQSxNQUloQkssUUFKZ0I7QUFBQSxNQUlOQyxXQUpNOztBQUt2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RS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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNDQyx3REFBRyxDQUFDLFFBQUQsQ0FESjs7QUFBQTtBQUNoQkMsa0JBRGdCO0FBQUE7QUFBQSxpQkFFRkEsUUFBUSxDQUFDYixJQUZQOztBQUFBO0FBRWhCVixlQUZnQjtBQUFBLDJDQUdmO0FBQUVBLGlCQUFLLEVBQUxBO0FBQUYsV0FIZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQU1laEIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjVkZDM1ZGU3YmM2ZDA1NGU3NmI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IGdldCwgcG9zdCwgcHV0IH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCB7IFN0YXRlQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L0NvbnRleHRcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KTtcclxuICBjb25zdCBbdGFzaywgc2V0VGFza10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZWRpdFRvZ2dsZSwgc2V0RWRpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIklOSVRJQUxfU1RBVEVcIiwgcGF5bG9hZDogcHJvcHMudGFza3MgfSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZWRpdFRvZ2dsZSkge1xyXG4gICAgICBwdXQoYC90YXNrLyR7c2VsZWN0ZWQuaWR9YCwge1xyXG4gICAgICAgIHRhc2tfbmFtZTogdGFzayxcclxuICAgICAgICB0YXNrX3N0YXR1czogc2VsZWN0ZWQudGFza19zdGF0dXMsXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfVE9ET1wiLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgICAgICBzZXRUYXNrKFwiXCIpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkKFwiXCIpO1xyXG4gICAgICAgIHNldEVkaXQoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBvc3QoXCIvdGFza3NcIiwgeyB0YXNrX25hbWU6IHRhc2ssIHRhc2tfc3RhdHVzOiBmYWxzZSB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQUREX1RPRE9cIiwgcGF5bG9hZDogcmVzLmRhdGEgfSk7XHJcbiAgICAgICAgc2V0VGFzayhcIlwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCByb3dDbGFzcyA9ICh0YXNrKSA9PiB7XHJcbiAgICByZXR1cm4gdGFzay5pZCA9PT0gc2VsZWN0ZWQuaWRcclxuICAgICAgPyBcInRhYmxlLWxpZ2h0XCJcclxuICAgICAgOiB0YXNrLnRhc2tfc3RhdHVzXHJcbiAgICAgID8gXCJ0YWJsZS1zZWNvbmRhcnlcIlxyXG4gICAgICA6IFwidGFibGUtcHJpbWFyeVwiO1xyXG4gIH07XHJcbiAgY29uc3QgdGV4dFN0eWxlID0gKHRhc2spID0+IHtcclxuICAgIHJldHVybiB0YXNrLnRhc2tfc3RhdHVzID8gXCJzdHJpa2VcIiA6IFwiYmFzaWNcIjtcclxuICB9O1xyXG4gIGNvbnN0IGVkaXRUYXNrID0gKHRhc2spID0+IHtcclxuICAgIHNldFRhc2sodGFzay50YXNrX25hbWUpO1xyXG4gICAgc2V0U2VsZWN0ZWQodGFzayk7XHJcbiAgICBzZXRFZGl0KHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgZWRpdE9mZiA9ICgpID0+IHtcclxuICAgIHNldFRhc2soXCJcIik7XHJcbiAgICBzZXRTZWxlY3RlZChudWxsKTtcclxuICAgIHNldEVkaXQoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiREVMRVRFX1RPRE9cIiwgcGF5bG9hZDogdGFzayB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0ODVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMHB4IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyaWtlIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmFzaWMge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2VudGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCIgb25TdWJtaXQ9e3N1Ym1pdH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgd2lkdGg9XCI0ODVweFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGFzayhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0YXNrfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgdGFzayBmb3IgdG9kYXlcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICB7ZWRpdFRvZ2dsZSA/IFwiVXBkYXRlXCIgOiBcIkFkZCBUYXNrXCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPjwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgQWN0aW9uc1xyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtzdGF0ZS50YXNrcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIHN0YXRlLnRhc2tzLm1hcCgodGFzaykgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ciBrZXk9e3Rhc2suaWR9IGNsYXNzTmFtZT17cm93Q2xhc3ModGFzayl9PlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGFzay50YXNrX3N0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJET05FX1RPRE9cIiwgcGF5bG9hZDogdGFzayB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt0ZXh0U3R5bGUodGFzayl9Pnt0YXNrLnRhc2tfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZWRpdFRvZ2dsZSAmJiBzZWxlY3RlZC5pZCA9PT0gdGFzay5pZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBlZGl0T2ZmKCl9PkNhbmNlbCA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gZWRpdFRhc2sodGFzayl9PkVkaXQgPC9hPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB8IDxhIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRhc2sodGFzayl9PkRlbGV0ZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXQoXCIvdGFza3NcIik7XHJcbiAgY29uc3QgdGFza3MgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xyXG4gIHJldHVybiB7IHRhc2tzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==