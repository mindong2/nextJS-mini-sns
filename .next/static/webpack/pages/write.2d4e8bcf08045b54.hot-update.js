"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/write",{

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/client/useMutation */ \"./lib/client/useMutation.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var title = param.title, children = param.children, useLogout = param.useLogout;\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var random = function(x, y) {\n        return x + Math.random() * (y - x);\n    };\n    var ref = _slicedToArray((0,_lib_client_useMutation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/api/logout\"), 2), logout = ref[0], ref1 = ref[1], data = ref1.data, loading = ref1.loading;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (loading) return;\n        if (data === null || data === void 0 ? void 0 : data.success) {\n            router.replace(\"/log-in\");\n        }\n    }, [\n        data,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page max-w-[90%] md:max-w-[600px] mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: new Array(300).fill(0).map(function(star, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"star\",\n                        style: {\n                            animationDuration: \"\".concat(random(5, 10), \"s\"),\n                            top: \"\".concat(random(0, 98), \"%\"),\n                            left: \"\".concat(random(0, 98), \"%\")\n                        }\n                    }, i, false, {\n                        fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\components\\\\layout.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 18\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\components\\\\layout.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            useLogout ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"flex justify-between px-6 py-5 bg-[#302d2d]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \" text-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                viewBox: \"0 0 20 20\",\n                                \"aria-hidden\": \"true\",\n                                className: \"w-8 h-8 fill-white\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\components\\\\layout.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\components\\\\layout.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\components\\\\layout.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\components\\\\layout.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-semibold text-[20px] flex-1 text-center\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\components\\\\layout.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"font-semibold text-[20px] flex-1 text-center\",\n                        onClick: function() {\n                            return logout(\"\");\n                        },\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\components\\\\layout.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\components\\\\layout.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, _this) : null,\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\components\\\\layout.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"aOWgdGY3vsrbHpxZbL3caQ/D8BE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU1Rjs7Ozs7NkJBQVM7Ozs7OztxQkFDRixHQUNQLElBQUk7WUFDUFAsUUFBUTs7Ozs7O2FBQ0wsQ0FDTjtDQUNIO0dBckNLRixNQUFNOztRQUNLRixrREFBUztRQUlZRiwrREFBVzs7O0FBTDNDSSxLQUFBQSxNQUFNO0FBdUNaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQudHN4P2FmMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZU11dGF0aW9uIGZyb20gXCJAL2xpYi9jbGllbnQvdXNlTXV0YXRpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgSUxheW91dCB7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICB1c2VMb2dvdXQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgZGF0YVR5cGUge1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IExheW91dCA9ICh7IHRpdGxlLCBjaGlsZHJlbiwgdXNlTG9nb3V0IH06IElMYXlvdXQpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCByYW5kb20gPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiB4ICsgTWF0aC5yYW5kb20oKSAqICh5IC0geCk7XHJcbiAgfTtcclxuICBjb25zdCBbbG9nb3V0LCB7IGRhdGEsIGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbjxkYXRhVHlwZT4oXCIvYXBpL2xvZ291dFwiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybjtcclxuICAgIGlmIChkYXRhPy5zdWNjZXNzKSB7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2xvZy1pblwiKTtcclxuICAgIH1cclxuICB9LCBbZGF0YSwgcm91dGVyXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZSBtYXgtdy1bOTAlXSBtZDptYXgtdy1bNjAwcHhdIG14LWF1dG9cIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7bmV3IEFycmF5KDMwMCkuZmlsbCgwKS5tYXAoKHN0YXIsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT1cInN0YXJcIiBzdHlsZT17eyBhbmltYXRpb25EdXJhdGlvbjogYCR7cmFuZG9tKDUsIDEwKX1zYCwgdG9wOiBgJHtyYW5kb20oMCwgOTgpfSVgLCBsZWZ0OiBgJHtyYW5kb20oMCwgOTgpfSVgIH19Pjwvc3Bhbj47XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7dXNlTG9nb3V0ID8gKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcHgtNiBweS01IGJnLVsjMzAyZDJkXVwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTggaC04IGZpbGwtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNi4yOSAxOC4yNTFjNy41NDcgMCAxMS42NzUtNi4yNTMgMTEuNjc1LTExLjY3NSAwLS4xNzggMC0uMzU1LS4wMTItLjUzQTguMzQ4IDguMzQ4IDAgMCAwIDIwIDMuOTJhOC4xOSA4LjE5IDAgMCAxLTIuMzU3LjY0NiA0LjExOCA0LjExOCAwIDAgMCAxLjgwNC0yLjI3IDguMjI0IDguMjI0IDAgMCAxLTIuNjA1Ljk5NiA0LjEwNyA0LjEwNyAwIDAgMC02Ljk5MyAzLjc0MyAxMS42NSAxMS42NSAwIDAgMS04LjQ1Ny00LjI4NyA0LjEwNiA0LjEwNiAwIDAgMCAxLjI3IDUuNDc3QTQuMDczIDQuMDczIDAgMCAxIC44IDcuNzEzdi4wNTJhNC4xMDUgNC4xMDUgMCAwIDAgMy4yOTIgNC4wMjIgNC4wOTUgNC4wOTUgMCAwIDEtMS44NTMuMDcgNC4xMDggNC4xMDggMCAwIDAgMy44MzQgMi44NUE4LjIzMyA4LjIzMyAwIDAgMSAwIDE2LjQwN2ExMS42MTUgMTEuNjE1IDAgMCAwIDYuMjkgMS44NFwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsyMHB4XSBmbGV4LTEgdGV4dC1jZW50ZXJcIj57dGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWzIwcHhdIGZsZXgtMSB0ZXh0LWNlbnRlclwiIG9uQ2xpY2s9eygpID0+IGxvZ291dChcIlwiKX0+XHJcbiAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsidXNlTXV0YXRpb24iLCJMaW5rIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiTGF5b3V0IiwidGl0bGUiLCJjaGlsZHJlbiIsInVzZUxvZ291dCIsInJvdXRlciIsInJhbmRvbSIsIngiLCJ5IiwiTWF0aCIsImxvZ291dCIsImRhdGEiLCJsb2FkaW5nIiwic3VjY2VzcyIsInJlcGxhY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJzdGFyIiwiaSIsInNwYW4iLCJzdHlsZSIsImFuaW1hdGlvbkR1cmF0aW9uIiwidG9wIiwibGVmdCIsImhlYWRlciIsImhyZWYiLCJhIiwic3ZnIiwidmlld0JveCIsImFyaWEtaGlkZGVuIiwicGF0aCIsImQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.tsx\n");

/***/ })

});