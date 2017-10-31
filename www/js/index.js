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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TreeNode = function TreeNode(node) {
    _classCallCheck(this, TreeNode);

    this.key = node.id;
    this.parent = node.pid;
    this.element = node.element;
    this.children = [];
};

var Tree = function () {
    function Tree(data) {
        _classCallCheck(this, Tree);

        this._data = data;
        this._initTree();
    }

    _createClass(Tree, [{
        key: '_initTree',
        value: function _initTree() {
            var initData = Array.from(this._data);
            var count = 0;
            while (initData.length && count < initData.length) {
                if (this.root) {
                    if (initData[count].pid === this.root.key) {
                        this.root.children.push(new TreeNode(initData[count]));
                    }
                    count++;
                } else {
                    this.root = new TreeNode({ id: 0, pid: -1, element: 'root' });
                }
            }
        }
    }]);

    return Tree;
}();

var data = [{
    element: '轮播',
    id: 2,
    pid: 1
}, {
    element: '轮播小图',
    id: 3,
    pid: 2
}, {
    element: '首页',
    id: 1,
    pid: 0
}, {
    element: '轮播大图',
    id: 4,
    pid: 2
}, {
    element: '产品',
    id: 5,
    pid: 0
}, {
    element: '蔬菜',
    id: 6,
    pid: 5
}, {
    element: '有机蔬菜',
    id: 7,
    pid: 6
}, {
    element: '无机蔬菜',
    id: 8,
    pid: 6
}, {
    element: '水果',
    id: 9,
    pid: 5
}, {
    element: '有机水果',
    id: 10,
    pid: 9
}, {
    element: '有机大水果',
    id: 11,
    pid: 10
}, {
    element: '有机小水果',
    id: 12,
    pid: 10
}, {
    element: '无机水果',
    id: 13,
    pid: 9
}];
// 单元测试 
var tree = new Tree(data);
console.log(tree);

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map