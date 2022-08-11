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
exports.id = "pages/api/product/[id]";
exports.ids = ["pages/api/product/[id]"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Product\": () => (/* binding */ Product)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ts_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-mongoose */ \"ts-mongoose\");\n/* harmony import */ var ts_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ts_mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ProductSchema = (0,ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.createSchema)({\n    title: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.string({\n        required: true,\n        maxlength: 60\n    }),\n    desc: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.string({\n        required: true,\n        maxlength: 200\n    }),\n    img: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.string({\n        required: true\n    }),\n    prices: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.array({\n        required: true\n    }).of(ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.number({\n        required: true\n    })),\n    extraOptions: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.array().of({\n        text: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.string({\n            required: true\n        }),\n        price: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.number({\n            required: true\n        })\n    })\n}, {\n    timestamps: true\n});\nconst Product = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", ProductSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUM2QjtBQUU3RCxNQUFNRyxhQUFhLEdBQUdGLHlEQUFZLENBQ2hDO0lBQ0VHLEtBQUssRUFBRUYsb0RBQVcsQ0FBQztRQUFFSSxRQUFRLEVBQUUsSUFBSTtRQUFFQyxTQUFTLEVBQUUsRUFBRTtLQUFFLENBQUM7SUFDckRDLElBQUksRUFBRU4sb0RBQVcsQ0FBQztRQUFFSSxRQUFRLEVBQUUsSUFBSTtRQUFFQyxTQUFTLEVBQUUsR0FBRztLQUFFLENBQUM7SUFDckRFLEdBQUcsRUFBRVAsb0RBQVcsQ0FBQztRQUFFSSxRQUFRLEVBQUUsSUFBSTtLQUFFLENBQUM7SUFDcENJLE1BQU0sRUFBRVIsbURBQVUsQ0FBQztRQUFFSSxRQUFRLEVBQUUsSUFBSTtLQUFFLENBQUMsQ0FBQ00sRUFBRSxDQUFDVixvREFBVyxDQUFDO1FBQUNJLFFBQVEsRUFBQyxJQUFJO0tBQUMsQ0FBQyxDQUFDO0lBQ3ZFUSxZQUFZLEVBQUVaLG1EQUFVLEVBQUUsQ0FBQ1UsRUFBRSxDQUFDO1FBQzVCRyxJQUFJLEVBQUViLG9EQUFXLENBQUM7WUFBRUksUUFBUSxFQUFFLElBQUk7U0FBRSxDQUFDO1FBQ3JDVSxLQUFLLEVBQUVkLG9EQUFXLENBQUM7WUFBRUksUUFBUSxFQUFFLElBQUk7U0FBRSxDQUFDO0tBQ3ZDLENBQUM7Q0FDSCxFQUNEO0lBQUVXLFVBQVUsRUFBRSxJQUFJO0NBQUUsQ0FDckI7QUFFTSxNQUFNQyxPQUFPLEdBQUNsQixnRUFBdUIsSUFBRUEscURBQWMsQ0FBQyxTQUFTLEVBQUNHLGFBQWEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QtYXBwLy4vbW9kZWxzL1Byb2R1Y3QudHM/YTdiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgeyBjcmVhdGVTY2hlbWEsIFR5cGUsIHR5cGVkTW9kZWwgfSBmcm9tIFwidHMtbW9uZ29vc2VcIjtcblxuY29uc3QgUHJvZHVjdFNjaGVtYSA9IGNyZWF0ZVNjaGVtYShcbiAge1xuICAgIHRpdGxlOiBUeXBlLnN0cmluZyh7IHJlcXVpcmVkOiB0cnVlLCBtYXhsZW5ndGg6IDYwIH0pLFxuICAgIGRlc2M6IFR5cGUuc3RyaW5nKHsgcmVxdWlyZWQ6IHRydWUsIG1heGxlbmd0aDogMjAwIH0pLFxuICAgIGltZzogVHlwZS5zdHJpbmcoeyByZXF1aXJlZDogdHJ1ZSB9KSxcbiAgICBwcmljZXM6IFR5cGUuYXJyYXkoeyByZXF1aXJlZDogdHJ1ZSB9KS5vZihUeXBlLm51bWJlcih7cmVxdWlyZWQ6dHJ1ZX0pKSxcbiAgICBleHRyYU9wdGlvbnM6IFR5cGUuYXJyYXkoKS5vZih7XG4gICAgICB0ZXh0OiBUeXBlLnN0cmluZyh7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgcHJpY2U6IFR5cGUubnVtYmVyKHsgcmVxdWlyZWQ6IHRydWUgfSksXG4gICAgfSksXG4gIH0sXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XG4pO1xuXG5leHBvcnQgY29uc3QgUHJvZHVjdD1tb25nb29zZS5tb2RlbHMuUHJvZHVjdHx8bW9uZ29vc2UubW9kZWwoXCJQcm9kdWN0XCIsUHJvZHVjdFNjaGVtYSlcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNyZWF0ZVNjaGVtYSIsIlR5cGUiLCJQcm9kdWN0U2NoZW1hIiwidGl0bGUiLCJzdHJpbmciLCJyZXF1aXJlZCIsIm1heGxlbmd0aCIsImRlc2MiLCJpbWciLCJwcmljZXMiLCJhcnJheSIsIm9mIiwibnVtYmVyIiwiZXh0cmFPcHRpb25zIiwidGV4dCIsInByaWNlIiwidGltZXN0YW1wcyIsIlByb2R1Y3QiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Product.ts\n");

/***/ }),

