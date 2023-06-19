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

/***/ "./src/img/assets/user.png":
/*!*********************************!*\
  !*** ./src/img/assets/user.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/img/assets/user.png\");\n\n//# sourceURL=webpack://fe-school-homework-1/./src/img/assets/user.png?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./style.scss */ \"./src/style.scss?4548\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\" />\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\" />\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n    <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" />\\n    <title>Document</title>\\n  </head>\\n  <body>\\n    <div id=\\\"app\\\"></div>\\n  </body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://fe-school-homework-1/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://fe-school-homework-1/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.scss?bc3b":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fe-school-homework-1/./src/style.scss?");

/***/ }),

/***/ "./src/components/empty-page/index.js":
/*!********************************************!*\
  !*** ./src/components/empty-page/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmptyPage: () => (/* binding */ EmptyPage)\n/* harmony export */ });\nclass EmptyPage {\n  element;\n  subElement;\n\n  constructor() {\n    this.render()\n  }\n\n  render() {\n    this.element = this.getElement();\n    this.subElement = this.getSubElement(this.element);\n  }\n\n  getElement() {\n    const element = document.createElement('div');\n    element.innerHTML = this.getTemplate();\n\n    return element.firstElementChild;\n  }\n\n  getTemplate() {\n    return `\n    <div class=\"empty-page\">\n      <p class=\"empty-page__label\">Не создан ни один проект</p>\n      <a href=\"#\" class=\"empty-page__button button button__style_primary\">\n        Добавить\n      </a>\n    </div>\n    `\n  }\n\n  getSubElement(element) {\n    return element.firstElementChild\n  }\n}\n\n\n\n//# sourceURL=webpack://fe-school-homework-1/./src/components/empty-page/index.js?");

/***/ }),

/***/ "./src/components/navigation/index.js":
/*!********************************************!*\
  !*** ./src/components/navigation/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navigation: () => (/* binding */ Navigation)\n/* harmony export */ });\nclass Navigation {\n  element;\n  subElement;\n\n  onClick = (event) => {\n    alert('navigation click')\n  }\n\n  constructor() {\n    this.render()\n    this.initListeners()\n  }\n\n  render() {\n    this.element = this.getElement();\n    this.subElement = this.getSubElement(this.element);\n  }\n\n  getElement() {\n    const element = document.createElement('div');\n    element.innerHTML = this.getTemplate();\n\n    return element.firstElementChild;\n  }\n\n  getTemplate() {\n    return `\n    <header class=\"header\">\n      <nav class=\"header__nav\">\n        <ul class=\"header__list\">\n          <li class=\"header__list-item\">\n            <a class=\"header__button button button__nav button__nav_active\" href=\"#\">Проекты</a>\n          </li>\n          <li class=\"header__list-item\">\n            <a class=\"header__button button button__nav\" href=\"#\"\n              >Задачи</a\n            >\n          </li>\n          <li class=\"header__list-item\">\n            <a class=\"header__button button button__nav\" href=\"#\"\n              >Пользователи</a\n            >\n          </li>\n          <li class=\"header__list-item\">\n            <a class=\"header__user-button button button__dropdown\" href=\"#\">\n              <img\n                class=\"button__image\"\n                src=\"../img/assets/user.png\"\n                alt=\"user image\"\n              />\n              <svg\n                class=\"button__icon\"\n                width=\"14\"\n                height=\"8\"\n                viewBox=\"0 0 14 8\"\n                fill=\"none\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n              >\n                <path\n                  d=\"M6.99974 4.95L2.04974 0L0.635742 1.414L6.99974 7.778L13.3637 1.414L11.9497 0L6.99974 4.95Z\"\n                  fill=\"white\"\n                />\n              </svg>\n            </a>\n          </li>\n        </ul>\n      </nav>\n    </header>\n    `\n  }\n\n  getSubElement(element) {\n    return element.firstElementChild\n  }\n\n  initListeners() {\n    this.subElement.addEventListener('click', this.onClick)\n  }\n}\n\n\n//# sourceURL=webpack://fe-school-homework-1/./src/components/navigation/index.js?");

/***/ }),

