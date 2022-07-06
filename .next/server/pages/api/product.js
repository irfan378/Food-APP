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
exports.id = "pages/api/product";
exports.ids = ["pages/api/product"];
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

/***/ "(api)/./models/Product.ts":
/*!***************************!*\
  !*** ./models/Product.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ts_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-mongoose */ \"ts-mongoose\");\n/* harmony import */ var ts_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ts_mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet ProductSchema = (0,ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.createSchema)({\n    title: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.string({\n        required: true,\n        maxlength: 60\n    }),\n    desc: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.string({\n        required: true,\n        maxlength: 200\n    }),\n    img: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.string({\n        required: true\n    }),\n    prices: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.number({\n        required: true\n    }),\n    extraOptions: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.array().of({\n        text: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.string({\n            required: true\n        }),\n        price: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.number({\n            required: true\n        })\n    })\n}, {\n    timestamps: true\n});\nlet Product = (0,ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.typedModel)(\"Product\", ProductSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product || (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUM2QjtBQUU3RCxJQUFJSSxhQUFhLEdBQUdILHlEQUFZLENBQzlCO0lBQ0VJLEtBQUssRUFBRUgsb0RBQVcsQ0FBQztRQUFFSyxRQUFRLEVBQUUsSUFBSTtRQUFFQyxTQUFTLEVBQUUsRUFBRTtLQUFFLENBQUM7SUFDckRDLElBQUksRUFBRVAsb0RBQVcsQ0FBQztRQUFFSyxRQUFRLEVBQUUsSUFBSTtRQUFFQyxTQUFTLEVBQUUsR0FBRztLQUFFLENBQUM7SUFDckRFLEdBQUcsRUFBRVIsb0RBQVcsQ0FBQztRQUFFSyxRQUFRLEVBQUUsSUFBSTtLQUFFLENBQUM7SUFDcENJLE1BQU0sRUFBRVQsb0RBQVcsQ0FBQztRQUFFSyxRQUFRLEVBQUUsSUFBSTtLQUFFLENBQUM7SUFDdkNNLFlBQVksRUFBRVgsbURBQVUsRUFBRSxDQUFDYSxFQUFFLENBQUM7UUFDNUJDLElBQUksRUFBRWQsb0RBQVcsQ0FBQztZQUFFSyxRQUFRLEVBQUUsSUFBSTtTQUFFLENBQUM7UUFDckNVLEtBQUssRUFBRWYsb0RBQVcsQ0FBQztZQUFFSyxRQUFRLEVBQUUsSUFBSTtTQUFFLENBQUM7S0FDdkMsQ0FBQztDQUNILEVBQ0Q7SUFBRVcsVUFBVSxFQUFFLElBQUk7Q0FBRSxDQUNyQjtBQUNELElBQUlDLE9BQU8sR0FBR2hCLHVEQUFVLENBQUMsU0FBUyxFQUFFQyxhQUFhLENBQUM7QUFDbEQsaUVBQWVlLE9BQU8sSUFBRW5CLGdFQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1hcHAvLi9tb2RlbHMvUHJvZHVjdC50cz9hN2JmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCB7IGNyZWF0ZVNjaGVtYSwgVHlwZSwgdHlwZWRNb2RlbCB9IGZyb20gXCJ0cy1tb25nb29zZVwiO1xuXG5sZXQgUHJvZHVjdFNjaGVtYSA9IGNyZWF0ZVNjaGVtYShcbiAge1xuICAgIHRpdGxlOiBUeXBlLnN0cmluZyh7IHJlcXVpcmVkOiB0cnVlLCBtYXhsZW5ndGg6IDYwIH0pLFxuICAgIGRlc2M6IFR5cGUuc3RyaW5nKHsgcmVxdWlyZWQ6IHRydWUsIG1heGxlbmd0aDogMjAwIH0pLFxuICAgIGltZzogVHlwZS5zdHJpbmcoeyByZXF1aXJlZDogdHJ1ZSB9KSxcbiAgICBwcmljZXM6IFR5cGUubnVtYmVyKHsgcmVxdWlyZWQ6IHRydWUgfSksXG4gICAgZXh0cmFPcHRpb25zOiBUeXBlLmFycmF5KCkub2Yoe1xuICAgICAgdGV4dDogVHlwZS5zdHJpbmcoeyByZXF1aXJlZDogdHJ1ZSB9KSxcbiAgICAgIHByaWNlOiBUeXBlLm51bWJlcih7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgIH0pLFxuICB9LFxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxuKTtcbmxldCBQcm9kdWN0ID0gdHlwZWRNb2RlbChcIlByb2R1Y3RcIiwgUHJvZHVjdFNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0fHxtb25nb29zZS5tb2RlbHMuUHJvZHVjdDtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNyZWF0ZVNjaGVtYSIsIlR5cGUiLCJ0eXBlZE1vZGVsIiwiUHJvZHVjdFNjaGVtYSIsInRpdGxlIiwic3RyaW5nIiwicmVxdWlyZWQiLCJtYXhsZW5ndGgiLCJkZXNjIiwiaW1nIiwicHJpY2VzIiwibnVtYmVyIiwiZXh0cmFPcHRpb25zIiwiYXJyYXkiLCJvZiIsInRleHQiLCJwcmljZSIsInRpbWVzdGFtcHMiLCJQcm9kdWN0IiwibW9kZWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Product.ts\n");

