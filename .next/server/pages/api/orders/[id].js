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
exports.id = "pages/api/orders/[id]";
exports.ids = ["pages/api/orders/[id]"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "ts-mongoose":
/*!******************************!*\
  !*** external "ts-mongoose" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("ts-mongoose");

/***/ }),

/***/ "(api)/./models/Order.ts":
/*!*************************!*\
  !*** ./models/Order.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Order\": () => (/* binding */ Order)\n/* harmony export */ });\n/* harmony import */ var ts_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-mongoose */ \"ts-mongoose\");\n/* harmony import */ var ts_mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst OrderSchema = (0,ts_mongoose__WEBPACK_IMPORTED_MODULE_0__.createSchema)({\n    customer: ts_mongoose__WEBPACK_IMPORTED_MODULE_0__.Type.string({\n        required: true,\n        maxlength: 60\n    }),\n    address: ts_mongoose__WEBPACK_IMPORTED_MODULE_0__.Type.string({\n        required: true,\n        maxlength: 200\n    }),\n    total: ts_mongoose__WEBPACK_IMPORTED_MODULE_0__.Type.number({\n        required: true\n    }),\n    status: ts_mongoose__WEBPACK_IMPORTED_MODULE_0__.Type.number({\n        default: 0\n    }),\n    method: ts_mongoose__WEBPACK_IMPORTED_MODULE_0__.Type.number({\n        required: true\n    })\n}, {\n    timestamps: true\n});\nconst Order = (mongoose__WEBPACK_IMPORTED_MODULE_1___default().models.Order) || mongoose__WEBPACK_IMPORTED_MODULE_1___default().model(\"Order\", OrderSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvT3JkZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUQ7QUFDakI7QUFFaEMsTUFBTUcsV0FBVyxHQUFHSCx5REFBWSxDQUM5QjtJQUNFSSxRQUFRLEVBQUVILG9EQUFXLENBQUM7UUFBRUssUUFBUSxFQUFFLElBQUk7UUFBRUMsU0FBUyxFQUFFLEVBQUU7S0FBRSxDQUFDO0lBQ3hEQyxPQUFPLEVBQUVQLG9EQUFXLENBQUM7UUFBRUssUUFBUSxFQUFFLElBQUk7UUFBRUMsU0FBUyxFQUFFLEdBQUc7S0FBRSxDQUFDO0lBQ3hERSxLQUFLLEVBQUVSLG9EQUFXLENBQUM7UUFBRUssUUFBUSxFQUFFLElBQUk7S0FBRSxDQUFDO0lBQ3RDSyxNQUFNLEVBQUVWLG9EQUFXLENBQUM7UUFBRVcsT0FBTyxFQUFFLENBQUM7S0FBRSxDQUFDO0lBQ25DQyxNQUFNLEVBQUVaLG9EQUFXLENBQUM7UUFBRUssUUFBUSxFQUFFLElBQUk7S0FBRSxDQUFDO0NBQ3hDLEVBQ0Q7SUFBRVEsVUFBVSxFQUFFLElBQUk7Q0FBRSxDQUNyQjtBQUNNLE1BQU1DLEtBQUssR0FBQ2IsOERBQXFCLElBQUVBLHFEQUFjLENBQUMsT0FBTyxFQUFDQyxXQUFXLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLWFwcC8uL21vZGVscy9PcmRlci50cz9iNDAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNjaGVtYSwgVHlwZSB9IGZyb20gXCJ0cy1tb25nb29zZVwiO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBPcmRlclNjaGVtYSA9IGNyZWF0ZVNjaGVtYShcbiAge1xuICAgIGN1c3RvbWVyOiBUeXBlLnN0cmluZyh7IHJlcXVpcmVkOiB0cnVlLCBtYXhsZW5ndGg6IDYwIH0pLFxuICAgIGFkZHJlc3M6IFR5cGUuc3RyaW5nKHsgcmVxdWlyZWQ6IHRydWUsIG1heGxlbmd0aDogMjAwIH0pLFxuICAgIHRvdGFsOiBUeXBlLm51bWJlcih7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgIHN0YXR1czogVHlwZS5udW1iZXIoeyBkZWZhdWx0OiAwIH0pLFxuICAgIG1ldGhvZDogVHlwZS5udW1iZXIoeyByZXF1aXJlZDogdHJ1ZSB9KSxcbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5leHBvcnQgY29uc3QgT3JkZXI9bW9uZ29vc2UubW9kZWxzLk9yZGVyfHxtb25nb29zZS5tb2RlbChcIk9yZGVyXCIsT3JkZXJTY2hlbWEpIl0sIm5hbWVzIjpbImNyZWF0ZVNjaGVtYSIsIlR5cGUiLCJtb25nb29zZSIsIk9yZGVyU2NoZW1hIiwiY3VzdG9tZXIiLCJzdHJpbmciLCJyZXF1aXJlZCIsIm1heGxlbmd0aCIsImFkZHJlc3MiLCJ0b3RhbCIsIm51bWJlciIsInN0YXR1cyIsImRlZmF1bHQiLCJtZXRob2QiLCJ0aW1lc3RhbXBzIiwiT3JkZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Order.ts\n");

/***/ }),

