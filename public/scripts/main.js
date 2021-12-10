/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/events.js":
/*!**************************!*\
  !*** ./source/events.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Events": () => (/* binding */ Events)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Events = /*#__PURE__*/function () {
  function Events() {
    _classCallCheck(this, Events);

    this.queue = [];
  }

  _createClass(Events, [{
    key: "initialize",
    value: function initialize(canvas) {
      var _this = this;

      window.addEventListener('resize', function (e) {
        return _this.onWindowResize(e);
      });
      window.addEventListener('keypress', function (e) {
        return _this.onWindowKeypress(e);
      });
      canvas.addEventListener('click', function (e) {
        return _this.onMouseClick(e);
      });
      canvas.addEventListener('mousemove', function (e) {
        return _this.onMouseMove(e);
      });
      this.enqueueResizeEvent(window.innerWidth, window.innerHeight);
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(e) {
      this.enqueueMouseMoveEvent(e);
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize(e) {
      this.enqueueResizeEvent(e.target.innerWidth, e.target.innerHeight);
    }
  }, {
    key: "onWindowKeypress",
    value: function onWindowKeypress(e) {
      if (e.code === 'Space') this.enqueueTogglePauseEvent();
    }
  }, {
    key: "onMouseClick",
    value: function onMouseClick(e) {
      this.enqueueMouseClickEvent(e);
    }
  }, {
    key: "enqueueTogglePauseEvent",
    value: function enqueueTogglePauseEvent() {
      this.queue.push({
        type: 'pause'
      });
    }
  }, {
    key: "enqueueResizeEvent",
    value: function enqueueResizeEvent(newWidth, newHeight) {
      this.queue.push({
        type: 'resize',
        width: newWidth,
        height: newHeight
      });
    }
  }, {
    key: "enqueueTickEvent",
    value: function enqueueTickEvent(timeDiff) {
      this.queue.push({
        type: 'tick',
        timeDiff: timeDiff
      });
    }
  }, {
    key: "enqueueFrameEvent",
    value: function enqueueFrameEvent(timeDiff) {
      this.queue.push({
        type: 'frame',
        timeDiff: timeDiff
      });
    }
  }, {
    key: "enqueueMouseClickEvent",
    value: function enqueueMouseClickEvent(e) {
      this.queue.push({
        type: 'click',
        x: e.clientX,
        y: e.clientY
      });
    }
  }, {
    key: "enqueueMouseMoveEvent",
    value: function enqueueMouseMoveEvent(e) {
      this.queue.push({
        type: 'move',
        x: e.clientX,
        y: e.clientY
      });
    }
  }, {
    key: "onResize",
    value: function onResize(callback) {
      this.invoke('resize', callback);
    }
  }, {
    key: "onTick",
    value: function onTick(callback) {
      this.invoke('tick', callback);
    }
  }, {
    key: "onFrame",
    value: function onFrame(callback) {
      this.invoke('frame', callback);
    }
  }, {
    key: "onTogglePause",
    value: function onTogglePause(callback) {
      this.invoke('pause', callback);
    }
  }, {
    key: "onClick",
    value: function onClick(callback) {
      this.invoke('click', callback);
    }
  }, {
    key: "onMove",
    value: function onMove(callback) {
      this.invoke('move', callback);
    }
  }, {
    key: "invoke",
    value: function invoke(eventType, handler) {
      var events = this.queue.filter(function (e) {
        return e.type === eventType;
      });

      var _iterator = _createForOfIteratorHelper(events),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var event = _step.value;
          handler(event);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.queue = [];
    }
  }]);

  return Events;
}();

/***/ }),

/***/ "./source/fluid.js":
/*!*************************!*\
  !*** ./source/fluid.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fluid": () => (/* binding */ Fluid)
