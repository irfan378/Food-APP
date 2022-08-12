"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "(api)/./pages/api/login.ts":
/*!****************************!*\
  !*** ./pages/api/login.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const { username , password  } = req.body;\n        const token = process.env.TOKEN;\n        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {\n            res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize(\"token\", token, {\n                maxAge: 60 * 60,\n                sameSite: \"strict\",\n                path: \"/\"\n            }));\n            const message = \"Successfull\";\n            res.status(200).json(message);\n        } else {\n            const mess = \"Wrong credentials\";\n            res.status(400).json(mess);\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzJCO0FBTTNCLGlFQUFlLE9BQU9DLEdBQW1CLEVBQUVDLEdBQTBCLEdBQUs7SUFDeEUsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU0sRUFBRUMsUUFBUSxHQUFFQyxRQUFRLEdBQUUsR0FBR0osR0FBRyxDQUFDSyxJQUFJO1FBQ3ZDLE1BQU1DLEtBQUssR0FBUUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLEtBQUs7UUFDcEMsSUFDRU4sUUFBUSxLQUFLSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsY0FBYyxJQUN2Q04sUUFBUSxLQUFLRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csY0FBYyxFQUN2QztZQUNBVixHQUFHLENBQUNXLFNBQVMsQ0FDWCxZQUFZLEVBQUNiLHVEQUFnQixDQUFDLE9BQU8sRUFBQ08sS0FBSyxFQUFDO2dCQUMxQ1EsTUFBTSxFQUFDLEVBQUUsR0FBQyxFQUFFO2dCQUNaQyxRQUFRLEVBQUMsUUFBUTtnQkFDakJDLElBQUksRUFBQyxHQUFHO2FBQ1QsQ0FBQyxDQUNIO1lBQ0QsTUFBTUMsT0FBTyxHQUFLLGFBQWE7WUFDL0JoQixHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0YsT0FBTyxDQUFDO1NBRTlCLE1BQU07WUFDTCxNQUFNRyxJQUFJLEdBQVEsbUJBQW1CO1lBQ3JDbkIsR0FBRyxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDO1NBQzVCO0tBQ0Y7Q0FDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1hcHAvLi9wYWdlcy9hcGkvbG9naW4udHM/YzEyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwiY29va2llXCJcblxudHlwZSBEYXRhID0ge1xuICBuYW1lOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT4pID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IHRva2VuOiBhbnkgPSBwcm9jZXNzLmVudi5UT0tFTjtcbiAgICBpZiAoXG4gICAgICB1c2VybmFtZSA9PT0gcHJvY2Vzcy5lbnYuQURNSU5fVVNFUk5BTUUgJiZcbiAgICAgIHBhc3N3b3JkID09PSBwcm9jZXNzLmVudi5BRE1JTl9QQVNTV09SRFxuICAgICkge1xuICAgICAgcmVzLnNldEhlYWRlcihcbiAgICAgICAgXCJTZXQtQ29va2llXCIsY29va2llLnNlcmlhbGl6ZShcInRva2VuXCIsdG9rZW4se1xuICAgICAgICAgIG1heEFnZTo2MCo2MCxcbiAgICAgICAgICBzYW1lU2l0ZTpcInN0cmljdFwiLFxuICAgICAgICAgIHBhdGg6XCIvXCJcbiAgICAgICAgfSkgXG4gICAgICApXG4gICAgICBjb25zdCBtZXNzYWdlOmFueT1cIlN1Y2Nlc3NmdWxsXCJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG1lc3NhZ2UpXG4gICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXNzOiBhbnkgPSBcIldyb25nIGNyZWRlbnRpYWxzXCI7XG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbihtZXNzKTtcbiAgICB9XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiY29va2llIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImJvZHkiLCJ0b2tlbiIsInByb2Nlc3MiLCJlbnYiLCJUT0tFTiIsIkFETUlOX1VTRVJOQU1FIiwiQURNSU5fUEFTU1dPUkQiLCJzZXRIZWFkZXIiLCJzZXJpYWxpemUiLCJtYXhBZ2UiLCJzYW1lU2l0ZSIsInBhdGgiLCJtZXNzYWdlIiwic3RhdHVzIiwianNvbiIsIm1lc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.ts"));
module.exports = __webpack_exports__;

})();