/***/ "./src/components/project-item/index.js":
/*!**********************************************!*\
  !*** ./src/components/project-item/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectItem: () => (/* binding */ ProjectItem)\n/* harmony export */ });\nclass ProjectItem {\n  element;\n  subElement;\n\n  constructor() {\n    this.render()\n  }\n\n  render() {\n    this.element = this.getElement();\n    this.subElement = this.getSubElement(this.element);\n  }\n\n  getElement() {\n    const element = document.createElement('div');\n    element.innerHTML = this.getTemplate();\n\n    return element.firstElementChild;\n  }\n\n  getTemplate() {\n    return `\n    <div class=\"item-card\">\n      <div class=\"item-card__body\">\n        <div class=\"item-card__title\">\n          <p class=\"item-card__name\">\n            Название\n          </p>\n        </div>\n        <div class=\"item-card__footer\">\n          <div class=\"item-card__create-group\">\n            <span class=\"item-card__id\"\n              >#1</span\n            >\n            <span class=\"item-card__info-label item-card__info-label__collapsed\"\n              >Иванов И.И. создал(а) 1 час назад</span\n            >\n          </div>\n          <div class=\"item-card__edit-group\">\n            <span class=\"item-card__info-label item-card__info-label__collapsed\"\n              >Баранов В.В. изменил(а) 1 минуту назад</span\n            >\n          </div>\n        </div>\n      </div>\n      <a\n        href=\"#\"\n        class=\"item-card__edit-button button button__style_secondary button__size_small\"\n      >\n        <svg\n          width=\"4\"\n          height=\"14\"\n          viewBox=\"0 0 4 14\"\n          fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n        >\n          <path\n            d=\"M3.5 12C3.5 12.3978 3.34196 12.7794 3.06066 13.0607C2.77936 13.342 2.39782 13.5 2 13.5C1.60218 13.5 1.22064 13.342 0.93934 13.0607C0.658035 12.7794 0.5 12.3978 0.5 12C0.5 11.6022 0.658035 11.2206 0.93934 10.9393C1.22064 10.658 1.60218 10.5 2 10.5C2.39782 10.5 2.77936 10.658 3.06066 10.9393C3.34196 11.2206 3.5 11.6022 3.5 12ZM3.5 7C3.5 7.39782 3.34196 7.77936 3.06066 8.06066C2.77936 8.34196 2.39782 8.5 2 8.5C1.60218 8.5 1.22064 8.34196 0.93934 8.06066C0.658035 7.77936 0.5 7.39782 0.5 7C0.5 6.60218 0.658035 6.22064 0.93934 5.93934C1.22064 5.65804 1.60218 5.5 2 5.5C2.39782 5.5 2.77936 5.65804 3.06066 5.93934C3.34196 6.22064 3.5 6.60218 3.5 7ZM3.5 2C3.5 2.39782 3.34196 2.77936 3.06066 3.06066C2.77936 3.34196 2.39782 3.5 2 3.5C1.60218 3.5 1.22064 3.34196 0.93934 3.06066C0.658035 2.77936 0.5 2.39782 0.5 2C0.5 1.60218 0.658035 1.22064 0.93934 0.93934C1.22064 0.658035 1.60218 0.5 2 0.5C2.39782 0.5 2.77936 0.658035 3.06066 0.93934C3.34196 1.22064 3.5 1.60218 3.5 2Z\"\n            fill=\"#1C1C1C\"\n          />\n        </svg>\n      </a>\n    </div>\n    `\n  }\n\n  getSubElement(element) {\n    return element.firstElementChild\n  }\n}\n\n\n//# sourceURL=webpack://fe-school-homework-1/./src/components/project-item/index.js?");

/***/ }),