/* harmony export */ });
/* harmony import */ var _substance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./substance */ "./source/substance.js");
/* harmony import */ var _mathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mathUtils */ "./source/mathUtils.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Fluid = /*#__PURE__*/function () {
  function Fluid() {
    _classCallCheck(this, Fluid);

    this.substances = [];
  }

  _createClass(Fluid, [{
    key: "update",
    value: function update(game) {
      var _iterator = _createForOfIteratorHelper(this.substances),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var substance = _step.value;
          substance.update(game);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "render",
    value: function render(game) {
      var context = game.context,
          viewport = game.viewport;
      context.save();
      var clipRect = new Path2D();
      clipRect.rect(viewport.left, viewport.top, viewport.width, viewport.height);
      context.clip(clipRect);

      var _iterator2 = _createForOfIteratorHelper(this.substances),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var substance = _step2.value;
          substance.render(game);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      context.restore();
    }
  }, {
    key: "addSubstance",
    value: function addSubstance(x, y, amount) {
      this.substances.push(new _substance__WEBPACK_IMPORTED_MODULE_0__.Substance(x, y, amount));
    }
  }, {
    key: "removeSubstance",
    value: function removeSubstance(substance) {
      this.substances = this.substances.filter(function (s) {
        return s !== substance;
      });
    }
  }, {
    key: "consumeSubstancesAt",
    value: function consumeSubstancesAt(game, x, y) {
      var _this = this;

      return this.substances.map(function (s) {
        return _this.consumeSubstanceAt(game, s, x, y);
      }).reduce(function (a, b) {
        return a + b;
      }, 0);
    }
  }, {
    key: "consumeSubstanceAt",
    value: function consumeSubstanceAt(game, substance, x, y) {
      var amount = this.getConcentration(substance, x, y);
      substance.subtract(game, amount);
      return amount;
    }
  }, {
    key: "getConcentration",
    value: function getConcentration(substance, x, y) {
      if (substance.area <= 0) return 0;
      var dist = _mathUtils__WEBPACK_IMPORTED_MODULE_1__.MathUtils.dist(x, substance.x, y, substance.y);
      if (dist > substance.area) return 0;
      return substance.concentration;
    }
  }, {
    key: "getTotalConcentration",
    value: function getTotalConcentration(x, y) {
      var _this2 = this;

      return this.substances.map(function (s) {
        return _this2.getConcentration(s, x, y);
      }).reduce(function (a, b) {
        return a + b;
      }, 0);
    }
  }]);

  return Fluid;
}();

/***/ }),

/***/ "./source/fps.js":
/*!***********************!*\
  !*** ./source/fps.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FPS": () => (/* binding */ FPS)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FPS = /*#__PURE__*/function () {
  function FPS() {
    _classCallCheck(this, FPS);

    this.fps = 0;
    this.frames = 0;
  }

  _createClass(FPS, [{
    key: "update",
    value: function update(game) {
      var _this = this;

      this.frames += 1;
      game.events.onTick(function (e) {
        return _this.updateFps(e.timeDiff);
      });
    }
  }, {
    key: "updateFps",
    value: function updateFps(timeDiff) {
      this.fps = Math.ceil(1000 / timeDiff * this.frames);
      this.frames = 0;
    }
  }, {
    key: "render",
    value: function render(game) {
      var context = game.context;
      context.fillStyle = 'black';
      context.font = '10px sans-serif';
      context.fillText('FPS: ' + this.fps, 3, 10);
    }
  }]);

  return FPS;
}();

/***/ }),

/***/ "./source/game.js":
/*!************************!*\
  !*** ./source/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewport */ "./source/viewport.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./source/events.js");
