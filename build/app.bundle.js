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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mas = exports.ctx = exports.canvas = undefined;
exports.goLife = goLife;
exports.pauseLife = pauseLife;
exports.continueLife = continueLife;

var _controler = __webpack_require__(1);

var _view = __webpack_require__(2);

var canvas = exports.canvas = document.getElementById('c1');
var ctx = exports.ctx = canvas.getContext('2d');
var mas = exports.mas = [];
var count = 0;
var timer;

var mas2 = [];
timer = setInterval(startLife, 500);
clearInterval(timer);
function goLife() {

    for (var i = 0; i < _controler.sliderHeight.value / 10; i++) {
        mas[i] = [];
        for (var j = 0; j < _controler.sliderWidth.value / 10; j++) {
            mas[i][j] = 0;
        }
    }
    count = 0;
    console.log(mas);
}
goLife();

function rulesCheck() {
    //проверка правил игры
    mas2 = [];
    for (var i = 0; i < _controler.sliderHeight.value / 10; i++) {
        mas2[i] = [];
        for (var j = 0; j < _controler.sliderWidth.value / 10; j++) {
            var neighbors = 0;
            if (mas[checkTop(i) - 1][j] == 1) neighbors++; //top
            if (mas[i][checkRight(j) + 1] == 1) neighbors++; //right
            if (mas[checkBottom(i) + 1][j] == 1) neighbors++; //bottom
            if (mas[i][checkLeft(j) - 1] == 1) neighbors++; //left
            if (mas[checkTop(i) - 1][checkRight(j) + 1] == 1) neighbors++; //top right
            if (mas[checkBottom(i) + 1][checkRight(j) + 1] == 1) neighbors++; //bottom right
            if (mas[checkBottom(i) + 1][checkLeft(j) - 1] == 1) neighbors++; //bottom left
            if (mas[checkTop(i) - 1][checkLeft(j) - 1] == 1) neighbors++; //top left
            if (mas[i][j] == 1) {
                neighbors == 2 || neighbors == 3 ? mas2[i][j] = 1 : mas2[i][j] == 0;
            } else {
                if (neighbors == 3) {
                    mas2[i][j] = 1;
                } else {
                    mas2[i][j] = 0;
                }
            }
        }
    }
}

function startLife() {
    rulesCheck();
    exports.mas = mas = mas2;
    (0, _view.drawField)();
    count++;
    document.getElementById('count').innerHTML = count;
}

function checkLeft(i) {
    if (i == 0) return _controler.sliderWidth.value / 10;else return i;
}

function checkRight(i) {
    if (i == _controler.sliderWidth.value / 10 - 1) return -1;else return i;
}

function checkTop(i) {
    if (i == 0) return _controler.sliderHeight.value / 10;else return i;
}

function checkBottom(i) {
    if (i == _controler.sliderHeight.value / 10 - 1) return -1;else return i;
}

function pauseLife() {
    clearInterval(timer);
}

function continueLife() {
    timer = setInterval(startLife, 500);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sliderHeight = exports.sliderWidth = undefined;

var _model = __webpack_require__(0);

var _view = __webpack_require__(2);

var sliderWidth = exports.sliderWidth = document.getElementById("rangeWidth");
var sliderHeight = exports.sliderHeight = document.getElementById("rangeHeight");


window.onload = function () {
    _model.canvas.onclick = function (event) {
        var x = event.offsetX;
        var y = event.offsetY;
        x = Math.floor(x / 10);
        y = Math.floor(y / 10);
        if (_model.mas[y][x] == 0) {
            _model.mas[y][x] = 1;
        } else {
            _model.mas[y][x] = 0;
        }
        (0, _view.drawField)();
        console.log(_model.mas);
    };
};

sliderWidth.oninput = function () {
    _model.canvas.style.width = this.value + 'px';
    _model.canvas.width = sliderWidth.value;
    (0, _model.goLife)();
};

sliderHeight.oninput = function () {
    _model.canvas.style.height = this.value + 'px';
    _model.canvas.height = sliderHeight.value;
    (0, _model.goLife)();
};

document.getElementById('start').onclick = function () {
    _model.canvas.style.width = sliderWidth.value;
    _model.canvas.style.height = sliderHeight.value;
    (0, _model.continueLife)();
    document.getElementById('start').setAttribute('hidden', 'hidden');
    sliderHeight.setAttribute('hidden', 'hidden');
    sliderWidth.setAttribute('hidden', 'hidden');
    document.getElementById('pause').removeAttribute('hidden');
};
document.getElementById('pause').onclick = function () {
    document.getElementById('start').removeAttribute('hidden');
    (0, _model.pauseLife)();
    document.getElementById('pause').setAttribute('hidden', 'hidden');
};
document.getElementById('restart').onclick = function () {
    (0, _view.clearField)();
    document.getElementById('start').removeAttribute('hidden');
    sliderHeight.removeAttribute('hidden');
    sliderWidth.removeAttribute('hidden');
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.drawField = drawField;
exports.clearField = clearField;

var _model = __webpack_require__(0);

var _controler = __webpack_require__(1);

function drawField() {
    _model.ctx.clearRect(0, 0, _controler.sliderWidth.value, _controler.sliderHeight.value);
    for (var i = 0; i < _controler.sliderHeight.value / 10; i++) {
        for (var j = 0; j < _controler.sliderWidth.value / 10; j++) {
            if (_model.mas[i][j] == 1) {
                _model.ctx.fillRect(j * 10, i * 10, 10, 10);
            }
        }
    }
}

function clearField() {
    (0, _model.pauseLife)();
    (0, _model.goLife)();
    drawField();

    document.getElementById('count').firstChild.nodeValue = _model.count;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

__webpack_require__(0);

__webpack_require__(1);

__webpack_require__(2);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);