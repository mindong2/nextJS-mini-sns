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

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Layout = function(param) {\n    var title = param.title, children = param.children;\n    var _this1 = _this;\n    var random = function(x, y) {\n        return x + Math.random() * (y - x);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page max-w-[90%] md:max-w-[600px] mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: new Array(300).fill(0).map(function(star, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"star\",\n                        style: {\n                            animationDuration: \"\".concat(random(5, 10), \"s\"),\n                            top: \"\".concat(random(0, 98), \"%\"),\n                            left: \"\".concat(random(0, 98), \"%\")\n                        }\n                    }, i, false, {\n                        fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\components\\\\layout.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 18\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\components\\\\layout.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"flex justify-between px-6 py-5 bg-#302d2d\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            viewBox: \"0 0 20 20\",\n                            \"aria-hidden\": \"true\",\n                            className: \"w-8 h-8 fill-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\components\\\\layout.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\components\\\\layout.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\components\\\\layout.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-semibold text-[20px]\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\components\\\\layout.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"font-semibold text-[20px] cursor-pointer\",\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\components\\\\layout.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\components\\\\layout.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\components\\\\layout.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBNkI7QUFPN0IsSUFBTUMsTUFBTSxHQUFHLGdCQUFrQztRQUEvQkMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTs7SUFDL0IsSUFBTUMsTUFBTSxHQUFHLFNBQUNDLENBQVMsRUFBRUMsQ0FBUyxFQUFLO1FBQ3ZDLE9BQU9ELENBQUMsR0FBR0UsSUFBSSxDQUFDSCxNQUFNLEVBQUUsR0FBRyxDQUFDRSxDQUFDLEdBQUdELENBQUMsQ0FBQyxDQUFDO0tBQ3BDO0lBQ0QscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDJDQUEyQzs7MEJBQ3hELDhEQUFDRCxLQUFHOzBCQUNELElBQUlFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxDQUFDLEVBQUs7b0JBQ3ZDLHFCQUFPLDhEQUFDQyxNQUFJO3dCQUFTTixTQUFTLEVBQUMsTUFBTTt3QkFBQ08sS0FBSyxFQUFFOzRCQUFFQyxpQkFBaUIsRUFBRSxFQUFDLENBQWdCLE1BQUMsQ0FBZmIsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBQyxHQUFDLENBQUM7NEJBQUVjLEdBQUcsRUFBRSxFQUFDLENBQWdCLE1BQUMsQ0FBZmQsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBQyxHQUFDLENBQUM7NEJBQUVlLElBQUksRUFBRSxFQUFDLENBQWdCLE1BQUMsQ0FBZmYsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBQyxHQUFDLENBQUM7eUJBQUU7dUJBQTFIVSxDQUFDOzs7OzhCQUFrSSxDQUFDO2lCQUN2SixDQUFDOzs7OztxQkFDRTswQkFDTiw4REFBQ00sUUFBTTtnQkFBQ1gsU0FBUyxFQUFDLDJDQUEyQzs7a0NBQzNELDhEQUFDVCxrREFBSTt3QkFBQ3FCLElBQUksRUFBRSxHQUFHO2tDQUNiLDRFQUFDQyxLQUFHOzRCQUFDQyxPQUFPLEVBQUMsV0FBVzs0QkFBQ0MsYUFBVyxFQUFDLE1BQU07NEJBQUNmLFNBQVMsRUFBQyxvQkFBb0I7c0NBQ3hFLDRFQUFDZ0IsTUFBSTtnQ0FBQ0MsQ0FBQyxFQUFDLDZiQUE2Yjs7Ozs7cUNBQVE7Ozs7O2lDQUN6Yzs7Ozs7NkJBQ0Q7a0NBQ1AsOERBQUNYLE1BQUk7d0JBQUNOLFNBQVMsRUFBQywyQkFBMkI7a0NBQUVQLEtBQUs7Ozs7OzZCQUFRO2tDQUMxRCw4REFBQ3lCLFFBQU07d0JBQUNsQixTQUFTLEVBQUMsMENBQTBDO2tDQUFDLFFBQU07Ozs7OzZCQUFTOzs7Ozs7cUJBQ3JFO1lBQ1JOLFFBQVE7Ozs7OzthQUNMLENBQ047Q0FDSDtBQXZCS0YsS0FBQUEsTUFBTTtBQXlCWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LnRzeD9hZjI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmludGVyZmFjZSBJTGF5b3V0IHtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyB0aXRsZSwgY2hpbGRyZW4gfTogSUxheW91dCkgPT4ge1xyXG4gIGNvbnN0IHJhbmRvbSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIHggKyBNYXRoLnJhbmRvbSgpICogKHkgLSB4KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UgbWF4LXctWzkwJV0gbWQ6bWF4LXctWzYwMHB4XSBteC1hdXRvXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge25ldyBBcnJheSgzMDApLmZpbGwoMCkubWFwKChzdGFyLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9XCJzdGFyXCIgc3R5bGU9e3sgYW5pbWF0aW9uRHVyYXRpb246IGAke3JhbmRvbSg1LCAxMCl9c2AsIHRvcDogYCR7cmFuZG9tKDAsIDk4KX0lYCwgbGVmdDogYCR7cmFuZG9tKDAsIDk4KX0lYCB9fT48L3NwYW4+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBweC02IHB5LTUgYmctIzMwMmQyZFwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyMCAyMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cInctOCBoLTggZmlsbC13aGl0ZVwiPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTYuMjkgMTguMjUxYzcuNTQ3IDAgMTEuNjc1LTYuMjUzIDExLjY3NS0xMS42NzUgMC0uMTc4IDAtLjM1NS0uMDEyLS41M0E4LjM0OCA4LjM0OCAwIDAgMCAyMCAzLjkyYTguMTkgOC4xOSAwIDAgMS0yLjM1Ny42NDYgNC4xMTggNC4xMTggMCAwIDAgMS44MDQtMi4yNyA4LjIyNCA4LjIyNCAwIDAgMS0yLjYwNS45OTYgNC4xMDcgNC4xMDcgMCAwIDAtNi45OTMgMy43NDMgMTEuNjUgMTEuNjUgMCAwIDEtOC40NTctNC4yODcgNC4xMDYgNC4xMDYgMCAwIDAgMS4yNyA1LjQ3N0E0LjA3MyA0LjA3MyAwIDAgMSAuOCA3LjcxM3YuMDUyYTQuMTA1IDQuMTA1IDAgMCAwIDMuMjkyIDQuMDIyIDQuMDk1IDQuMDk1IDAgMCAxLTEuODUzLjA3IDQuMTA4IDQuMTA4IDAgMCAwIDMuODM0IDIuODVBOC4yMzMgOC4yMzMgMCAwIDEgMCAxNi40MDdhMTEuNjE1IDExLjYxNSAwIDAgMCA2LjI5IDEuODRcIj48L3BhdGg+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsyMHB4XVwiPnt0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWzIwcHhdIGN1cnNvci1wb2ludGVyXCI+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiTGluayIsIkxheW91dCIsInRpdGxlIiwiY2hpbGRyZW4iLCJyYW5kb20iLCJ4IiwieSIsIk1hdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJzdGFyIiwiaSIsInNwYW4iLCJzdHlsZSIsImFuaW1hdGlvbkR1cmF0aW9uIiwidG9wIiwibGVmdCIsImhlYWRlciIsImhyZWYiLCJzdmciLCJ2aWV3Qm94IiwiYXJpYS1oaWRkZW4iLCJwYXRoIiwiZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.tsx\n");

/***/ })

});