(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["start-start-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n  </ion-header>\n\n  <body>\n    <link rel=\"stylesheet\" href=\"home.page.scss\">\n    <img src=\"assets/logo-unibee-black.svg\" alt=\"logo\" height=\"370px\" width=\"240px\" class=\"logo\" />\n\n\n\n  </body>\n</ion-content>");

/***/ }),

/***/ "./src/app/start/start-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/start/start-routing.module.ts ***!
  \***********************************************/
/*! exports provided: StartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageRoutingModule", function() { return StartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start.page */ "./src/app/start/start.page.ts");




const routes = [
    {
        path: '',
        component: _start_page__WEBPACK_IMPORTED_MODULE_3__["StartPage"]
    }
];
let StartPageRoutingModule = class StartPageRoutingModule {
};
StartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StartPageRoutingModule);



/***/ }),

/***/ "./src/app/start/start.module.ts":
/*!***************************************!*\
  !*** ./src/app/start/start.module.ts ***!
  \***************************************/
/*! exports provided: StartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageModule", function() { return StartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _start_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start-routing.module */ "./src/app/start/start-routing.module.ts");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start.page */ "./src/app/start/start.page.ts");







let StartPageModule = class StartPageModule {
};
StartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _start_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartPageRoutingModule"]
        ],
        declarations: [_start_page__WEBPACK_IMPORTED_MODULE_6__["StartPage"]]
    })
], StartPageModule);



/***/ }),

