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

/***/ "./component/Add.tsx":
/*!***************************!*\
  !*** ./component/Add.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Add = function(param) {\n    var setClose = param.setClose;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"containers \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    onClick: function() {\n                        return setClose(true);\n                    },\n                    className: \"close\",\n                    children: \"X\"\n                }, void 0, false, {\n                    fileName: \"/home/irfan/Desktop/food-app/component/Add.tsx\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl\",\n                    children: \"Add a new Pizza\"\n                }, void 0, false, {\n                    fileName: \"/home/irfan/Desktop/food-app/component/Add.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"item\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"label\",\n                        children: \"Choose an image\"\n                    }, void 0, false, {\n                        fileName: \"/home/irfan/Desktop/food-app/component/Add.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/irfan/Desktop/food-app/component/Add.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/irfan/Desktop/food-app/component/Add.tsx\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/irfan/Desktop/food-app/component/Add.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, _this);\n};\n_c = Add;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Add);\nvar _c;\n$RefreshReg$(_c, \"Add\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvQWRkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUEwQjtBQUUxQixJQUFNQyxHQUFHLEdBQUcsZ0JBQXVCO1FBQXBCQyxRQUFRLFNBQVJBLFFBQVE7SUFDckIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGFBQWE7a0JBQzFCLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxTQUFTOzs4QkFDdEIsOERBQUNDLE1BQUk7b0JBQUNDLE9BQU8sRUFBRTsrQkFBTUosUUFBUSxDQUFDLElBQUksQ0FBQztxQkFBQTtvQkFBRUUsU0FBUyxFQUFDLE9BQU87OEJBQUMsR0FBQzs7Ozs7eUJBQU87OEJBQy9ELDhEQUFDRyxJQUFFO29CQUFDSCxTQUFTLEVBQUMsVUFBVTs4QkFBQyxpQkFBZTs7Ozs7eUJBQUs7OEJBQzdDLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsTUFBTTs4QkFDakIsNEVBQUNJLE9BQUs7d0JBQUNKLFNBQVMsRUFBQyxPQUFPO2tDQUFDLGlCQUFlOzs7Ozs2QkFBUTs7Ozs7eUJBQzlDOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0FBWktILEtBQUFBLEdBQUc7QUFjVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9BZGQudHN4PzM4OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBZGQgPSAoeyBzZXRDbG9zZSB9OiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcnMgXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gc2V0Q2xvc2UodHJ1ZSl9IGNsYXNzTmFtZT1cImNsb3NlXCI+WDwvc3Bhbj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+QWRkIGEgbmV3IFBpenphPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5DaG9vc2UgYW4gaW1hZ2U8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQWRkIiwic2V0Q2xvc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwib25DbGljayIsImgxIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/Add.tsx\n");

/***/ })

});