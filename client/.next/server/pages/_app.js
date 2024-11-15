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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ req })=>{\n    if (true) {\n        // We are on the server\n        return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n            baseUrl: \"/\"\n        });\n    } else {}\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRTFCLGlFQUFlLENBQUMsRUFBRUMsR0FBRyxFQUFFO0lBQ3JCLElBQUksSUFBa0IsRUFBYTtRQUNqQyx1QkFBdUI7UUFFdkIsT0FBT0Qsb0RBQVksQ0FBQztZQUNoQkcsU0FBUztRQUNYO0lBQ0osT0FBTyxFQUtOO0FBQ0gsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2FwaS9idWlsZC1jbGllbnQuanM/YzZmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgcmVxIH0pID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vIFdlIGFyZSBvbiB0aGUgc2VydmVyXHJcblxyXG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgYmFzZVVybDogJy8nLFxyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gV2UgbXVzdCBiZSBvbiB0aGUgYnJvd3NlclxyXG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgIGJhc2VVcmw6ICcvJyxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxIiwiY3JlYXRlIiwiYmFzZVVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ currentUser })=>{\n    const links = [\n        !currentUser && {\n            label: \"Sign Up\",\n            href: \"/auth/signup\"\n        },\n        !currentUser && {\n            label: \"Sign In\",\n            href: \"/auth/signin\"\n        },\n        currentUser && {\n            label: \"Sell Tickets\",\n            href: \"/tickets/new\"\n        },\n        currentUser && {\n            label: \"My Orders\",\n            href: \"/orders\"\n        },\n        currentUser && {\n            label: \"Sign Out\",\n            href: \"/auth/signout\"\n        }\n    ].filter((linkConfig)=>linkConfig).map(({ label, href })=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"nav-link\",\n                href: href,\n                children: label\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\Node js\\\\Microservice\\\\E-Commerce\\\\client\\\\components\\\\header.js\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, undefined)\n        }, href, false, {\n            fileName: \"D:\\\\projects\\\\Node js\\\\Microservice\\\\E-Commerce\\\\client\\\\components\\\\header.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-light bg-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"navbar-brand\",\n                href: \"/\",\n                children: \"GitTix\"\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\Node js\\\\Microservice\\\\E-Commerce\\\\client\\\\components\\\\header.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"nav d-flex align-items-center\",\n                    children: links\n                }, void 0, false, {\n                    fileName: \"D:\\\\projects\\\\Node js\\\\Microservice\\\\E-Commerce\\\\client\\\\components\\\\header.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\Node js\\\\Microservice\\\\E-Commerce\\\\client\\\\components\\\\header.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projects\\\\Node js\\\\Microservice\\\\E-Commerce\\\\client\\\\components\\\\header.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkI7QUFFN0IsaUVBQWUsQ0FBQyxFQUFFQyxXQUFXLEVBQUU7SUFDN0IsTUFBTUMsUUFBUTtRQUNaLENBQUNELGVBQWU7WUFBRUUsT0FBTztZQUFXQyxNQUFNO1FBQWU7UUFDekQsQ0FBQ0gsZUFBZTtZQUFFRSxPQUFPO1lBQVdDLE1BQU07UUFBZTtRQUN6REgsZUFBZTtZQUFFRSxPQUFPO1lBQWdCQyxNQUFNO1FBQWU7UUFDN0RILGVBQWU7WUFBRUUsT0FBTztZQUFhQyxNQUFNO1FBQVU7UUFDckRILGVBQWU7WUFBRUUsT0FBTztZQUFZQyxNQUFNO1FBQWdCO0tBQzNELENBQ0VDLE1BQU0sQ0FBQyxDQUFDQyxhQUFlQSxZQUN2QkMsR0FBRyxDQUFDLENBQUMsRUFBRUosS0FBSyxFQUFFQyxJQUFJLEVBQUU7UUFDbkIscUJBQ0UsOERBQUNJO1lBQWNDLFdBQVU7c0JBQ3ZCLDRFQUFDVCxrREFBSUE7Z0JBQUNTLFdBQVU7Z0JBQVdMLE1BQU1BOzBCQUM5QkQ7Ozs7OztXQUZJQzs7Ozs7SUFNYjtJQUVGLHFCQUNFLDhEQUFDTTtRQUFJRCxXQUFVOzswQkFDYiw4REFBQ1Qsa0RBQUlBO2dCQUFDUyxXQUFVO2dCQUFlTCxNQUFLOzBCQUFJOzs7Ozs7MEJBSXhDLDhEQUFDTztnQkFBSUYsV0FBVTswQkFDYiw0RUFBQ0c7b0JBQUdILFdBQVU7OEJBQWlDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkQsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvaGVhZGVyLmpzP2MwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcclxuICBjb25zdCBsaW5rcyA9IFtcclxuICAgICFjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnU2lnbiBVcCcsIGhyZWY6ICcvYXV0aC9zaWdudXAnIH0sXHJcbiAgICAhY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ1NpZ24gSW4nLCBocmVmOiAnL2F1dGgvc2lnbmluJyB9LFxyXG4gICAgY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ1NlbGwgVGlja2V0cycsIGhyZWY6ICcvdGlja2V0cy9uZXcnIH0sXHJcbiAgICBjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnTXkgT3JkZXJzJywgaHJlZjogJy9vcmRlcnMnIH0sXHJcbiAgICBjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnU2lnbiBPdXQnLCBocmVmOiAnL2F1dGgvc2lnbm91dCcgfSxcclxuICBdXHJcbiAgICAuZmlsdGVyKChsaW5rQ29uZmlnKSA9PiBsaW5rQ29uZmlnKVxyXG4gICAgLm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGtleT17aHJlZn0gY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj17aHJlZn0+XHJcbiAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItbGlnaHQgYmctbGlnaHRcIj5cclxuICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICBHaXRUaXhcclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPntsaW5rc308L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiY3VycmVudFVzZXIiLCJsaW5rcyIsImxhYmVsIiwiaHJlZiIsImZpbHRlciIsImxpbmtDb25maWciLCJtYXAiLCJsaSIsImNsYXNzTmFtZSIsIm5hdiIsImRpdiIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_build_client__WEBPACK_IMPORTED_MODULE_2__]);\n_api_build_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AppComponent = ({ Component, pageProps, currentUser })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currentUser: currentUser\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\Node js\\\\Microservice\\\\E-Commerce\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    currentUser: currentUser,\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"D:\\\\projects\\\\Node js\\\\Microservice\\\\E-Commerce\\\\client\\\\pages\\\\_app.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\Node js\\\\Microservice\\\\E-Commerce\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projects\\\\Node js\\\\Microservice\\\\E-Commerce\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\nAppComponent.getInitialProps = async (appContext)=>{\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(appContext.ctx);\n    const { data } = await client.get(\"/api/users/currentuser\");\n    let pageProps = {};\n    if (appContext.Component.getInitialProps) {\n        pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, data.currentUser);\n    }\n    return {\n        pageProps,\n        ...data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppComponent);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0k7QUFDSjtBQUUxQyxNQUFNRSxlQUFlLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRTtJQUN6RCxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDTCwwREFBTUE7Z0JBQUNJLGFBQWFBOzs7Ozs7MEJBQ3JCLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0o7b0JBQVVFLGFBQWFBO29CQUFjLEdBQUdELFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTFEO0FBRUFGLGFBQWFNLGVBQWUsR0FBRyxPQUFPQztJQUNwQyxNQUFNQyxTQUFTViw2REFBV0EsQ0FBQ1MsV0FBV0UsR0FBRztJQUN6QyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1GLE9BQU9HLEdBQUcsQ0FBQztJQUVsQyxJQUFJVCxZQUFZLENBQUM7SUFDakIsSUFBSUssV0FBV04sU0FBUyxDQUFDSyxlQUFlLEVBQUU7UUFDeENKLFlBQVksTUFBTUssV0FBV04sU0FBUyxDQUFDSyxlQUFlLENBQ3BEQyxXQUFXRSxHQUFHLEVBQ2RELFFBQ0FFLEtBQUtQLFdBQVc7SUFFcEI7SUFFQSxPQUFPO1FBQ0xEO1FBQ0EsR0FBR1EsSUFBSTtJQUNUO0FBQ0Y7QUFFQSxpRUFBZVYsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcclxuaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gJy4uL2FwaS9idWlsZC1jbGllbnQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuXHJcbmNvbnN0IEFwcENvbXBvbmVudCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBjdXJyZW50VXNlciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxDb21wb25lbnQgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfSB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5BcHBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGFwcENvbnRleHQpID0+IHtcclxuICBjb25zdCBjbGllbnQgPSBidWlsZENsaWVudChhcHBDb250ZXh0LmN0eCk7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KCcvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJyk7XHJcblxyXG4gIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuICBpZiAoYXBwQ29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICBwYWdlUHJvcHMgPSBhd2FpdCBhcHBDb250ZXh0LkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoXHJcbiAgICAgIGFwcENvbnRleHQuY3R4LFxyXG4gICAgICBjbGllbnQsXHJcbiAgICAgIGRhdGEuY3VycmVudFVzZXJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGFnZVByb3BzLFxyXG4gICAgLi4uZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwQ29tcG9uZW50O1xyXG4iXSwibmFtZXMiOlsiYnVpbGRDbGllbnQiLCJIZWFkZXIiLCJBcHBDb21wb25lbnQiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjdXJyZW50VXNlciIsImRpdiIsImNsYXNzTmFtZSIsImdldEluaXRpYWxQcm9wcyIsImFwcENvbnRleHQiLCJjbGllbnQiLCJjdHgiLCJkYXRhIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();