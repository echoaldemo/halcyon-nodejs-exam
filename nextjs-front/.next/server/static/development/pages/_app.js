module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./context/Context.js":
/*!****************************!*\
  !*** ./context/Context.js ***!
  \****************************/
/*! exports provided: StateContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateContext", function() { return StateContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer_Reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer/Reducer */ "./reducer/Reducer.js");
var _jsxFileName = "C:\\Users\\Echo\\Documents\\HALCYON\\context\\Context.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StateContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
let initialState = {
  tasks: []
};

const StateProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducer_Reducer__WEBPACK_IMPORTED_MODULE_1__["default"], initialState);
  return __jsx(StateContext.Provider, {
    value: {
      state,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (StateProvider);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/Context */ "./context/Context.js");
var _jsxFileName = "C:\\Users\\Echo\\Documents\\HALCYON\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import App from 'next/app'


function MyApp({
  Component,
  pageProps
}) {
  return __jsx(_context_Context__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  })));
} // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }


/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./reducer/Reducer.js":
/*!****************************!*\
  !*** ./reducer/Reducer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function reducer(state, action) {
  switch (action.type) {
    case "INITIAL_STATE":
      return _objectSpread(_objectSpread({}, state), {}, {
        tasks: action.payload
      });

    case "ADD_TODO":
      return _objectSpread(_objectSpread({}, state), {}, {
        tasks: [...state.tasks, action.payload]
      });

    case "DONE_TODO":
      const temp = [...state.tasks].map(item => {
        if (item.id === action.payload.id) {
          return _objectSpread(_objectSpread({}, action.payload), {}, {
            task_status: !action.payload.task_status
          });
        } else return item;
      });
      const edited = temp.filter(task => task.id === action.payload.id);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["put"])(`/task/${action.payload.id}`, _objectSpread({}, edited[0]));
      return _objectSpread(_objectSpread({}, state), {}, {
        tasks: [...temp]
      });

    case "UPDATE_TODO":
      const updateTemp = [...state.tasks].map(item => {
        if (item.id === action.payload.id) {
          return _objectSpread(_objectSpread({}, action.payload), {}, {
            task_name: action.payload.task_name
          });
        } else return item;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        tasks: [...updateTemp]
      });

    case "DELETE_TODO":
      const removed = [...state.tasks].filter(task => task.id !== action.payload.id);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["remove"])(`/task/${action.payload.id}`);
      return _objectSpread(_objectSpread({}, state), {}, {
        tasks: [...removed]
      });
  }
}

/***/ }),

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! exports provided: get, put, post, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "put", function() { return put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseUrl = "http://localhost:3333/api";

const get = (endpoint, data) => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${baseUrl}${endpoint}`, data);

const post = (endpoint, data) => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${baseUrl}${endpoint}`, data);