/* harmony import */ var _fps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fps */ "./source/fps.js");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./world */ "./source/world.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer */ "./source/timer.js");
/* harmony import */ var _probe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./probe */ "./source/probe.js");
/* harmony import */ var _statsDisplay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statsDisplay */ "./source/statsDisplay.js");
/* harmony import */ var _populationGraph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./populationGraph */ "./source/populationGraph.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var Game = /*#__PURE__*/function () {
  function Game(canvas) {
    _classCallCheck(this, Game);

    this.events = new _events__WEBPACK_IMPORTED_MODULE_1__.Events();
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.viewport = new _viewport__WEBPACK_IMPORTED_MODULE_0__.Viewport();
    this.world = new _world__WEBPACK_IMPORTED_MODULE_3__.World();
    this.timer = new _timer__WEBPACK_IMPORTED_MODULE_4__.Timer();
    this.fps = new _fps__WEBPACK_IMPORTED_MODULE_2__.FPS();
    this.probe = new _probe__WEBPACK_IMPORTED_MODULE_5__.Probe();
    this.populationGraph = new _populationGraph__WEBPACK_IMPORTED_MODULE_7__.PopulationGraph();
    this.statsDisplay = new _statsDisplay__WEBPACK_IMPORTED_MODULE_6__.StatsDisplay();
    this.paused = false;
  }

  _createClass(Game, [{
    key: "initialize",
    value: function initialize() {
      this.events.initialize(this.canvas);
      this.nextFrame();
    }
  }, {
    key: "run",
    value: function run() {
      this.update();
      this.render();
      this.nextFrame();
    }
  }, {
    key: "update",
    value: function update() {
      var _this = this;

      this.events.onTogglePause(function () {
        return _this.paused = !_this.paused;
      });
      this.viewport.update(this);
      this.timer.update(this);
      this.fps.update(this);
      this.world.update(this);
      this.populationGraph.update(this);
      this.probe.update(this);
      this.statsDisplay.update(this);
      this.events.clear();
    }
  }, {
    key: "render",
    value: function render() {
      this.viewport.render(this);
      this.timer.render(this);
      this.world.render(this);
      this.fps.render(this);
      this.populationGraph.render(this);
      this.probe.render(this);
      this.statsDisplay.render(this);
    }
  }, {
    key: "nextFrame",
    value: function nextFrame() {
      var _this2 = this;

      window.requestAnimationFrame(function () {
        return _this2.run();
      });
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./source/mathUtils.js":
/*!*****************************!*\
  !*** ./source/mathUtils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MathUtils": () => (/* binding */ MathUtils)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MathUtils = /*#__PURE__*/function () {
  function MathUtils() {
    _classCallCheck(this, MathUtils);
  }

  _createClass(MathUtils, null, [{
    key: "dist",
    value: function dist(x1, x2, y1, y2) {
      var dx = x2 - x1;
      var dy = y2 - y1; //return 1 / Q_rsqrt(dx * dx + dy * dy);

      return Math.sqrt(dx * dx + dy * dy);
    }
  }]);

  return MathUtils;
}();

function Q_rsqrt(number) {
  var i;
  var x2, y;
  var threehalfs = 1.5;
  x2 = number * 0.5;
  y = number;
  var buf = new ArrayBuffer(4);
  new Float32Array(buf)[0] = number;
  i = new Uint32Array(buf)[0];
  i = 0x5f3759df - (i >> 1); //What the fuck?

  new Uint32Array(buf)[0] = i;
  y = new Float32Array(buf)[0];
  y = y * (threehalfs - x2 * y * y); // 1st iteration

  return y;
}

/***/ }),

/***/ "./source/populationGraph.js":
/*!***********************************!*\
  !*** ./source/populationGraph.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopulationGraph": () => (/* binding */ PopulationGraph)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PopulationGraph = /*#__PURE__*/function () {
  function PopulationGraph() {
    _classCallCheck(this, PopulationGraph);

    this.points = [];
    this.maxPoints = 100;
    this.width = 200;
    this.height = 40;
    this.top = 15;
    this.left = 3;
  }

  _createClass(PopulationGraph, [{
    key: "update",
    value: function update(game) {
      var _this = this;

      var events = game.events;
      events.onFrame(function () {
        return _this.updateGraph(game.world);
      });
    }
  }, {
    key: "updateGraph",
    value: function updateGraph(world) {
      this.points.push(world.species.length);
      if (this.points.length > this.maxPoints) this.points.shift();
    }
  }, {
    key: "render",
    value: function render(game) {
      var context = game.context;
      var maxValue = Math.max.apply(Math, _toConsumableArray(this.points));
      var minValue = Math.min.apply(Math, _toConsumableArray(this.points));
      var avgValue = this.points.reduce(function (a, b) {
        return a + b;
      }, 0) / this.points.length;
      var vScale = this.height / (maxValue - minValue);
      var hScale = this.width / this.maxPoints;
      var bottom = this.top + this.height;
      context.font = '8px sans-serif';
      context.fillStyle = 'rgba(0, 0, 0, 0.5)';
      context.fillText(maxValue, this.left + 1, this.top + 10);
      context.fillText(minValue, this.left + 1, bottom - 2);
      context.fillText(Math.ceil(avgValue), this.left + 1, this.top + this.height / 2 + 4);
      context.beginPath();

      for (var i = 0; i < this.points.length; i++) {
        context.moveTo(this.left + i * hScale, bottom);
        context.lineTo(this.left + i * hScale, bottom - (this.points[i] - minValue) * vScale);
      }

      context.strokeStyle = 'rgba(0, 0, 0, 0.2)';
      context.stroke();
    }
  }]);

  return PopulationGraph;
}();

