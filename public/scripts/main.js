/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/bacteria.js":
/*!****************************!*\
  !*** ./source/bacteria.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Bacteria\": () => (/* binding */ Bacteria)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Bacteria = /*#__PURE__*/function () {\n  function Bacteria(x, y) {\n    _classCallCheck(this, Bacteria);\n\n    this.x = x;\n    this.y = y;\n    this.lifetime = 0;\n    this.maxLifetime = Math.ceil(Math.random() * 10);\n    this.breedLifetime = 5;\n    this.direction = 90 * (Math.PI / 180);\n  }\n\n  _createClass(Bacteria, [{\n    key: \"update\",\n    value: function update(game) {\n      var _this = this;\n\n      var world = game.world,\n          events = game.events;\n      this.updatePosition(world);\n      this.updateDirection();\n      events.onTick(function () {\n        return _this.heartBeat(world);\n      });\n    }\n  }, {\n    key: \"updatePosition\",\n    value: function updatePosition(world) {\n      this.x += Math.sin(this.direction) / 20;\n      this.y += Math.cos(this.direction) / 20;\n      if (this.x < 0) this.x = 0;\n      if (this.y < 0) this.y = 0;\n      if (this.x >= world.width - 1) this.x = world.width - 1;\n      if (this.y >= world.height - 1) this.y = world.height - 1;\n    }\n  }, {\n    key: \"updateDirection\",\n    value: function updateDirection() {\n      var dirChangeChance = Math.random();\n      if (dirChangeChance > 0.95) this.direction = Math.random() * 360 * (Math.PI / 180);else if (dirChangeChance > 0.5) this.direction = this.direction + (Math.random() - 0.5) * 30 * (Math.PI / 180);\n    }\n  }, {\n    key: \"heartBeat\",\n    value: function heartBeat(world) {\n      this.lifetime++;\n\n      if (this.lifetime > this.breedLifetime) {\n        this.breed(world);\n      } else if (this.lifetime > this.maxLifetime) {\n        this.die(world);\n      }\n    }\n  }, {\n    key: \"breed\",\n    value: function breed(world) {\n      var childOne = new Bacteria(this.x, this.y);\n      var childTwo = new Bacteria(this.x, this.y);\n      world.addSpecies(childOne);\n      world.addSpecies(childTwo);\n      world.removeSpecies(this);\n    }\n  }, {\n    key: \"die\",\n    value: function die(world) {\n      world.addSpecies(new DyingBacteria(this.x, this.y));\n      world.removeSpecies(this);\n    }\n  }, {\n    key: \"render\",\n    value: function render(game) {\n      var context = game.context,\n          world = game.world;\n      var location = world.toScreen(game, this.x, this.y);\n      var scaleX = world.getScaleX(game);\n      var scaleY = world.getScaleY(game);\n      context.beginPath();\n      context.fillStyle = 'black';\n      context.ellipse(location.x, location.y, scaleX / 2, scaleY / 2, 0, 0, 2 * Math.PI);\n      context.fill();\n    }\n  }]);\n\n  return Bacteria;\n}();\n\nvar DyingBacteria = /*#__PURE__*/function () {\n  function DyingBacteria(x, y) {\n    _classCallCheck(this, DyingBacteria);\n\n    this.x = x;\n    this.y = y;\n    this.remnants = 1;\n  }\n\n  _createClass(DyingBacteria, [{\n    key: \"update\",\n    value: function update(game) {\n      this.remnants -= 0.01;\n      if (this.remnants <= 0) game.world.removeSpecies(this);\n    }\n  }, {\n    key: \"render\",\n    value: function render(game) {\n      var context = game.context,\n          world = game.world;\n      var location = world.toScreen(game, this.x, this.y);\n      var scaleX = world.getScaleX(game);\n      var scaleY = world.getScaleY(game);\n      context.beginPath();\n      context.fillStyle = \"rgba(0, 0, 0, \".concat(this.remnants, \")\");\n      context.ellipse(location.x, location.y, scaleX / 2, scaleY / 2, 0, 0, 2 * Math.PI);\n      context.fill();\n    }\n  }]);\n\n  return DyingBacteria;\n}();\n\n//# sourceURL=webpack://InfectionGame/./source/bacteria.js?");

/***/ }),

/***/ "./source/events.js":
/*!**************************!*\
  !*** ./source/events.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Events\": () => (/* binding */ Events)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Events = /*#__PURE__*/function () {\n  function Events() {\n    _classCallCheck(this, Events);\n\n    this.queue = [];\n  }\n\n  _createClass(Events, [{\n    key: \"initialize\",\n    value: function initialize() {\n      var _this = this;\n\n      window.addEventListener('resize', function (e) {\n        return _this.onWindowResize(e);\n      });\n      this.enqueueResizeEvent(window.innerWidth, window.innerHeight);\n    }\n  }, {\n    key: \"onWindowResize\",\n    value: function onWindowResize(e) {\n      this.enqueueResizeEvent(e.target.innerWidth, e.target.innerHeight);\n    }\n  }, {\n    key: \"enqueueResizeEvent\",\n    value: function enqueueResizeEvent(newWidth, newHeight) {\n      this.queue.push({\n        type: 'resize',\n        width: newWidth,\n        height: newHeight\n      });\n    }\n  }, {\n    key: \"enqueueTickEvent\",\n    value: function enqueueTickEvent(time) {\n      this.queue.push({\n        type: 'tick',\n        time: time\n      });\n    }\n  }, {\n    key: \"onResize\",\n    value: function onResize(callback) {\n      this.invoke('resize', callback);\n    }\n  }, {\n    key: \"onTick\",\n    value: function onTick(callback) {\n      this.invoke('tick', callback);\n    }\n  }, {\n    key: \"invoke\",\n    value: function invoke(eventType, handler) {\n      var events = this.queue.filter(function (e) {\n        return e.type === eventType;\n      });\n\n      var _iterator = _createForOfIteratorHelper(events),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var event = _step.value;\n          handler(event);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.queue = [];\n    }\n  }]);\n\n  return Events;\n}();\n\n//# sourceURL=webpack://InfectionGame/./source/events.js?");

/***/ }),

/***/ "./source/fps.js":
/*!***********************!*\
  !*** ./source/fps.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FPS\": () => (/* binding */ FPS)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar FPS = /*#__PURE__*/function () {\n  function FPS() {\n    _classCallCheck(this, FPS);\n\n    this.fps = 0;\n    this.frames = 0;\n  }\n\n  _createClass(FPS, [{\n    key: \"update\",\n    value: function update(game) {\n      var _this = this;\n\n      this.frames += 1;\n      game.events.onTick(function (e) {\n        return _this.updateFps();\n      });\n    }\n  }, {\n    key: \"updateFps\",\n    value: function updateFps() {\n      this.fps = this.frames;\n      this.frames = 0;\n    }\n  }, {\n    key: \"render\",\n    value: function render(game) {\n      var context = game.context;\n      context.font = '10px sans-serif';\n      context.fillText(this.fps, 3, 10);\n    }\n  }]);\n\n  return FPS;\n}();\n\n//# sourceURL=webpack://InfectionGame/./source/fps.js?");

/***/ }),

/***/ "./source/game.js":
/*!************************!*\
  !*** ./source/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewport */ \"./source/viewport.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./source/events.js\");\n/* harmony import */ var _fps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fps */ \"./source/fps.js\");\n/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./world */ \"./source/world.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer */ \"./source/timer.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game(canvas) {\n    _classCallCheck(this, Game);\n\n    this.events = new _events__WEBPACK_IMPORTED_MODULE_1__.Events();\n    this.context = canvas.getContext('2d');\n    this.viewport = new _viewport__WEBPACK_IMPORTED_MODULE_0__.Viewport();\n    this.world = new _world__WEBPACK_IMPORTED_MODULE_3__.World();\n    this.timer = new _timer__WEBPACK_IMPORTED_MODULE_4__.Timer();\n    this.fps = new _fps__WEBPACK_IMPORTED_MODULE_2__.FPS();\n  }\n\n  _createClass(Game, [{\n    key: \"initialize\",\n    value: function initialize() {\n      this.events.initialize();\n      this.nextFrame();\n    }\n  }, {\n    key: \"run\",\n    value: function run() {\n      this.update();\n      this.render();\n      this.nextFrame();\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.timer.update(this);\n      this.viewport.update(this);\n      this.fps.update(this);\n      this.world.update(this);\n      this.events.clear();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.timer.render(this);\n      this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);\n      this.viewport.render(this);\n      this.world.render(this);\n      this.fps.render(this);\n    }\n  }, {\n    key: \"nextFrame\",\n    value: function nextFrame() {\n      var _this = this;\n\n      window.requestAnimationFrame(function () {\n        return _this.run();\n      });\n    }\n  }]);\n\n  return Game;\n}();\n\n//# sourceURL=webpack://InfectionGame/./source/game.js?");

