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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Product\": () => (/* binding */ Product)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ts_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-mongoose */ \"ts-mongoose\");\n/* harmony import */ var ts_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ts_mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ProductSchema = (0,ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.createSchema)({\n    title: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.string({\n        required: true,\n        maxlength: 60\n    }),\n    desc: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.string({\n        required: true,\n        maxlength: 200\n    }),\n    img: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.string({\n        required: true\n    }),\n    prices: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.array({\n        required: true\n    }).of(ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.number({\n        required: true\n    })),\n    extraOptions: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.array().of({\n        text: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.string({\n            required: true\n        }),\n        price: ts_mongoose__WEBPACK_IMPORTED_MODULE_1__.Type.number({\n            required: true\n        })\n    })\n}, {\n    timestamps: true\n});\nconst Product = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", ProductSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUM2QjtBQUU3RCxNQUFNRyxhQUFhLEdBQUdGLHlEQUFZLENBQ2hDO0lBQ0VHLEtBQUssRUFBRUYsb0RBQVcsQ0FBQztRQUFFSSxRQUFRLEVBQUUsSUFBSTtRQUFFQyxTQUFTLEVBQUUsRUFBRTtLQUFFLENBQUM7SUFDckRDLElBQUksRUFBRU4sb0RBQVcsQ0FBQztRQUFFSSxRQUFRLEVBQUUsSUFBSTtRQUFFQyxTQUFTLEVBQUUsR0FBRztLQUFFLENBQUM7SUFDckRFLEdBQUcsRUFBRVAsb0RBQVcsQ0FBQztRQUFFSSxRQUFRLEVBQUUsSUFBSTtLQUFFLENBQUM7SUFDcENJLE1BQU0sRUFBRVIsbURBQVUsQ0FBQztRQUFFSSxRQUFRLEVBQUUsSUFBSTtLQUFFLENBQUMsQ0FBQ00sRUFBRSxDQUFDVixvREFBVyxDQUFDO1FBQUNJLFFBQVEsRUFBQyxJQUFJO0tBQUMsQ0FBQyxDQUFDO0lBQ3ZFUSxZQUFZLEVBQUVaLG1EQUFVLEVBQUUsQ0FBQ1UsRUFBRSxDQUFDO1FBQzVCRyxJQUFJLEVBQUViLG9EQUFXLENBQUM7WUFBRUksUUFBUSxFQUFFLElBQUk7U0FBRSxDQUFDO1FBQ3JDVSxLQUFLLEVBQUVkLG9EQUFXLENBQUM7WUFBRUksUUFBUSxFQUFFLElBQUk7U0FBRSxDQUFDO0tBQ3ZDLENBQUM7Q0FDSCxFQUNEO0lBQUVXLFVBQVUsRUFBRSxJQUFJO0NBQUUsQ0FDckI7QUFFTSxNQUFNQyxPQUFPLEdBQUNsQixnRUFBdUIsSUFBRUEscURBQWMsQ0FBQyxTQUFTLEVBQUNHLGFBQWEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QtYXBwLy4vbW9kZWxzL1Byb2R1Y3QudHM/YTdiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgeyBjcmVhdGVTY2hlbWEsIFR5cGUsIHR5cGVkTW9kZWwgfSBmcm9tIFwidHMtbW9uZ29vc2VcIjtcblxuY29uc3QgUHJvZHVjdFNjaGVtYSA9IGNyZWF0ZVNjaGVtYShcbiAge1xuICAgIHRpdGxlOiBUeXBlLnN0cmluZyh7IHJlcXVpcmVkOiB0cnVlLCBtYXhsZW5ndGg6IDYwIH0pLFxuICAgIGRlc2M6IFR5cGUuc3RyaW5nKHsgcmVxdWlyZWQ6IHRydWUsIG1heGxlbmd0aDogMjAwIH0pLFxuICAgIGltZzogVHlwZS5zdHJpbmcoeyByZXF1aXJlZDogdHJ1ZSB9KSxcbiAgICBwcmljZXM6IFR5cGUuYXJyYXkoeyByZXF1aXJlZDogdHJ1ZSB9KS5vZihUeXBlLm51bWJlcih7cmVxdWlyZWQ6dHJ1ZX0pKSxcbiAgICBleHRyYU9wdGlvbnM6IFR5cGUuYXJyYXkoKS5vZih7XG4gICAgICB0ZXh0OiBUeXBlLnN0cmluZyh7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgcHJpY2U6IFR5cGUubnVtYmVyKHsgcmVxdWlyZWQ6IHRydWUgfSksXG4gICAgfSksXG4gIH0sXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XG4pO1xuXG5leHBvcnQgY29uc3QgUHJvZHVjdD1tb25nb29zZS5tb2RlbHMuUHJvZHVjdHx8bW9uZ29vc2UubW9kZWwoXCJQcm9kdWN0XCIsUHJvZHVjdFNjaGVtYSlcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNyZWF0ZVNjaGVtYSIsIlR5cGUiLCJQcm9kdWN0U2NoZW1hIiwidGl0bGUiLCJzdHJpbmciLCJyZXF1aXJlZCIsIm1heGxlbmd0aCIsImRlc2MiLCJpbWciLCJwcmljZXMiLCJhcnJheSIsIm9mIiwibnVtYmVyIiwiZXh0cmFPcHRpb25zIiwidGV4dCIsInByaWNlIiwidGltZXN0YW1wcyIsIlByb2R1Y3QiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Product.ts\n");

