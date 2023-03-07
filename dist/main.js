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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n  }\\n\\n  body {\\n      display: flex;\\n      flex-direction: column;\\n      padding-top: 20px;\\n      gap: 30px;\\n  }\\n\\n  .h1Container {\\n      padding-left: 20px;\\n  }\\n\\n  #mainArea {\\n      display: flex;\\n      gap: 40px;\\n      padding-left: 40px;\\n  }\\n\\n  #listSection {\\n      display: flex;\\n      flex-direction: column;\\n      width: 350px;\\n      gap: 20px;\\n  }\\n\\n  #listHead {\\n      display: flex;\\n      justify-content: space-between;\\n  }\\n\\n  #leaderList {\\n      list-style: none;\\n      border: 2px solid black;\\n  }\\n\\n  #leaderList li:nth-child(odd) {\\n    background-color: white;\\n  }\\n  \\n  #leaderList li:nth-child(even) {\\n    background-color: #F0F0F0;\\n  }\\n\\n  #leaderForm {\\n      display: flex;\\n      flex-direction: column;\\n      gap: 20px;\\n  }\\n\\n  .inp {\\n      border: 2px solid black;\\n  }\\n\\n  .addScore {\\n      display: flex;\\n      justify-content: flex-end;\\n  }\\n\\n  footer {\\n      display: flex;\\n      justify-content: center;\\n      background-color: grey;\\n      position: fixed;\\n      bottom: 0;\\n      width: 100vw;\\n  }\\n\\n  .btn {\\n      padding: 5px;\\n      border: 2px solid black;\\n      background-color: white;\\n      box-shadow: 4px 4px rgba(0, 0, 0, 0.8);\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpacktemplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_addScore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addScore.js */ \"./src/modules/addScore.js\");\n/* harmony import */ var _modules_renderScore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderScore.js */ \"./src/modules/renderScore.js\");\n\n\n\n\nconst playerScores = [\n  {\n    user: 'john',\n    score: '100',\n  },\n  {\n    user: 'jane',\n    score: '20',\n  },\n  {\n    user: 'jill',\n    score: '50',\n  },\n  {\n    user: 'jones',\n    score: '78',\n  },\n  {\n    user: 'joan',\n    score: '125',\n  },\n  {\n    user: 'joy',\n    score: '77',\n  },\n  {\n    user: 'joyce',\n    score: '42',\n  },\n];\n\nplayerScores.forEach((e) => {\n  (0,_modules_renderScore_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e);\n});\n\nconst leaderForm = document.getElementById('leaderForm');\n\nleaderForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  (0,_modules_addScore_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(leaderForm.nameInput.value, leaderForm.scoreInput.value);\n});\n\n\n//# sourceURL=webpack://webpacktemplate/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst render = (boardEntry) => {\n  const leaderList = document.getElementById('leaderList');\n  leaderList.innerHtml += `\n  <li>${boardEntry.user}: ${boardEntry.score}</li>\n  `;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/renderScore.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);