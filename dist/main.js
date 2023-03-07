"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpacktemplate"] = self["webpackChunkwebpacktemplate"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addScore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addScore.js */ \"./src/modules/addScore.js\");\n/* harmony import */ var _modules_renderScore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderScore.js */ \"./src/modules/renderScore.js\");\n// import './style.css';\n\n\n\nconst playerScores = [\n  {\n    user: 'john',\n    score: '100',\n  },\n  {\n    user: 'jane',\n    score: '20',\n  },\n  {\n    user: 'jill',\n    score: '50',\n  },\n  {\n    user: 'jones',\n    score: '78',\n  },\n  {\n    user: 'joan',\n    score: '125',\n  },\n  {\n    user: 'joy',\n    score: '77',\n  },\n  {\n    user: 'joyce',\n    score: '42',\n  },\n];\nplayerScores.forEach((e) => (0,_modules_renderScore_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e));\n\nconst leaderForm = document.getElementById('leaderForm');\n\nleaderForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  (0,_modules_addScore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(leaderForm.nameInput.value, leaderForm.scoreInput.value);\n});\n\n\n//# sourceURL=webpack://webpacktemplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/addScore.js":
/*!*********************************!*\
  !*** ./src/modules/addScore.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderScore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderScore.js */ \"./src/modules/renderScore.js\");\n\n\nconst addScore = (user, score) => {\n  (0,_renderScore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ user, score });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addScore);\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/addScore.js?");

/***/ }),

/***/ "./src/modules/renderScore.js":
/*!************************************!*\
  !*** ./src/modules/renderScore.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst render = (boardEntry) => {\n  const leaderList = document.getElementById('leaderList');\n  leaderList.innerHTML += `\n  <li>${boardEntry.user}: ${boardEntry.score}</li>\n  `;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/renderScore.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);