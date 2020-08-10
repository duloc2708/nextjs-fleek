webpackHotUpdate_N_E("pages/index",{

/***/ "./src/shared/hooks/useInfura.js":
/*!***************************************!*\
  !*** ./src/shared/hooks/useInfura.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/src/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _abis_mainnet_oracle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abis/mainnet.oracle */ \"./src/shared/abis/mainnet.oracle.js\");\n\n\n\n\nvar initializeOracle = function initializeOracle(_ref) {\n  var _ref$currentChain = _ref.currentChain,\n      currentChain = _ref$currentChain === void 0 ? \"https://mainnet.infura.io/v3/\" : _ref$currentChain,\n      _ref$oracleAddress = _ref.oracleAddress,\n      oracleAddress = _ref$oracleAddress === void 0 ? _abis_mainnet_oracle__WEBPACK_IMPORTED_MODULE_2__[\"ETHEREUM_ORACLE_ADDRESS\"] : _ref$oracleAddress,\n      _ref$aggregatorAbi = _ref.aggregatorAbi,\n      aggregatorAbi = _ref$aggregatorAbi === void 0 ? _abis_mainnet_oracle__WEBPACK_IMPORTED_MODULE_2__[\"DEFAULT_AGGREGATOR_ABI\"] : _ref$aggregatorAbi;\n  var web3 = new web3__WEBPACK_IMPORTED_MODULE_1___default.a(new web3__WEBPACK_IMPORTED_MODULE_1___default.a.providers.HttpProvider(\"\".concat(currentChain).concat(\"cc37f552c1354792b23c88d090c4a02f\")));\n  var oracle = new web3.eth.Contract(aggregatorAbi, oracleAddress);\n\n  var getLatestTimestamp = function getLatestTimestamp() {\n    oracle.methods.latestTimestamp().call({}, function (error, res) {\n      if (error != null) {\n        console.log(error);\n        return;\n      }\n\n      console.log(\"Latest timestamp for price was:\", res);\n      return res;\n    });\n  };\n\n  return {\n    oracle: oracle,\n    getLatestTimestamp: getLatestTimestamp\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initializeOracle);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NoYXJlZC9ob29rcy91c2VJbmZ1cmEuanM/OWQ3MSJdLCJuYW1lcyI6WyJpbml0aWFsaXplT3JhY2xlIiwiY3VycmVudENoYWluIiwicHJvY2VzcyIsIm9yYWNsZUFkZHJlc3MiLCJFVEhFUkVVTV9PUkFDTEVfQUREUkVTUyIsImFnZ3JlZ2F0b3JBYmkiLCJERUZBVUxUX0FHR1JFR0FUT1JfQUJJIiwid2ViMyIsIldlYjMiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiLCJvcmFjbGUiLCJldGgiLCJDb250cmFjdCIsImdldExhdGVzdFRpbWVzdGFtcCIsIm1ldGhvZHMiLCJsYXRlc3RUaW1lc3RhbXAiLCJjYWxsIiwiZXJyb3IiLCJyZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUluQjtBQUFBLCtCQUhKQyxZQUdJO0FBQUEsTUFISkEsWUFHSSxrQ0FIV0MsK0JBR1g7QUFBQSxnQ0FGSkMsYUFFSTtBQUFBLE1BRkpBLGFBRUksbUNBRllDLDRFQUVaO0FBQUEsZ0NBREpDLGFBQ0k7QUFBQSxNQURKQSxhQUNJLG1DQURZQywyRUFDWjtBQUNKLE1BQU1DLElBQUksR0FBRyxJQUFJQywyQ0FBSixDQUNYLElBQUlBLDJDQUFJLENBQUNDLFNBQUwsQ0FBZUMsWUFBbkIsV0FBbUNULFlBQW5DLFNBQWtEQyxrQ0FBbEQsRUFEVyxDQUFiO0FBSUEsTUFBTVMsTUFBTSxHQUFHLElBQUlKLElBQUksQ0FBQ0ssR0FBTCxDQUFTQyxRQUFiLENBQXNCUixhQUF0QixFQUFxQ0YsYUFBckMsQ0FBZjs7QUFDQSxNQUFNVyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0JILFVBQU0sQ0FBQ0ksT0FBUCxDQUFlQyxlQUFmLEdBQWlDQyxJQUFqQyxDQUFzQyxFQUF0QyxFQUEwQyxVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFDeEQsVUFBSUQsS0FBSyxJQUFJLElBQWIsRUFBbUI7QUFDakJFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0E7QUFDRDs7QUFDREUsYUFBTyxDQUFDQyxHQUFSLENBQVksaUNBQVosRUFBK0NGLEdBQS9DO0FBQ0EsYUFBT0EsR0FBUDtBQUNELEtBUEQ7QUFRRCxHQVREOztBQVVBLFNBQU87QUFDTFIsVUFBTSxFQUFOQSxNQURLO0FBRUxHLHNCQUFrQixFQUFsQkE7QUFGSyxHQUFQO0FBSUQsQ0F4QkQ7O0FBMEJlZCwrRUFBZiIsImZpbGUiOiIuL3NyYy9zaGFyZWQvaG9va3MvdXNlSW5mdXJhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xuaW1wb3J0IHtcbiAgQ0hBSU5MSU5LX09SQUNMRV9BQkksXG4gIEVUSEVSRVVNX09SQUNMRV9BRERSRVNTLFxuICBERUZBVUxUX0FHR1JFR0FUT1JfQUJJLFxufSBmcm9tIFwiLi4vYWJpcy9tYWlubmV0Lm9yYWNsZVwiO1xuXG5jb25zdCBpbml0aWFsaXplT3JhY2xlID0gKHtcbiAgY3VycmVudENoYWluID0gcHJvY2Vzcy5lbnYuSU5GVVJBX01BSU5ORVQsXG4gIG9yYWNsZUFkZHJlc3MgPSBFVEhFUkVVTV9PUkFDTEVfQUREUkVTUyxcbiAgYWdncmVnYXRvckFiaSA9IERFRkFVTFRfQUdHUkVHQVRPUl9BQkksXG59KSA9PiB7XG4gIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhcbiAgICBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKGAke2N1cnJlbnRDaGFpbn0ke3Byb2Nlc3MuZW52LmluZnVyYUlEfWApXG4gICk7XG5cbiAgY29uc3Qgb3JhY2xlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KGFnZ3JlZ2F0b3JBYmksIG9yYWNsZUFkZHJlc3MpO1xuICBjb25zdCBnZXRMYXRlc3RUaW1lc3RhbXAgPSAoKSA9PiB7XG4gICAgb3JhY2xlLm1ldGhvZHMubGF0ZXN0VGltZXN0YW1wKCkuY2FsbCh7fSwgKGVycm9yLCByZXMpID0+IHtcbiAgICAgIGlmIChlcnJvciAhPSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coXCJMYXRlc3QgdGltZXN0YW1wIGZvciBwcmljZSB3YXM6XCIsIHJlcyk7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4ge1xuICAgIG9yYWNsZSxcbiAgICBnZXRMYXRlc3RUaW1lc3RhbXAsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplT3JhY2xlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/shared/hooks/useInfura.js\n");

/***/ })

})