const put = (endpoint, data) => axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${baseUrl}${endpoint}`, data);

const remove = (endpoint, data) => axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${baseUrl}${endpoint}`, data);



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9Db250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlci9SZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwidGFza3MiLCJTdGF0ZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwidGVtcCIsIm1hcCIsIml0ZW0iLCJpZCIsInRhc2tfc3RhdHVzIiwiZWRpdGVkIiwiZmlsdGVyIiwidGFzayIsInB1dCIsInVwZGF0ZVRlbXAiLCJ0YXNrX25hbWUiLCJyZW1vdmVkIiwicmVtb3ZlIiwiYmFzZVVybCIsImdldCIsImVuZHBvaW50IiwiZGF0YSIsImF4aW9zIiwicG9zdCIsImRlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMv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Q08sUUFBRCxFQUFXQyxJQUFYLEtBQW9CQyw0Q0FBSyxDQUFDVCxHQUFOLENBQVcsR0FBRUssT0FBUSxHQUFFRSxRQUFTLEVBQWhDLEVBQW1DQyxJQUFuQyxDQUFoQzs7QUFDQSxNQUFNSixNQUFNLEdBQUcsQ0FBQ0csUUFBRCxFQUFXQyxJQUFYLEtBQW9CQyw0Q0FBSyxDQUFDRSxNQUFOLENBQWMsR0FBRU4sT0FBUSxHQUFFRSxRQUFTLEVBQW5DLEVBQXNDQyxJQUF0QyxDQUFuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlci9SZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxubGV0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB0YXNrczogW10sXHJcbn07XHJcblxyXG5jb25zdCBTdGF0ZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXRlUHJvdmlkZXI7XHJcbiIsIi8vIGltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCBTdGF0ZVByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0L0NvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3RhdGVQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9TdGF0ZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIE9ubHkgdW5jb21tZW50IHRoaXMgbWV0aG9kIGlmIHlvdSBoYXZlIGJsb2NraW5nIGRhdGEgcmVxdWlyZW1lbnRzIGZvclxyXG4vLyBldmVyeSBzaW5nbGUgcGFnZSBpbiB5b3VyIGFwcGxpY2F0aW9uLiBUaGlzIGRpc2FibGVzIHRoZSBhYmlsaXR5IHRvXHJcbi8vIHBlcmZvcm0gYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24sIGNhdXNpbmcgZXZlcnkgcGFnZSBpbiB5b3VyIGFwcCB0b1xyXG4vLyBiZSBzZXJ2ZXItc2lkZSByZW5kZXJlZC5cclxuLy9cclxuLy8gTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGFwcENvbnRleHQpID0+IHtcclxuLy8gICAvLyBjYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXHJcbi8vICAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xyXG4vL1xyXG4vLyAgIHJldHVybiB7IC4uLmFwcFByb3BzIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImltcG9ydCB7IHJlbW92ZSwgcHV0IH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJJTklUSUFMX1NUQVRFXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGFza3M6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIkFERF9UT0RPXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGFza3M6IFsuLi5zdGF0ZS50YXNrcywgYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIkRPTkVfVE9ET1wiOlxyXG4gICAgICBjb25zdCB0ZW1wID0gWy4uLnN0YXRlLnRhc2tzXS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICB0YXNrX3N0YXR1czogIWFjdGlvbi5wYXlsb2FkLnRhc2tfc3RhdHVzLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIGl0ZW07XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBlZGl0ZWQgPSB0ZW1wLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpO1xyXG4gICAgICBwdXQoYC90YXNrLyR7YWN0aW9uLnBheWxvYWQuaWR9YCwgeyAuLi5lZGl0ZWRbMF0gfSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGFza3M6IFsuLi50ZW1wXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJVUERBVEVfVE9ET1wiOlxyXG4gICAgICBjb25zdCB1cGRhdGVUZW1wID0gWy4uLnN0YXRlLnRhc2tzXS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICB0YXNrX25hbWU6IGFjdGlvbi5wYXlsb2FkLnRhc2tfbmFtZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHJldHVybiBpdGVtO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0YXNrczogWy4uLnVwZGF0ZVRlbXBdLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIkRFTEVURV9UT0RPXCI6XHJcbiAgICAgIGNvbnN0IHJlbW92ZWQgPSBbLi4uc3RhdGUudGFza3NdLmZpbHRlcihcclxuICAgICAgICAodGFzaykgPT4gdGFzay5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgKTtcclxuICAgICAgcmVtb3ZlKGAvdGFzay8ke2FjdGlvbi5wYXlsb2FkLmlkfWApO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRhc2tzOiBbLi4ucmVtb3ZlZF0sXHJcbiAgICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9hcGlcIjtcclxuXHJcbmNvbnN0IGdldCA9IChlbmRwb2ludCwgZGF0YSkgPT4gYXhpb3MuZ2V0KGAke2Jhc2VVcmx9JHtlbmRwb2ludH1gLCBkYXRhKTtcclxuY29uc3QgcG9zdCA9IChlbmRwb2ludCwgZGF0YSkgPT4gYXhpb3MucG9zdChgJHtiYXNlVXJsfSR7ZW5kcG9pbnR9YCwgZGF0YSk7XHJcbmNvbnN0IHB1dCA9IChlbmRwb2ludCwgZGF0YSkgPT4gYXhpb3MucHV0KGAke2Jhc2VVcmx9JHtlbmRwb2ludH1gLCBkYXRhKTtcclxuY29uc3QgcmVtb3ZlID0gKGVuZHBvaW50LCBkYXRhKSA9PiBheGlvcy5kZWxldGUoYCR7YmFzZVVybH0ke2VuZHBvaW50fWAsIGRhdGEpO1xyXG5leHBvcnQgeyBnZXQsIHB1dCwgcG9zdCwgcmVtb3ZlIH07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=