/***/ }),

/***/ "./source/probe.js":
/*!*************************!*\
  !*** ./source/probe.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Probe": () => (/* binding */ Probe)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Probe = /*#__PURE__*/function () {
  function Probe() {
    _classCallCheck(this, Probe);

    this.x = 0;
    this.y = 0;
    this.location = {
      x: 0,
      y: 0
    };
    this.enabled = false;
  }

  _createClass(Probe, [{
    key: "update",
    value: function update(game) {
      var _this = this;

      if (!this.enabled) return;
      this.concentration = this.getConcentration(game).toFixed(4);
      game.events.onMove(function (e) {
        if (!game.viewport.contains(e.x, e.y)) return;
        _this.x = e.x;
        _this.y = e.y;
        _this.location = game.world.toGame(game, _this.x, _this.y);
      });
    }
  }, {
    key: "render",
    value: function render(game) {
      if (!this.enabled) return;
      var context = game.context;
      context.fillStyle = 'rgba(0, 0, 0, 0.5)';
      context.fillText(this.concentration, this.x + 2, this.y - 2);
      context.strokeStyle = 'black';
      context.beginPath();
      context.moveTo(this.x, this.y - 5);
      context.lineTo(this.x, this.y + 5);
      context.moveTo(this.x - 5, this.y);
      context.lineTo(this.x + 5, this.y);
      context.stroke();
    }
  }, {
    key: "getConcentration",
    value: function getConcentration(game) {
      var _this$location = this.location,
          x = _this$location.x,
          y = _this$location.y;
      return game.world.fluid.getTotalConcentration(x, y);
    }
  }]);

  return Probe;
}();

/***/ }),

/***/ "./source/species/bacteria.js":
/*!************************************!*\
  !*** ./source/species/bacteria.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bacteria": () => (/* binding */ Bacteria)
/* harmony export */ });
/* harmony import */ var _neurons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neurons */ "./source/species/neurons.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Bacteria = /*#__PURE__*/function () {
  function Bacteria(x, y, generation) {
    _classCallCheck(this, Bacteria);

    this.x = x;
    this.y = y;
    this.age = 0;
    this.isSelected = false;
    this.lifetime = 1 + Math.ceil(Math.random() * 10);
    this.reproductionAge = 5;
    this.movementNeuron = new _neurons__WEBPACK_IMPORTED_MODULE_0__.RandomMovementNeuron();
    this.regenerationRate = 0.0001;
    this.poisonConsumed = 0;
    this.maxPoisoning = 6;
    this.generation = generation;
  }

  _createClass(Bacteria, [{
    key: "update",
    value: function update(game) {
      var _this = this;

      var world = game.world,
          events = game.events;
      events.onFrame(function (e) {
        _this.updatePosition(world, e.timeDiff);

        _this.consumeSubstance(game);
      });
      events.onTick(function (e) {
        return _this.heartbeat(game, e.timeDiff);
      });
    }
  }, {
    key: "heartbeat",
    value: function heartbeat(game, timeDiff) {
      this.updateAge(game.world);
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(world, timeDiff) {
      var _this$movementNeuron$ = this.movementNeuron.nextPosition(world, this, timeDiff),
          x = _this$movementNeuron$.x,
          y = _this$movementNeuron$.y;

      this.x = x;
      this.y = y;
    }
  }, {
    key: "updateAge",
    value: function updateAge(world) {
      this.age += 1;

      if (this.age >= this.lifetime) {
        this.die(world);
      } else if (this.age >= this.reproductionAge) {
        this.reproduce(world);
      }
    }
  }, {
    key: "consumeSubstance",
    value: function consumeSubstance(game) {
      var amount = game.world.fluid.consumeSubstancesAt(game, this.x, this.y);
      this.poisonConsumed += amount;
    }
  }, {
    key: "reproduce",
    value: function reproduce(world) {
      if (world.species.length > world.maxPopulation) return;
      if (this.poisonConsumed > this.maxPoisoning) return;
      var offspring1 = new Bacteria(this.x, this.y, this.generation + 1);
      var offspring2 = new Bacteria(this.x, this.y, this.generation + 1);
      world.addSpecies(offspring1);
      world.addSpecies(offspring2);
      world.removeSpecies(this);
    }
  }, {
    key: "die",
    value: function die(world) {
      world.addSubstance(this.x, this.y, 20);
      world.removeSpecies(this);
    }
  }, {
    key: "render",
    value: function render(game) {
      var context = game.context,
          world = game.world;
      var location = world.toScreen(game, this.x, this.y);
      var scaleX = world.getScaleX(game);
      var scaleY = world.getScaleY(game);
      context.beginPath();
      context.fillStyle = 'black';
      if (this.isSelected) context.fillStyle = 'cyan';
      context.arc(location.x, location.y, scaleX / 2, 0, 2 * Math.PI);
      context.fill();
    }
  }]);

  return Bacteria;
}();