/***/ "./src/components/task-item/index.js":
/*!*******************************************!*\
  !*** ./src/components/task-item/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TaskItem: () => (/* binding */ TaskItem)\n/* harmony export */ });\nclass TaskItem {\n  element;\n  subElement;\n\n  constructor() {\n    this.render()\n  }\n\n  render() {\n    this.element = this.getElement();\n    this.subElement = this.getSubElement(this.element);\n  }\n\n  getElement() {\n    const element = document.createElement('div');\n    element.innerHTML = this.getTemplate();\n\n    return element.firstElementChild;\n  }\n\n  getTemplate() {\n    return `\n    <div class=\"item-card\">\n      <div class=\"item-card__body\">\n        <div class=\"item-card__title\">\n          <p class=\"item-card__name\">\n            Очень длинное название проекта, создано специального для того чтоб\n            не вместилось в одну строку, что позволит проверить не ломается ли\n            верстка. И еще раз очень длинное название проекта, создано\n            специально чтоб проверить не сломается ли верстка.\n          </p>\n          <img\n            class=\"item-card__image\"\n            src=\"../img/assets/user.png\"\n            alt=\"user image\"\n          />\n        </div>\n        <div class=\"item-card__footer\">\n          <div class=\"item-card__create-group\">\n            <span class=\"item-card__id\"\n              >2653137653251836235432452513163168242748724298742287987322398742#12345678987654321</span\n            >\n            <span class=\"item-card__info-label item-card__info-label__collapsed\"\n              >Иванов И.И. создал(а) 1 час назад</span\n            >\n            <span class=\"item-card__status item-card__status_draft\"\n              >Черновик</span\n            >\n          </div>\n          <div class=\"item-card__edit-group\">\n            <span class=\"item-card__info-label item-card__info-label__collapsed\"\n              >Баранов В.В. изменил(а) 1 минуту назад</span\n            >\n          </div>\n        </div>\n      </div>\n      <a\n        href=\"#\"\n        class=\"item-card__edit-button button button__style_secondary button__size_small\"\n      >\n        <svg\n          width=\"4\"\n          height=\"14\"\n          viewBox=\"0 0 4 14\"\n          fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n        >\n          <path\n            d=\"M3.5 12C3.5 12.3978 3.34196 12.7794 3.06066 13.0607C2.77936 13.342 2.39782 13.5 2 13.5C1.60218 13.5 1.22064 13.342 0.93934 13.0607C0.658035 12.7794 0.5 12.3978 0.5 12C0.5 11.6022 0.658035 11.2206 0.93934 10.9393C1.22064 10.658 1.60218 10.5 2 10.5C2.39782 10.5 2.77936 10.658 3.06066 10.9393C3.34196 11.2206 3.5 11.6022 3.5 12ZM3.5 7C3.5 7.39782 3.34196 7.77936 3.06066 8.06066C2.77936 8.34196 2.39782 8.5 2 8.5C1.60218 8.5 1.22064 8.34196 0.93934 8.06066C0.658035 7.77936 0.5 7.39782 0.5 7C0.5 6.60218 0.658035 6.22064 0.93934 5.93934C1.22064 5.65804 1.60218 5.5 2 5.5C2.39782 5.5 2.77936 5.65804 3.06066 5.93934C3.34196 6.22064 3.5 6.60218 3.5 7ZM3.5 2C3.5 2.39782 3.34196 2.77936 3.06066 3.06066C2.77936 3.34196 2.39782 3.5 2 3.5C1.60218 3.5 1.22064 3.34196 0.93934 3.06066C0.658035 2.77936 0.5 2.39782 0.5 2C0.5 1.60218 0.658035 1.22064 0.93934 0.93934C1.22064 0.658035 1.60218 0.5 2 0.5C2.39782 0.5 2.77936 0.658035 3.06066 0.93934C3.34196 1.22064 3.5 1.60218 3.5 2Z\"\n            fill=\"#1C1C1C\"\n          />\n        </svg>\n      </a>\n    </div>\n    `\n  }\n\n  getSubElement(element) {\n    return element.firstElementChild\n  }\n}\n\n\n//# sourceURL=webpack://fe-school-homework-1/./src/components/task-item/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss?bc3b\");\n/* harmony import */ var _img_assets_user_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/assets/user.png */ \"./src/img/assets/user.png\");\n/* harmony import */ var _components_empty_page_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/empty-page/index.js */ \"./src/components/empty-page/index.js\");\n/* harmony import */ var _components_navigation_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navigation/index.js */ \"./src/components/navigation/index.js\");\n/* harmony import */ var _components_project_item_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/project-item/index.js */ \"./src/components/project-item/index.js\");\n/* harmony import */ var _components_task_item_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/task-item/index.js */ \"./src/components/task-item/index.js\");\n\n\n\n\n\n\n\n\n\n\nconst app = document.getElementById(\"app\");\n\nconst taskContainer = document.createElement(\"div\");\ntaskContainer.id = \"container\";\n\nconst navigation = new _components_navigation_index_js__WEBPACK_IMPORTED_MODULE_4__.Navigation();\nconst projectItem = new _components_project_item_index_js__WEBPACK_IMPORTED_MODULE_5__.ProjectItem();\nconst taskItem = new _components_task_item_index_js__WEBPACK_IMPORTED_MODULE_6__.TaskItem();\nconst emptyPage = new _components_empty_page_index_js__WEBPACK_IMPORTED_MODULE_3__.EmptyPage();\n\ntaskContainer.append(projectItem.element);\ntaskContainer.append(taskItem.element);\ntaskContainer.append(emptyPage.element);\n\napp.append(navigation.element);\napp.append(taskContainer);\n\n\n//# sourceURL=webpack://fe-school-homework-1/./src/index.js?");

/***/ }),

/***/ "./src/style.scss?4548":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b88d04fba731603756b1.scss\";\n\n//# sourceURL=webpack://fe-school-homework-1/./src/style.scss?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;