/***/ }),

/***/ "./source/main.js":
/*!************************!*\
  !*** ./source/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./source/game.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var canvas = document.getElementById('viewport');\n  var game = new _game__WEBPACK_IMPORTED_MODULE_0__.Game(canvas);\n  game.initialize();\n});\n\n//# sourceURL=webpack://InfectionGame/./source/main.js?");

/***/ }),

/***/ "./source/timer.js":
/*!*************************!*\
  !*** ./source/timer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Timer\": () => (/* binding */ Timer)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Timer = /*#__PURE__*/function () {\n  function Timer(interval) {\n    _classCallCheck(this, Timer);\n\n    this.startTime = Date.now();\n    this.interval = interval || 1000;\n  }\n\n  _createClass(Timer, [{\n    key: \"update\",\n    value: function update(game) {\n      var timeDiff = Date.now() - this.startTime;\n\n      if (timeDiff >= this.interval) {\n        game.events.enqueueTickEvent();\n        this.startTime = Date.now();\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {}\n  }]);\n\n  return Timer;\n}();\n\n//# sourceURL=webpack://InfectionGame/./source/timer.js?");

/***/ }),

/***/ "./source/viewport.js":
/*!****************************!*\
  !*** ./source/viewport.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Viewport\": () => (/* binding */ Viewport)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Viewport = /*#__PURE__*/function () {\n  function Viewport() {\n    _classCallCheck(this, Viewport);\n  }\n\n  _createClass(Viewport, [{\n    key: \"update\",\n    value: function update(game) {\n      var _this = this;\n\n      game.events.onResize(function (e) {\n        return _this.resize(e);\n      });\n    }\n  }, {\n    key: \"resize\",\n    value: function resize(e) {\n      this.canvasWidth = e.width;\n      this.canvasHeight = e.height;\n      var minDim = Math.min(e.width, e.height);\n      this.width = minDim;\n      this.height = minDim;\n      this.left = this.canvasWidth / 2 - this.width / 2;\n      this.top = this.canvasHeight / 2 - this.height / 2;\n    }\n  }, {\n    key: \"render\",\n    value: function render(game) {\n      var context = game.context;\n      context.canvas.width = this.canvasWidth;\n      context.canvas.height = this.canvasHeight;\n      context.beginPath();\n      context.rect(this.left, this.top, this.width, this.height);\n      context.stroke();\n    }\n  }]);\n\n  return Viewport;\n}();\n\n//# sourceURL=webpack://InfectionGame/./source/viewport.js?");

/***/ }),

/***/ "./source/world.js":
/*!*************************!*\
  !*** ./source/world.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"World\": () => (/* binding */ World)\n/* harmony export */ });\n/* harmony import */ var _bacteria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bacteria */ \"./source/bacteria.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar World = /*#__PURE__*/function () {\n  function World() {\n    _classCallCheck(this, World);\n\n    this.width = 128;\n    this.height = 128;\n    this.species = [new _bacteria__WEBPACK_IMPORTED_MODULE_0__.Bacteria(0, 0)];\n  }\n\n  _createClass(World, [{\n    key: \"update\",\n    value: function update(game) {\n      var _iterator = _createForOfIteratorHelper(this.species),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var s = _step.value;\n          s.update(game);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render(game) {\n      var _iterator2 = _createForOfIteratorHelper(this.species),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var s = _step2.value;\n          s.render(game);\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    }\n  }, {\n    key: \"toScreen\",\n    value: function toScreen(game, x, y) {\n      var viewport = game.viewport;\n      var scaleX = this.getScaleX(game);\n      var scaleY = this.getScaleY(game);\n      return {\n        x: x * scaleX + viewport.left + scaleX / 2,\n        y: y * scaleY + viewport.top + scaleY / 2\n      };\n    }\n  }, {\n    key: \"getScaleX\",\n    value: function getScaleX(game) {\n      var viewport = game.viewport;\n      return viewport.width / this.width;\n    }\n  }, {\n    key: \"getScaleY\",\n    value: function getScaleY(game) {\n      var viewport = game.viewport;\n      return viewport.height / this.height;\n    }\n  }, {\n    key: \"addSpecies\",\n    value: function addSpecies(species) {\n      this.species.push(species);\n    }\n  }, {\n    key: \"removeSpecies\",\n    value: function removeSpecies(species) {\n      this.species = this.species.filter(function (s) {\n        return s !== species;\n      });\n    }\n  }]);\n\n  return World;\n}();\n\n//# sourceURL=webpack://InfectionGame/./source/world.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./source/main.js");
/******/ 	
/******/ })()
;