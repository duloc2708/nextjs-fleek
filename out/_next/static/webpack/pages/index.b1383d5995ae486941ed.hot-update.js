webpackHotUpdate_N_E("pages/index",{

/***/ "./src/shared/hooks/useInfura.js":
/*!***************************************!*\
  !*** ./src/shared/hooks/useInfura.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/src/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _abis_mainnet_oracle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abis/mainnet.oracle */ \"./src/shared/abis/mainnet.oracle.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar getLatestData = function getLatestData() {\n  var oracle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  oracle.methods.latestAnswer().call({}, function (error, res) {\n    if (error != null) {\n      console.log(error);\n      return;\n    }\n\n    console.log(\"Latest price was:\", res);\n    return res;\n  });\n};\n\nvar getLatestTimestamp = function getLatestTimestamp() {\n  var oracle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  oracle.methods.latestTimestamp().call({}, function (error, res) {\n    if (error != null) {\n      console.log(error);\n      return;\n    }\n\n    console.log(\"Latest timestamp for price was:\", res);\n    return res;\n  });\n};\n\nvar initWeb3 = function initWeb3() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var web3 = new web3__WEBPACK_IMPORTED_MODULE_1___default.a(new web3__WEBPACK_IMPORTED_MODULE_1___default.a.providers.HttpProvider(\"\".concat(currentChain).concat(\"cc37f552c1354792b23c88d090c4a02f\")));\n    window.web3 = web3;\n  }, []);\n  return {\n    web3: window.web3\n  };\n};\n\n_s(initWeb3, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar initializeOracle = function initializeOracle(_ref) {\n  var _ref$currentChain = _ref.currentChain,\n      currentChain = _ref$currentChain === void 0 ? \"https://mainnet.infura.io/v3/\" : _ref$currentChain,\n      _ref$oracleAddress = _ref.oracleAddress,\n      oracleAddress = _ref$oracleAddress === void 0 ? _abis_mainnet_oracle__WEBPACK_IMPORTED_MODULE_2__[\"ETHEREUM_ORACLE_ADDRESS\"] : _ref$oracleAddress,\n      _ref$aggregatorAbi = _ref.aggregatorAbi,\n      aggregatorAbi = _ref$aggregatorAbi === void 0 ? _abis_mainnet_oracle__WEBPACK_IMPORTED_MODULE_2__[\"DEFAULT_AGGREGATOR_ABI\"] : _ref$aggregatorAbi;\n\n  var _initWeb = initWeb3(),\n      web3 = _initWeb.web3;\n\n  var oracle = web3.eth.Contract(aggregatorAbi, oracleAddress);\n  return {\n    oracle: oracle\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initializeOracle);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NoYXJlZC9ob29rcy91c2VJbmZ1cmEuanM/OWQ3MSJdLCJuYW1lcyI6WyJnZXRMYXRlc3REYXRhIiwib3JhY2xlIiwibWV0aG9kcyIsImxhdGVzdEFuc3dlciIsImNhbGwiLCJlcnJvciIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJnZXRMYXRlc3RUaW1lc3RhbXAiLCJsYXRlc3RUaW1lc3RhbXAiLCJpbml0V2ViMyIsInVzZUVmZmVjdCIsIndlYjMiLCJXZWIzIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwiY3VycmVudENoYWluIiwicHJvY2VzcyIsIndpbmRvdyIsImluaXRpYWxpemVPcmFjbGUiLCJvcmFjbGVBZGRyZXNzIiwiRVRIRVJFVU1fT1JBQ0xFX0FERFJFU1MiLCJhZ2dyZWdhdG9yQWJpIiwiREVGQVVMVF9BR0dSRUdBVE9SX0FCSSIsImV0aCIsIkNvbnRyYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQWlCO0FBQUEsTUFBaEJDLE1BQWdCLHVFQUFQLEVBQU87QUFDckNBLFFBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxZQUFmLEdBQThCQyxJQUE5QixDQUFtQyxFQUFuQyxFQUF1QyxVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFDckQsUUFBSUQsS0FBSyxJQUFJLElBQWIsRUFBbUI7QUFDakJFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0E7QUFDRDs7QUFDREUsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNGLEdBQWpDO0FBQ0EsV0FBT0EsR0FBUDtBQUNELEdBUEQ7QUFRRCxDQVREOztBQVdBLElBQU1HLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBaUI7QUFBQSxNQUFoQlIsTUFBZ0IsdUVBQVAsRUFBTztBQUMxQ0EsUUFBTSxDQUFDQyxPQUFQLENBQWVRLGVBQWYsR0FBaUNOLElBQWpDLENBQXNDLEVBQXRDLEVBQTBDLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUN4RCxRQUFJRCxLQUFLLElBQUksSUFBYixFQUFtQjtBQUNqQkUsYUFBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQTtBQUNEOztBQUNERSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxpQ0FBWixFQUErQ0YsR0FBL0M7QUFDQSxXQUFPQSxHQUFQO0FBQ0QsR0FQRDtBQVFELENBVEQ7O0FBV0EsSUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsSUFBSSxHQUFHLElBQUlDLDJDQUFKLENBQ1gsSUFBSUEsMkNBQUksQ0FBQ0MsU0FBTCxDQUFlQyxZQUFuQixXQUFtQ0MsWUFBbkMsU0FBa0RDLGtDQUFsRCxFQURXLENBQWI7QUFHQUMsVUFBTSxDQUFDTixJQUFQLEdBQWNBLElBQWQ7QUFDRCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBTUEsU0FBTztBQUNMQSxRQUFJLEVBQUVNLE1BQU0sQ0FBQ047QUFEUixHQUFQO0FBR0QsQ0FWRDs7R0FBTUYsUTs7QUFZTixJQUFNUyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BSW5CO0FBQUEsK0JBSEpILFlBR0k7QUFBQSxNQUhKQSxZQUdJLGtDQUhXQywrQkFHWDtBQUFBLGdDQUZKRyxhQUVJO0FBQUEsTUFGSkEsYUFFSSxtQ0FGWUMsNEVBRVo7QUFBQSxnQ0FESkMsYUFDSTtBQUFBLE1BREpBLGFBQ0ksbUNBRFlDLDJFQUNaOztBQUFBLGlCQUNhYixRQUFRLEVBRHJCO0FBQUEsTUFDSUUsSUFESixZQUNJQSxJQURKOztBQUdKLE1BQU1aLE1BQU0sR0FBR1ksSUFBSSxDQUFDWSxHQUFMLENBQVNDLFFBQVQsQ0FBa0JILGFBQWxCLEVBQWlDRixhQUFqQyxDQUFmO0FBRUEsU0FBTztBQUNMcEIsVUFBTSxFQUFOQTtBQURLLEdBQVA7QUFHRCxDQVpEOztBQWNlbUIsK0VBQWYiLCJmaWxlIjoiLi9zcmMvc2hhcmVkL2hvb2tzL3VzZUluZnVyYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5pbXBvcnQge1xuICBDSEFJTkxJTktfT1JBQ0xFX0FCSSxcbiAgRVRIRVJFVU1fT1JBQ0xFX0FERFJFU1MsXG4gIERFRkFVTFRfQUdHUkVHQVRPUl9BQkksXG59IGZyb20gXCIuLi9hYmlzL21haW5uZXQub3JhY2xlXCI7XG5cbmNvbnN0IGdldExhdGVzdERhdGEgPSAob3JhY2xlID0ge30pID0+IHtcbiAgb3JhY2xlLm1ldGhvZHMubGF0ZXN0QW5zd2VyKCkuY2FsbCh7fSwgKGVycm9yLCByZXMpID0+IHtcbiAgICBpZiAoZXJyb3IgIT0gbnVsbCkge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIkxhdGVzdCBwcmljZSB3YXM6XCIsIHJlcyk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRMYXRlc3RUaW1lc3RhbXAgPSAob3JhY2xlID0ge30pID0+IHtcbiAgb3JhY2xlLm1ldGhvZHMubGF0ZXN0VGltZXN0YW1wKCkuY2FsbCh7fSwgKGVycm9yLCByZXMpID0+IHtcbiAgICBpZiAoZXJyb3IgIT0gbnVsbCkge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIkxhdGVzdCB0aW1lc3RhbXAgZm9yIHByaWNlIHdhczpcIiwgcmVzKTtcbiAgICByZXR1cm4gcmVzO1xuICB9KTtcbn07XG5cbmNvbnN0IGluaXRXZWIzID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhcbiAgICAgIG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoYCR7Y3VycmVudENoYWlufSR7cHJvY2Vzcy5lbnYuaW5mdXJhSUR9YClcbiAgICApO1xuICAgIHdpbmRvdy53ZWIzID0gd2ViMztcbiAgfSwgW10pO1xuICByZXR1cm4ge1xuICAgIHdlYjM6IHdpbmRvdy53ZWIzLFxuICB9O1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZU9yYWNsZSA9ICh7XG4gIGN1cnJlbnRDaGFpbiA9IHByb2Nlc3MuZW52LklORlVSQV9NQUlOTkVULFxuICBvcmFjbGVBZGRyZXNzID0gRVRIRVJFVU1fT1JBQ0xFX0FERFJFU1MsXG4gIGFnZ3JlZ2F0b3JBYmkgPSBERUZBVUxUX0FHR1JFR0FUT1JfQUJJLFxufSkgPT4ge1xuICBjb25zdCB7IHdlYjMgfSA9IGluaXRXZWIzKCk7XG5cbiAgY29uc3Qgb3JhY2xlID0gd2ViMy5ldGguQ29udHJhY3QoYWdncmVnYXRvckFiaSwgb3JhY2xlQWRkcmVzcyk7XG5cbiAgcmV0dXJuIHtcbiAgICBvcmFjbGUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplT3JhY2xlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/shared/hooks/useInfura.js\n");

/***/ })

})