/***/ "./src/app/start/start.page.scss":
/*!***************************************!*\
  !*** ./src/app/start/start.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900\");\n@import url(\"https://fonts.googleapis.com/css2?family=Amaranth:wght@700&display=swap\");\nbody {\n  font-family: 'Poppins', sans-serif;\n  font-size: 16px;\n  background: #eee;\n  color: #666;\n}\n.login-container {\n  height: 10vh;\n  width: 100%;\n}\n.login-form {\n  margin: auto;\n  width: 380px;\n  padding: 15px;\n  max-width: 100%;\n}\n.login-form .form-control {\n  font-size: 15px;\n  min-height: 48px;\n  font-weight: 500;\n}\n.login-form a {\n  text-decoration: none;\n  color: #666;\n}\n.login-form a:hover {\n  color: #f9d655;\n}\n.forgot-link {\n  font-size: 13px;\n}\n.form-control:focus {\n  border-color: #6d6d6d;\n}\n.btn-custom {\n  background: #f9d655;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 600;\n  min-height: 48px;\n}\n.btn-custom:focus,\n.btn-custom:hover,\n.btn-custom:active,\n.btn-custom:active:focus {\n  background: #ecce5f;\n  border-color: #696969;\n  color: #fff;\n}\n.btn-custom:focus {\n  box-shadow: 0 0 0 0.2rem rgba(114, 61, 190, 0.25);\n}\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\n.ellipse {\n  width: 200px;\n  height: 200px;\n  background: #f9d655;\n  border-radius: 100px / 100px;\n}\n.unibee-name {\n  font-family: 'Amaranth', sans-serif;\n  font-size: 43px;\n  position: relative;\n  top: 20px;\n}\n.logo {\n  margin: 0;\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  top: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQvQzpcXFVzZXJzXFxVdGlsaXNhdGV1clxcdW5pYmVlL3NyY1xcYXBwXFxzdGFydFxcc3RhcnQucGFnZS5zY3NzIiwic3JjL2FwcC9zdGFydC9zdGFydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0dBQVk7QUFFWixzRkFBWTtBQUVaO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVTtBQ0RaO0FER0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQ0FiO0FERUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FDQ2pCO0FEQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQ0VsQjtBREFBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVU7QUNHWjtBRERBO0VBQ0UsY0FBYTtBQ0lmO0FERkE7RUFDRSxlQUFlO0FDS2pCO0FERkE7RUFDRSxxQkFBb0I7QUNLdEI7QURIQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUNNbEI7QURKQTs7OztFQUlFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsV0FBVTtBQ09aO0FETEE7RUFDRSxpREFBNkM7QUNRL0M7QURMQTtFQUNFLGtCQUFrQjtFQUVsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixRQUFRO0VBQ1IsMkJBQTJCO0FDTzdCO0FESkE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FDT25CO0FESkE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBRWpCLGNBQWM7RUFFZCxTQUFTO0FDS1g7QURGQTtFQUNFLHFCQUFxQjtBQ0t2QjtBREZBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNEJBQW9DO0FDS3RDO0FERkE7RUFDRSxtQ0FBbUM7RUFDbkMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTO0FDS1g7QUREQTtFQUNJLFNBQVM7RUFDVCxrQkFBa0I7RUFDcEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFFbEIsVUFDRjtBQ0VBIiwiZmlsZSI6InNyYy9hcHAvc3RhcnQvc3RhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjEwMCwyMDAsMzAwLDQwMCw1MDAsNjAwLDcwMCw4MDAsOTAwJyk7XHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWFyYW50aDp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmJvZHl7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxuICBjb2xvcjojNjY2O1xyXG59XHJcbi5sb2dpbi1jb250YWluZXJ7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5sb2dpbi1mb3Jte1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMzgwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLmxvZ2luLWZvcm0gLmZvcm0tY29udHJvbHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWluLWhlaWdodDogNDhweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5sb2dpbi1mb3JtIGF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiM2NjY7XHJcbn1cclxuLmxvZ2luLWZvcm0gYTpob3ZlcntcclxuICBjb2xvcjojZjlkNjU1O1xyXG59XHJcbi5mb3Jnb3QtbGlua3tcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgYm9yZGVyLWNvbG9yOiM2ZDZkNmQ7XHJcbn1cclxuLmJ0bi1jdXN0b217XHJcbiAgYmFja2dyb3VuZDogI2Y5ZDY1NTtcclxuICBjb2xvcjojZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbn1cclxuLmJ0bi1jdXN0b206Zm9jdXMsXHJcbi5idG4tY3VzdG9tOmhvdmVyLFxyXG4uYnRuLWN1c3RvbTphY3RpdmUsXHJcbi5idG4tY3VzdG9tOmFjdGl2ZTpmb2N1c3tcclxuICBiYWNrZ3JvdW5kOiAjZWNjZTVmO1xyXG4gIGJvcmRlci1jb2xvcjogIzY5Njk2OTtcclxuICBjb2xvcjojZmZmO1xyXG59XHJcbi5idG4tY3VzdG9tOmZvY3Vze1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDExNCw2MSwxOTAsLjI1KTtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmVsbGlwc2Uge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmOWQ2NTU7XHJcbiAgYm9yZGVyLXJhZGl1czogICAgICAgICAxMDBweCAvIDEwMHB4OyBcclxufVxyXG5cclxuLnVuaWJlZS1uYW1lIHtcclxuICBmb250LWZhbWlseTogJ0FtYXJhbnRoJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDQzcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjBweDtcclxuXHJcbn1cclxuXHJcbi5sb2dve1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuIFxyXG4gIHRvcDogMTAwcHhcclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MTAwLDIwMCwzMDAsNDAwLDUwMCw2MDAsNzAwLDgwMCw5MDBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hcmFudGg6d2dodEA3MDAmZGlzcGxheT1zd2FwXCIpO1xuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW4tZm9ybSB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDM4MHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbi1mb3JtIC5mb3JtLWNvbnRyb2wge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sb2dpbi1mb3JtIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ubG9naW4tZm9ybSBhOmhvdmVyIHtcbiAgY29sb3I6ICNmOWQ2NTU7XG59XG5cbi5mb3Jnb3QtbGluayB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzZkNmQ2ZDtcbn1cblxuLmJ0bi1jdXN0b20ge1xuICBiYWNrZ3JvdW5kOiAjZjlkNjU1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtaW4taGVpZ2h0OiA0OHB4O1xufVxuXG4uYnRuLWN1c3RvbTpmb2N1cyxcbi5idG4tY3VzdG9tOmhvdmVyLFxuLmJ0bi1jdXN0b206YWN0aXZlLFxuLmJ0bi1jdXN0b206YWN0aXZlOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI2VjY2U1ZjtcbiAgYm9yZGVyLWNvbG9yOiAjNjk2OTY5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi1jdXN0b206Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMTQsIDYxLCAxOTAsIDAuMjUpO1xufVxuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmVsbGlwc2Uge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQ6ICNmOWQ2NTU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4IC8gMTAwcHg7XG59XG5cbi51bmliZWUtbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiAnQW1hcmFudGgnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDQzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHB4O1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgdG9wOiAxMDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/start/start.page.ts":
/*!*************************************!*\
  !*** ./src/app/start/start.page.ts ***!
  \*************************************/
/*! exports provided: StartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPage", function() { return StartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _SERVICES_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../SERVICES/user.service */ "./src/app/SERVICES/user.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let StartPage = class StartPage {
    constructor(router, route, afAuth, firestore, user) {
        this.router = router;
        this.route = route;
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.user = user;
    }
    ngOnInit() {
    }
    ionViewWillEnter() { this.checkUser(); }
    checkUser() {
        const docRef = this.firestore.collection('privatebene').doc(this.user.getUID());
        docRef.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(doc => doc.data()))
            .subscribe(data => {
            if (data) {
                console.log('bene');
                this.router.navigate(['bene-tabs/bene-list']);
            }
            else {
                console.log('asso');
                this.router.navigate(['tabs/tab2']);
            }
        });
    }
};
StartPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _SERVICES_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
];
StartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-start',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./start.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./start.page.scss */ "./src/app/start/start.page.scss")).default]
    })
], StartPage);



/***/ })

}]);
//# sourceMappingURL=start-start-module-es2015.js.map