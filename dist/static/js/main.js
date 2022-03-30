"use strict";
(window["webpackChunkMy_todolist"] = window["webpackChunkMy_todolist"] || []).push([["main"],{

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/todoList */ "./src/components/todoList.jsx");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_af6dacb2e0ca6f75b4843eef0b4234f3/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_af6dacb2e0ca6f75b4843eef0b4234f3/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\hw3\\My_todolist\\src\\App.jsx";
// import { Switch, Route } from '@modern-js/runtime/router';




function App() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_todoList__WEBPACK_IMPORTED_MODULE_0__.TodoList, {
    children: "todos"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, this);
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          false
        ) {}

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              false
            ) {}
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./src/components/todo.jsx":
/*!*********************************!*\
  !*** ./src/components/todo.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Floot": function() { return /* binding */ Floot; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_af6dacb2e0ca6f75b4843eef0b4234f3/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_af6dacb2e0ca6f75b4843eef0b4234f3/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\hw3\\My_todolist\\src\\components\\todo.jsx";

function Floot(props) {
  var donecount = props.donecount,
      count = props.count,
      showstate = props.showstate,
      destroyall = props.destroyall,
      showstate_all = props.showstate_all,
      showstate_active = props.showstate_active,
      showstate_completed = props.showstate_completed;

  if (count != 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: "footer",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "todo-count",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: props.count - props.donecount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "item"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: " left"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "filters",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: props.showstate === 0 ? 'selected' : '',
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            onClick: showstate_all,
            href: "#/",
            children: [' ', "All", ' ']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: props.showstate === 1 ? 'selected' : '',
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            onClick: showstate_active,
            href: "#/",
            children: [' ', "Active", ' ']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: props.showstate === 2 ? 'selected' : '',
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            onClick: showstate_completed,
            href: "#/",
            children: [' ', "Completed", ' ']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "clear-completed",
        onClick: destroyall,
        children: "Clear completed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, this);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 12
    }, this);
  }
}
_c = Floot;

var _c;

