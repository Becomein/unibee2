(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registerbene-registerbene-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registerbene/registerbene.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registerbene/registerbene.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n</ion-header>\n\n<ion-content>\n  <body>\n  <div class=\"container\">\n    <div class=\"col-12\"> \n      <img class=\"logo mt-5 bt-2\" src=\"assets/logo-unibee-white.png\" alt=\"logo\" />\n      <p class=\"unibee-name text-center font-weight-light\">Unibee</p>\n      <img class=\"back\" src=\"assets/back-white.svg\" alt=\"back\" />\n    </div>\n  </div>\n\n  <div class=container>\n    <div class=\"col-12\"> \n\n      <div class=\"card\">\n      <div class=\"row\">\n        <div class=\"col-6\">    \n          <p class=\"identify\">Nom</p>                            \n          <div class=\"form-group champ\">\n          <input type=\"text\" class=\"form-control rounded-pill form-control-lg\"\n              placeholder=\"Nom\"></div>\n            </div>\n        <div class=\"col-6\">   \n          <p class=\"identify\">Prénom</p>       \n          <div class=\"form-group champ\">\n          <input type=\"text\" class=\"form-control rounded-pill form-control-lg\"\n              placeholder=\"Prénom\"></div>\n            </div>\n        </div>\n\n        <div class=\"col-12\">    \n          <p class=\"identify2\">Adresse email</p>                            \n          <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control rounded-pill form-control-lg\"\n              placeholder=\"Adresse email\"></div>\n            </div>\n\n            <div class=\"col-12\">    \n              <p class=\"identify2\">Mot de passe</p>                            \n              <div class=\"form-group\">\n              <input type=\"password\" class=\"form-control rounded-pill form-control-lg\"\n                  placeholder=\"Mot de passe\"></div>\n                </div>\n                <a href=\"#\">\n                <button type=\"submit\" class=\"btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase bouton\">S'enregistrer</button></a>\n\n<div class=\"col-12 container\">\n\n  <p class=\"mt-3 font-weight-normal\">\n      <a href=\"#\">\n          <strong class=\"footer\">j'ai déjà un Compte</strong>\n      </a>\n  </p>\n    </div>\n  </div>\n</div>\n</div>\n\n</body>\n\n\n</ion-content>\n\n<!--<footer>\n  <div class=\"col-12 container\">\n\n      <p class=\"mt-3 font-weight-normal\">\n          <a href=\"#\">\n              <strong class=\"footer\">Se connecter</strong>\n          </a>\n      </p>\n</div>\n</footer>\n-->");

/***/ }),

/***/ "./src/app/registerbene/registerbene-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/registerbene/registerbene-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RegisterbenePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterbenePageRoutingModule", function() { return RegisterbenePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registerbene_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registerbene.page */ "./src/app/registerbene/registerbene.page.ts");




const routes = [
    {
        path: '',
        component: _registerbene_page__WEBPACK_IMPORTED_MODULE_3__["RegisterbenePage"]
    }
];
let RegisterbenePageRoutingModule = class RegisterbenePageRoutingModule {
};
RegisterbenePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterbenePageRoutingModule);



/***/ }),

/***/ "./src/app/registerbene/registerbene.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/registerbene/registerbene.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterbenePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterbenePageModule", function() { return RegisterbenePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registerbene_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registerbene-routing.module */ "./src/app/registerbene/registerbene-routing.module.ts");
/* harmony import */ var _registerbene_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registerbene.page */ "./src/app/registerbene/registerbene.page.ts");







let RegisterbenePageModule = class RegisterbenePageModule {
};
RegisterbenePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registerbene_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterbenePageRoutingModule"]
        ],
        declarations: [_registerbene_page__WEBPACK_IMPORTED_MODULE_6__["RegisterbenePage"]]
    })
], RegisterbenePageModule);



/***/ }),

