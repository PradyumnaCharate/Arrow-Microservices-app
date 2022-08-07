(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  req
}) => {
  if (true) {
    // We are on the server
    return axios__WEBPACK_IMPORTED_MODULE_0___default().create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers
    });
  } else {}
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/build-client */ "./api/build-client.js");

var _jsxFileName = "D:\\Full Stack Development\\Microservices\\arrow-ticketing-app\\client\\pages\\index.js";


const LandingPage = ({
  currentUser
}) => {
  console.log(currentUser);
  axios.get('/api/users/currentuser').catch(err => {
    console.log(err.message);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    children: "Landing Page"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 10
  }, undefined);
};

LandingPage.getInitialProps = async context => {
  console.log('LANDING PAGE!');
  const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_1__.default)(context);
  const {
    data
  } = await client.get('/api/users/currentuser');
  return data;
};

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcGkvYnVpbGQtY2xpZW50LmpzIiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsicmVxIiwiYXhpb3MiLCJiYXNlVVJMIiwiaGVhZGVycyIsIkxhbmRpbmdQYWdlIiwiY3VycmVudFVzZXIiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwiY2F0Y2giLCJlcnIiLCJtZXNzYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImNsaWVudCIsImJ1aWxkQ2xpZW50IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsK0RBQWdCLENBQUM7QUFBRUE7QUFBRixDQUFELEtBQWE7QUFDM0IsWUFBbUM7QUFDakM7QUFFQSxXQUFPQyxtREFBQSxDQUFhO0FBQ2xCQyxhQUFPLEVBQ0wsaUVBRmdCO0FBR2xCQyxhQUFPLEVBQUVILEdBQUcsQ0FBQ0c7QUFISyxLQUFiLENBQVA7QUFLRCxHQVJELE1BUU8sRUFLTjtBQUNGLENBZkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBcUI7QUFDdkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFaO0FBQ0FKLE9BQUssQ0FBQ08sR0FBTixDQUFVLHdCQUFWLEVBQW9DQyxLQUFwQyxDQUEyQ0MsR0FBRCxJQUFTO0FBQ2pESixXQUFPLENBQUNDLEdBQVIsQ0FBWUcsR0FBRyxDQUFDQyxPQUFoQjtBQUNELEdBRkQ7QUFJQSxzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FQRDs7QUFTQVAsV0FBVyxDQUFDUSxlQUFaLEdBQThCLE1BQU1DLE9BQU4sSUFBaUI7QUFDN0NQLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQSxRQUFNTyxNQUFNLEdBQUdDLDBEQUFXLENBQUNGLE9BQUQsQ0FBMUI7QUFDQSxRQUFNO0FBQUVHO0FBQUYsTUFBVyxNQUFNRixNQUFNLENBQUNOLEdBQVAsQ0FBVyx3QkFBWCxDQUF2QjtBQUVBLFNBQU9RLElBQVA7QUFDRCxDQU5EOztBQVFBLCtEQUFlWixXQUFmLEU7Ozs7Ozs7Ozs7O0FDbkJBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgICh7IHJlcSB9KSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIFdlIGFyZSBvbiB0aGUgc2VydmVyXG5cbiAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcbiAgICAgIGJhc2VVUkw6XG4gICAgICAgICdodHRwOi8vaW5ncmVzcy1uZ2lueC1jb250cm9sbGVyLmluZ3Jlc3Mtbmdpbnguc3ZjLmNsdXN0ZXIubG9jYWwnLFxuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gV2UgbXVzdCBiZSBvbiB0aGUgYnJvd3NlclxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgICAgYmFzZVVybDogJy8nLFxuICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gJy4uL2FwaS9idWlsZC1jbGllbnQnO1xuXG5jb25zdCBMYW5kaW5nUGFnZSA9ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcbiAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xuICBheGlvcy5nZXQoJy9hcGkvdXNlcnMvY3VycmVudHVzZXInKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICB9KTtcbiBcbiAgcmV0dXJuIDxoMT5MYW5kaW5nIFBhZ2U8L2gxPjtcbn07XG5cbkxhbmRpbmdQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGNvbnRleHQgPT4ge1xuICBjb25zb2xlLmxvZygnTEFORElORyBQQUdFIScpO1xuICBjb25zdCBjbGllbnQgPSBidWlsZENsaWVudChjb250ZXh0KTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KCcvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJyk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=