/***/ }),

/***/ "(api)/./pages/api/product/index.ts":
/*!************************************!*\
  !*** ./pages/api/product/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/mongo */ \"(api)/./utils/mongo.ts\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Product */ \"(api)/./models/Product.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { method  } = req;\n    (0,_utils_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"GET\") {\n        try {\n            const products = await _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n            res.status(200).json(products);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n    if (method === \"POST\") {\n        try {\n            const product = await _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\n            res.status(200).json(product);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdC9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDNkM7QUFDQztBQU05QyxpRUFBZSxPQUFPRSxHQUFtQixFQUFFQyxHQUEwQixHQUFLO0lBQ3hFLE1BQU0sRUFBRUMsTUFBTSxHQUFFLEdBQUdGLEdBQUc7SUFDdEJGLHdEQUFTLEVBQUUsQ0FBQztJQUNaLElBQUlJLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDcEIsSUFBSTtZQUVGLE1BQU1DLFFBQVEsR0FBTSxNQUFNSiw0REFBWSxFQUFFO1lBQ3hDRSxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSCxRQUFRLENBQUMsQ0FBQztTQUNoQyxDQUFDLE9BQU9JLEdBQUcsRUFBTztZQUNqQk4sR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUM7U0FDM0I7S0FDRjtJQUVELElBQUlMLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDckIsSUFBSTtZQUNGLE1BQU1NLE9BQU8sR0FBUSxNQUFNVCw4REFBYyxDQUFDQyxHQUFHLENBQUNVLElBQUksQ0FBQztZQUNuRFQsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0UsT0FBTyxDQUFDLENBQUM7U0FDL0IsQ0FBQyxPQUFPRCxHQUFHLEVBQU87WUFDakJOLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO0tBQ0Y7Q0FDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1hcHAvLi9wYWdlcy9hcGkvcHJvZHVjdC9pbmRleC50cz82NzczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi8uLi91dGlscy9tb25nb1wiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uLy4uLy4uL21vZGVscy9Qcm9kdWN0XCI7XG5cbnR5cGUgRGF0YSA9IHtcbiAgbmFtZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+KSA9PiB7XG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XG4gIGRiQ29ubmVjdCgpO1xuICBpZiAobWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgXG4gICAgICBjb25zdCBwcm9kdWN0czphbnkgPWF3YWl0IFByb2R1Y3QuZmluZCgpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocHJvZHVjdHMpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByb2R1Y3Q6IGFueSA9IGF3YWl0IFByb2R1Y3QuY3JlYXRlKHJlcS5ib2R5KTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2R1Y3QpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xuICAgIH1cbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJQcm9kdWN0IiwicmVxIiwicmVzIiwibWV0aG9kIiwicHJvZHVjdHMiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsImVyciIsInByb2R1Y3QiLCJjcmVhdGUiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/product/index.ts\n");

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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/product/index.ts"));
module.exports = __webpack_exports__;

})();