/***/ }),

/***/ "./source/species/neurons.js":
/*!***********************************!*\
  !*** ./source/species/neurons.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RandomMovementNeuron": () => (/* binding */ RandomMovementNeuron),
/* harmony export */   "LeftMovementNeuron": () => (/* binding */ LeftMovementNeuron)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MovementNeuron = /*#__PURE__*/function () {
  function MovementNeuron() {
    _classCallCheck(this, MovementNeuron);

    this.speed = 10;
  }

  _createClass(MovementNeuron, [{
    key: "getDistance",
    value: function getDistance(timeDiff) {
      return timeDiff / 1000 * this.speed;
    }
  }, {
    key: "restrict",
    value: function restrict(world, x, y) {
      if (x < 0) x = 0;
      if (y < 0) y = 0;
      if (x >= world.width - 1) x = world.width - 1;
      if (y >= world.height - 1) y = world.height - 1;
      return {
        x: x,
        y: y
      };
    }
  }]);

  return MovementNeuron;
}();

var RandomMovementNeuron = /*#__PURE__*/function (_MovementNeuron) {
  _inherits(RandomMovementNeuron, _MovementNeuron);

  var _super = _createSuper(RandomMovementNeuron);

  function RandomMovementNeuron() {
    var _this;

    _classCallCheck(this, RandomMovementNeuron);

    _this = _super.call(this);
    _this.direction = Math.random() * 2 * Math.PI;
    return _this;
  }

  _createClass(RandomMovementNeuron, [{
    key: "nextPosition",
    value: function nextPosition(world, bacteria, timeDiff) {
      this.updateDirection();
      var distance = this.getDistance(timeDiff);
      var x = bacteria.x + Math.cos(this.direction) * distance;
      var y = bacteria.y + Math.sin(this.direction) * distance;
      return this.restrict(world, x, y);
    }
  }, {
    key: "updateDirection",
    value: function updateDirection() {
      var changeProb = Math.random();
      if (changeProb > 0.95) this.direction = Math.random() * 2 * Math.PI;else if (changeProb > 0.5) this.direction += (Math.random() - 0.5) * Math.PI * 0.2;
    }
  }]);

  return RandomMovementNeuron;
}(MovementNeuron);
var LeftMovementNeuron = /*#__PURE__*/function (_MovementNeuron2) {
  _inherits(LeftMovementNeuron, _MovementNeuron2);

  var _super2 = _createSuper(LeftMovementNeuron);

  function LeftMovementNeuron() {
    _classCallCheck(this, LeftMovementNeuron);

    return _super2.call(this);
  }

  _createClass(LeftMovementNeuron, [{
    key: "nextPosition",
    value: function nextPosition(world, bacteria, timeDiff) {
      var distance = this.getDistance(timeDiff);
      return this.restrict(world, bacteria.x - distance, bacteria.y);
    }
  }]);

  return LeftMovementNeuron;
}(MovementNeuron);

/***/ }),

/***/ "./source/statsDisplay.js":
/*!********************************!*\
  !*** ./source/statsDisplay.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsDisplay": () => (/* binding */ StatsDisplay)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StatsDisplay = /*#__PURE__*/function () {
  function StatsDisplay() {
    _classCallCheck(this, StatsDisplay);

    this.left = 2;
    this.top = 70;
  }

  _createClass(StatsDisplay, [{
    key: "update",
    value: function update(game) {}
  }, {
    key: "render",
    value: function render(game) {
      var context = game.context;
      var top = this.top;
      context.fillStyle = 'black';
      context.font = "10px Arial";
      context.textAlign = 'left';
      var generations = game.world.species.map(function (s) {
        return s.generation;
      });
      context.fillText('Species: ' + game.world.species.length, this.left, top);
      if (generations.length) context.fillText('Generations: ' + Math.min.apply(Math, _toConsumableArray(generations)) + '-' + Math.max.apply(Math, _toConsumableArray(generations)), this.left, top += 12);
      var bacteria = game.world.selectedSpecies;
      if (!game.world.selectedSpecies) return;
      context.fillText('Age: ' + bacteria.age, this.left, top += 12);
      context.fillText('Lifetime: ' + bacteria.lifetime, this.left, top += 12);
      context.fillText('Poisoning: ' + bacteria.poisonConsumed, this.left, top += 12);
      context.fillText('Generation: ' + bacteria.generation, this.left, top += 12);
    }
  }]);

  return StatsDisplay;
}();