/***/ "(api)/./pages/api/product/[id].ts":
/*!***********************************!*\
  !*** ./pages/api/product/[id].ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/mongo */ \"(api)/./utils/mongo.ts\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Product */ \"(api)/./models/Product.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { method , query: { id  } ,  } = req;\n    await (0,_utils_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"GET\") {\n        try {\n            const product = await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.findById(id);\n            res.status(200).json(product);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n    if (method === \"PUT\") {\n        try {\n            const product = await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.create(req.body);\n            res.status(200).json(product);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n    if (method === \"DELETE\") {\n        try {\n            await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.findByIdAndDelete(id);\n            const message = \"The Product has been deleted\";\n            res.status(200).json(message);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdC9baWRdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUM2QztBQUNLO0FBTWxELGlFQUFlLE9BQU9FLEdBQW1CLEVBQUVDLEdBQTBCLEdBQUs7SUFDeEUsTUFBTSxFQUNKQyxNQUFNLEdBQ05DLEtBQUssRUFBRSxFQUFFQyxFQUFFLEdBQUUsS0FDZCxHQUFHSixHQUFHO0lBQ1AsTUFBTUYsd0RBQVMsRUFBRSxDQUFDO0lBQ2xCLElBQUlJLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDcEIsSUFBSTtZQUNGLE1BQU1HLE9BQU8sR0FBUSxNQUFNTiw2REFBZ0IsQ0FBQ0ssRUFBRSxDQUFDO1lBQy9DSCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSCxPQUFPLENBQUMsQ0FBQztTQUMvQixDQUFDLE9BQU9JLEdBQUcsRUFBTztZQUNqQlIsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUM7U0FDM0I7S0FDRjtJQUVELElBQUlQLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDcEIsSUFBSTtZQUNGLE1BQU1HLE9BQU8sR0FBUSxNQUFNTiwyREFBYyxDQUFDQyxHQUFHLENBQUNXLElBQUksQ0FBQztZQUNuRFYsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsT0FBTyxDQUFDLENBQUM7U0FDL0IsQ0FBQyxPQUFPSSxHQUFHLEVBQU87WUFDakJSLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO0tBQ0Y7SUFDRCxJQUFJUCxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQ3ZCLElBQUk7WUFDRixNQUFNSCxzRUFBeUIsQ0FBQ0ssRUFBRSxDQUFDLENBQUM7WUFDcEMsTUFBTVMsT0FBTyxHQUFRLDhCQUE4QjtZQUNuRFosR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0ssT0FBTyxDQUFDLENBQUM7U0FDL0IsQ0FBQyxPQUFPSixHQUFHLEVBQU87WUFDakJSLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO0tBQ0Y7Q0FDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1hcHAvLi9wYWdlcy9hcGkvcHJvZHVjdC9baWRdLnRzPzc1OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL21vbmdvXCI7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9Qcm9kdWN0XCI7XG5cbnR5cGUgRGF0YSA9IHtcbiAgbmFtZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBtZXRob2QsXG4gICAgcXVlcnk6IHsgaWQgfSxcbiAgfSA9IHJlcTtcbiAgYXdhaXQgZGJDb25uZWN0KCk7XG4gIGlmIChtZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJvZHVjdDogYW55ID0gYXdhaXQgUHJvZHVjdC5maW5kQnlJZChpZCk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwcm9kdWN0KTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcbiAgICB9XG4gIH1cblxuICBpZiAobWV0aG9kID09PSBcIlBVVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByb2R1Y3Q6IGFueSA9IGF3YWl0IFByb2R1Y3QuY3JlYXRlKHJlcS5ib2R5KTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2R1Y3QpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xuICAgIH1cbiAgfVxuICBpZiAobWV0aG9kID09PSBcIkRFTEVURVwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IFByb2R1Y3QuZmluZEJ5SWRBbmREZWxldGUoaWQpO1xuICAgICAgY29uc3QgbWVzc2FnZTogYW55ID0gXCJUaGUgUHJvZHVjdCBoYXMgYmVlbiBkZWxldGVkXCI7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihtZXNzYWdlKTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcbiAgICB9XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiUHJvZHVjdCIsInJlcSIsInJlcyIsIm1ldGhvZCIsInF1ZXJ5IiwiaWQiLCJwcm9kdWN0IiwiZmluZEJ5SWQiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiY3JlYXRlIiwiYm9keSIsImZpbmRCeUlkQW5kRGVsZXRlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/product/[id].ts\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/product/[id].ts"));
module.exports = __webpack_exports__;

})();