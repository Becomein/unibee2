function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loginbene-loginbene-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loginbene/loginbene.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loginbene/loginbene.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginbeneLoginbenePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <link rel=\"stylesheet\" href=\"home.page.scss\">\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <ion-header collapse=\"condense\">\n    </ion-header>\n\n    <body>\n\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <img class=\"logo\" src=\"assets/logo-unibee-white.png\" alt=\"logo\" />\n                        <p class=\"unibee-name text-center font-weight-light\">Unibee</p>\n                    <img class=\"back\" src=\"assets/back-white.svg\" alt=\"back\" />\n                        <div class=\"d-flex justify-content-center align-items-center login-container\" class=\"card\">\n                            <form class=\"login-form text-center\">\n                                <h1 class=\"font-weight-light card-title\">Connexion</h1>\n                            </form>\n                            <form class=\"login-form text-center\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control rounded-pill form-control-lg\"\n                                        placeholder=\"Nom d'utilisateur\"></div>\n                                <div class=\"form-group\">\n                                    <input type=\"password\" class=\"form-control rounded-pill form-control-lg\" placeholder=\"Mot de passe\">\n                                </div>\n                                <div class=\"forgot-link form-group d-flex justify-content-between align-items-center\">\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\" class=\"rounded-check\" for=\"remember\"><a href=\"#\">Mot de passe oublié</a> </label>\n                                    </div>\n                                </div>\n                                <button type=\"submit\" class=\"btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase\">Log in</button>\n                            </form>\n                        </div>\n\n                </div>\n            </div>\n        </div>\n        <footer>\n            <div class=\"d-flex justify-content-center align-items-center login-container login-form a footer\">\n        \n                <p class=\"mt-3 font-weight-normal\">\n                    <a href=\"#\">\n                        <strong>S'inscrire</strong>\n                    </a>\n                </p>\n            </div>\n        </footer>\n    </body>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/loginbene/loginbene-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/loginbene/loginbene-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: LoginbenePageRoutingModule */

  /***/
  function srcAppLoginbeneLoginbeneRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginbenePageRoutingModule", function () {
      return LoginbenePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _loginbene_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./loginbene.page */
    "./src/app/loginbene/loginbene.page.ts");

    var routes = [{
      path: '',
      component: _loginbene_page__WEBPACK_IMPORTED_MODULE_3__["LoginbenePage"]
    }];

    var LoginbenePageRoutingModule = function LoginbenePageRoutingModule() {
      _classCallCheck(this, LoginbenePageRoutingModule);
    };

    LoginbenePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginbenePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/loginbene/loginbene.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/loginbene/loginbene.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginbenePageModule */

  /***/
  function srcAppLoginbeneLoginbeneModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginbenePageModule", function () {
      return LoginbenePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _loginbene_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./loginbene-routing.module */
    "./src/app/loginbene/loginbene-routing.module.ts");
    /* harmony import */


    var _loginbene_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./loginbene.page */
    "./src/app/loginbene/loginbene.page.ts");

    var LoginbenePageModule = function LoginbenePageModule() {
      _classCallCheck(this, LoginbenePageModule);
    };

    LoginbenePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _loginbene_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginbenePageRoutingModule"]],
      declarations: [_loginbene_page__WEBPACK_IMPORTED_MODULE_6__["LoginbenePage"]]
    })], LoginbenePageModule);
    /***/
  },

  /***/
  "./src/app/loginbene/loginbene.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/loginbene/loginbene.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginbeneLoginbenePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900\");\n@import url(\"https://fonts.googleapis.com/css2?family=Amaranth:wght@700&display=swap\");\nh1 {\n  font-family: \"Poppins\", sans-serif;\n  color: #666;\n  margin-bottom: 0vw;\n  margin-top: 5vw;\n}\nbody {\n  position: absolute;\n  font-family: \"Poppins\", sans-serif;\n  color: white;\n  overflow-y: scroll;\n  background-image: url('login.svg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  min-height: auto;\n}\n.login-container {\n  width: 100%;\n}\n.login-form {\n  margin: auto;\n  width: 380px;\n  padding: 15px;\n  max-width: 100%;\n}\n.login-form .form-control {\n  font-size: 15px;\n  min-height: 48px;\n  font-weight: 500;\n  background-color: #F6F5F0;\n  box-shadow: inset 0 0 15px #68686859;\n}\n.login-form a {\n  text-decoration: none;\n  color: #666;\n}\n.login-form a:hover {\n  color: #f9d655;\n}\n.forgot-link {\n  font-size: 12px;\n  margin-left: -10px;\n}\n.form-control:focus {\n  border-color: #6d6d6d;\n}\n.btn-custom {\n  background: #f9d655;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 600;\n  min-height: 48px;\n}\n.btn-custom:focus,\n.btn-custom:hover,\n.btn-custom:active,\n.btn-custom:active:focus {\n  background: #ecce5f;\n  border-color: #696969;\n  color: #fff;\n}\n.btn-custom:focus {\n  box-shadow: 0 0 0 0.2rem rgba(114, 61, 190, 0.25);\n}\n.ellipse {\n  width: 200px;\n  height: 200px;\n  background: #f9d655;\n  border-radius: 100px/100px;\n}\n.unibee-name {\n  font-family: \"Amaranth\", sans-serif;\n  position: relative;\n  margin-top: 1px;\n  margin-bottom: 20%;\n}\n.logo {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  margin-top: 4em;\n  margin-bottom: 1vw;\n  height: 20vw;\n}\n.card {\n  background-color: rgba(255, 255, 255, 0.795);\n  border-radius: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20vw;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  box-shadow: 5px 5px 15px rgba(124, 124, 124, 0.356);\n}\n.footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  padding-top: 50px;\n  height: 50px;\n  margin-bottom: 25px;\n  font-size: 15px;\n}\n.back {\n  position: absolute;\n  top: 10vw;\n  width: 1, 3rem;\n  padding-left: 1%;\n}\n@media screen and (min-width: 200px) and (max-width: 320px) {\n  .unibee-name {\n    font-family: \"Amaranth\", sans-serif;\n    font-size: min(max(5vw), 40px);\n    position: relative;\n    margin-top: 1px;\n    margin-bottom: 2%;\n  }\n\n  .footer {\n    position: absolute;\n    width: 100%;\n    margin-top: 50px;\n    height: 50px;\n    margin-bottom: 10px;\n    font-size: 12px;\n  }\n\n  .back {\n    position: absolute;\n    top: 10vw;\n    width: 1rem;\n    padding-left: 1%;\n  }\n\n  .logo {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    position: relative;\n    margin-top: 2em;\n    margin-bottom: 1vw;\n    height: 20vw;\n  }\n}\n@media screen and (min-height: 200px) and (max-height: 530px) {\n  .footer {\n    margin-bottom: -100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWNvbWVpbi9EZXNrdG9wL2FwcGxpY2F0aW9uIHVuaWJlZS91bmliZWUvc3JjL2FwcC9sb2dpbmJlbmUvbG9naW5iZW5lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW5iZW5lL2xvZ2luYmVuZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0dBQUE7QUFFQSxzRkFBQTtBQUdSO0VBQ0Usa0NBQUE7RUFFQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSEY7QURLQTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFHQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0pGO0FETUE7RUFFRSxXQUFBO0FDSkY7QURNQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNIRjtBREtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUdBLG9DQUFBO0FDRkY7QURJQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ0RGO0FER0E7RUFDRSxjQUFBO0FDQUY7QURFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0NGO0FERUE7RUFDRSxxQkFBQTtBQ0NGO0FEQ0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VGO0FEQUE7Ozs7RUFJRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0dGO0FEREE7RUFDRSxpREFBQTtBQ0lGO0FEREE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUNJRjtBRERBO0VBQ0UsbUNBQUE7RUFFQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0dGO0FEQ0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0VGO0FEQ0E7RUFDRSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLG1EQUFBO0FDRUY7QURDQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0VGO0FERUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDQTtBRElFO0VBQ0U7SUFDRSxtQ0FBQTtJQUNBLDhCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUNESjs7RURNRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQ0hKOztFRFFJO0lBQ0Usa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VDTE47O0VEUU07SUFDRSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFQ0xSO0FBQ0Y7QURTRTtFQUNFO0lBQ0UscUJBQUE7RUNQSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW5iZW5lL2xvZ2luYmVuZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MTAwLDIwMCwzMDAsNDAwLDUwMCw2MDAsNzAwLDgwMCw5MDAnKTtcblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hcmFudGg6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XG5cblxuaDF7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4vLyAgZm9udC1zaXplOiBtaW4obWF4KDh2dyksIDQwcHgpO1xuICBjb2xvcjojNjY2O1xuICBtYXJnaW4tYm90dG9tOiAwdnc7XG4gIG1hcmdpbi10b3A6IDV2dztcbn1cbmJvZHl7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAvLyBmb250LXNpemU6IG1pbihtYXgoNHZ3KSwgMTJweCk7XG4vLyAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2xvZ2luLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xufVxuLmxvZ2luLWNvbnRhaW5lcntcbiAgLy8gaGVpZ2h0OiAxMHZoO1xuICB3aWR0aDogMTAwJTtcbn1cbi5sb2dpbi1mb3Jte1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAzODBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmxvZ2luLWZvcm0gLmZvcm0tY29udHJvbHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNUYwO1xuICAtbW96LWJveC1zaGFkb3c6ICAgIGluc2V0IDAgMCAxNXB4ICM2ODY4Njg1OTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAjNjg2ODY4NTk7XG4gIGJveC1zaGFkb3c6ICAgICAgICAgaW5zZXQgMCAwIDE1cHggIzY4Njg2ODU5O1xufVxuLmxvZ2luLWZvcm0gYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjojNjY2O1xufVxuLmxvZ2luLWZvcm0gYTpob3ZlcntcbiAgY29sb3I6I2Y5ZDY1NTtcbn1cbi5mb3Jnb3QtbGlua3tcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXN7XG4gIGJvcmRlci1jb2xvcjojNmQ2ZDZkO1xufVxuLmJ0bi1jdXN0b217XG4gIGJhY2tncm91bmQ6ICNmOWQ2NTU7XG4gIGNvbG9yOiNmZmY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogNDhweDtcbn1cbi5idG4tY3VzdG9tOmZvY3VzLFxuLmJ0bi1jdXN0b206aG92ZXIsXG4uYnRuLWN1c3RvbTphY3RpdmUsXG4uYnRuLWN1c3RvbTphY3RpdmU6Zm9jdXN7XG4gIGJhY2tncm91bmQ6ICNlY2NlNWY7XG4gIGJvcmRlci1jb2xvcjogIzY5Njk2OTtcbiAgY29sb3I6I2ZmZjtcbn1cbi5idG4tY3VzdG9tOmZvY3Vze1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMTQsNjEsMTkwLC4yNSk7XG59XG5cbi5lbGxpcHNlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjlkNjU1O1xuICBib3JkZXItcmFkaXVzOiAxMDBweCAvIDEwMHB4OyBcbn1cblxuLnVuaWJlZS1uYW1lIHtcbiAgZm9udC1mYW1pbHk6ICdBbWFyYW50aCcsIHNhbnMtc2VyaWY7XG4vLyAgZm9udC1zaXplOiBtaW4obWF4KDV2dyksIDQwcHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgbWFyZ2luLWJvdHRvbTogMjAlO1xuXG59XG5cbi5sb2dve1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA0ZW07XG4gIG1hcmdpbi1ib3R0b206IDF2dztcbiAgaGVpZ2h0OiAyMHZ3O1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OTUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyMHZ3O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYmEoMTI0LCAxMjQsIDEyNCwgMC4zNTYpO1xuXG59XG4uZm9vdGVye1xuICBwb3NpdGlvbjogZml4ZWQ7OyBcbiAgYm90dG9tOjA7XG4gIHdpZHRoOjEwMCU7XG4gIHBhZGRpbmctdG9wOjUwcHg7XG4gIGhlaWdodDo1MHB4O1xuICBtYXJnaW4tYm90dG9tOjI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgXG4gIH1cblxuLmJhY2t7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6MTB2dztcbndpZHRoOiAxLDNyZW07XG5wYWRkaW5nLWxlZnQ6IDElO1xufVxuXG5cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDBweCkgYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgLnVuaWJlZS1uYW1lIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQW1hcmFudGgnLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC1zaXplOiBtaW4obWF4KDV2dyksIDQwcHgpO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgfVxuXG5cblxuICAgIC5mb290ZXJ7XG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBtYXJnaW4tdG9wOjUwcHg7XG4gICAgICBoZWlnaHQ6NTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIFxuICAgICAgfVxuXG5cbiAgICAgIC5iYWNre1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDoxMHZ3O1xuICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dve1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDF2dztcbiAgICAgICAgICBoZWlnaHQ6IDIwdnc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMjAwcHgpIGFuZCAobWF4LWhlaWdodDogNTMwcHgpIHtcbiAgICAuZm9vdGVye1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTEwMHB4XG4gICAgfVxuICB9IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoxMDAsMjAwLDMwMCw0MDAsNTAwLDYwMCw3MDAsODAwLDkwMFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWFyYW50aDp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbi1ib3R0b206IDB2dztcbiAgbWFyZ2luLXRvcDogNXZ3O1xufVxuXG5ib2R5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvbG9naW4uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLWZvcm0ge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAzODBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW4tZm9ybSAuZm9ybS1jb250cm9sIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNUYwO1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4ICM2ODY4Njg1OTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAjNjg2ODY4NTk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4ICM2ODY4Njg1OTtcbn1cblxuLmxvZ2luLWZvcm0gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5sb2dpbi1mb3JtIGE6aG92ZXIge1xuICBjb2xvcjogI2Y5ZDY1NTtcbn1cblxuLmZvcmdvdC1saW5rIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM2ZDZkNmQ7XG59XG5cbi5idG4tY3VzdG9tIHtcbiAgYmFja2dyb3VuZDogI2Y5ZDY1NTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogNDhweDtcbn1cblxuLmJ0bi1jdXN0b206Zm9jdXMsXG4uYnRuLWN1c3RvbTpob3Zlcixcbi5idG4tY3VzdG9tOmFjdGl2ZSxcbi5idG4tY3VzdG9tOmFjdGl2ZTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNlY2NlNWY7XG4gIGJvcmRlci1jb2xvcjogIzY5Njk2OTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tY3VzdG9tOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMTE0LCA2MSwgMTkwLCAwLjI1KTtcbn1cblxuLmVsbGlwc2Uge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQ6ICNmOWQ2NTU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4LzEwMHB4O1xufVxuXG4udW5pYmVlLW5hbWUge1xuICBmb250LWZhbWlseTogXCJBbWFyYW50aFwiLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgbWFyZ2luLWJvdHRvbTogMjAlO1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDRlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXZ3O1xuICBoZWlnaHQ6IDIwdnc7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc5NSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwdnc7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiYSgxMjQsIDEyNCwgMTI0LCAwLjM1Nik7XG59XG5cbi5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTB2dztcbiAgd2lkdGg6IDEsIDNyZW07XG4gIHBhZGRpbmctbGVmdDogMSU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMHB4KSBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLnVuaWJlZS1uYW1lIHtcbiAgICBmb250LWZhbWlseTogXCJBbWFyYW50aFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogbWluKG1heCg1dncpLCA0MHB4KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICB9XG5cbiAgLmZvb3RlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLmJhY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwdnc7XG4gICAgd2lkdGg6IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxdnc7XG4gICAgaGVpZ2h0OiAyMHZ3O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMjAwcHgpIGFuZCAobWF4LWhlaWdodDogNTMwcHgpIHtcbiAgLmZvb3RlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTEwMHB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/loginbene/loginbene.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/loginbene/loginbene.page.ts ***!
    \*********************************************/

  /*! exports provided: LoginbenePage */

  /***/
  function srcAppLoginbeneLoginbenePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginbenePage", function () {
      return LoginbenePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoginbenePage = /*#__PURE__*/function () {
      function LoginbenePage() {
        _classCallCheck(this, LoginbenePage);
      }

      _createClass(LoginbenePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginbenePage;
    }();

    LoginbenePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loginbene',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./loginbene.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loginbene/loginbene.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./loginbene.page.scss */
      "./src/app/loginbene/loginbene.page.scss"))["default"]]
    })], LoginbenePage);
    /***/
  }
}]);
//# sourceMappingURL=loginbene-loginbene-module-es5.js.map