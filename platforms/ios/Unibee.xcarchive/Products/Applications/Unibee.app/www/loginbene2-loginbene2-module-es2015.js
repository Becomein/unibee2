(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loginbene2-loginbene2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginbene2/loginbene2.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loginbene2/loginbene2.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n</ion-header>\n\n<ion-content>\n  <body>\n  <div class=\"containerlogo\">\n    <div class=\"col-12\"> \n      <img class=\"logo mt-5 bt-2\" src=\"assets/logo-unibee-white.png\" alt=\"logo\" />\n      <p class=\"unibee-name text-center font-weight-light\">Unibee</p>\n      <img class=\"back\" src=\"assets/back-white.svg\" alt=\"back\" />\n    </div>\n  </div>\n\n  <div class=container>\n    <div class=\"col-12\"> \n\n      <div class=\"card\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <form class=\"login-form text-center\">\n            <h2 class=\"font-weight-light card-title\">Connexion</h2>\n        </form>\n        </div>\n\n        <div class=\"col-12\">   \n          <p class=\"identify\">Adresse email</p>       \n          <div class=\"form-group champ\">\n          <input type=\"text\" class=\"form-control rounded-pill form-control-lg\"\n              placeholder=\"Email\"></div>\n            </div>\n        </div>\n\n        <div class=\"col-12\">    \n          <p class=\"identify2\">Mot de passe</p>                            \n          <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control rounded-pill form-control-lg\"\n              placeholder=\"******\"></div>\n\n              <div class=\"forgot-link form-group d-flex justify-content-between align-items-center\">\n                <div class=\"form-check\">\n                    <label class=\"form-check-label\" class=\"rounded-check\" for=\"remember\"><a href=\"#\">Mot de passe oublié</a> </label>\n                </div>\n            </div>\n            </div>\n\n\n\n            \n\n\n          <div class=\"col-12\">    \n                <a href=\"#\">\n                <button type=\"submit\" class=\"btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase bouton\">Se connecter</button></a>\n\n              </div>      \n\n<div class=\"col-12 container\">\n\n  <p class=\"mt-3 font-weight-normal\">\n      <a href=\"#\">\n          <strong class=\"footer\">Je n'ai pas de compte</strong>\n      </a>\n  </p>\n    </div>\n  </div>\n</div>\n</div>\n\n</body>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/loginbene2/loginbene2-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/loginbene2/loginbene2-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: Loginbene2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loginbene2PageRoutingModule", function() { return Loginbene2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _loginbene2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginbene2.page */ "./src/app/loginbene2/loginbene2.page.ts");




const routes = [
    {
        path: '',
        component: _loginbene2_page__WEBPACK_IMPORTED_MODULE_3__["Loginbene2Page"]
    }
];
let Loginbene2PageRoutingModule = class Loginbene2PageRoutingModule {
};
Loginbene2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Loginbene2PageRoutingModule);



/***/ }),

/***/ "./src/app/loginbene2/loginbene2.module.ts":
/*!*************************************************!*\
  !*** ./src/app/loginbene2/loginbene2.module.ts ***!
  \*************************************************/
/*! exports provided: Loginbene2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loginbene2PageModule", function() { return Loginbene2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _loginbene2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loginbene2-routing.module */ "./src/app/loginbene2/loginbene2-routing.module.ts");
/* harmony import */ var _loginbene2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loginbene2.page */ "./src/app/loginbene2/loginbene2.page.ts");







let Loginbene2PageModule = class Loginbene2PageModule {
};
Loginbene2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _loginbene2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Loginbene2PageRoutingModule"]
        ],
        declarations: [_loginbene2_page__WEBPACK_IMPORTED_MODULE_6__["Loginbene2Page"]]
    })
], Loginbene2PageModule);



/***/ }),

