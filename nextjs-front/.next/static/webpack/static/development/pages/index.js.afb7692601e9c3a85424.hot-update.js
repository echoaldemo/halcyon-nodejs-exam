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
    return selected && task.id === selected.id ? "table-info" : task.task_status ? "table-success" : "table-primary";
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
    editOff();
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2434051339",
    __self: _this
  }, ".input-container.jsx-2434051339{display:grid;grid-template-columns:1fr 100px;width:485px;margin-right:1%;grid-gap:15px;padding:15px 0px 30px;}.strike.jsx-2434051339{-webkit-text-decoration:line-through;text-decoration:line-through;}.basic.jsx-2434051339{-webkit-text-decoration:none;text-decoration:none;}.center.jsx-2434051339{text-align:center;}.btn-grid.jsx-2434051339{display:grid;grid-template-columns:1fr 1fr;}.wdth.jsx-2434051339{width:75px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWNob1xcRG9jdW1lbnRzXFxIQUxDWU9OXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRTLEFBRzBCLEFBUWdCLEFBR1IsQUFHSCxBQUdMLEFBSUYsV0FDYixFQXJCa0MsQUFpQkYsS0FIaEMseUJBSUEsRUFqQmMsS0FVZCxPQVRrQixTQU1sQixPQUxnQixjQUNRLHNCQUN4QiIsImZpbGUiOiJDOlxcVXNlcnNcXEVjaG9cXERvY3VtZW50c1xcSEFMQ1lPTlxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBnZXQsIHBvc3QsIHB1dCB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9Db250ZXh0XCI7XHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFN0YXRlQ29udGV4dCk7XHJcbiAgY29uc3QgW3Rhc2ssIHNldFRhc2tdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VkaXRUb2dnbGUsIHNldEVkaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJJTklUSUFMX1NUQVRFXCIsIHBheWxvYWQ6IHByb3BzLnRhc2tzIH0pO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBzdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGVkaXRUb2dnbGUpIHtcclxuICAgICAgcHV0KGAvdGFzay8ke3NlbGVjdGVkLmlkfWAsIHtcclxuICAgICAgICB0YXNrX25hbWU6IHRhc2ssXHJcbiAgICAgICAgdGFza19zdGF0dXM6IHNlbGVjdGVkLnRhc2tfc3RhdHVzLFxyXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX1RPRE9cIiwgcGF5bG9hZDogcmVzLmRhdGEgfSk7XHJcbiAgICAgICAgc2V0VGFzayhcIlwiKTtcclxuICAgICAgICBzZXRTZWxlY3RlZChcIlwiKTtcclxuICAgICAgICBzZXRFZGl0KGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwb3N0KFwiL3Rhc2tzXCIsIHsgdGFza19uYW1lOiB0YXNrLCB0YXNrX3N0YXR1czogZmFsc2UgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkFERF9UT0RPXCIsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgICAgIHNldFRhc2soXCJcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgcm93Q2xhc3MgPSAodGFzaykgPT4ge1xyXG4gICAgcmV0dXJuIHNlbGVjdGVkICYmIHRhc2suaWQgPT09IHNlbGVjdGVkLmlkXHJcbiAgICAgID8gXCJ0YWJsZS1pbmZvXCJcclxuICAgICAgOiB0YXNrLnRhc2tfc3RhdHVzXHJcbiAgICAgID8gXCJ0YWJsZS1zdWNjZXNzXCJcclxuICAgICAgOiBcInRhYmxlLXByaW1hcnlcIjtcclxuICB9O1xyXG4gIGNvbnN0IHRleHRTdHlsZSA9ICh0YXNrKSA9PiB7XHJcbiAgICByZXR1cm4gdGFzay50YXNrX3N0YXR1cyA/IFwic3RyaWtlXCIgOiBcImJhc2ljXCI7XHJcbiAgfTtcclxuICBjb25zdCBlZGl0VGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICBzZXRUYXNrKHRhc2sudGFza19uYW1lKTtcclxuICAgIHNldFNlbGVjdGVkKHRhc2spO1xyXG4gICAgc2V0RWRpdCh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGVkaXRPZmYgPSAoKSA9PiB7XHJcbiAgICBzZXRUYXNrKFwiXCIpO1xyXG4gICAgc2V0U2VsZWN0ZWQobnVsbCk7XHJcbiAgICBzZXRFZGl0KGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFzaykgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIkRFTEVURV9UT0RPXCIsIHBheWxvYWQ6IHRhc2sgfSk7XHJcbiAgICBlZGl0T2ZmKCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDg1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDBweCAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN0cmlrZSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJhc2ljIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNlbnRlciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tZ3JpZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC53ZHRoIHtcclxuICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIiBvblN1Ym1pdD17c3VibWl0fT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB3aWR0aD1cIjQ4NXB4XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUYXNrKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgdmFsdWU9e3Rhc2t9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSB0YXNrIGZvciB0b2RheVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBkaXNhYmxlZD17dGFzay5sZW5ndGggPT09IDB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZWRpdFRvZ2dsZSA/IFwiVXBkYXRlXCIgOiBcIkFkZCBUYXNrXCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPjwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgQWN0aW9uc1xyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtzdGF0ZS50YXNrcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIHN0YXRlLnRhc2tzLm1hcCgodGFzaykgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ciBrZXk9e3Rhc2suaWR9IGNsYXNzTmFtZT17cm93Q2xhc3ModGFzayl9PlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGFzay50YXNrX3N0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJET05FX1RPRE9cIiwgcGF5bG9hZDogdGFzayB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt0ZXh0U3R5bGUodGFzayl9Pnt0YXNrLnRhc2tfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2VkaXRUb2dnbGUgJiYgc2VsZWN0ZWQuaWQgPT09IHRhc2suaWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZyB3ZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdE9mZigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWx7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmcgd2R0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRUYXNrKHRhc2spfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFZGl0e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgd2R0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVUYXNrKHRhc2spfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXQoXCIvdGFza3NcIik7XHJcbiAgY29uc3QgdGFza3MgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xyXG4gIHJldHVybiB7IHRhc2tzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Echo\\\\Documents\\\\HALCYON\\\\pages\\\\index.js */"), __jsx("div", {
    className: "jsx-2434051339",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx("form", {
    onSubmit: submit,
    className: "jsx-2434051339" + " " + "input-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("input", {
    width: "485px",
    onChange: function onChange(e) {
      return setTask(e.target.value);
    },
    value: task,
    placeholder: "Enter a task for today",
    className: "jsx-2434051339" + " " + "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }), __jsx("button", {
    disabled: task.length === 0,
    type: "submit",
    className: "jsx-2434051339" + " " + "btn btn-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, editToggle ? "Update" : "Add Task"))), __jsx("table", {
    className: "jsx-2434051339" + " " + "table table-hover",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx("thead", {
    className: "jsx-2434051339",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx("tr", {
    className: "jsx-2434051339",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx("th", {
    scope: "col",
    className: "jsx-2434051339",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }), __jsx("th", {
    scope: "col",
    className: "jsx-2434051339",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, "Description"), __jsx("th", {
    scope: "col",
    className: "jsx-2434051339" + " " + "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "Actions"))), __jsx("tbody", {
    className: "jsx-2434051339",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, state.tasks.length > 0 && state.tasks.map(function (task) {
    return __jsx("tr", {
      key: task.id,
      className: "jsx-2434051339" + " " + (rowClass(task) || ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 15
      }
    }, __jsx("th", {
      scope: "row",
      className: "jsx-2434051339",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
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
      className: "jsx-2434051339",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 19
      }
    })), __jsx("td", {
      className: "jsx-2434051339" + " " + (textStyle(task) || ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }
    }, task.task_name), __jsx("td", {
      className: "jsx-2434051339" + " " + "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-2434051339" + " " + "btn-grid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 19
      }
    }, editToggle && selected.id === task.id ? __jsx("button", {
      onClick: function onClick() {
        return editOff();
      },
      className: "jsx-2434051339" + " " + "btn btn-warning wdth",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 23
      }
    }, "Cancel", " ") : __jsx("button", {
      onClick: function onClick() {
        return editTask(task);
      },
      className: "jsx-2434051339" + " " + "btn btn-warning wdth",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 23
      }
    }, "Edit", " "), __jsx("button", {
      onClick: function onClick() {
        return deleteTask(task);
      },
      className: "jsx-2434051339" + " " + "btn btn-danger wdth",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 21
      }
    }, "Delete"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwidXNlQ29udGV4dCIsIlN0YXRlQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInRhc2siLCJzZXRUYXNrIiwiZWRpdFRvZ2dsZSIsInNldEVkaXQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlRWZmZWN0IiwidHlwZSIsInBheWxvYWQiLCJ0YXNrcyIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1dCIsImlkIiwidGFza19uYW1lIiwidGFza19zdGF0dXMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInBvc3QiLCJyb3dDbGFzcyIsInRleHRTdHlsZSIsImVkaXRUYXNrIiwiZWRpdE9mZiIsImRlbGV0ZVRhc2siLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIm1hcCIsImdldEluaXRpYWxQcm9wcyIsImdldCIsInJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsb0JBQ0tDLHdEQUFVLENBQUNDLDZEQUFELENBRGY7QUFBQSxNQUNmQyxLQURlLGVBQ2ZBLEtBRGU7QUFBQSxNQUNSQyxRQURRLGVBQ1JBLFFBRFE7O0FBQUEsa0JBRUNDLHNEQUFRLENBQUMsRUFBRCxDQUZUO0FBQUEsTUFFaEJDLElBRmdCO0FBQUEsTUFFVkMsT0FGVTs7QUFBQSxtQkFHT0Ysc0RBQVEsQ0FBQyxLQUFELENBSGY7QUFBQSxNQUdoQkcsVUFIZ0I7QUFBQSxNQUdKQyxPQUhJOztBQUFBLG1CQUlTSixzREFBUSxDQUFDLElBQUQsQ0FKakI7QUFBQSxNQUloQkssUUFKZ0I7QUFBQSxNQUlOQyxXQUpNOztBQUt2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RS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Rlg7QUFBQSwwQ0FDWSxxQkFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCRixDQURGLENBWEYsQ0FEYztBQUFBLEdBQWhCLENBRkosQ0FWRixDQS9DRixDQURGO0FBd0dELENBM0pEOztHQUFNUCxLOztLQUFBQSxLO0FBNkpOQSxLQUFLLENBQUNxQyxlQUFOLGlNQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNDQyx3REFBRyxDQUFDLFFBQUQsQ0FESjs7QUFBQTtBQUNoQkMsa0JBRGdCO0FBQUE7QUFBQSxpQkFFRkEsUUFBUSxDQUFDYixJQUZQOztBQUFBO0FBRWhCVixlQUZnQjtBQUFBLDJDQUdmO0FBQUVBLGlCQUFLLEVBQUxBO0FBQUYsV0FIZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQU1laEIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmFmYjc2OTI2MDFlOWMzYTg1NDI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IGdldCwgcG9zdCwgcHV0IH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCB7IFN0YXRlQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L0NvbnRleHRcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KTtcclxuICBjb25zdCBbdGFzaywgc2V0VGFza10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZWRpdFRvZ2dsZSwgc2V0RWRpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIklOSVRJQUxfU1RBVEVcIiwgcGF5bG9hZDogcHJvcHMudGFza3MgfSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZWRpdFRvZ2dsZSkge1xyXG4gICAgICBwdXQoYC90YXNrLyR7c2VsZWN0ZWQuaWR9YCwge1xyXG4gICAgICAgIHRhc2tfbmFtZTogdGFzayxcclxuICAgICAgICB0YXNrX3N0YXR1czogc2VsZWN0ZWQudGFza19zdGF0dXMsXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfVE9ET1wiLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgICAgICBzZXRUYXNrKFwiXCIpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkKFwiXCIpO1xyXG4gICAgICAgIHNldEVkaXQoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBvc3QoXCIvdGFza3NcIiwgeyB0YXNrX25hbWU6IHRhc2ssIHRhc2tfc3RhdHVzOiBmYWxzZSB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQUREX1RPRE9cIiwgcGF5bG9hZDogcmVzLmRhdGEgfSk7XHJcbiAgICAgICAgc2V0VGFzayhcIlwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCByb3dDbGFzcyA9ICh0YXNrKSA9PiB7XHJcbiAgICByZXR1cm4gc2VsZWN0ZWQgJiYgdGFzay5pZCA9PT0gc2VsZWN0ZWQuaWRcclxuICAgICAgPyBcInRhYmxlLWluZm9cIlxyXG4gICAgICA6IHRhc2sudGFza19zdGF0dXNcclxuICAgICAgPyBcInRhYmxlLXN1Y2Nlc3NcIlxyXG4gICAgICA6IFwidGFibGUtcHJpbWFyeVwiO1xyXG4gIH07XHJcbiAgY29uc3QgdGV4dFN0eWxlID0gKHRhc2spID0+IHtcclxuICAgIHJldHVybiB0YXNrLnRhc2tfc3RhdHVzID8gXCJzdHJpa2VcIiA6IFwiYmFzaWNcIjtcclxuICB9O1xyXG4gIGNvbnN0IGVkaXRUYXNrID0gKHRhc2spID0+IHtcclxuICAgIHNldFRhc2sodGFzay50YXNrX25hbWUpO1xyXG4gICAgc2V0U2VsZWN0ZWQodGFzayk7XHJcbiAgICBzZXRFZGl0KHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgZWRpdE9mZiA9ICgpID0+IHtcclxuICAgIHNldFRhc2soXCJcIik7XHJcbiAgICBzZXRTZWxlY3RlZChudWxsKTtcclxuICAgIHNldEVkaXQoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiREVMRVRFX1RPRE9cIiwgcGF5bG9hZDogdGFzayB9KTtcclxuICAgIGVkaXRPZmYoKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0ODVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMHB4IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyaWtlIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmFzaWMge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2VudGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1ncmlkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLndkdGgge1xyXG4gICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiIG9uU3VibWl0PXtzdWJtaXR9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHdpZHRoPVwiNDg1cHhcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRhc2soZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17dGFza31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIHRhc2sgZm9yIHRvZGF5XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXt0YXNrLmxlbmd0aCA9PT0gMH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtlZGl0VG9nZ2xlID8gXCJVcGRhdGVcIiA6IFwiQWRkIFRhc2tcIn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+PC90aD5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICBBY3Rpb25zXHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge3N0YXRlLnRhc2tzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgc3RhdGUudGFza3MubWFwKCh0YXNrKSA9PiAoXHJcbiAgICAgICAgICAgICAgPHRyIGtleT17dGFzay5pZH0gY2xhc3NOYW1lPXtyb3dDbGFzcyh0YXNrKX0+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0YXNrLnRhc2tfc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkRPTkVfVE9ET1wiLCBwYXlsb2FkOiB0YXNrIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3RleHRTdHlsZSh0YXNrKX0+e3Rhc2sudGFza19uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZWRpdFRvZ2dsZSAmJiBzZWxlY3RlZC5pZCA9PT0gdGFzay5pZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nIHdkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0T2ZmKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZyB3ZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdFRhc2sodGFzayl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVkaXR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciB3ZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRhc2sodGFzayl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldChcIi90YXNrc1wiKTtcclxuICBjb25zdCB0YXNrcyA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcbiAgcmV0dXJuIHsgdGFza3MgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9