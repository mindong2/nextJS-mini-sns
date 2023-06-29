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

/***/ "./pages/write.tsx":
/*!*************************!*\
  !*** ./pages/write.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/client/useMutation */ \"./lib/client/useMutation.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/input */ \"./components/input.tsx\");\n/* harmony import */ var _components_textArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/textArea */ \"./components/textArea.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/layout */ \"./components/layout.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar App = function() {\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit;\n    var ref1 = _slicedToArray((0,_lib_client_useMutation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/post/write\"), 2), post = ref1[0], ref2 = ref1[1], postData = ref2.data;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var onValid = function(data) {\n        if (window.confirm(\"\\uC815\\uB9D0\\uB85C \\uC791\\uC131\\uD558\\uC2DC\\uACA0\\uC2B5\\uB2C8\\uAE4C?\")) {\n            post(data);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (postData && postData.success) {\n            router.push(\"/\");\n        }\n    }, [\n        postData,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        title: \"Write\",\n        useLogout: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"transition-all hover:translate-y-[-51%] max-w-[500px] w-[90%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-[32px] mb-3\",\n                        children: \"\\u2190\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\write.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\write.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-[#302d2d] rounded-md shadow-lg shadow-zinc-500 drop-shadow-2xl\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold px-6 py-5 border-b-[1px] border-[#413f3f] text-center whitespace-nowrap\",\n                            children: \"New Post\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\write.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-6 py-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: handleSubmit(onValid),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        type: \"text\",\n                                        name: \"title\",\n                                        label: \"TITLE\",\n                                        register: register(\"title\", {\n                                            required: \"\\uC81C\\uBAA9 \\uC791\\uC131\\uC740 \\uD544\\uC218\\uC785\\uB2C8\\uB2E4.\"\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\write.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_textArea__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        name: \"post\",\n                                        label: \"POST\",\n                                        register: register(\"post\", {\n                                            required: \"\\uAE00 \\uC791\\uC131\\uC740 \\uD544\\uC218\\uC785\\uB2C8\\uB2E4.\"\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\write.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-between items-center mt-5\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \"w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 transition-all rounded-[4px] font-semibold \",\n                                            children: \"Post\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\write.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\write.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\write.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\write.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\write.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\write.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\workspace\\\\Nomad\\\\nextJS\\\\assign6\\\\pages\\\\write.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_s(App, \"ei7kTtQ9nyQXsDgD+nTJ+T6+Drs=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm,\n        _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dyaXRlLnRzeD82NjNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgdXNlTXV0YXRpb24gZnJvbSBcIkAvbGliL2NsaWVudC91c2VNdXRhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCJAL2NvbXBvbmVudHMvaW5wdXRcIjtcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gXCJAL2NvbXBvbmVudHMvdGV4dEFyZWFcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dFwiO1xyXG5cclxuaW50ZXJmYWNlIElQb3N0IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHBvc3Q6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybTxJUG9zdD4oKTtcclxuICBjb25zdCBbcG9zdCwgeyBkYXRhOiBwb3N0RGF0YSB9XSA9IHVzZU11dGF0aW9uKFwiL2FwaS9wb3N0L3dyaXRlXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG9uVmFsaWQgPSAoZGF0YTogSVBvc3QpID0+IHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybShcIuygleunkOuhnCDsnpHshLHtlZjsi5zqsqDsirXri4jquYw/XCIpKSB7XHJcbiAgICAgIHBvc3QoZGF0YSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHBvc3REYXRhICYmIHBvc3REYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtwb3N0RGF0YSwgcm91dGVyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwiV3JpdGVcIiB1c2VMb2dvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgaG92ZXI6dHJhbnNsYXRlLXktWy01MSVdIG1heC13LVs1MDBweF0gdy1bOTAlXSBhYnNvbHV0ZSB0b3AtWzUwJV0gbGVmdC1bNTAlXSB0cmFuc2xhdGUteC1bLTUwJV0gdHJhbnNsYXRlLXktWy01MCVdXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtWzMycHhdIG1iLTNcIj4mbGFycjs8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMzMDJkMmRdIHJvdW5kZWQtbWQgIHNoYWRvdy1sZyBzaGFkb3ctemluYy01MDAgZHJvcC1zaGFkb3ctMnhsXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHB4LTYgcHktNSBib3JkZXItYi1bMXB4XSBib3JkZXItWyM0MTNmM2ZdIHRleHQtY2VudGVyIHdoaXRlc3BhY2Utbm93cmFwXCI+TmV3IFBvc3Q8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTVcIj5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblZhbGlkKX0+XHJcbiAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgbGFiZWw9XCJUSVRMRVwiIHJlZ2lzdGVyPXtyZWdpc3RlcihcInRpdGxlXCIsIHsgcmVxdWlyZWQ6IFwi7KCc66qpIOyekeyEseydgCDtlYTsiJjsnoXri4jri6QuXCIgfSl9PjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgPFRleHRBcmVhIG5hbWU9XCJwb3N0XCIgbGFiZWw9XCJQT1NUXCIgcmVnaXN0ZXI9e3JlZ2lzdGVyKFwicG9zdFwiLCB7IHJlcXVpcmVkOiBcIuq4gCDsnpHshLHsnYAg7ZWE7IiY7J6F64uI64ukLlwiIH0pfT48L1RleHRBcmVhPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIGJnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtNTAwIHRyYW5zaXRpb24tYWxsIHJvdW5kZWQtWzRweF0gZm9udC1zZW1pYm9sZCBcIj5cclxuICAgICAgICAgICAgICAgICAgUG9zdFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VGb3JtIiwidXNlTXV0YXRpb24iLCJ1c2VSb3V0ZXIiLCJJbnB1dCIsIlRleHRBcmVhIiwiTGF5b3V0IiwiQXBwIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJwb3N0IiwiZGF0YSIsInBvc3REYXRhIiwicm91dGVyIiwib25WYWxpZCIsIndpbmRvdyIsImNvbmZpcm0iLCJzdWNjZXNzIiwicHVzaCIsInRpdGxlIiwidXNlTG9nb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImEiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsInR5cGUiLCJuYW1lIiwibGFiZWwiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/write.tsx\n");

/***/ })

});