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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\nvar ProductCard = function(param) {\n    var pizza = param.pizza;\n    var _this1 = _this;\n    var MyLink = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function(props, ref) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCard, _objectSpread({\n            innerRef: ref\n        }, props), void 0, false, {\n            fileName: \"/home/irfan/Desktop/food-app/component/ProductCard.tsx\",\n            lineNumber: 10,\n            columnNumber: 51\n        }, _this1);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full md:w-[22%] flex flex-col items-center justify-center px-5 py-10 cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"product/\".concat(pizza._id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: pizza.img,\n                    alt: \"\",\n                    width: \"500\",\n                    height: \"500\"\n                }, void 0, false, {\n                    fileName: \"/home/irfan/Desktop/food-app/component/ProductCard.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/irfan/Desktop/food-app/component/ProductCard.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl text-red-600 font-bold\",\n                children: pizza.title\n            }, void 0, false, {\n                fileName: \"/home/irfan/Desktop/food-app/component/ProductCard.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-2xl text-black font-bold\",\n                children: [\n                    \"$\",\n                    pizza.prices[0]\n                ]\n            }, void 0, true, {\n                fileName: \"/home/irfan/Desktop/food-app/component/ProductCard.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-black\",\n                children: pizza.desc\n            }, void 0, false, {\n                fileName: \"/home/irfan/Desktop/food-app/component/ProductCard.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/irfan/Desktop/food-app/component/ProductCard.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvUHJvZHVjdENhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDSztBQUVGO0FBRTdCLElBQU1HLFdBQVcsR0FBRSxnQkFFYjtRQUZlQyxLQUFLLFNBQUxBLEtBQUs7O0lBR3hCLElBQU1DLE1BQU0saUJBQUdMLHVEQUFnQixDQUFDLFNBQUNPLEtBQUssRUFBRUMsR0FBRzs2QkFBSyw4REFBQ0wsV0FBVztZQUFDTSxRQUFRLEVBQUVELEdBQUc7V0FBTUQsS0FBSzs7OztrQkFBSTtLQUFBLENBQUM7SUFDMUYscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHVGQUF1Rjs7MEJBQ3BHLDhEQUFDVCxrREFBSTtnQkFBQ1UsSUFBSSxFQUFFLFVBQVMsQ0FBWSxPQUFWUixLQUFLLENBQUNTLEdBQUcsQ0FBRTswQkFDbEMsNEVBQUNaLG1EQUFLO29CQUFDYSxHQUFHLEVBQUVWLEtBQUssQ0FBQ1csR0FBRztvQkFBRUMsR0FBRyxFQUFDLEVBQUU7b0JBQUNDLEtBQUssRUFBQyxLQUFLO29CQUFDQyxNQUFNLEVBQUMsS0FBSzs7Ozs7eUJBQUc7Ozs7O3FCQUNsRDswQkFFUCw4REFBQ0MsSUFBRTtnQkFBQ1IsU0FBUyxFQUFDLGlDQUFpQzswQkFBRVAsS0FBSyxDQUFDZ0IsS0FBSzs7Ozs7cUJBQU07MEJBQ2xFLDhEQUFDQyxNQUFJO2dCQUFDVixTQUFTLEVBQUMsK0JBQStCOztvQkFBQyxHQUFDO29CQUFDUCxLQUFLLENBQUNrQixNQUFNLENBQUMsQ0FBQyxDQUFDOzs7Ozs7cUJBQVE7MEJBQ3pFLDhEQUFDQyxHQUFDO2dCQUFDWixTQUFTLEVBQUMsd0JBQXdCOzBCQUFFUCxLQUFLLENBQUNvQixJQUFJOzs7OztxQkFBSzs7Ozs7O2FBQ2xELENBQ047Q0FDSDtBQWZLckIsS0FBQUEsV0FBVztBQWlCakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvUHJvZHVjdENhcmQudHN4PzI2ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IFByb2R1Y3RMaXN0cyB9IGZyb20gXCIuLi90eXBpbmdzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IFByb2R1Y3RDYXJkPSAoe3BpenphfTp7XG4gIHBpenphOlByb2R1Y3RMaXN0c1xufSkgPT4ge1xuICBjb25zdCBNeUxpbmsgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiA8UHJvZHVjdENhcmQgaW5uZXJSZWY9e3JlZn0gey4uLnByb3BzfSAvPik7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy1bMjIlXSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC01IHB5LTEwIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICA8TGluayBocmVmPXtgcHJvZHVjdC8ke3BpenphLl9pZH1gfSA+XG4gICAgICA8SW1hZ2Ugc3JjPXtwaXp6YS5pbWd9IGFsdD1cIlwiIHdpZHRoPVwiNTAwXCIgaGVpZ2h0PVwiNTAwXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICAgIFxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtcmVkLTYwMCBmb250LWJvbGRcIj57cGl6emEudGl0bGV9PC9oMT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtYmxhY2sgZm9udC1ib2xkXCI+JHtwaXp6YS5wcmljZXNbMF19PC9zcGFuPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ibGFja1wiPntwaXp6YS5kZXNjfTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJMaW5rIiwiUHJvZHVjdENhcmQiLCJwaXp6YSIsIk15TGluayIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImlubmVyUmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsIl9pZCIsInNyYyIsImltZyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDEiLCJ0aXRsZSIsInNwYW4iLCJwcmljZXMiLCJwIiwiZGVzYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/ProductCard.tsx\n");

/***/ })

});