/***/ }),

/***/ "./source/substance.js":
/*!*****************************!*\
  !*** ./source/substance.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Substance": () => (/* binding */ Substance)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Substance = /*#__PURE__*/function () {
  function Substance(x, y, amount) {
    _classCallCheck(this, Substance);

    this.x = x;
    this.y = y;
    this.area = 0.5;
    this.spreadRate = 0.01;
    this.dissolveRate = 0.01;
    this.amount = amount;
    this.minAmount = 0.01;
    this.concentrationFactor = this.amount / this.area;
    this.concentration = this.amount / this.area / this.concentrationFactor;
  }

  _createClass(Substance, [{
    key: "update",
    value: function update(game) {
      var _this = this;

      game.events.onFrame(function (e) {
        return _this.spread(game, e.timeDiff);
      });
    }
  }, {
    key: "spread",
    value: function spread(game, timeDiff) {
      if (this.amount <= this.minAmount) {
        game.world.removeSubstance(this);
        return;
      }

      this.area += this.spreadRate * timeDiff;
      this.amount -= this.dissolveRate * timeDiff;
      this.concentration = this.amount / this.area / this.concentrationFactor;
    }
  }, {
    key: "subtract",
    value: function subtract(game, amount) {
      this.amount -= amount;
      this.concentration = this.amount / this.area / this.concentrationFactor;

      if (this.amount <= this.minAmount) {
        game.world.removeSubstance(this);
        return;
      }
    }
  }, {
    key: "render",
    value: function render(game) {
      var context = game.context,
          world = game.world;

      var _world$toScreen = world.toScreen(game, this.x, this.y),
          x = _world$toScreen.x,
          y = _world$toScreen.y;

      var radius = world.getScaleX(game) * this.area;
      var alpha = this.concentration;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fillStyle = "rgba(255, 0, 0, ".concat(alpha, ")");
      context.fill();
    }
  }]);

  return Substance;
}();

/***/ }),

/***/ "./source/timer.js":
/*!*************************!*\
  !*** ./source/timer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timer": () => (/* binding */ Timer)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Timer = /*#__PURE__*/function () {
  function Timer(interval) {
    _classCallCheck(this, Timer);

    this.frameStart = this.tickStart = Date.now();
    this.interval = interval || 100;
  }

  _createClass(Timer, [{
    key: "update",
    value: function update(game) {
      var now = Date.now();

      if (game.paused) {
        this.frameStart = now;
        this.tickStart = now;
        return;
      }

      var frameTime = now - this.frameStart;
      this.frameStart = now;
      game.events.enqueueFrameEvent(frameTime);
      var tickTime = now - this.tickStart;

      if (tickTime >= this.interval) {
        game.events.enqueueTickEvent(tickTime);
        this.tickStart = now;
      }
    }
  }, {
    key: "render",
    value: function render() {}
  }]);

  return Timer;
}();

/***/ }),

/***/ "./source/viewport.js":
/*!****************************!*\
  !*** ./source/viewport.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Viewport": () => (/* binding */ Viewport)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Viewport = /*#__PURE__*/function () {
  function Viewport() {
    _classCallCheck(this, Viewport);
  }

  _createClass(Viewport, [{
    key: "update",
    value: function update(game) {
      var _this = this;

      game.events.onResize(function (e) {
        return _this.resize(e);
      });
    }
  }, {
    key: "resize",
    value: function resize(e) {
      this.canvasWidth = e.width;
      this.canvasHeight = e.height;
      var minDim = Math.min(e.width, e.height);
      this.width = minDim;
      this.height = minDim;
      this.left = this.canvasWidth / 2 - this.width / 2;
      this.top = this.canvasHeight / 2 - this.height / 2;
    }
  }, {
    key: "contains",
    value: function contains(x, y) {
      return x >= this.left && x <= this.left + this.width && y >= this.top && y <= this.top + this.height;
    }
  }, {
    key: "render",
    value: function render(game) {
      var context = game.context;
      context.canvas.width = this.canvasWidth;
      context.canvas.height = this.canvasHeight;
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.beginPath();
      context.rect(this.left, this.top, this.width, this.height);
      context.stroke();
    }
  }]);

  return Viewport;
}();