/***/ "(api)/./pages/api/orders/[id].ts":
/*!**********************************!*\
  !*** ./pages/api/orders/[id].ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/mongo */ \"(api)/./utils/mongo.ts\");\n/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Order */ \"(api)/./models/Order.ts\");\n\n\nconst handler = async (req, res)=>{\n    const { method , query: { id  } ,  } = req;\n    await (0,_utils_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"GET\") {\n        try {\n            const order = await _models_Order__WEBPACK_IMPORTED_MODULE_1__.Order.findById(id);\n            res.status(200).json(order);\n        } catch (error) {\n            res.status(500).json(error);\n        }\n    }\n    if (method === \"PUT\") {\n        try {\n            const order = await _models_Order__WEBPACK_IMPORTED_MODULE_1__.Order.findByIdAndUpdate(id, req.body, {\n                new: true\n            });\n            res.status(200).json(order);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n    if (method === \"DELETE\") {}\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzL1tpZF0udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBQ0M7QUFHOUMsTUFBTUUsT0FBTyxHQUFHLE9BQU9DLEdBQW1CLEVBQUVDLEdBQW9CLEdBQUs7SUFDbkUsTUFBTSxFQUNKQyxNQUFNLEdBQ05DLEtBQUssRUFBRSxFQUFFQyxFQUFFLEdBQUUsS0FDZCxHQUFHSixHQUFHO0lBQ1AsTUFBTUgsd0RBQVMsRUFBRSxDQUFDO0lBQ2xCLElBQUlLLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDcEIsSUFBSTtZQUNGLE1BQU1HLEtBQUssR0FBRyxNQUFNUCx5REFBYyxDQUFDTSxFQUFFLENBQUM7WUFDdENILEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNILEtBQUssQ0FBQyxDQUFDO1NBQzdCLENBQUMsT0FBT0ksS0FBSyxFQUFFO1lBQ2RSLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO0tBQ0Y7SUFDRCxJQUFJUCxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3BCLElBQUk7WUFDRixNQUFNRyxLQUFLLEdBQUcsTUFBTVAsa0VBQXVCLENBQUNNLEVBQUUsRUFBRUosR0FBRyxDQUFDVyxJQUFJLEVBQUU7Z0JBQUVDLEdBQUcsRUFBRSxJQUFJO2FBQUUsQ0FBQztZQUN4RVgsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsS0FBSyxDQUFDLENBQUM7U0FDN0IsQ0FBQyxPQUFPUSxHQUFHLEVBQUU7WUFDWlosR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0ssR0FBRyxDQUFDLENBQUM7U0FDM0I7S0FDRjtJQUNELElBQUlYLE1BQU0sS0FBSyxRQUFRLEVBQUUsRUFDeEI7Q0FDRjtBQUNELGlFQUFlSCxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLWFwcC8uL3BhZ2VzL2FwaS9vcmRlcnMvW2lkXS50cz82NDE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL21vbmdvXCI7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvT3JkZXJcIjtcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBtZXRob2QsXG4gICAgcXVlcnk6IHsgaWQgfSxcbiAgfSA9IHJlcTtcbiAgYXdhaXQgZGJDb25uZWN0KCk7XG4gIGlmIChtZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3JkZXIgPSBhd2FpdCBPcmRlci5maW5kQnlJZChpZCk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihvcmRlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycm9yKTtcbiAgICB9XG4gIH1cbiAgaWYgKG1ldGhvZCA9PT0gXCJQVVRcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBvcmRlciA9IGF3YWl0IE9yZGVyLmZpbmRCeUlkQW5kVXBkYXRlKGlkLCByZXEuYm9keSwgeyBuZXc6IHRydWUgfSk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihvcmRlcik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xuICAgIH1cbiAgfVxuICBpZiAobWV0aG9kID09PSBcIkRFTEVURVwiKSB7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIk9yZGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInF1ZXJ5IiwiaWQiLCJvcmRlciIsImZpbmRCeUlkIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJib2R5IiwibmV3IiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders/[id].ts\n");

/***/ }),

/***/ "(api)/./utils/mongo.ts":
/*!************************!*\
  !*** ./utils/mongo.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nasync function dbConnect() {\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n        useUnifiedTopology: true,\n        useNewUrlParser: true,\n        useCreateIndex: true\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tb25nby50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFDaEMsTUFBTUMsV0FBVyxHQUFRQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsV0FBVztBQUVoRCxJQUFJLENBQUNBLFdBQVcsRUFBRTtJQUNoQixNQUFNLElBQUlHLEtBQUssQ0FDYixzRUFBc0UsQ0FDdkUsQ0FBQztDQUNIO0FBRUQsZUFBZUMsU0FBUyxHQUFHO0lBQ3pCTCx1REFBZ0IsQ0FBQ0MsV0FBVyxFQUFFO1FBQUNNLGtCQUFrQixFQUFFLElBQUk7UUFBRUMsZUFBZSxFQUFFLElBQUk7UUFBRUMsY0FBYyxFQUFFLElBQUk7S0FBRSxDQUFDLENBQUM7Q0FDekc7QUFFRCxpRUFBZUosU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1hcHAvLi91dGlscy9tb25nby50cz82YTQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmNvbnN0IE1PTkdPREJfVVJJOiBhbnkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiXG4gICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwge3VzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSwgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLCB1c2VDcmVhdGVJbmRleDogdHJ1ZSB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJkYkNvbm5lY3QiLCJjb25uZWN0IiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlQ3JlYXRlSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/mongo.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders/[id].ts"));
module.exports = __webpack_exports__;

})();