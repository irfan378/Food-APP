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

/***/ "./component/Featured.tsx":
/*!********************************!*\
  !*** ./component/Featured.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Featured = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), index = ref[0], setIndex = ref[1];\n    var handleArrow = function(direction) {\n        if (direction === \"l\") {\n            setIndex(index !== 0 ? index - 1 : 1);\n        }\n        if (direction === \"r\") {\n            setIndex(index !== 0 ? index + 1 : 0);\n        }\n    };\n    console.log(index);\n    var images;\n    images = [\n        \"/img/featured2.png\",\n        \"/img/featured3.png\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"containerr h-[calc(100vh-100px)] bg-red-500 flex justify-end\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-[10%] h-[20%] top-0 bottom-0 m-auto left-0 cursor-pointer z-[2]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/img/arrowl.png\",\n                    layout: \"fill\",\n                    alt: \"\",\n                    onClick: function() {\n                        return handleArrow(\"l\");\n                    },\n                    objectFit: \"contain\"\n                }, void 0, false, {\n                    fileName: \"/home/irfan/Desktop/food-app/component/Featured.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/irfan/Desktop/food-app/component/Featured.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wrapper w-[300vw] h-full flex\",\n                children: images.map(function(img, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"imgContainer w-[100vw] relative h-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: img,\n                            layout: \"fill\",\n                            alt: \"\",\n                            objectFit: \"contain\"\n                        }, void 0, false, {\n                            fileName: \"/home/irfan/Desktop/food-app/component/Featured.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, _this1)\n                    }, i, false, {\n                        fileName: \"/home/irfan/Desktop/food-app/component/Featured.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/home/irfan/Desktop/food-app/component/Featured.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-[10%] h-[20%] z-[2] top-0 bottom-0 m-auto right-0 cursor-pointer\",\n                onClick: function() {\n                    return handleArrow(\"l\");\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/img/arrowr.png\",\n                    layout: \"fill\",\n                    alt: \"\",\n                    objectFit: \"contain\"\n                }, void 0, false, {\n                    fileName: \"/home/irfan/Desktop/food-app/component/Featured.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/irfan/Desktop/food-app/component/Featured.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/irfan/Desktop/food-app/component/Featured.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(Featured, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Featured;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Featured);\nvar _c;\n$RefreshReg$(_c, \"Featured\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvRmVhdHVyZWQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDd0M7QUFDVDs7QUFFL0IsSUFBTUcsUUFBUSxHQUFhLFdBQU07OztJQUMvQixJQUEwQkYsR0FBbUIsR0FBbkJBLCtDQUFRLENBQVMsQ0FBQyxDQUFDLEVBTC9DLEtBS2MsR0FBY0EsR0FBbUIsR0FBakMsRUFMZCxRQUt3QixHQUFJQSxHQUFtQixHQUF2QjtJQUN0QixJQUFNSyxXQUFXLEdBQUcsU0FBQ0MsU0FBaUIsRUFBSztRQUN6QyxJQUFJQSxTQUFTLEtBQUssR0FBRyxFQUFFO1lBQ3JCRixRQUFRLENBQUNELEtBQUssS0FBSyxDQUFDLEdBQUdBLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkM7UUFDRCxJQUFJRyxTQUFTLEtBQUssR0FBRyxFQUFFO1lBQ3JCRixRQUFRLENBQUNELEtBQUssS0FBSyxDQUFDLEdBQUdBLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkM7S0FDRjtJQUNESSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsS0FBSyxDQUFDO0lBQ2xCLElBQUlNLE1BQU07SUFDVkEsTUFBTSxHQUFHO1FBQUMsb0JBQW9CO1FBQUUsb0JBQW9CO0tBQUMsQ0FBQztJQUN0RCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsOERBQThEOzswQkFDM0UsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyw0RUFBNEU7MEJBQ3pGLDRFQUFDVixtREFBSztvQkFDSlcsR0FBRyxFQUFDLGlCQUFpQjtvQkFDckJDLE1BQU0sRUFBQyxNQUFNO29CQUNiQyxHQUFHLEVBQUMsRUFBRTtvQkFDTkMsT0FBTyxFQUFFOytCQUFNVixXQUFXLENBQUMsR0FBRyxDQUFDO3FCQUFBO29CQUMvQlcsU0FBUyxFQUFDLFNBQVM7Ozs7O3lCQUNuQjs7Ozs7cUJBQ0U7MEJBQ04sOERBQUNOLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQywrQkFBK0I7MEJBQzNDRixNQUFNLENBQUNRLEdBQUcsQ0FBQyxTQUFDQyxHQUFHLEVBQUVDLENBQUM7eUNBQ2pCLDhEQUFDVCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsd0NBQXdDO2tDQUNyRCw0RUFBQ1YsbURBQUs7NEJBQUNXLEdBQUcsRUFBRU0sR0FBRzs0QkFBRUwsTUFBTSxFQUFDLE1BQU07NEJBQUNDLEdBQUcsRUFBQyxFQUFFOzRCQUFDRSxTQUFTLEVBQUMsU0FBUzs7Ozs7a0NBQUc7dUJBRERHLENBQUM7Ozs7OEJBRXhEO2lCQUNQLENBQUM7Ozs7O3FCQUNFOzBCQUNOLDhEQUFDVCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsNkVBQTZFO2dCQUFHSSxPQUFPLEVBQUU7MkJBQU1WLFdBQVcsQ0FBQyxHQUFHLENBQUM7aUJBQUE7MEJBQzVILDRFQUFDSixtREFBSztvQkFDSlcsR0FBRyxFQUFDLGlCQUFpQjtvQkFDckJDLE1BQU0sRUFBQyxNQUFNO29CQUNiQyxHQUFHLEVBQUMsRUFBRTtvQkFDUEUsU0FBUyxFQUFDLFNBQVM7Ozs7O3lCQUNsQjs7Ozs7cUJBQ0U7Ozs7OzthQUNGLENBQ047Q0FDSDtHQXpDS2QsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBMkNkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0ZlYXR1cmVkLnRzeD9kYmQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IEZlYXR1cmVkOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBoYW5kbGVBcnJvdyA9IChkaXJlY3Rpb246IHN0cmluZykgPT4ge1xuICAgIGlmIChkaXJlY3Rpb24gPT09IFwibFwiKSB7XG4gICAgICBzZXRJbmRleChpbmRleCAhPT0gMCA/IGluZGV4IC0gMSA6IDEpO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInJcIikge1xuICAgICAgc2V0SW5kZXgoaW5kZXggIT09IDAgPyBpbmRleCArIDEgOiAwKTtcbiAgICB9XG4gIH07XG4gIGNvbnNvbGUubG9nKGluZGV4KVxuICBsZXQgaW1hZ2VzOiBzdHJpbmdbXTtcbiAgaW1hZ2VzID0gW1wiL2ltZy9mZWF0dXJlZDIucG5nXCIsIFwiL2ltZy9mZWF0dXJlZDMucG5nXCJdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyciBoLVtjYWxjKDEwMHZoLTEwMHB4KV0gYmctcmVkLTUwMCBmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctWzEwJV0gaC1bMjAlXSB0b3AtMCBib3R0b20tMCBtLWF1dG8gbGVmdC0wIGN1cnNvci1wb2ludGVyIHotWzJdXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz1cIi9pbWcvYXJyb3dsLnBuZ1wiXG4gICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBcnJvdyhcImxcIil9XG4gICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlciB3LVszMDB2d10gaC1mdWxsIGZsZXhcIj5cbiAgICAgICAge2ltYWdlcy5tYXAoKGltZywgaSkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nQ29udGFpbmVyIHctWzEwMHZ3XSByZWxhdGl2ZSBoLWZ1bGxcIiBrZXk9e2l9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17aW1nfSBsYXlvdXQ9XCJmaWxsXCIgYWx0PVwiXCIgb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctWzEwJV0gaC1bMjAlXSB6LVsyXSB0b3AtMCBib3R0b20tMCBtLWF1dG8gcmlnaHQtMCBjdXJzb3ItcG9pbnRlclwiICAgb25DbGljaz17KCkgPT4gaGFuZGxlQXJyb3coXCJsXCIpfT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPVwiL2ltZy9hcnJvd3IucG5nXCJcbiAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkZlYXR1cmVkIiwiaW5kZXgiLCJzZXRJbmRleCIsImhhbmRsZUFycm93IiwiZGlyZWN0aW9uIiwiY29uc29sZSIsImxvZyIsImltYWdlcyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImxheW91dCIsImFsdCIsIm9uQ2xpY2siLCJvYmplY3RGaXQiLCJtYXAiLCJpbWciLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/Featured.tsx\n");

/***/ })

});