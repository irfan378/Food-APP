"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/ProductCard.tsx":
/*!***********************************!*\
  !*** ./component/ProductCard.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar ProductCard = function(param) {\n    var pizza = param.pizza;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full md:w-[22%] flex flex-col items-center justify-center px-5 py-10 cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"product/\".concat(pizza._id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: pizza.img,\n                    alt: \"\",\n                    width: \"500\",\n                    height: \"500\"\n                }, void 0, false, {\n                    fileName: \"/home/irfan/Desktop/food-app/component/ProductCard.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/irfan/Desktop/food-app/component/ProductCard.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl text-red-600 font-bold\",\n                children: pizza.title\n            }, void 0, false, {\n                fileName: \"/home/irfan/Desktop/food-app/component/ProductCard.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-2xl text-black font-bold\",\n                children: [\n                    \"$\",\n                    pizza.prices[0]\n                ]\n            }, void 0, true, {\n                fileName: \"/home/irfan/Desktop/food-app/component/ProductCard.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-black\",\n                children: pizza.desc\n            }, void 0, false, {\n                fileName: \"/home/irfan/Desktop/food-app/component/ProductCard.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/irfan/Desktop/food-app/component/ProductCard.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvUHJvZHVjdENhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUNLO0FBRUY7QUFFN0IsSUFBTUcsV0FBVyxHQUFHLGdCQUF3QztRQUFyQ0MsS0FBSyxTQUFMQSxLQUFLO0lBQzFCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyx1RkFBdUY7OzBCQUNwRyw4REFBQ0osa0RBQUk7Z0JBQUNLLElBQUksRUFBRSxVQUFTLENBQVksT0FBVkgsS0FBSyxDQUFDSSxHQUFHLENBQUU7MEJBQ2hDLDRFQUFDUCxtREFBSztvQkFBQ1EsR0FBRyxFQUFFTCxLQUFLLENBQUNNLEdBQUc7b0JBQUVDLEdBQUcsRUFBQyxFQUFFO29CQUFDQyxLQUFLLEVBQUMsS0FBSztvQkFBQ0MsTUFBTSxFQUFDLEtBQUs7Ozs7O3lCQUFHOzs7OztxQkFDcEQ7MEJBRVAsOERBQUNDLElBQUU7Z0JBQUNSLFNBQVMsRUFBQyxpQ0FBaUM7MEJBQUVGLEtBQUssQ0FBQ1csS0FBSzs7Ozs7cUJBQU07MEJBQ2xFLDhEQUFDQyxNQUFJO2dCQUFDVixTQUFTLEVBQUMsK0JBQStCOztvQkFBQyxHQUFDO29CQUFDRixLQUFLLENBQUNhLE1BQU0sQ0FBQyxDQUFDLENBQUM7Ozs7OztxQkFBUTswQkFDekUsOERBQUNDLEdBQUM7Z0JBQUNaLFNBQVMsRUFBQyx3QkFBd0I7MEJBQUVGLEtBQUssQ0FBQ2UsSUFBSTs7Ozs7cUJBQUs7Ozs7OzthQUNsRCxDQUNOO0NBQ0g7QUFaS2hCLEtBQUFBLFdBQVc7QUFjakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvUHJvZHVjdENhcmQudHN4PzI2ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdHMgfSBmcm9tIFwiLi4vdHlwaW5nc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBQcm9kdWN0Q2FyZCA9ICh7IHBpenphIH06IHsgcGl6emE6IFByb2R1Y3RMaXN0cyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy1bMjIlXSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC01IHB5LTEwIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICA8TGluayBocmVmPXtgcHJvZHVjdC8ke3BpenphLl9pZH1gfT5cbiAgICAgICAgPEltYWdlIHNyYz17cGl6emEuaW1nfSBhbHQ9XCJcIiB3aWR0aD1cIjUwMFwiIGhlaWdodD1cIjUwMFwiIC8+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LXJlZC02MDAgZm9udC1ib2xkXCI+e3BpenphLnRpdGxlfTwvaDE+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWJsYWNrIGZvbnQtYm9sZFwiPiR7cGl6emEucHJpY2VzWzBdfTwvc3Bhbj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtYmxhY2tcIj57cGl6emEuZGVzY308L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiTGluayIsIlByb2R1Y3RDYXJkIiwicGl6emEiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiX2lkIiwic3JjIiwiaW1nIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsInRpdGxlIiwic3BhbiIsInByaWNlcyIsInAiLCJkZXNjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/ProductCard.tsx\n");

/***/ })

});