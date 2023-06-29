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

/***/ "./lib/client/useUser.ts":
/*!*******************************!*\
  !*** ./lib/client/useUser.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useUser; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\n\n\nfunction useUser() {\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/user/userInfo\"), data = ref.data, error = ref.error;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (data && !data.success) {\n            router.push(\"/log-in\");\n        }\n    }, [\n        data,\n        router\n    ]);\n    if (!data && !error) {\n        // 데이터가 로딩 중일 때 로딩 상태를 반환하도록 합니다.\n        return {\n            user: null,\n            isLoading: true\n        };\n    }\n    return {\n        user: data === null || data === void 0 ? void 0 : data.user,\n        isLoading: false\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50L3VzZVVzZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ047QUFDVDtBQUVWLFNBQVNHLE9BQU8sR0FBRztJQUNoQyxJQUF3QkQsR0FBNEIsR0FBNUJBLCtDQUFNLENBQUMsb0JBQW9CLENBQUMsRUFBNUNFLElBQUksR0FBWUYsR0FBNEIsQ0FBNUNFLElBQUksRUFBRUMsS0FBSyxHQUFLSCxHQUE0QixDQUF0Q0csS0FBSztJQUNuQixJQUFNQyxNQUFNLEdBQUdOLHNEQUFTLEVBQUU7SUFDMUJDLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlHLElBQUksSUFBSSxDQUFDQSxJQUFJLENBQUNHLE9BQU8sRUFBRTtZQUN6QkQsTUFBTSxDQUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEI7S0FDRixFQUFFO1FBQUNKLElBQUk7UUFBRUUsTUFBTTtLQUFDLENBQUMsQ0FBQztJQUVuQixJQUFJLENBQUNGLElBQUksSUFBSSxDQUFDQyxLQUFLLEVBQUU7UUFDbkI7UUFDQSxPQUFPO1lBQUVJLElBQUksRUFBRSxJQUFJO1lBQUVDLFNBQVMsRUFBRSxJQUFJO1NBQUUsQ0FBQztLQUN4QztJQUVELE9BQU87UUFBRUQsSUFBSSxFQUFFTCxJQUFJLGFBQUpBLElBQUksV0FBTSxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLElBQUksQ0FBRUssSUFBSTtRQUFFQyxTQUFTLEVBQUUsS0FBSztLQUFFLENBQUM7Q0FDL0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NsaWVudC91c2VVc2VyLnRzP2VkODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVVzZXIoKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFwiL2FwaS91c2VyL3VzZXJJbmZvXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGF0YSAmJiAhZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZy1pblwiKTtcclxuICAgIH1cclxuICB9LCBbZGF0YSwgcm91dGVyXSk7XHJcblxyXG4gIGlmICghZGF0YSAmJiAhZXJyb3IpIHtcclxuICAgIC8vIOuNsOydtO2EsOqwgCDroZzrlKkg7KSR7J28IOuVjCDroZzrlKkg7IOB7YOc66W8IOuwmO2ZmO2VmOuPhOuhnSDtlanri4jri6QuXHJcbiAgICByZXR1cm4geyB1c2VyOiBudWxsLCBpc0xvYWRpbmc6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IHVzZXI6IGRhdGE/LnVzZXIsIGlzTG9hZGluZzogZmFsc2UgfTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU1dSIiwidXNlVXNlciIsImRhdGEiLCJlcnJvciIsInJvdXRlciIsInN1Y2Nlc3MiLCJwdXNoIiwidXNlciIsImlzTG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/client/useUser.ts\n");

/***/ })

});