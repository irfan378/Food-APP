"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./pages/admin/index.tsx":
/*!*******************************!*\
  !*** ./pages/admin/index.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _home_irfan_Desktop_food_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_irfan_Desktop_food_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_irfan_Desktop_food_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar index = function(param) {\n    var products = param.products, orders = param.orders;\n    var _this1 = _this;\n    var hanleDelete = function() {\n        var _ref = _asyncToGenerator(_home_irfan_Desktop_food_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            return _home_irfan_Desktop_food_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        try {} catch (error) {}\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function hanleDelete(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"containers px-12 py-12 flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"item flex-[1]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: \"Products\"\n                    }, void 0, false, {\n                        fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"table\", {\n                        className: \"tables w-full border-spacing-[20px] text-left\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                    className: \"trTitle\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            children: \"Image\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                            lineNumber: 21,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            children: \"Id\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                            lineNumber: 22,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            children: \"Title\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                            lineNumber: 23,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            children: \"Price\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            children: \"Action\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                            lineNumber: 25,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, _this),\n                            products.map(function(product) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                        className: \"trTitle\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    src: product.img,\n                                                    width: 50,\n                                                    height: 50,\n                                                    objectFit: \"cover\",\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 19\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                                lineNumber: 31,\n                                                columnNumber: 17\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                                children: [\n                                                    product._id.slice(0, 5),\n                                                    \"...\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 17\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                                children: product.title\n                                            }, void 0, false, {\n                                                fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 17\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                                children: product.prices[0]\n                                            }, void 0, false, {\n                                                fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 17\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                        className: \"button text-white px-1 py-1 cursor-pointer bg-teal-900 mr-3\",\n                                                        children: \"Edit\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                                        lineNumber: 44,\n                                                        columnNumber: 19\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                        onClick: function() {\n                                                            return hanleDelete(product._id);\n                                                        },\n                                                        className: \"button text-white px-1 py-1 cursor-pointer bg-[crimson]\",\n                                                        children: \"Delete\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                                        lineNumber: 47,\n                                                        columnNumber: 19\n                                                    }, _this1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 17\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, _this1)\n                                }, product._id, false, {\n                                    fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, _this1);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"item flex-[1]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: \"Orders\"\n                    }, void 0, false, {\n                        fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"table\", {\n                        className: \"tables w-full border-spacing-[20px] text-left\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                    className: \"trTitle\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            children: \"Id\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            children: \"Customer\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            children: \"Total Price\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            children: \"Payment\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            children: \"Status\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            children: \"Action\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                    className: \"trTitle\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            children: [\n                                                \"4354343454\".slice(0, 5),\n                                                \"...\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            children: \"John Doe\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            children: \"$50\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            children: \"Paid\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            children: \"Prepearing\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                className: \"button border bg-slate-300 px-1 py-1\",\n                                                children: \"Next Stage\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/irfan/Desktop/food-app/pages/admin/index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3NEQUNYLDhEQUFDQSxJQUFFO3NEQUFDLFVBQVE7Ozs7O2lEQUFLO3NEQUNqQiw4REFBQ0EsSUFBRTtzREFBQyxhQUFXOzs7OztpREFBSztzREFDcEIsOERBQUNBLElBQUU7c0RBQUMsU0FBTzs7Ozs7aURBQUs7c0RBQ2hCLDhEQUFDQSxJQUFFO3NEQUFDLFFBQU07Ozs7O2lEQUFLO3NEQUNmLDhEQUFDQSxJQUFFO3NEQUFDLFFBQU07Ozs7O2lEQUFLOzs7Ozs7eUNBQ1o7Ozs7O3FDQUNDOzBDQUNSLDhEQUFDRixPQUFLOzBDQUNKLDRFQUFDQyxJQUFFO29DQUFDSixTQUFTLEVBQUMsU0FBUzs7c0RBQ3JCLDhEQUFDUSxJQUFFOztnREFBRSxZQUFZLENBQUNRLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dEQUFDLEtBQUc7Ozs7OztpREFBSztzREFDdEMsOERBQUNSLElBQUU7c0RBQUMsVUFBUTs7Ozs7aURBQUs7c0RBQ2pCLDhEQUFDQSxJQUFFO3NEQUFDLEtBQUc7Ozs7O2lEQUFLO3NEQUNaLDhEQUFDQSxJQUFFO3NEQUFDLE1BQUk7Ozs7O2lEQUFLO3NEQUNiLDhEQUFDQSxJQUFFO3NEQUFDLFlBQVU7Ozs7O2lEQUFLO3NEQUNuQiw4REFBQ0EsSUFBRTtzREFDRCw0RUFBQ1csUUFBTTtnREFBQ25CLFNBQVMsRUFBQyxzQ0FBc0M7MERBQUMsWUFFekQ7Ozs7O3FEQUFTOzs7OztpREFDTjs7Ozs7O3lDQUNGOzs7OztxQ0FDQzs7Ozs7OzZCQUNGOzs7Ozs7cUJBQ0o7Ozs7OzthQUNGLENBQ047Q0FDSDs7QUFRRCwrREFBZVAsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWluL2luZGV4LnRzeD9hOTUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBwcm9kdWN0IGZyb20gXCIuLi9hcGkvcHJvZHVjdFwiO1xuY29uc3QgaW5kZXggPSAoeyBwcm9kdWN0cywgb3JkZXJzIH06IGFueSkgPT4ge1xuICBjb25zdCBoYW5sZURlbGV0ZT1hc3luYyhpZCk9PntcbiAgICB0cnkge1xuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIFxuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVycyBweC0xMiBweS0xMiBmbGV4XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0gZmxleC1bMV1cIj5cbiAgICAgICAgPGgxPlByb2R1Y3RzPC9oMT5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlcyB3LWZ1bGwgYm9yZGVyLXNwYWNpbmctWzIwcHhdIHRleHQtbGVmdFwiPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XG4gICAgICAgICAgICAgIDx0aD5JbWFnZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5JZDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5UaXRsZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3Q6IGFueSkgPT4gKFxuICAgICAgICAgICAgPHRib2R5IGtleT17cHJvZHVjdC5faWR9PlxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1nfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3QuX2lkLnNsaWNlKDAsNSl9Li4uPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3QudGl0bGV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3QucHJpY2VzWzBdfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gdGV4dC13aGl0ZSBweC0xIHB5LTEgY3Vyc29yLXBvaW50ZXIgYmctdGVhbC05MDAgbXItM1wiPlxuICAgICAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PmhhbmxlRGVsZXRlKHByb2R1Y3QuX2lkKX0gY2xhc3NOYW1lPVwiYnV0dG9uIHRleHQtd2hpdGUgcHgtMSBweS0xIGN1cnNvci1wb2ludGVyIGJnLVtjcmltc29uXVwiPlxuICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0gZmxleC1bMV1cIj5cbiAgICAgICAgPGgxPk9yZGVyczwvaDE+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZXMgdy1mdWxsIGJvcmRlci1zcGFjaW5nLVsyMHB4XSB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxuICAgICAgICAgICAgICA8dGg+SWQ8L3RoPlxuICAgICAgICAgICAgICA8dGg+Q3VzdG9tZXI8L3RoPlxuICAgICAgICAgICAgICA8dGg+VG90YWwgUHJpY2U8L3RoPlxuICAgICAgICAgICAgICA8dGg+UGF5bWVudDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxuICAgICAgICAgICAgICA8dGQ+e1wiNDM1NDM0MzQ1NFwiLnNsaWNlKDAsIDUpfS4uLjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5Kb2huIERvZTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD4kNTA8L3RkPlxuICAgICAgICAgICAgICA8dGQ+UGFpZDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5QcmVwZWFyaW5nPC90ZD5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGJvcmRlciBiZy1zbGF0ZS0zMDAgcHgtMSBweS0xXCI+XG4gICAgICAgICAgICAgICAgICBOZXh0IFN0YWdlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHByb2R1Y3RSZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Byb2R1Y3RcIik7XG4gIC8vIGNvbnN0IG9yZGVyUmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9vcmRlcnNcIik7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcHJvZHVjdHM6IHByb2R1Y3RSZXMuZGF0YSwgfSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiaW5kZXgiLCJwcm9kdWN0cyIsIm9yZGVycyIsImhhbmxlRGVsZXRlIiwiaWQiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGFibGUiLCJ0Ym9keSIsInRyIiwidGgiLCJtYXAiLCJwcm9kdWN0IiwidGQiLCJzcmMiLCJpbWciLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImFsdCIsIl9pZCIsInNsaWNlIiwidGl0bGUiLCJwcmljZXMiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/index.tsx\n");

/***/ })

});