/***/ "./src/app/loginbene2/loginbene2.page.scss":
/*!*************************************************!*\
  !*** ./src/app/loginbene2/loginbene2.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900\");\n@import url(\"https://fonts.googleapis.com/css2?family=Amaranth:wght@700&display=swap\");\n:host body {\n  background-image: url(\"/assets/login.svg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nh2 {\n  font-family: \"Poppins\", sans-serif;\n  color: #666;\n  margin-bottom: 2vw;\n  margin-top: -20px;\n}\n.container {\n  text-align: center;\n  width: 100%;\n  height: 90%;\n}\n.containerlogo {\n  margin-top: -5vw;\n  text-align: center;\n  width: 100%;\n}\n.logo {\n  position: relative;\n  height: 20vw;\n}\n.unibee-name {\n  font-family: \"Amaranth\", sans-serif;\n  position: relative;\n  color: white;\n}\n.identify {\n  text-align: left;\n  margin-bottom: -0.5em;\n  position: relative;\n  font-family: \"poppins\", sans-serif;\n  margin-left: 30px;\n}\n.identify2 {\n  text-align: left;\n  margin-bottom: -0.01em;\n  position: relative;\n  font-family: \"poppins\", sans-serif;\n  margin-left: 16px;\n}\n.champ {\n  margin: 12px;\n}\n.login-container {\n  width: 100%;\n}\n.login-form {\n  margin: auto;\n  width: 380px;\n  padding: 15px;\n  max-width: 100%;\n}\n.login-form .form-control {\n  font-size: 15px;\n  min-height: 48px;\n  font-weight: 500;\n  background-color: #F6F5F0;\n  box-shadow: inset 0 0 15px #68686859;\n}\n.login-form a {\n  text-decoration: none;\n  color: #666;\n}\n.login-form a:hover {\n  color: #f9d655;\n}\n.forgot-link {\n  font-size: 12px;\n  margin-left: -10px;\n}\n.form-control:focus {\n  border-color: #6d6d6d;\n}\n.btn-custom {\n  background: #f9d655;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 600;\n  min-height: 48px;\n}\n.btn-custom:focus,\n.btn-custom:hover,\n.btn-custom:active,\n.btn-custom:active:focus {\n  background: #ecce5f;\n  border-color: #696969;\n  color: #fff;\n}\n.btn-custom:focus {\n  box-shadow: 0 0 0 0.2rem rgba(114, 61, 190, 0.25);\n}\n.card {\n  background-color: rgba(255, 255, 255, 0.795);\n  border-radius: 20px;\n  padding-bottom: 2%;\n  padding-top: 3vh;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  box-shadow: 5px 5px 15px rgba(124, 124, 124, 0.356);\n  margin-left: -5vw;\n  margin-right: -5vw;\n}\n.bouton {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  width: 15rem;\n  margin-top: 5vw !important;\n}\n.footer {\n  position: relative;\n  width: 100%;\n  font-size: 15px;\n  color: #345B73;\n  font-weight: bold;\n}\n.back {\n  position: absolute;\n  top: 17vw;\n  width: 1, 3rem;\n  margin-left: -45%;\n}\n.form-control {\n  font-size: 15px;\n  min-height: 48px;\n  font-weight: 500;\n  background-color: #ffffff;\n  box-shadow: inset 0 0 5px #cccccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWNvbWVpbi9EZXNrdG9wL2FwcGxpY2F0aW9uLXVuaWJlZS91bmliZWUyLmdpdC9zcmMvYXBwL2xvZ2luYmVuZTIvbG9naW5iZW5lMi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luYmVuZTIvbG9naW5iZW5lMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0dBQUE7QUFFQSxzRkFBQTtBQUdSO0VBQ0ksMENBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDRko7QURRQTtFQUNJLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNMSjtBRFFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0xKO0FEV0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1JKO0FEYUM7RUFFSSxrQkFBQTtFQUNELFlBQUE7QUNYSjtBRGNDO0VBQ0csbUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNYSjtBRGVBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNGLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtBQ1pGO0FEZUE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Ysa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FDWkY7QURlQTtFQUNBLFlBQUE7QUNaQTtBRGlCQTtFQUVJLFdBQUE7QUNmSjtBRGlCRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNkSjtBRGdCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFHQSxvQ0FBQTtBQ2JKO0FEZUU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUNaSjtBRGNFO0VBQ0UsY0FBQTtBQ1hKO0FEYUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNWSjtBRGFFO0VBQ0UscUJBQUE7QUNWSjtBRFlFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNUSjtBRFdFOzs7O0VBSUUsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNSSjtBRFVFO0VBQ0UsaURBQUE7QUNQSjtBRFVBO0VBQ0ksNENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsbURBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDUEo7QURVRTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDRixrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ1BKO0FEV0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDUko7QURXSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ1JSO0FEV1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBR0EsaUNBQUE7QUNSWiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luYmVuZTIvbG9naW5iZW5lMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MTAwLDIwMCwzMDAsNDAwLDUwMCw2MDAsNzAwLDgwMCw5MDAnKTtcblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hcmFudGg6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XG5cbjpob3N0IHtcbmJvZHl7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9sb2dpbi5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuIH1cblxuXG5cbmgye1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IzY2NjtcbiAgICBtYXJnaW4tYm90dG9tOiAydnc7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIH1cblxuLmNvbnRhaW5lcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MCU7XG59XG5cblxuXG5cbi5jb250YWluZXJsb2dve1xuICAgIG1hcmdpbi10b3A6IC01dnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cblxuIC5sb2dve1xuXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDIwdnc7XG4gfVxuXG4gLnVuaWJlZS1uYW1lIHtcbiAgICBmb250LWZhbWlseTogJ0FtYXJhbnRoJywgc2Fucy1zZXJpZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICBcbiAgfVxuXG4uaWRlbnRpZnl7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiAtLjUwZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5pZGVudGlmeTJ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiAtLjAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbi5jaGFtcHtcbm1hcmdpbjogMTJweDtcblxufVxuXG5cbi5sb2dpbi1jb250YWluZXJ7XG4gICAgLy8gaGVpZ2h0OiAxMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5sb2dpbi1mb3Jte1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogMzgwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmxvZ2luLWZvcm0gLmZvcm0tY29udHJvbHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWluLWhlaWdodDogNDhweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY1RjA7XG4gICAgLW1vei1ib3gtc2hhZG93OiAgICBpbnNldCAwIDAgMTVweCAjNjg2ODY4NTk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAjNjg2ODY4NTk7XG4gICAgYm94LXNoYWRvdzogICAgICAgICBpbnNldCAwIDAgMTVweCAjNjg2ODY4NTk7XG4gIH1cbiAgLmxvZ2luLWZvcm0gYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IzY2NjtcbiAgfVxuICAubG9naW4tZm9ybSBhOmhvdmVye1xuICAgIGNvbG9yOiNmOWQ2NTU7XG4gIH1cbiAgLmZvcmdvdC1saW5re1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRyb2w6Zm9jdXN7XG4gICAgYm9yZGVyLWNvbG9yOiM2ZDZkNmQ7XG4gIH1cbiAgLmJ0bi1jdXN0b217XG4gICAgYmFja2dyb3VuZDogI2Y5ZDY1NTtcbiAgICBjb2xvcjojZmZmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIH1cbiAgLmJ0bi1jdXN0b206Zm9jdXMsXG4gIC5idG4tY3VzdG9tOmhvdmVyLFxuICAuYnRuLWN1c3RvbTphY3RpdmUsXG4gIC5idG4tY3VzdG9tOmFjdGl2ZTpmb2N1c3tcbiAgICBiYWNrZ3JvdW5kOiAjZWNjZTVmO1xuICAgIGJvcmRlci1jb2xvcjogIzY5Njk2OTtcbiAgICBjb2xvcjojZmZmO1xuICB9XG4gIC5idG4tY3VzdG9tOmZvY3Vze1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDExNCw2MSwxOTAsLjI1KTtcbiAgfVxuXG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc5NSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG4gICAgcGFkZGluZy10b3A6IDN2aDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiYSgxMjQsIDEyNCwgMTI0LCAwLjM1Nik7XG4gICAgbWFyZ2luLWxlZnQ6IC01dnc7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNXZ3O1xuICB9XG5cbiAgLmJvdXRvbntcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTVyZW07XG4gICAgbWFyZ2luLXRvcDogNXZ3ICFpbXBvcnRhbnQ7XG4gIH1cblxuXG4gIC5mb290ZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICB3aWR0aDoxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzM0NUI3MztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuYmFja3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6MTd2dztcbiAgICAgICAgd2lkdGg6IDEsM3JlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00NSU7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1jb250cm9se1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogNDhweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAgICBpbnNldCAwIDAgNXB4ICNjY2NjY2M7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggI2NjY2NjYztcbiAgICAgICAgICAgIGJveC1zaGFkb3c6ICAgICAgICAgaW5zZXQgMCAwIDVweCAjY2NjY2NjO1xuICAgICAgICAgIH1cblxuXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjEwMCwyMDAsMzAwLDQwMCw1MDAsNjAwLDcwMCw4MDAsOTAwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXJhbnRoOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcbjpob3N0IGJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2xvZ2luLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNjY2O1xuICBtYXJnaW4tYm90dG9tOiAydnc7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MCU7XG59XG5cbi5jb250YWluZXJsb2dvIHtcbiAgbWFyZ2luLXRvcDogLTV2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjB2dztcbn1cblxuLnVuaWJlZS1uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiQW1hcmFudGhcIiwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pZGVudGlmeSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IC0wLjVlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogXCJwb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uaWRlbnRpZnkyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogLTAuMDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogXCJwb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4uY2hhbXAge1xuICBtYXJnaW46IDEycHg7XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLWZvcm0ge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAzODBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW4tZm9ybSAuZm9ybS1jb250cm9sIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNUYwO1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4ICM2ODY4Njg1OTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAjNjg2ODY4NTk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4ICM2ODY4Njg1OTtcbn1cblxuLmxvZ2luLWZvcm0gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5sb2dpbi1mb3JtIGE6aG92ZXIge1xuICBjb2xvcjogI2Y5ZDY1NTtcbn1cblxuLmZvcmdvdC1saW5rIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM2ZDZkNmQ7XG59XG5cbi5idG4tY3VzdG9tIHtcbiAgYmFja2dyb3VuZDogI2Y5ZDY1NTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogNDhweDtcbn1cblxuLmJ0bi1jdXN0b206Zm9jdXMsXG4uYnRuLWN1c3RvbTpob3Zlcixcbi5idG4tY3VzdG9tOmFjdGl2ZSxcbi5idG4tY3VzdG9tOmFjdGl2ZTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNlY2NlNWY7XG4gIGJvcmRlci1jb2xvcjogIzY5Njk2OTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tY3VzdG9tOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMTE0LCA2MSwgMTkwLCAwLjI1KTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzk1KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIlO1xuICBwYWRkaW5nLXRvcDogM3ZoO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYmEoMTI0LCAxMjQsIDEyNCwgMC4zNTYpO1xuICBtYXJnaW4tbGVmdDogLTV2dztcbiAgbWFyZ2luLXJpZ2h0OiAtNXZ3O1xufVxuXG4uYm91dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTVyZW07XG4gIG1hcmdpbi10b3A6IDV2dyAhaW1wb3J0YW50O1xufVxuXG4uZm9vdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzM0NUI3MztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3dnc7XG4gIHdpZHRoOiAxLCAzcmVtO1xuICBtYXJnaW4tbGVmdDogLTQ1JTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICNjY2NjY2M7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjY2NjY2NjO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICNjY2NjY2M7XG59Il19 */");

/***/ }),

/***/ "./src/app/loginbene2/loginbene2.page.ts":
/*!***********************************************!*\
  !*** ./src/app/loginbene2/loginbene2.page.ts ***!
  \***********************************************/
/*! exports provided: Loginbene2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loginbene2Page", function() { return Loginbene2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let Loginbene2Page = class Loginbene2Page {
    constructor() { }
    ngOnInit() {
    }
};
Loginbene2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loginbene2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./loginbene2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginbene2/loginbene2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./loginbene2.page.scss */ "./src/app/loginbene2/loginbene2.page.scss")).default]
    })
], Loginbene2Page);



/***/ })

}]);
//# sourceMappingURL=loginbene2-loginbene2-module-es2015.js.map