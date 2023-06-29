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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useUser; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\n\n\nfunction useUser() {\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/user/userInfo\"), data = ref.data, error = ref.error;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (data && !data.success) {\n            router.push(\"/log-in\");\n        }\n    }, [\n        data,\n        router\n    ]);\n    return {\n        user: data === null || data === void 0 ? void 0 : data.user,\n        isLoading: !data && !error\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50L3VzZVVzZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ047QUFDVDtBQUVWLFNBQVNHLE9BQU8sR0FBRztJQUNoQyxJQUF3QkQsR0FBNEIsR0FBNUJBLCtDQUFNLENBQUMsb0JBQW9CLENBQUMsRUFBNUNFLElBQUksR0FBWUYsR0FBNEIsQ0FBNUNFLElBQUksRUFBRUMsS0FBSyxHQUFLSCxHQUE0QixDQUF0Q0csS0FBSztJQUNuQixJQUFNQyxNQUFNLEdBQUdOLHNEQUFTLEVBQUU7SUFDMUJDLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlHLElBQUksSUFBSSxDQUFDQSxJQUFJLENBQUNHLE9BQU8sRUFBRTtZQUN6QkQsTUFBTSxDQUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEI7S0FDRixFQUFFO1FBQUNKLElBQUk7UUFBRUUsTUFBTTtLQUFDLENBQUMsQ0FBQztJQUVuQixPQUFPO1FBQUVHLElBQUksRUFBRUwsSUFBSSxhQUFKQSxJQUFJLFdBQU0sR0FBVkEsS0FBQUEsQ0FBVSxHQUFWQSxJQUFJLENBQUVLLElBQUk7UUFBRUMsU0FBUyxFQUFFLENBQUNOLElBQUksSUFBSSxDQUFDQyxLQUFLO0tBQUUsQ0FBQztDQUN6RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvY2xpZW50L3VzZVVzZXIudHM/ZWQ4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVXNlcigpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXCIvYXBpL3VzZXIvdXNlckluZm9cIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkYXRhICYmICFkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvbG9nLWluXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhLCByb3V0ZXJdKTtcclxuXHJcbiAgcmV0dXJuIHsgdXNlcjogZGF0YT8udXNlciwgaXNMb2FkaW5nOiAhZGF0YSAmJiAhZXJyb3IgfTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU1dSIiwidXNlVXNlciIsImRhdGEiLCJlcnJvciIsInJvdXRlciIsInN1Y2Nlc3MiLCJwdXNoIiwidXNlciIsImlzTG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/client/useUser.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _components_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/spinner */ \"./components/spinner.tsx\");\n/* harmony import */ var _components_postWriteBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/postWriteBtn */ \"./components/postWriteBtn.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _lib_client_useUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/client/useUser */ \"./lib/client/useUser.ts\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar App = function() {\n    var _this1 = _this;\n    var ref5;\n    _s();\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/post\"), postData = ref1.data, error = ref1.error;\n    var ref2 = (0,_lib_client_useUser__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), user = ref2.user, isLoading = ref2.isLoading;\n    console.log(error);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: postData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            title: \"Home\",\n            useLogout: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"space-y-8 mt-[46px]\",\n                    children: postData === null || postData === void 0 ? void 0 : (ref5 = postData.post) === null || ref5 === void 0 ? void 0 : ref5.map(function(post) {\n                        var ref, ref3, ref4;\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"bg-[#302d2d] rounded-md p-5 shadow-lg shadow-zinc-300 drop-shadow-2xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/tweet/\".concat(post === null || post === void 0 ? void 0 : post.id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"question font-semibold text-[24px] line-clamp-2\",\n                                                style: {\n                                                    wordBreak: \"keep-all\"\n                                                },\n                                                children: post === null || post === void 0 ? void 0 : post.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\index.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"writer mt-3 font-bold text-\",\n                                                children: [\n                                                    \"\\uC791\\uC131\\uC790: \",\n                                                    post === null || post === void 0 ? void 0 : (ref = post.user) === null || ref === void 0 ? void 0 : ref.name\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\index.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"mt-3 line-clamp-6\",\n                                                style: {\n                                                    wordBreak: \"keep-all\"\n                                                },\n                                                children: post === null || post === void 0 ? void 0 : post.post\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\index.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 21\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\index.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 19\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\index.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 17\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between mt-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"mr-4 flex\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                                            viewBox: \"0 0 24 24\",\n                                                            fill: \"currentColor\",\n                                                            className: \"mr-1 w-6 h-6\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                d: \"M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\index.tsx\",\n                                                                lineNumber: 51,\n                                                                columnNumber: 25\n                                                            }, _this1)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\index.tsx\",\n                                                            lineNumber: 50,\n                                                            columnNumber: 23\n                                                        }, _this1),\n                                                        post === null || post === void 0 ? void 0 : (ref3 = post._count) === null || ref3 === void 0 ? void 0 : ref3.Favorites\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 21\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                                            viewBox: \"0 0 24 24\",\n                                                            fill: \"currentColor\",\n                                                            className: \"mr-1 w-6 h-6\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                fillRule: \"evenodd\",\n                                                                d: \"M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z\",\n                                                                clipRule: \"evenodd\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\index.tsx\",\n                                                                lineNumber: 57,\n                                                                columnNumber: 25\n                                                            }, _this1)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\index.tsx\",\n                                                            lineNumber: 56,\n                                                            columnNumber: 23\n                                                        }, _this1),\n                                                        post === null || post === void 0 ? void 0 : (ref4 = post._count) === null || ref4 === void 0 ? void 0 : ref4.comments\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\index.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 19\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: new Date(post.createdAt).toLocaleDateString()\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\index.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\index.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, _this1)\n                            ]\n                        }, post === null || post === void 0 ? void 0 : post.id, true, {\n                            fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 15\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_postWriteBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\index.tsx\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_spinner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\index.tsx\",\n            lineNumber: 75,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(App, \"JXxntlPZUBMCnKB5xwNxgz8eL/c=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _lib_client_useUser__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgeyBQb3N0LCBVc2VyIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiQC9jb21wb25lbnRzL3NwaW5uZXJcIjtcbmltcG9ydCBQb3N0V3JpdGVCdG4gZnJvbSBcIkAvY29tcG9uZW50cy9wb3N0V3JpdGVCdG5cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB1c2VVc2VyIGZyb20gXCJAL2xpYi9jbGllbnQvdXNlVXNlclwiO1xuXG5pbnRlcmZhY2UgUG9zdFdpdGhVc2VyIGV4dGVuZHMgUG9zdCB7XG4gIHVzZXI6IFVzZXI7XG4gIF9jb3VudDoge1xuICAgIGNvbW1lbnRzOiBib29sZWFuO1xuICAgIEZhdm9yaXRlczogYm9vbGVhbjtcbiAgfTtcbn1cblxuaW50ZXJmYWNlIElQb3N0IHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgcG9zdDogUG9zdFdpdGhVc2VyW107XG4gIG5vU2Vzc2lvbj86IGJvb2xlYW47XG59XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBwb3N0RGF0YSwgZXJyb3IgfSA9IHVzZVNXUjxJUG9zdD4oXCIvYXBpL3Bvc3RcIik7XG4gIGNvbnN0IHt1c2VyLCBpc0xvYWRpbmd9ID0gdXNlVXNlcigpO1xuXG4gIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Bvc3REYXRhID8gKFxuICAgICAgICA8TGF5b3V0IHRpdGxlPVwiSG9tZVwiIHVzZUxvZ291dD5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS04IG10LVs0NnB4XVwiPlxuICAgICAgICAgICAge3Bvc3REYXRhPy5wb3N0Py5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17cG9zdD8uaWR9IGNsYXNzTmFtZT1cImJnLVsjMzAyZDJkXSByb3VuZGVkLW1kIHAtNSBzaGFkb3ctbGcgc2hhZG93LXppbmMtMzAwIGRyb3Atc2hhZG93LTJ4bFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdHdlZXQvJHtwb3N0Py5pZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicXVlc3Rpb24gZm9udC1zZW1pYm9sZCB0ZXh0LVsyNHB4XSBsaW5lLWNsYW1wLTJcIiBzdHlsZT17eyB3b3JkQnJlYWs6IFwia2VlcC1hbGxcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7cG9zdD8udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JpdGVyIG10LTMgZm9udC1ib2xkIHRleHQtXCI+7J6R7ISx7J6QOiB7cG9zdD8udXNlcj8ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyBsaW5lLWNsYW1wLTZcIiBzdHlsZT17eyB3b3JkQnJlYWs6IFwia2VlcC1hbGxcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7cG9zdD8ucG9zdH1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbXQtM1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItNCBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJtci0xIHctNiBoLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTEuNjQ1IDIwLjkxbC0uMDA3LS4wMDMtLjAyMi0uMDEyYTE1LjI0NyAxNS4yNDcgMCAwMS0uMzgzLS4yMTggMjUuMTggMjUuMTggMCAwMS00LjI0NC0zLjE3QzQuNjg4IDE1LjM2IDIuMjUgMTIuMTc0IDIuMjUgOC4yNSAyLjI1IDUuMzIyIDQuNzE0IDMgNy42ODggM0E1LjUgNS41IDAgMDExMiA1LjA1MiA1LjUgNS41IDAgMDExNi4zMTMgM2MyLjk3MyAwIDUuNDM3IDIuMzIyIDUuNDM3IDUuMjUgMCAzLjkyNS0yLjQzOCA3LjExMS00LjczOSA5LjI1NmEyNS4xNzUgMjUuMTc1IDAgMDEtNC4yNDQgMy4xNyAxNS4yNDcgMTUuMjQ3IDAgMDEtLjM4My4yMTlsLS4wMjIuMDEyLS4wMDcuMDA0LS4wMDMuMDAxYS43NTIuNzUyIDAgMDEtLjcwNCAwbC0uMDAzLS4wMDF6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICB7cG9zdD8uX2NvdW50Py5GYXZvcml0ZXN9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzTmFtZT1cIm1yLTEgdy02IGgtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01LjMzNyAyMS43MThhNi43MDcgNi43MDcgMCAwMS0uNTMzLS4wNzQuNzUuNzUgMCAwMS0uNDQtMS4yMjMgMy43MyAzLjczIDAgMDAuODE0LTEuNjg2Yy4wMjMtLjExNS0uMDIyLS4zMTctLjI1NC0uNTQzQzMuMjc0IDE2LjU4NyAyLjI1IDE0LjQxIDIuMjUgMTJjMC01LjAzIDQuNDI4LTkgOS43NS05czkuNzUgMy45NyA5Ljc1IDljMCA1LjAzLTQuNDI4IDktOS43NSA5LS44MzMgMC0xLjY0My0uMDk3LTIuNDE3LS4yNzlhNi43MjEgNi43MjEgMCAwMS00LjI0Ni45OTd6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG5cbiAgICAgICAgICAgICAgICAgICAgICB7cG9zdD8uX2NvdW50Py5jb21tZW50c31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwPntuZXcgRGF0ZShwb3N0LmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8UG9zdFdyaXRlQnRuIC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgKSA6IChcbiAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVNXUiIsIlNwaW5uZXIiLCJQb3N0V3JpdGVCdG4iLCJMYXlvdXQiLCJ1c2VVc2VyIiwiQXBwIiwicG9zdERhdGEiLCJkYXRhIiwiZXJyb3IiLCJ1c2VyIiwiaXNMb2FkaW5nIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwidXNlTG9nb3V0IiwidWwiLCJjbGFzc05hbWUiLCJwb3N0IiwibWFwIiwibGkiLCJocmVmIiwiaWQiLCJhIiwiaDIiLCJzdHlsZSIsIndvcmRCcmVhayIsImRpdiIsIm5hbWUiLCJwIiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94IiwiZmlsbCIsInBhdGgiLCJkIiwiX2NvdW50IiwiRmF2b3JpdGVzIiwiZmlsbFJ1bGUiLCJjbGlwUnVsZSIsImNvbW1lbnRzIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvTG9jYWxlRGF0ZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});