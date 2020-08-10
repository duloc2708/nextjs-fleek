webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shared_hooks_useInfura__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/hooks/useInfura */ \"./src/shared/hooks/useInfura.js\");\n/* harmony import */ var _features_EthereumData_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/EthereumData/component */ \"./src/features/EthereumData/component.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bignumber.js/bignumber.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _shared_abis_mainnet_oracle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/abis/mainnet.oracle */ \"./src/shared/abis/mainnet.oracle.js\");\n/* harmony import */ var _shared_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/layout/component */ \"./src/shared/layout/component.js\");\n/* harmony import */ var _shared_utils_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/utils/index */ \"./src/shared/utils/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/tgreco/g-drive/fleek-apps/nextjs-fleek/src/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar getLatestTimestamp = function getLatestTimestamp(oracle) {\n  return oracle.methods.latestTimestamp().call({}, function (error, res) {\n    if (error != null) {\n      console.log(error);\n      return;\n    }\n\n    console.log(\"Latest timestamp for price was:\", res);\n    return res;\n  });\n};\n\nvar Index = function Index(_ref) {\n  _s();\n\n  var _ref$title = _ref.title,\n      title = _ref$title === void 0 ? \"NextJS IPFS Application\" : _ref$title;\n\n  var _useInfura = Object(_shared_hooks_useInfura__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    currentChain: \"https://mainnet.infura.io/v3/\",\n    oracleAddress: _shared_abis_mainnet_oracle__WEBPACK_IMPORTED_MODULE_6__[\"ETHEREUM_ORACLE_ADDRESS\"]\n  }),\n      oracle = _useInfura.oracle;\n\n  var _useInfura2 = Object(_shared_hooks_useInfura__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    currentChain: \"https://mainnet.infura.io/v3/\",\n    oracleAddress: _shared_abis_mainnet_oracle__WEBPACK_IMPORTED_MODULE_6__[\"LINK_ORACLE_ADDRESS\"]\n  }),\n      linkOracle = _useInfura2.oracle;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      ethPriceData = _useState[0],\n      setEthPriceData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      linkPriceData = _useState2[0],\n      setLinkPriceData = _useState2[1];\n\n  var updateLink = function updateLink() {\n    linkOracle.methods.latestAnswer().call({}, function (error, res) {\n      if (error != null) {\n        console.log(error);\n        return;\n      }\n\n      setLinkPriceData(function (x) {\n        return _objectSpread(_objectSpread({}, x), {}, {\n          price: Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_8__[\"formatBigNumberFn\"])(res)\n        });\n      });\n    });\n  };\n\n  var updateData = function updateData() {\n    oracle.methods.latestAnswer().call({}, function (error, res) {\n      if (error != null) {\n        console.log(error);\n        return;\n      }\n\n      console.log({\n        BigNumberEth: res\n      });\n      setEthPriceData(function (x) {\n        return _objectSpread(_objectSpread({}, x), {}, {\n          price: Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_8__[\"formatBigNumberFn\"])(res)\n        });\n      });\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log(\"price data changed for link::\", linkPriceData);\n    getLatestTimestamp(linkOracle).then(function (res) {\n      console.log({\n        timestampResponse: res\n      });\n      setLinkPriceData(function (x) {\n        return _objectSpread(_objectSpread({}, x), {}, {\n          lastUpdate: Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_8__[\"formatUnixTimestamp\"])(res)\n        });\n      });\n    });\n  }, [linkPriceData.price]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log(\"price data changed for link::\", ethPriceData);\n    getLatestTimestamp(oracle).then(function (res) {\n      console.log({\n        timestampResponse: res\n      });\n      setEthPriceData(function (x) {\n        return _objectSpread(_objectSpread({}, x), {}, {\n          lastUpdate: Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_8__[\"formatUnixTimestamp\"])(res)\n        });\n      });\n    });\n  }, [ethPriceData.price]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    updateData();\n    updateLink();\n  }, []);\n  console.log({\n    linkPriceData: linkPriceData,\n    ethPriceData: ethPriceData\n  });\n  return __jsx(_shared_layout_component__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, title), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }, \"Using\", \" \", __jsx(\"a\", {\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    href: \"https://chain.link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }, \"Chain.link\"), \" \", \"for pricing data below.\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }, \" \", \"Learn more about Chainlink Price Feeds:\", \" \", __jsx(\"a\", {\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    href: \"https://docs.chain.link/docs/using-chainlink-reference-contracts\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }, \"Chainlink Docs\")), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }\n  }, \" \", \"Learn more about IPFS:\", \" \", __jsx(\"a\", {\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    href: \"https://ipfs.io\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  }, \"IPFS.io\")), __jsx(_features_EthereumData_component__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    coin: \"ETH\",\n    price: ethPriceData.price,\n    onClick: updateData,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }), __jsx(_features_EthereumData_component__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    coin: \"Link\",\n    price: linkPriceData.price,\n    onClick: updateLink,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Index, \"EeRoTvINHM1nWfmcbXI3bgcGKR4=\", false, function () {\n  return [_shared_hooks_useInfura__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _shared_hooks_useInfura__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Index;\nIndex.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"string\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiZ2V0TGF0ZXN0VGltZXN0YW1wIiwib3JhY2xlIiwibWV0aG9kcyIsImxhdGVzdFRpbWVzdGFtcCIsImNhbGwiLCJlcnJvciIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJJbmRleCIsInRpdGxlIiwidXNlSW5mdXJhIiwiY3VycmVudENoYWluIiwicHJvY2VzcyIsIm9yYWNsZUFkZHJlc3MiLCJFVEhFUkVVTV9PUkFDTEVfQUREUkVTUyIsIkxJTktfT1JBQ0xFX0FERFJFU1MiLCJsaW5rT3JhY2xlIiwidXNlU3RhdGUiLCJldGhQcmljZURhdGEiLCJzZXRFdGhQcmljZURhdGEiLCJsaW5rUHJpY2VEYXRhIiwic2V0TGlua1ByaWNlRGF0YSIsInVwZGF0ZUxpbmsiLCJsYXRlc3RBbnN3ZXIiLCJ4IiwicHJpY2UiLCJmb3JtYXRCaWdOdW1iZXJGbiIsInVwZGF0ZURhdGEiLCJCaWdOdW1iZXJFdGgiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwidGltZXN0YW1wUmVzcG9uc2UiLCJsYXN0VXBkYXRlIiwiZm9ybWF0VW5peFRpbWVzdGFtcCIsInByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOztBQUNBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsTUFBRCxFQUFZO0FBQ3JDLFNBQU9BLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxlQUFmLEdBQWlDQyxJQUFqQyxDQUFzQyxFQUF0QyxFQUEwQyxVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFDL0QsUUFBSUQsS0FBSyxJQUFJLElBQWIsRUFBbUI7QUFDakJFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0E7QUFDRDs7QUFDREUsV0FBTyxDQUFDQyxHQUFSLENBQVks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QUFtQixPQUFHLEVBQUMsWUFBdkI7QUFBb0MsUUFBSSxFQUFDLGlCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsQ0FwQkYsRUEyQkUsTUFBQyx3RUFBRDtBQUFhLFFBQUksRUFBQyxLQUFsQjtBQUF3QixTQUFLLEVBQUVTLFlBQVksQ0FBQ08sS0FBNUM7QUFBbUQsV0FBTyxFQUFFRSxVQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JGLEVBNEJFLE1BQUMsd0VBQUQ7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFNBQUssRUFBRVAsYUFBYSxDQUFDSyxLQUZ2QjtBQUdFLFdBQU8sRUFBRUgsVUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUJGLENBREY7QUFvQ0QsQ0F4R0Q7O0dBQU1kLEs7VUFDZUUsK0QsRUFLWUEsK0Q7OztLQU4zQkYsSztBQTBHTkEsS0FBSyxDQUFDMEIsU0FBTixHQUFrQjtBQUNoQnpCLE9BQUssRUFBRTBCLGlEQUFNQTtBQURHLENBQWxCO0FBSWUzQixvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdXNlSW5mdXJhIGZyb20gXCIuLi9zaGFyZWQvaG9va3MvdXNlSW5mdXJhXCI7XG5pbXBvcnQgTGF0ZXN0UHJpY2UgZnJvbSBcIi4uL2ZlYXR1cmVzL0V0aGVyZXVtRGF0YS9jb21wb25lbnRcIjtcbmltcG9ydCBCaWdOdW1iZXIgZnJvbSBcImJpZ251bWJlci5qc1wiO1xuaW1wb3J0IHtcbiAgRVRIRVJFVU1fT1JBQ0xFX0FERFJFU1MsXG4gIExJTktfT1JBQ0xFX0FERFJFU1MsXG59IGZyb20gXCIuLi9zaGFyZWQvYWJpcy9tYWlubmV0Lm9yYWNsZVwiO1xuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4uL3NoYXJlZC9sYXlvdXQvY29tcG9uZW50XCI7XG5pbXBvcnQgeyBmb3JtYXRCaWdOdW1iZXJGbiwgZm9ybWF0VW5peFRpbWVzdGFtcCB9IGZyb20gXCIuLi9zaGFyZWQvdXRpbHMvaW5kZXhcIjtcbmNvbnN0IGdldExhdGVzdFRpbWVzdGFtcCA9IChvcmFjbGUpID0+IHtcbiAgcmV0dXJuIG9yYWNsZS5tZXRob2RzLmxhdGVzdFRpbWVzdGFtcCgpLmNhbGwoe30sIChlcnJvciwgcmVzKSA9PiB7XG4gICAgaWYgKGVycm9yICE9IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJMYXRlc3QgdGltZXN0YW1wIGZvciBwcmljZSB3YXM6XCIsIHJlcyk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSk7XG59O1xuY29uc3QgSW5kZXggPSAoeyB0aXRsZSA9IFwiTmV4dEpTIElQRlMgQXBwbGljYXRpb25cIiB9KSA9PiB7XG4gIGNvbnN0IHsgb3JhY2xlIH0gPSB1c2VJbmZ1cmEoe1xuICAgIGN1cnJlbnRDaGFpbjogcHJvY2Vzcy5lbnYuSU5GVVJBX01BSU5ORVQsXG4gICAgb3JhY2xlQWRkcmVzczogRVRIRVJFVU1fT1JBQ0xFX0FERFJFU1MsXG4gIH0pO1xuXG4gIGNvbnN0IHsgb3JhY2xlOiBsaW5rT3JhY2xlIH0gPSB1c2VJbmZ1cmEoe1xuICAgIGN1cnJlbnRDaGFpbjogcHJvY2Vzcy5lbnYuSU5GVVJBX01BSU5ORVQsXG4gICAgb3JhY2xlQWRkcmVzczogTElOS19PUkFDTEVfQUREUkVTUyxcbiAgfSk7XG5cbiAgY29uc3QgW2V0aFByaWNlRGF0YSwgc2V0RXRoUHJpY2VEYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGlua1ByaWNlRGF0YSwgc2V0TGlua1ByaWNlRGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCB1cGRhdGVMaW5rID0gKCkgPT4ge1xuICAgIGxpbmtPcmFjbGUubWV0aG9kcy5sYXRlc3RBbnN3ZXIoKS5jYWxsKHt9LCAoZXJyb3IsIHJlcykgPT4ge1xuICAgICAgaWYgKGVycm9yICE9IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZXRMaW5rUHJpY2VEYXRhKCh4KSA9PiAoe1xuICAgICAgICAuLi54LFxuICAgICAgICBwcmljZTogZm9ybWF0QmlnTnVtYmVyRm4ocmVzKSxcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVEYXRhID0gKCkgPT4ge1xuICAgIG9yYWNsZS5tZXRob2RzLmxhdGVzdEFuc3dlcigpLmNhbGwoe30sIChlcnJvciwgcmVzKSA9PiB7XG4gICAgICBpZiAoZXJyb3IgIT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHsgQmlnTnVtYmVyRXRoOiByZXMgfSk7XG4gICAgICBzZXRFdGhQcmljZURhdGEoKHgpID0+ICh7XG4gICAgICAgIC4uLngsXG4gICAgICAgIHByaWNlOiBmb3JtYXRCaWdOdW1iZXJGbihyZXMpLFxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJwcmljZSBkYXRhIGNoYW5nZWQgZm9yIGxpbms6OlwiLCBsaW5rUHJpY2VEYXRhKTtcbiAgICBnZXRMYXRlc3RUaW1lc3RhbXAobGlua09yYWNsZSkudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh7IHRpbWVzdGFtcFJlc3BvbnNlOiByZXMgfSk7XG4gICAgICBzZXRMaW5rUHJpY2VEYXRhKCh4KSA9PiAoe1xuICAgICAgICAuLi54LFxuICAgICAgICBsYXN0VXBkYXRlOiBmb3JtYXRVbml4VGltZXN0YW1wKHJlcyksXG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH0sIFtsaW5rUHJpY2VEYXRhLnByaWNlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInByaWNlIGRhdGEgY2hhbmdlZCBmb3IgbGluazo6XCIsIGV0aFByaWNlRGF0YSk7XG4gICAgZ2V0TGF0ZXN0VGltZXN0YW1wKG9yYWNsZSkudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh7IHRpbWVzdGFtcFJlc3BvbnNlOiByZXMgfSk7XG4gICAgICBzZXRFdGhQcmljZURhdGEoKHgpID0+ICh7XG4gICAgICAgIC4uLngsXG4gICAgICAgIGxhc3RVcGRhdGU6IGZvcm1hdFVuaXhUaW1lc3RhbXAocmVzKSxcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfSwgW2V0aFByaWNlRGF0YS5wcmljZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXBkYXRlRGF0YSgpO1xuICAgIHVwZGF0ZUxpbmsoKTtcbiAgfSwgW10pO1xuICBjb25zb2xlLmxvZyh7IGxpbmtQcmljZURhdGEsIGV0aFByaWNlRGF0YSB9KTtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBVc2luZ3tcIiBcIn1cbiAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2NoYWluLmxpbmtcIj5cbiAgICAgICAgICBDaGFpbi5saW5rXG4gICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgIGZvciBwcmljaW5nIGRhdGEgYmVsb3cuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAge1wiIFwifVxuICAgICAgICBMZWFybiBtb3JlIGFib3V0IENoYWlubGluayBQcmljZSBGZWVkczp7XCIgXCJ9XG4gICAgICAgIDxhXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kb2NzLmNoYWluLmxpbmsvZG9jcy91c2luZy1jaGFpbmxpbmstcmVmZXJlbmNlLWNvbnRyYWN0c1wiXG4gICAgICAgID5cbiAgICAgICAgICBDaGFpbmxpbmsgRG9jc1xuICAgICAgICA8L2E+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAge1wiIFwifVxuICAgICAgICBMZWFybiBtb3JlIGFib3V0IElQRlM6e1wiIFwifVxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vaXBmcy5pb1wiPlxuICAgICAgICAgIElQRlMuaW9cbiAgICAgICAgPC9hPlxuICAgICAgPC9wPlxuICAgICAgPExhdGVzdFByaWNlIGNvaW49XCJFVEhcIiBwcmljZT17ZXRoUHJpY2VEYXRhLnByaWNlfSBvbkNsaWNrPXt1cGRhdGVEYXRhfSAvPlxuICAgICAgPExhdGVzdFByaWNlXG4gICAgICAgIGNvaW49XCJMaW5rXCJcbiAgICAgICAgcHJpY2U9e2xpbmtQcmljZURhdGEucHJpY2V9XG4gICAgICAgIG9uQ2xpY2s9e3VwZGF0ZUxpbmt9XG4gICAgICAvPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbkluZGV4LnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IHN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})