/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Tree = /** @class */function () {
    function Tree(data) {
        this._data = data;
    }
    Object.defineProperty(Tree.prototype, "data", {
        /**
         * 返回data
         */
        get: function get() {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tree.prototype, "html", {
        get: function get() {
            return this._tree;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 创建一个树形组件
     */
    Tree.prototype.create = function () {
        var _this = this;
        var ul = this._html().ul;
        this._container = ul;
        ul.className = "tree-container";
        this._data.forEach(function (treeItem) {
            var li = _this._html().li;
            _this._container.appendChild(li);
            li.className = "tree-item";
            li.innerText = treeItem.element;
            li.id = "tree-item-" + treeItem.id;
        }, this);
        this._tree = this._container;
    };
    /**
     * 刷新数据,重新生成一个树
     */
    Tree.prototype.fresh = function (data) {
        this._data = data;
    };
    /**
     * 组件的html部分
     */
    Tree.prototype._html = function () {
        return {
            ul: document.createElement('ul'),
            li: document.createElement('li')
        };
    };
    return Tree;
}();
var data = [{ element: '轮播', id: 2, pid: 1 }, { element: '轮播小图', id: 3, pid: 2 }, { element: '首页', id: 1, pid: 0 }, { element: '轮播大图', id: 4, pid: 2 }, { element: '产品', id: 5, pid: 0 }, { element: '蔬菜', id: 6, pid: 5 }, { element: '有机蔬菜', id: 7, pid: 6 }, { element: '无机蔬菜', id: 8, pid: 6 }, { element: '水果', id: 9, pid: 5 }, { element: '有机水果', id: 10, pid: 9 }, { element: '有机大水果', id: 11, pid: 10 }, { element: '有机小水果', id: 12, pid: 10 }, { element: '无机水果', id: 13, pid: 9 }];
// 单元测试
var tree = new Tree(data);
tree.create();
console.log(tree.html);
console.log(tree.data);

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map