/***/ }),

/***/ "(api)/./pages/api/product/index.ts":
/*!************************************!*\
  !*** ./pages/api/product/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/mongo */ \"(api)/./utils/mongo.ts\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Product */ \"(api)/./models/Product.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { method , cookies  } = req;\n    const token = cookies.token;\n    await (0,_utils_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"GET\") {\n        try {\n            const products = await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.find();\n            res.status(200).json(products);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n    if (method === \"POST\") {\n        try {\n            if (!token || token !== process.env.TOKEN) {\n                const message = \"Not authenticated\";\n                return res.status(401).json(message);\n            }\n            const product = await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.create(req.body);\n            res.status(200).json(product);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdC9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDNkM7QUFDSztBQU1sRCxpRUFBZSxPQUFPRSxHQUFtQixFQUFFQyxHQUEwQixHQUFLO0lBQ3hFLE1BQU0sRUFBRUMsTUFBTSxHQUFFQyxPQUFPLEdBQUUsR0FBR0gsR0FBRztJQUMvQixNQUFNSSxLQUFLLEdBQUdELE9BQU8sQ0FBQ0MsS0FBSztJQUMzQixNQUFNTix3REFBUyxFQUFFLENBQUM7SUFDbEIsSUFBSUksTUFBTSxLQUFLLEtBQUssRUFBRTtRQUNwQixJQUFJO1lBQ0YsTUFBTUcsUUFBUSxHQUFRLE1BQU1OLHlEQUFZLEVBQUU7WUFDMUNFLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNILFFBQVEsQ0FBQyxDQUFDO1NBQ2hDLENBQUMsT0FBT0ksR0FBRyxFQUFPO1lBQ2pCUixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQztTQUMzQjtLQUNGO0lBRUQsSUFBSVAsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUNyQixJQUFJO1lBQ0YsSUFBSSxDQUFDRSxLQUFLLElBQUlBLEtBQUssS0FBS00sT0FBTyxDQUFDQyxHQUFHLENBQUNDLEtBQUssRUFBRTtnQkFDekMsTUFBTUMsT0FBTyxHQUFLLG1CQUFtQjtnQkFDckMsT0FBT1osR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0ssT0FBTyxDQUFDLENBQUM7YUFDdEM7WUFDRCxNQUFNQyxPQUFPLEdBQVEsTUFBTWYsMkRBQWMsQ0FBQ0MsR0FBRyxDQUFDZ0IsSUFBSSxDQUFDO1lBQ25EZixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTSxPQUFPLENBQUMsQ0FBQztTQUMvQixDQUFDLE9BQU9MLEdBQUcsRUFBTztZQUNqQlIsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUM7U0FDM0I7S0FDRjtDQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLWFwcC8uL3BhZ2VzL2FwaS9wcm9kdWN0L2luZGV4LnRzPzY3NzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL21vbmdvXCI7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9Qcm9kdWN0XCI7XG5cbnR5cGUgRGF0YSA9IHtcbiAgbmFtZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+KSA9PiB7XG4gIGNvbnN0IHsgbWV0aG9kLCBjb29raWVzIH0gPSByZXE7XG4gIGNvbnN0IHRva2VuID0gY29va2llcy50b2tlbjtcbiAgYXdhaXQgZGJDb25uZWN0KCk7XG4gIGlmIChtZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJvZHVjdHM6IGFueSA9IGF3YWl0IFByb2R1Y3QuZmluZCgpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocHJvZHVjdHMpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghdG9rZW4gfHwgdG9rZW4gIT09IHByb2Nlc3MuZW52LlRPS0VOKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6YW55PVwiTm90IGF1dGhlbnRpY2F0ZWRcIlxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24obWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBjb25zdCBwcm9kdWN0OiBhbnkgPSBhd2FpdCBQcm9kdWN0LmNyZWF0ZShyZXEuYm9keSk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwcm9kdWN0KTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcbiAgICB9XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiUHJvZHVjdCIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvb2tpZXMiLCJ0b2tlbiIsInByb2R1Y3RzIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJwcm9jZXNzIiwiZW52IiwiVE9LRU4iLCJtZXNzYWdlIiwicHJvZHVjdCIsImNyZWF0ZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/product/index.ts\n");

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