/***/ "./src/app/registerbene/registerbene.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/registerbene/registerbene.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900\");\n@import url(\"https://fonts.googleapis.com/css2?family=Amaranth:wght@700&display=swap\");\n:host body {\n  background-image: url(\"/assets/login.svg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.container {\n  text-align: center;\n}\n.logo {\n  height: 20vw;\n}\n.unibee-name {\n  font-family: \"Amaranth\", sans-serif;\n  position: relative;\n  color: white;\n}\n.identify {\n  text-align: left;\n  margin-bottom: -0.5em;\n  position: relative;\n  font-family: \"poppins\", sans-serif;\n  margin-left: 30px;\n}\n.identify2 {\n  text-align: left;\n  margin-bottom: -0.01em;\n  position: relative;\n  font-family: \"poppins\", sans-serif;\n  margin-left: 16px;\n}\n.champ {\n  margin: 12px;\n}\n.login-container {\n  width: 100%;\n}\n.login-form {\n  margin: auto;\n  width: 380px;\n  padding: 15px;\n  max-width: 100%;\n}\n.login-form .form-control {\n  font-size: 15px;\n  min-height: 48px;\n  font-weight: 500;\n  background-color: #F6F5F0;\n  box-shadow: inset 0 0 15px #68686859;\n}\n.login-form a {\n  text-decoration: none;\n  color: #666;\n}\n.login-form a:hover {\n  color: #f9d655;\n}\n.forgot-link {\n  font-size: 12px;\n  margin-left: -10px;\n}\n.form-control:focus {\n  border-color: #6d6d6d;\n}\n.btn-custom {\n  background: #f9d655;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 600;\n  min-height: 48px;\n}\n.btn-custom:focus,\n.btn-custom:hover,\n.btn-custom:active,\n.btn-custom:active:focus {\n  background: #ecce5f;\n  border-color: #696969;\n  color: #fff;\n}\n.btn-custom:focus {\n  box-shadow: 0 0 0 0.2rem rgba(114, 61, 190, 0.25);\n}\n.card {\n  background-color: rgba(255, 255, 255, 0.795);\n  border-radius: 20px;\n  padding-bottom: 2%;\n  padding-top: 3vh;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  box-shadow: 5px 5px 15px rgba(124, 124, 124, 0.356);\n  margin-left: -5vw;\n  margin-right: -5vw;\n}\n.bouton {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  width: 15rem;\n  margin-top: 5vw !important;\n}\n.footer {\n  position: relative;\n  width: 100%;\n  font-size: 15px;\n  color: #345B73;\n  font-weight: bold;\n}\n.back {\n  position: absolute;\n  top: 17vw;\n  width: 1, 3rem;\n  margin-left: -45%;\n}\n.form-control {\n  font-size: 15px;\n  min-height: 48px;\n  font-weight: 500;\n  background-color: #ffffff;\n  box-shadow: inset 0 0 5px #cccccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWNvbWVpbi9EZXNrdG9wL2FwcGxpY2F0aW9uLXVuaWJlZS91bmliZWUyLmdpdC9zcmMvYXBwL3JlZ2lzdGVyYmVuZS9yZWdpc3RlcmJlbmUucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3RlcmJlbmUvcmVnaXN0ZXJiZW5lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxrR0FBQTtBQUVBLHNGQUFBO0FBR1I7RUFDSSwwQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNGSjtBRFFDO0VBRUcsa0JBQUE7QUNOSjtBRFdDO0VBRUcsWUFBQTtBQ1RKO0FEWUM7RUFDRyxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1RKO0FEYUE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Ysa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FDVkY7QURhQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDRixrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7QUNWRjtBRGFBO0VBQ0EsWUFBQTtBQ1ZBO0FEZUE7RUFFSSxXQUFBO0FDYko7QURlRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNaSjtBRGNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUdBLG9DQUFBO0FDWEo7QURhRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEWUU7RUFDRSxjQUFBO0FDVEo7QURXRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ1JKO0FEV0U7RUFDRSxxQkFBQTtBQ1JKO0FEVUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1BKO0FEU0U7Ozs7RUFJRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ05KO0FEUUU7RUFDRSxpREFBQTtBQ0xKO0FEUUE7RUFDSSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxtREFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFFFO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNGLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDTEo7QURTRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNOSjtBRFNJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDTlI7QURTUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFHQSxpQ0FBQTtBQ05aIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXJiZW5lL3JlZ2lzdGVyYmVuZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MTAwLDIwMCwzMDAsNDAwLDUwMCw2MDAsNzAwLDgwMCw5MDAnKTtcblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hcmFudGg6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XG5cbjpob3N0IHtcbmJvZHl7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9sb2dpbi5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuIH1cblxuXG5cbiAuY29udGFpbmVye1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cblxuIC5sb2dve1xuXG4gICAgaGVpZ2h0OiAyMHZ3O1xuIH1cblxuIC51bmliZWUtbmFtZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBbWFyYW50aCcsIHNhbnMtc2VyaWY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgXG4gIH1cblxuLmlkZW50aWZ5e1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogLS41MGVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uaWRlbnRpZnkye1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogLS4wMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4uY2hhbXB7XG5tYXJnaW46IDEycHg7XG5cbn1cblxuXG4ubG9naW4tY29udGFpbmVye1xuICAgIC8vIGhlaWdodDogMTB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubG9naW4tZm9ybXtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDM4MHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIC5sb2dpbi1mb3JtIC5mb3JtLWNvbnRyb2x7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNUYwO1xuICAgIC1tb3otYm94LXNoYWRvdzogICAgaW5zZXQgMCAwIDE1cHggIzY4Njg2ODU5O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggIzY4Njg2ODU5O1xuICAgIGJveC1zaGFkb3c6ICAgICAgICAgaW5zZXQgMCAwIDE1cHggIzY4Njg2ODU5O1xuICB9XG4gIC5sb2dpbi1mb3JtIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiM2NjY7XG4gIH1cbiAgLmxvZ2luLWZvcm0gYTpob3ZlcntcbiAgICBjb2xvcjojZjlkNjU1O1xuICB9XG4gIC5mb3Jnb3QtbGlua3tcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICB9XG4gIFxuICAuZm9ybS1jb250cm9sOmZvY3Vze1xuICAgIGJvcmRlci1jb2xvcjojNmQ2ZDZkO1xuICB9XG4gIC5idG4tY3VzdG9te1xuICAgIGJhY2tncm91bmQ6ICNmOWQ2NTU7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtaW4taGVpZ2h0OiA0OHB4O1xuICB9XG4gIC5idG4tY3VzdG9tOmZvY3VzLFxuICAuYnRuLWN1c3RvbTpob3ZlcixcbiAgLmJ0bi1jdXN0b206YWN0aXZlLFxuICAuYnRuLWN1c3RvbTphY3RpdmU6Zm9jdXN7XG4gICAgYmFja2dyb3VuZDogI2VjY2U1ZjtcbiAgICBib3JkZXItY29sb3I6ICM2OTY5Njk7XG4gICAgY29sb3I6I2ZmZjtcbiAgfVxuICAuYnRuLWN1c3RvbTpmb2N1c3tcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMTQsNjEsMTkwLC4yNSk7XG4gIH1cblxuLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xuICAgIHBhZGRpbmctdG9wOiAzdmg7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYmEoMTI0LCAxMjQsIDEyNCwgMC4zNTYpO1xuICAgIG1hcmdpbi1sZWZ0OiAtNXZ3O1xuICAgIG1hcmdpbi1yaWdodDogLTV2dztcbiAgfVxuXG4gIC5ib3V0b257XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDE1cmVtO1xuICAgIG1hcmdpbi10b3A6IDV2dyAhaW1wb3J0YW50O1xuICB9XG5cblxuICAuZm9vdGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgd2lkdGg6MTAwJTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICMzNDVCNzM7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmJhY2t7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOjE3dnc7XG4gICAgICAgIHdpZHRoOiAxLDNyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNDUlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm0tY29udHJvbHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogICAgaW5zZXQgMCAwIDVweCAjY2NjY2NjO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICNjY2NjY2M7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAgICAgICAgIGluc2V0IDAgMCA1cHggI2NjY2NjYztcbiAgICAgICAgICB9XG5cblxuXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjEwMCwyMDAsMzAwLDQwMCw1MDAsNjAwLDcwMCw4MDAsOTAwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXJhbnRoOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcbjpob3N0IGJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2xvZ2luLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDIwdnc7XG59XG5cbi51bmliZWUtbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFtYXJhbnRoXCIsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaWRlbnRpZnkge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAtMC41ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IFwicG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmlkZW50aWZ5MiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IC0wLjAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IFwicG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuLmNoYW1wIHtcbiAgbWFyZ2luOiAxMnB4O1xufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbi1mb3JtIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMzgwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLWZvcm0gLmZvcm0tY29udHJvbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjVGMDtcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAjNjg2ODY4NTk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggIzY4Njg2ODU5O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAjNjg2ODY4NTk7XG59XG5cbi5sb2dpbi1mb3JtIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ubG9naW4tZm9ybSBhOmhvdmVyIHtcbiAgY29sb3I6ICNmOWQ2NTU7XG59XG5cbi5mb3Jnb3QtbGluayB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNmQ2ZDZkO1xufVxuXG4uYnRuLWN1c3RvbSB7XG4gIGJhY2tncm91bmQ6ICNmOWQ2NTU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG59XG5cbi5idG4tY3VzdG9tOmZvY3VzLFxuLmJ0bi1jdXN0b206aG92ZXIsXG4uYnRuLWN1c3RvbTphY3RpdmUsXG4uYnRuLWN1c3RvbTphY3RpdmU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjZWNjZTVmO1xuICBib3JkZXItY29sb3I6ICM2OTY5Njk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWN1c3RvbTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDExNCwgNjEsIDE5MCwgMC4yNSk7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc5NSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgcGFkZGluZy10b3A6IDN2aDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDEyNCwgMTI0LCAxMjQsIDAuMzU2KTtcbiAgbWFyZ2luLWxlZnQ6IC01dnc7XG4gIG1hcmdpbi1yaWdodDogLTV2dztcbn1cblxuLmJvdXRvbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE1cmVtO1xuICBtYXJnaW4tdG9wOiA1dncgIWltcG9ydGFudDtcbn1cblxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMzNDVCNzM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxN3Z3O1xuICB3aWR0aDogMSwgM3JlbTtcbiAgbWFyZ2luLWxlZnQ6IC00NSU7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjY2NjY2NjO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggI2NjY2NjYztcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjY2NjY2NjO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/registerbene/registerbene.page.ts":
/*!***************************************************!*\
  !*** ./src/app/registerbene/registerbene.page.ts ***!
  \***************************************************/
/*! exports provided: RegisterbenePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterbenePage", function() { return RegisterbenePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let RegisterbenePage = class RegisterbenePage {
    constructor() { }
    ngOnInit() {
    }
};
RegisterbenePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registerbene',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registerbene.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registerbene/registerbene.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registerbene.page.scss */ "./src/app/registerbene/registerbene.page.scss")).default]
    })
], RegisterbenePage);



/***/ })

}]);
//# sourceMappingURL=registerbene-registerbene-module-es2015.js.map