__webpack_require__.$Refresh$.register(_c, "Floot");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          false
        ) {}

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              false
            ) {}
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./src/components/todoList.jsx":
/*!*************************************!*\
  !*** ./src/components/todoList.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoList": function() { return /* binding */ TodoList; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/components/todo.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js */ "./node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_af6dacb2e0ca6f75b4843eef0b4234f3/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_af6dacb2e0ca6f75b4843eef0b4234f3/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\hw3\\My_todolist\\src\\components\\todoList.jsx";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var TodoList = /*#__PURE__*/function (_React$Component) {
  _inherits(TodoList, _React$Component);

  var _super = _createSuper(TodoList);

  function TodoList(props) {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _super.call(this, props);

    _this.handleChange = function (e) {
      _this.setState({
        inputVal: e.target.value
      });
    };

    _this.state = {
      inputVal: '',
      donecount: 0,
      count: 0,
      todolist: new Array(0),
      donelist: new Array(0),
      showstate: 0,
      all: false
    };
    _this.addtodo = _this.addtodo.bind(_assertThisInitialized(_this));
    _this.showstate_all = _this.showstate_all.bind(_assertThisInitialized(_this));
    _this.showstate_active = _this.showstate_active.bind(_assertThisInitialized(_this));
    _this.showstate_completed = _this.showstate_completed.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TodoList, [{
    key: "addtodo",
    value: function addtodo(e) {
      console.log(e.keyCode);

      if (e.keyCode === 13) {
        var jug = this.state.inputVal;

        if (jug == '') {} else {
          var num = this.state.count;
          num += 1;
          var todoli = this.state.todolist.slice();
          var doneli = this.state.donelist.slice();
          var word = this.state.inputVal;
          todoli.push(word);
          doneli.push(false);
          this.setState({
            inputVal: '',
            count: num,
            todolist: todoli,
            donelist: doneli
          });
        }
      }
    }
  }, {
    key: "toggleall",
    value: function toggleall() {
      var arr = document.getElementsByClassName('toggle');
      var num = this.state.count;
      var copy1 = this.state.donelist.slice();
      var isdoneall = this.state.all;

      for (var i = 0; i < arr.length; ++i) {
        arr[i].checked = !this.state.all;
      }

      for (var _i = 0; _i < this.state.count; _i++) {
        copy1[_i] = !this.state.all;
      }

      this.setState({
        donelist: copy1,
        all: !isdoneall
      });

      if (this.state.all == false) {
        this.setState({
          donecount: num
        });
      } else {
        this.setState({
          donecount: 0
        });
      }
    }
  }, {
    key: "toggle",
    value: function toggle(index) {
      var copy = this.state.donelist.slice();
      copy[index] = !copy[index];
      var num = this.state.donecount;

      if (copy[index] == 1 && num >= 0) {
        num = num + 1;
      } else {
        num = num - 1;
      }

      this.setState({
        donelist: copy,
        donecount: num
      });
    }
  }, {
    key: "destroyall",
    value: function destroyall() {
      var copy1 = this.state.donelist.slice();
      var copy2 = this.state.todolist.slice();
      var num = this.state.count;

      for (var i = 0; i < this.state.count; ++i) {
        if (copy1[i] === true) {
          copy1.splice(i, 1);
          copy2.splice(i, 1);
          i--;
          num -= 1;
        }
      }

      var arr = document.getElementsByClassName('toggle');

      for (var _i2 = 0; _i2 < arr.length; ++_i2) {
        if (arr[_i2].checked) {
          arr[_i2].checked = false;
        }
      }

      this.setState({
        todolist: copy2,
        donelist: copy1,
        count: num,
        donecount: 0
      });
    }
  }, {
    key: "destroy",
    value: function destroy(index) {
      var copy = this.state.todolist.slice();
      var num = this.state.count;
      num -= 1;
      copy.splice(index, 1);
      this.setState({
        count: num,
        todolist: copy
      });
    }
  }, {
    key: "showstate_all",
    value: function showstate_all() {
      if (this.state.showstate === 0) {} else {
        this.setState({
          showstate: 0
        });
      }
    }
  }, {
    key: "showstate_active",
    value: function showstate_active() {
      if (this.state.showstate === 1) {} else {
        this.setState({
          showstate: 1
        });
      }
    }
  }, {
    key: "showstate_completed",
    value: function showstate_completed() {
      if (this.state.showstate === 2) {} else {
        this.setState({
          showstate: 2
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var arr;

      if (this.state.showstate === 0) {
        arr = this.state.todolist.slice();
      } else if (this.state.showstate === 1) {
        arr = [];

        for (var i = 0; i < this.state.count; ++i) {
          if (this.state.donelist[i] !== true) {
            arr.push(this.state.todolist[i]);
          }
        }
      } else {
        arr = [];

        for (var _i3 = 0; _i3 < this.state.count; ++_i3) {
          if (this.state.donelist[_i3] === true) {
            arr.push(this.state.todolist[_i3]);
          }
        }
      }

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "all",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("section", {
          className: "todoapp",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("header", {
              className: "header",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
                children: this.props.children
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                type: "text",
                className: "new-todo",
                placeholder: "what needs to be done?",
                onKeyDown: this.addtodo,
                onChange: this.handleChange,
                value: this.state.inputVal
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("section", {
              className: "main",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                type: "checkbox",
                id: "toggle-all",
                className: "toggle-all"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                htmlFor: "toggle-all",
                onClick: this.toggleall.bind(this),
                children: "::before"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                className: "todo-list",
                children: arr.map(function (item, index) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                    className: (_this2.state.donelist[index] || _this2.state.showstate == 2) && _this2.state.showstate != 1 ? 'completed' : '',
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                      type: "checkbox",
                      className: "toggle",
                      id: "box".concat(index),
                      checked: (_this2.state.donelist[index] || _this2.state.showstate == 2) && _this2.state.showstate != 1,
                      onClick: _this2.toggle.bind(_this2, index)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 194,
                      columnNumber: 21
                    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                      children: item
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 204,
                      columnNumber: 21
                    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "destroy",
                      onClick: _this2.destroy.bind(_this2, index)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 205,
                      columnNumber: 21
                    }, _this2)]
                  }, index, true, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 19
                  }, _this2);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_todo__WEBPACK_IMPORTED_MODULE_1__.Floot, {
              donecount: this.state.donecount,
              count: this.state.count,
              showstate: this.state.showstate,
              destroyall: this.destroyall.bind(this),
              showstate_all: this.showstate_all,
              showstate_active: this.showstate_active,
              showstate_completed: this.showstate_completed
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("footer", {
          "class": "info",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
              href: "https://github.com/tastejs/todomvc/tree/gh-pages/examples/react",
              children: " Based on this example and fixed it's bug"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 16
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
              href: "https://github.com/sjtuLLWWTT/Todolist_react",
              children: "Visit My Github"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 16
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 7
      }, this);
    }
  }]);

  return TodoList;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          false
        ) {}

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              false
            ) {}
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1648629130165
      var cssReload = __webpack_require__(/*! ./node_modules/.pnpm/mini-css-extract-plugin@2.4.7_webpack@5.70.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.4.7_webpack@5.70.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_pnpm_modern-js_hmr-client_1_2_2_node_modules_modern-js_hmr-client_dist_j-8763f5"], function() { return __webpack_exec__("./node_modules/.pnpm/@modern-js+hmr-client@1.2.2/node_modules/@modern-js/hmr-client/dist/js/node/index.js?&host=localhost&path=/_modern_js_hmr_ws&port=8080"), __webpack_exec__("./node_modules/.pnpm/webpack@5.70.0/node_modules/webpack/hot/dev-server.js"), __webpack_exec__("./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_af6dacb2e0ca6f75b4843eef0b4234f3/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js"), __webpack_exec__("./node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/index.js"), __webpack_exec__("./node_modules/.pnpm/regenerator-runtime@0.13.9/node_modules/regenerator-runtime/runtime.js"), __webpack_exec__("./node_modules/.modern-js/main/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map