/***/ }),

/***/ "./source/world.js":
/*!*************************!*\
  !*** ./source/world.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "World": () => (/* binding */ World)
/* harmony export */ });
/* harmony import */ var _species_bacteria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./species/bacteria */ "./source/species/bacteria.js");
/* harmony import */ var _fluid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fluid */ "./source/fluid.js");
/* harmony import */ var _mathUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mathUtils */ "./source/mathUtils.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var World = /*#__PURE__*/function () {
  function World() {
    _classCallCheck(this, World);

    this.width = 128;
    this.height = 128;
    this.maxPopulation = 2000;
    this.species = [new _species_bacteria__WEBPACK_IMPORTED_MODULE_0__.Bacteria(64, 64, 0)];
    this.fluid = new _fluid__WEBPACK_IMPORTED_MODULE_1__.Fluid();
  }

  _createClass(World, [{
    key: "update",
    value: function update(game) {
      var _this = this;

      this.fluid.update(game);

      var _iterator = _createForOfIteratorHelper(this.species),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var s = _step.value;
          s.update(game);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      game.events.onClick(function (e) {
        return _this.handleClick(e, game);
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(e, game) {
      var _this2 = this;

      this.species.forEach(function (s) {
        return s.isSelected = false;
      });
      this.selectedSpecies = this.species.filter(function (s) {
        return _this2.isClicked(s, e, game);
      })[0];
      if (this.selectedSpecies) this.selectedSpecies.isSelected = true;
    }
  }, {
    key: "isClicked",
    value: function isClicked(species, e, game) {
      var location = this.toScreen(game, species.x, species.y);
      var dist = _mathUtils__WEBPACK_IMPORTED_MODULE_2__.MathUtils.dist(location.x, e.x, location.y, e.y);
      return dist <= this.getScaleX(game);
    }
  }, {
    key: "render",
    value: function render(game) {
      this.fluid.render(game);

      var _iterator2 = _createForOfIteratorHelper(this.species),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var s = _step2.value;
          s.render(game);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "toScreen",
    value: function toScreen(game, x, y) {
      var viewport = game.viewport;
      var scaleX = this.getScaleX(game);
      var scaleY = this.getScaleY(game);
      return {
        x: x * scaleX + viewport.left + scaleX / 2,
        y: y * scaleY + viewport.top + scaleY / 2
      };
    }
  }, {
    key: "toGame",
    value: function toGame(game, x, y) {
      var viewport = game.viewport;
      var scaleX = this.getScaleX(game);
      var scaleY = this.getScaleY(game);
      return {
        x: (x - viewport.left) / scaleX,
        y: (y - viewport.top) / scaleY
      };
    }
  }, {
    key: "getScaleX",
    value: function getScaleX(game) {
      var viewport = game.viewport;
      return viewport.width / this.width;
    }
  }, {
    key: "getScaleY",
    value: function getScaleY(game) {
      var viewport = game.viewport;
      return viewport.height / this.height;
    }
  }, {
    key: "addSpecies",
    value: function addSpecies(species) {
      this.species.push(species);
    }
  }, {
    key: "removeSpecies",
    value: function removeSpecies(species) {
      this.species = this.species.filter(function (s) {
        return s !== species;
      });
      if (this.selectedSpecies === species) this.selectedSpecies = null;
    }
  }, {
    key: "addSubstance",
    value: function addSubstance(x, y, amount) {
      this.fluid.addSubstance(x, y, amount);
    }
  }, {
    key: "removeSubstance",
    value: function removeSubstance(substance) {
      this.fluid.removeSubstance(substance);
    }
  }]);

  return World;
}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./source/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./source/game.js");

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('viewport');
  var game = new _game__WEBPACK_IMPORTED_MODULE_0__.Game(canvas);
  game.initialize();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map