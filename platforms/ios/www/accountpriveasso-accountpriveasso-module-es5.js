function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accountpriveasso-accountpriveasso-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/accountpriveasso/accountpriveasso.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accountpriveasso/accountpriveasso.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountpriveassoAccountpriveassoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content class=\"home-background\">\n\n      <div class=\"row col-12\"> \n            <div class=\"col-12 d-flex flex-row-reverse\">\n              <img class=\"settings\" src=\"/assets/settings.svg\" alt=\"settings\" /></div>\n          </div>\n\n\n\n    <div class=container>\n      <div class=\"col-12\"> \n        <div class=\"card cardbg\">\n        <div class=\"row h-50\">\n          <div class=\"col-4 avatar cardprofil d-table-cell align-middle h-100\">  \n            <img class=\"avatar\" src=\"/assets/avatar.png\" alt=\"addpic\">                           \n              </div>\n\n              <div class=\"col-6 h-100 nameasso\">\n                <div class=\"card card-tilte\">  \n            <h4>Unibee</h4>   \n            <h6>Association evenementielle</h6>    \n                </div>\n              </div>\n          \n        </div>\n\n        <div class=\"col-12 contact1\">\n          <p class=\"smalltitle\">Email</p>\n         <h5>unibee@gmail.com</h5>\n        </div>\n\n\n        <div class=\"col-12 contact2\">\n          <p class=\"smalltitle\">Numéro de téléphone</p>\n         <h5>07 87 56 44 32</h5>\n        </div>\n\n\n\n        </div>\n\n        <div class=\"col-12 info\">\n          <p class=\"smalltitle\">Informations</p>\n         <h5 class=\"h7\">Bienvenue sur Unibee, la première application de mise en relation entre les bénévoles et les associations.Bienvenue sur Unibee, la première application de mise en relation entre les bénévoles et les associations.Bienvenue sur Unibee, la première application de mise en relation entre les bénévoles et les associations.Bienvenue sur Unibee, la première application de mise en relation entre les bénévoles et les associations.Bienvenue sur Unibee, la première application de mise en relation entre les bénévoles et les associations.</h5>\n        </div>\n\n        \n      </div>\n  \n      \n      </div>\n\n</ion-content>\n\n\n<footer class=\"footer-transparent\">\n\n  \n  <div class=\"container2 footer\">\n    <div class=\"row col-12 d-flex justify-content-center align-items-center>\">\n      <button type=\"submit\" class=\"btn btn-custom font\">Modifier</button>\n            </div>\n  </div>\n\n    \n</footer> \n\n";
    /***/
  },

  /***/
  "./src/app/accountpriveasso/accountpriveasso-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/accountpriveasso/accountpriveasso-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: AccountpriveassoPageRoutingModule */

  /***/
  function srcAppAccountpriveassoAccountpriveassoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountpriveassoPageRoutingModule", function () {
      return AccountpriveassoPageRoutingModule;
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


    var _accountpriveasso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./accountpriveasso.page */
    "./src/app/accountpriveasso/accountpriveasso.page.ts");

    var routes = [{
      path: '',
      component: _accountpriveasso_page__WEBPACK_IMPORTED_MODULE_3__["AccountpriveassoPage"]
    }];

    var AccountpriveassoPageRoutingModule = function AccountpriveassoPageRoutingModule() {
      _classCallCheck(this, AccountpriveassoPageRoutingModule);
    };

    AccountpriveassoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AccountpriveassoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/accountpriveasso/accountpriveasso.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/accountpriveasso/accountpriveasso.module.ts ***!
    \*************************************************************/

  /*! exports provided: AccountpriveassoPageModule */

  /***/
  function srcAppAccountpriveassoAccountpriveassoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountpriveassoPageModule", function () {
      return AccountpriveassoPageModule;
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


    var _accountpriveasso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./accountpriveasso-routing.module */
    "./src/app/accountpriveasso/accountpriveasso-routing.module.ts");
    /* harmony import */


    var _accountpriveasso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./accountpriveasso.page */
    "./src/app/accountpriveasso/accountpriveasso.page.ts");

    var AccountpriveassoPageModule = function AccountpriveassoPageModule() {
      _classCallCheck(this, AccountpriveassoPageModule);
    };

    AccountpriveassoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _accountpriveasso_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountpriveassoPageRoutingModule"]],
      declarations: [_accountpriveasso_page__WEBPACK_IMPORTED_MODULE_6__["AccountpriveassoPage"]]
    })], AccountpriveassoPageModule);
    /***/
  },

  /***/
  "./src/app/accountpriveasso/accountpriveasso.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/accountpriveasso/accountpriveasso.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountpriveassoAccountpriveassoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".back {\n  z-index: 1;\n  margin-top: 2rem;\n  width: 1, 3rem;\n  margin-left: -0.3rem;\n  position: fixed;\n}\n\n.settings {\n  position: absolute;\n  margin-top: 5.9rem;\n  margin-right: -0.6rem;\n  z-index: 1;\n}\n\n.home-background {\n  --background: none;\n  background-image: url(\"/assets/account-bg.svg\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: 100vw;\n}\n\nion-content {\n  background-color: white;\n  overflow-y: auto;\n}\n\n.cardbg {\n  margin-top: 5rem;\n  background-color: white;\n  border-radius: 20px;\n  box-shadow: 5px 5px 15px #b9b8a5;\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n}\n\n.cardprofil {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  background-color: #4e4e4e;\n  border-radius: 15px;\n  margin-left: 1.3rem;\n  margin-right: 10px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.avatar {\n  border-radius: 20px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.card {\n  border-color: transparent;\n  margin-left: -10px;\n  margin-right: -10px;\n}\n\n.nameasso {\n  padding-top: 3rem;\n}\n\nh6 {\n  font-weight: bold;\n  font-size: 12px;\n  color: #f9d655;\n}\n\nh4 {\n  margin-bottom: 0px;\n  color: #212529;\n}\n\n.contact1 {\n  border-radius: 7px 7px 0px 0px;\n  /* top left, top right, bottom right, bottom left */\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  background-color: #fff0b8;\n  width: auto;\n}\n\n.contact2 {\n  border-radius: 0px 0px 7px 7px;\n  /* top left, top right, bottom right, bottom left */\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  background-color: #fff0b8;\n  width: auto;\n  border-top: 0.3mm ridge #fff0b869;\n}\n\nh5 {\n  margin-top: -1rem;\n  margin-bottom: 0.7rem;\n  color: black;\n}\n\n.smalltitle {\n  margin-top: 0.3rem;\n  font-size: 0.7rem;\n  color: #212529;\n}\n\n.info {\n  border-radius: 7px;\n  background-color: #F9D655;\n  width: auto;\n  padding-bottom: 1rem;\n  padding-top: 1rem;\n  margin-bottom: 4rem;\n}\n\n.h7 {\n  line-height: 130%;\n  text-align: justify;\n  margin-top: 0.3rem;\n  font-size: 1rem;\n}\n\n.btn-custom {\n  box-shadow: 5px 5px 15px #979687;\n  border-radius: 17px;\n  background-color: white;\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  color: #1b1b1b;\n  font-size: 15px;\n  font-weight: 600;\n  margin-left: 1.6em;\n  position: relative;\n  width: 13rem;\n  margin-bottom: 1rem;\n}\n\n.btn-custom:focus,\n.btn-custom:hover,\n.btn-custom:active,\n.btn-custom:focus {\n  box-shadow: 0 0 0 0.2rem rgba(114, 61, 190, 0.25);\n}\n\n.footer {\n  position: -webkit-sticky bottom;\n  position: sticky bottom;\n  width: 100%;\n  height: 50px;\n  font-size: 12px;\n}\n\n.font {\n  font-size: large;\n  text-transform: uppercase;\n}\n\nion-footer {\n  background: transparent url();\n}\n\n#footer-area {\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWNvbWVpbi9EZXNrdG9wL2FwcGxpY2F0aW9uLXVuaWJlZS91bmliZWUyLmdpdC9zcmMvYXBwL2FjY291bnRwcml2ZWFzc28vYWNjb3VudHByaXZlYXNzby5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjY291bnRwcml2ZWFzc28vYWNjb3VudHByaXZlYXNzby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDSSxVQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDUE47O0FEWUU7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDVE47O0FEaUJFO0VBQ0Usa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ2RKOztBRGtCRTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7QUNmTjs7QURrQkk7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFHQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNqQk47O0FEcUJFO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2xCTjs7QURzQkk7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ25CTjs7QURzQkk7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNuQk47O0FEeUJJO0VBRUUsaUJBQUE7QUN2Qk47O0FEMkJJO0VBQ0YsaUJBQUE7RUFDTSxlQUFBO0VBQ0EsY0FBQTtBQ3hCUjs7QUQ0Qkk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUN6QlI7O0FENEJJO0VBQ0UsOEJBQUE7RUFBZ0MsbURBQUE7RUFFaEMsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ3pCTjs7QUQyQkk7RUFDRSw4QkFBQTtFQUFnQyxtREFBQTtFQUVoQyxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUN4Qk47O0FENkJJO0VBRUUsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUMzQk47O0FEOEJJO0VBQ0ksa0JBQUE7RUFDRixpQkFBQTtFQUNBLGNBQUE7QUMzQk47O0FEK0JJO0VBQ0Usa0JBQUE7RUFFRyx5QkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUM3QlQ7O0FEa0NJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0YsZUFBQTtBQy9CSjs7QURvQ0U7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUdBLGtCQUFBO0VBRUEsa0JBQUE7RUFFRixZQUFBO0VBQ0EsbUJBQUE7QUNyQ0Y7O0FEeUNFOzs7O0VBU0UsaURBQUE7QUMzQ0o7O0FEK0NFO0VBQ0UsK0JBQUE7RUFBQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQzVDSjs7QUQrQ0U7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FDNUNKOztBRGdEQztFQUNELDZCQUFBO0FDN0NBOztBRGlERTtFQUNFLCtDQUFBO0FDOUNKIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudHByaXZlYXNzby9hY2NvdW50cHJpdmVhc3NvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuXG5cblxuXG4uYmFja3tcbiAgICB6LWluZGV4OiAxO1xuICAgICAgbWFyZ2luLXRvcDoycmVtO1xuICAgICAgd2lkdGg6IDEsM3JlbTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtLjNyZW07XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIFxuICAgICAgfVxuICBcbiAgXG4gIC5zZXR0aW5nc3tcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgbWFyZ2luLXRvcDogNS45cmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtLjZyZW07XG4gICAgICB6LWluZGV4OiAxO1xuICBcbiAgfVxuICBcblxuXG5cbiAgLy9iYWNrZ3JvdW5kaW1hZ2UgdG9wIGZpdCBcbiAgLmhvbWUtYmFja2dyb3VuZHsgXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9hY2NvdW50LWJnLnN2ZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xuXG4gIH1cbiAgXG4gIGlvbi1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG4gIFxuICAgIC5jYXJkYmcge1xuICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLy8gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgLy8gICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiKDE4NSwgMTg0LCAxNjUpO1xuICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAgMXJlbTtcbiAgICBcbiAgICB9XG4gIFxuICAuY2FyZHByb2ZpbHtcbiAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEuM3JlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICBcbiAgICB9XG4gIFxuICAgIC5hdmF0YXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICBcbiAgICAuY2FyZHtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICAgIH1cbiAgXG4gIFxuICBcbiAgXG4gICAgLm5hbWVhc3Nve1xuICBcbiAgICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICAgIH1cbiAgXG4gIFxuICAgIGg2e1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjooI2Y5ZDY1NSk7XG4gICAgfVxuICAgIFxuICBcbiAgICBoNHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICBjb2xvcjojMjEyNTI5O1xuICAgIH1cbiAgXG4gICAgLmNvbnRhY3Qxe1xuICAgICAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwcHggMHB4OyAvKiB0b3AgbGVmdCwgdG9wIHJpZ2h0LCBib3R0b20gcmlnaHQsIGJvdHRvbSBsZWZ0ICovXG4gICAvLyAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMGI4O1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuICAgIC5jb250YWN0MntcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggN3B4IDdweDsgLyogdG9wIGxlZnQsIHRvcCByaWdodCwgYm90dG9tIHJpZ2h0LCBib3R0b20gbGVmdCAqL1xuICAgLy8gICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICBtYXJnaW4tbGVmdDogLjVyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjBiODtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgYm9yZGVyLXRvcDogLjNtbSByaWRnZSAjZmZmMGI4Njk7XG4gICAgfVxuICBcbiAgXG4gIFxuICAgIGg1e1xuICBcbiAgICAgIG1hcmdpbi10b3A6IC0xcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLjdyZW07XG4gICAgICBjb2xvcjpibGFjaztcbiAgICB9XG4gIFxuICAgIC5zbWFsbHRpdGxle1xuICAgICAgICBtYXJnaW4tdG9wOiAuM3JlbTtcbiAgICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgICBjb2xvcjojMjEyNTI5O1xuICAgIH1cbiAgXG4gIFxuICAgIC5pbmZve1xuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgLy8gICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlENjU1O1xuICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgXG4gIFxuICAgIH1cbiAgXG4gICAgLmg3e1xuICAgICAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgbWFyZ2luLXRvcDogLjNyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgXG4gIFxuICBcbiAgLmJ0bi1jdXN0b217XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYigxNTEsIDE1MCwgMTM1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgICBjb2xvcjpyZ2IoMjcsIDI3LCAyNyk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAvLyBtaW4taGVpZ2h0OiAzcmVtO1xuICAgLy8gYm9yZGVyLWNvbG9yOiByZ2IoMjcsIDI3LCAyNyk7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNmVtO1xuICAgLy8gbWFyZ2luLXJpZ2h0OiAyLjNyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyAgbWFyZ2luLXRvcDogNXZ3ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgXG4gICAgXG4gIH1cbiAgLmJ0bi1jdXN0b206Zm9jdXMsXG4gIC5idG4tY3VzdG9tOmhvdmVyLFxuICAuYnRuLWN1c3RvbTphY3RpdmUsXG4gIC8vLmJ0bi1jdXN0b206YWN0aXZlOmZvY3Vze1xuICAgIC8vYmFja2dyb3VuZDogI2VjY2U1ZjtcbiAgICAvL2JvcmRlci1jb2xvcjogIzY5Njk2OTtcbiAgICAvL2NvbG9yOiNmZmY7XG4gIC8vfVxuICAuYnRuLWN1c3RvbTpmb2N1c3tcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMTQsNjEsMTkwLC4yNSk7XG4gIH1cbiAgXG4gIFxuICAuZm9vdGVye1xuICAgIHBvc2l0aW9uOiBzdGlja3kgYm90dG9tO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjUwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIFxuICAuZm9udHtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuXG4gaW9uLWZvb3RlcntcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgpO1xuXG4gIH1cbiAgXG4gICNmb290ZXItYXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XG59IiwiLmJhY2sge1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICB3aWR0aDogMSwgM3JlbTtcbiAgbWFyZ2luLWxlZnQ6IC0wLjNyZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLnNldHRpbmdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiA1LjlyZW07XG4gIG1hcmdpbi1yaWdodDogLTAuNnJlbTtcbiAgei1pbmRleDogMTtcbn1cblxuLmhvbWUtYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9hY2NvdW50LWJnLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDB2dztcbn1cblxuaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNhcmRiZyB7XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggI2I5YjhhNTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5jYXJkcHJvZmlsIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTRlNGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxLjNyZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmF2YXRhciB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbn1cblxuLm5hbWVhc3NvIHtcbiAgcGFkZGluZy10b3A6IDNyZW07XG59XG5cbmg2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmOWQ2NTU7XG59XG5cbmg0IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjb2xvcjogIzIxMjUyOTtcbn1cblxuLmNvbnRhY3QxIHtcbiAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwcHggMHB4O1xuICAvKiB0b3AgbGVmdCwgdG9wIHJpZ2h0LCBib3R0b20gcmlnaHQsIGJvdHRvbSBsZWZ0ICovXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMGI4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLmNvbnRhY3QyIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA3cHggN3B4O1xuICAvKiB0b3AgbGVmdCwgdG9wIHJpZ2h0LCBib3R0b20gcmlnaHQsIGJvdHRvbSBsZWZ0ICovXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMGI4O1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyLXRvcDogMC4zbW0gcmlkZ2UgI2ZmZjBiODY5O1xufVxuXG5oNSB7XG4gIG1hcmdpbi10b3A6IC0xcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNtYWxsdGl0bGUge1xuICBtYXJnaW4tdG9wOiAwLjNyZW07XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBjb2xvcjogIzIxMjUyOTtcbn1cblxuLmluZm8ge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUQ2NTU7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG5cbi5oNyB7XG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW4tdG9wOiAwLjNyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmJ0bi1jdXN0b20ge1xuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggIzk3OTY4NztcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICBjb2xvcjogIzFiMWIxYjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tbGVmdDogMS42ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uYnRuLWN1c3RvbTpmb2N1cyxcbi5idG4tY3VzdG9tOmhvdmVyLFxuLmJ0bi1jdXN0b206YWN0aXZlLFxuLmJ0bi1jdXN0b206Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMTQsIDYxLCAxOTAsIDAuMjUpO1xufVxuXG4uZm9vdGVyIHtcbiAgcG9zaXRpb246IHN0aWNreSBib3R0b207XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZvbnQge1xuICBmb250LXNpemU6IGxhcmdlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKCk7XG59XG5cbiNmb290ZXItYXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/accountpriveasso/accountpriveasso.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/accountpriveasso/accountpriveasso.page.ts ***!
    \***********************************************************/

  /*! exports provided: AccountpriveassoPage */

  /***/
  function srcAppAccountpriveassoAccountpriveassoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountpriveassoPage", function () {
      return AccountpriveassoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AccountpriveassoPage = /*#__PURE__*/function () {
      function AccountpriveassoPage() {
        _classCallCheck(this, AccountpriveassoPage);
      }

      _createClass(AccountpriveassoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccountpriveassoPage;
    }();

    AccountpriveassoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accountpriveasso',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./accountpriveasso.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/accountpriveasso/accountpriveasso.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./accountpriveasso.page.scss */
      "./src/app/accountpriveasso/accountpriveasso.page.scss"))["default"]]
    })], AccountpriveassoPage);
    /***/
  }
}]);
//# sourceMappingURL=accountpriveasso-accountpriveasso-module-es5.js.map