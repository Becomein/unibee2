function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accountprivebene-accountprivebene-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/accountprivebene/accountprivebene.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accountprivebene/accountprivebene.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountprivebeneAccountprivebenePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\n  \n</ion-header>\n\n<ion-content>\n\n  <body>\n\n      <div class=\"row col-12\"> \n          <div class=\"col-6\">\n            <img class=\"back\" src=\"assets/back-white.svg\" alt=\"back\" /></div>\n            <div class=\"col-6 d-flex flex-row-reverse\">\n              <img class=\"settings\" src=\"/assets/settings.svg\" alt=\"settings\" /></div>\n          </div>\n\n\n\n    <div class=container>\n      <div class=\"col-12\"> \n        <div class=\"card cardbg\">\n        <div class=\"row h-50\">\n          <div class=\"col-4 avatar cardprofil d-table-cell align-middle h-100\">  \n            <img class=\"avatar\" src=\"/assets/avatar.png\" alt=\"addpic\">                           \n              </div>\n\n              <div class=\"col-6 nameasso\">\n                <div class=\"card card-tilte\">  \n            <h4>Aurelia</h4> <!-- Prénom -->  \n            <h4>Price</h4>   <!-- Nom -->   \n                </div>\n              </div>\n          \n        </div>\n\n        <div class=\"col-12 contact1\">\n          <p class=\"smalltitle\">Email</p>\n         <h5>unibee@gmail.com</h5>\n        </div>\n\n\n        <div class=\"col-12 contact2\">\n          <p class=\"smalltitle\">Numéro de téléphone</p>\n         <h5>07 87 56 44 32</h5>\n        </div>\n\n\n\n        </div>\n\n        <div class=\"col-12 info\">\n          <p class=\"smalltitle\">Informations</p>\n         <h5 class=\"h7\">Bienvenue sur Unibee, la première application de mise en relation entre les bénévoles et les associations.Bienvenue sur Unibee, la première application de mise en relation entre les bénévoles et les associations.Bienvenue sur Unibee, la première application de mise en relation entre les bénévoles et les associations.Bienvenue sur Unibee, la première application de mise en relation entre les bénévoles et les associations.Bienvenue sur Unibee, la première application de mise en relation entre les bénévoles et les associations.</h5>\n        </div>\n\n        \n      </div>\n\n      \n      </div>\n\n  </body>\n</ion-content>\n\n\n<footer >\n\n  \n  <div class=\"container2\">\n    <div class=\"row col-12 d-flex justify-content-center align-items-center>\">\n      <button type=\"submit\" class=\"btn btn-custom font\">Modifier</button>\n            </div>\n  </div>\n\n    \n</footer>";
    /***/
  },

  /***/
  "./src/app/accountprivebene/accountprivebene-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/accountprivebene/accountprivebene-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: AccountprivebenePageRoutingModule */

  /***/
  function srcAppAccountprivebeneAccountprivebeneRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountprivebenePageRoutingModule", function () {
      return AccountprivebenePageRoutingModule;
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


    var _accountprivebene_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./accountprivebene.page */
    "./src/app/accountprivebene/accountprivebene.page.ts");

    var routes = [{
      path: '',
      component: _accountprivebene_page__WEBPACK_IMPORTED_MODULE_3__["AccountprivebenePage"]
    }];

    var AccountprivebenePageRoutingModule = function AccountprivebenePageRoutingModule() {
      _classCallCheck(this, AccountprivebenePageRoutingModule);
    };

    AccountprivebenePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AccountprivebenePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/accountprivebene/accountprivebene.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/accountprivebene/accountprivebene.module.ts ***!
    \*************************************************************/

  /*! exports provided: AccountprivebenePageModule */

  /***/
  function srcAppAccountprivebeneAccountprivebeneModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountprivebenePageModule", function () {
      return AccountprivebenePageModule;
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


    var _accountprivebene_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./accountprivebene-routing.module */
    "./src/app/accountprivebene/accountprivebene-routing.module.ts");
    /* harmony import */


    var _accountprivebene_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./accountprivebene.page */
    "./src/app/accountprivebene/accountprivebene.page.ts");

    var AccountprivebenePageModule = function AccountprivebenePageModule() {
      _classCallCheck(this, AccountprivebenePageModule);
    };

    AccountprivebenePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _accountprivebene_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountprivebenePageRoutingModule"]],
      declarations: [_accountprivebene_page__WEBPACK_IMPORTED_MODULE_6__["AccountprivebenePage"]]
    })], AccountprivebenePageModule);
    /***/
  },

  /***/
  "./src/app/accountprivebene/accountprivebene.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/accountprivebene/accountprivebene.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountprivebeneAccountprivebenePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".back {\n  z-index: 1;\n  margin-top: 2rem;\n  width: 1, 3rem;\n  margin-left: -0.3rem;\n  position: fixed;\n}\n\n.settings {\n  position: absolute;\n  margin-top: 5.9rem;\n  margin-right: -0.6rem;\n  z-index: 1;\n}\n\nheader {\n  background: url(\"/assets/account-bg.svg\") no-repeat center top;\n}\n\nbody {\n  background: url(\"/assets/account-bg.svg\") no-repeat center top;\n  background-size: 100%;\n  -o-background-size: 100%;\n  background-color: white;\n  overflow-y: auto;\n}\n\n.cardbg {\n  margin-top: 5rem;\n  background-color: white;\n  border-radius: 20px;\n  box-shadow: 5px 5px 15px #b9b8a5;\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n}\n\n.cardprofil {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  background-color: #4e4e4e;\n  border-radius: 15px;\n  margin-left: 1.3rem;\n  margin-right: 10px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.avatar {\n  border-radius: 20px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.card {\n  border-color: transparent;\n  margin-left: -10px;\n  margin-right: -10px;\n}\n\n.nameasso {\n  padding-top: 2rem;\n}\n\nh6 {\n  font-weight: bold;\n  font-size: 12px;\n  color: #f9d655;\n}\n\nh4 {\n  margin-bottom: 0px;\n}\n\n.contact1 {\n  border-radius: 7px 7px 0px 0px;\n  /* top left, top right, bottom right, bottom left */\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  background-color: #fff0b8;\n  width: auto;\n}\n\n.contact2 {\n  border-radius: 0px 0px 7px 7px;\n  /* top left, top right, bottom right, bottom left */\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  background-color: #fff0b8;\n  width: auto;\n  border-top: 0.3mm ridge #fff0b869;\n}\n\nh5 {\n  margin-top: -1rem;\n  margin-bottom: 0.7rem;\n}\n\n.smalltitle {\n  margin-top: 0.3rem;\n  font-size: 0.7rem;\n}\n\n.info {\n  border-radius: 7px;\n  background-color: #F9D655;\n  width: auto;\n  padding-bottom: 1rem;\n  padding-top: 1rem;\n  margin-bottom: 4rem;\n}\n\n.h7 {\n  line-height: 130%;\n  text-align: justify;\n  margin-top: 0.3rem;\n  font-size: 1rem;\n}\n\n.btn-custom {\n  box-shadow: 5px 5px 15px #979687;\n  border-radius: 17px;\n  background-color: white;\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  color: #1b1b1b;\n  font-size: 15px;\n  font-weight: 600;\n  margin-left: 1.6em;\n  position: relative;\n  width: 13rem;\n  margin-bottom: 1rem;\n}\n\n.btn-custom:focus,\n.btn-custom:hover,\n.btn-custom:active,\n.btn-custom:focus {\n  box-shadow: 0 0 0 0.2rem rgba(114, 61, 190, 0.25);\n}\n\n.footer {\n  position: -webkit-sticky bottom;\n  position: sticky bottom;\n  width: 100%;\n  margin-top: 50px;\n  height: 50px;\n  margin-bottom: 2rem;\n  font-size: 12px;\n}\n\n.font {\n  font-size: large;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWNvbWVpbi9EZXNrdG9wL2FwcGxpY2F0aW9uLXVuaWJlZS91bmliZWUyLmdpdC9zcmMvYXBwL2FjY291bnRwcml2ZWJlbmUvYWNjb3VudHByaXZlYmVuZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjY291bnRwcml2ZWJlbmUvYWNjb3VudHByaXZlYmVuZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDSSxVQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDUE47O0FEWUU7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDVE47O0FEY0U7RUFDRSw4REFBQTtBQ1hKOztBRGNFO0VBRUcsOERBQUE7RUFHQyxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ1pOOztBRGVJO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBR0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDZE47O0FEa0JFO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2ZOOztBRG1CSTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaEJOOztBRG1CSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2hCTjs7QURzQkk7RUFFRSxpQkFBQTtBQ3BCTjs7QUR3Qkk7RUFDRixpQkFBQTtFQUNNLGVBQUE7RUFDQSxjQUFBO0FDckJSOztBRHlCSTtFQUNJLGtCQUFBO0FDdEJSOztBRHlCSTtFQUNFLDhCQUFBO0VBQWdDLG1EQUFBO0VBRWhDLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUN0Qk47O0FEd0JJO0VBQ0UsOEJBQUE7RUFBZ0MsbURBQUE7RUFFaEMsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FDckJOOztBRDBCSTtFQUVFLGlCQUFBO0VBQ0EscUJBQUE7QUN4Qk47O0FEMkJJO0VBQ0ksa0JBQUE7RUFDRixpQkFBQTtBQ3hCTjs7QUQ0Qkk7RUFDRSxrQkFBQTtFQUVHLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQzFCVDs7QUQrQkk7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDSixlQUFBO0FDNUJGOztBRGlDRTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBR0Esa0JBQUE7RUFFQSxrQkFBQTtFQUVGLFlBQUE7RUFDQSxtQkFBQTtBQ2xDRjs7QURzQ0U7Ozs7RUFTRSxpREFBQTtBQ3hDSjs7QUQ0Q0U7RUFDRSwrQkFBQTtFQUFBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ3pDSjs7QUQ0Q0U7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FDekNKIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudHByaXZlYmVuZS9hY2NvdW50cHJpdmViZW5lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuXG5cblxuXG4uYmFja3tcbiAgICB6LWluZGV4OiAxO1xuICAgICAgbWFyZ2luLXRvcDoycmVtO1xuICAgICAgd2lkdGg6IDEsM3JlbTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtLjNyZW07XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIFxuICAgICAgfVxuICBcbiAgXG4gIC5zZXR0aW5nc3tcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgbWFyZ2luLXRvcDogNS45cmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtLjZyZW07XG4gICAgICB6LWluZGV4OiAxO1xuICBcbiAgfVxuICBcbiAgXG4gIGhlYWRlcntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYWNjb3VudC1iZy5zdmcnKSBuby1yZXBlYXQgIGNlbnRlciB0b3A7XG4gIH1cbiAgXG4gIGJvZHkge1xuICBcbiAgICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2FjY291bnQtYmcuc3ZnJykgbm8tcmVwZWF0ICBjZW50ZXIgdG9wO1xuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgIC1tb3otYmFja2dyb3VuZC1zaXplOjEwMCUgO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgLW8tYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cbiAgXG4gICAgLmNhcmRiZyB7XG4gICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAvLyAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAvLyAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2IoMTg1LCAxODQsIDE2NSk7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206ICAxcmVtO1xuICAgIFxuICAgIH1cbiAgXG4gIC5jYXJkcHJvZmlse1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMS4zcmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIFxuICAgIH1cbiAgXG4gICAgLmF2YXRhciB7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIFxuICAgIC5jYXJke1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gICAgfVxuICBcbiAgXG4gIFxuICBcbiAgICAubmFtZWFzc297XG4gIFxuICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuICBcbiAgXG4gICAgaDZ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOigjZjlkNjU1KTtcbiAgICB9XG4gICAgXG4gIFxuICAgIGg0e1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxuICBcbiAgICAuY29udGFjdDF7XG4gICAgICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDBweCAwcHg7IC8qIHRvcCBsZWZ0LCB0b3AgcmlnaHQsIGJvdHRvbSByaWdodCwgYm90dG9tIGxlZnQgKi9cbiAgIC8vICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYwYjg7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICB9XG4gICAgLmNvbnRhY3Qye1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA3cHggN3B4OyAvKiB0b3AgbGVmdCwgdG9wIHJpZ2h0LCBib3R0b20gcmlnaHQsIGJvdHRvbSBsZWZ0ICovXG4gICAvLyAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMGI4O1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBib3JkZXItdG9wOiAuM21tIHJpZGdlICNmZmYwYjg2OTtcbiAgICB9XG4gIFxuICBcbiAgXG4gICAgaDV7XG4gIFxuICAgICAgbWFyZ2luLXRvcDogLTFyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAuN3JlbTtcbiAgICB9XG4gIFxuICAgIC5zbWFsbHRpdGxle1xuICAgICAgICBtYXJnaW4tdG9wOiAuM3JlbTtcbiAgICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgfVxuICBcbiAgXG4gICAgLmluZm97XG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAvLyAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUQ2NTU7XG4gICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICBcbiAgXG4gICAgfVxuICBcbiAgICAuaDd7XG4gICAgICBsaW5lLWhlaWdodDogMTMwJTtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICBtYXJnaW4tdG9wOiAuM3JlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgXG4gIFxuICBcbiAgLmJ0bi1jdXN0b217XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYigxNTEsIDE1MCwgMTM1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgICBjb2xvcjpyZ2IoMjcsIDI3LCAyNyk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAvLyBtaW4taGVpZ2h0OiAzcmVtO1xuICAgLy8gYm9yZGVyLWNvbG9yOiByZ2IoMjcsIDI3LCAyNyk7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNmVtO1xuICAgLy8gbWFyZ2luLXJpZ2h0OiAyLjNyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyAgbWFyZ2luLXRvcDogNXZ3ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgXG4gICAgXG4gIH1cbiAgLmJ0bi1jdXN0b206Zm9jdXMsXG4gIC5idG4tY3VzdG9tOmhvdmVyLFxuICAuYnRuLWN1c3RvbTphY3RpdmUsXG4gIC8vLmJ0bi1jdXN0b206YWN0aXZlOmZvY3Vze1xuICAgIC8vYmFja2dyb3VuZDogI2VjY2U1ZjtcbiAgICAvL2JvcmRlci1jb2xvcjogIzY5Njk2OTtcbiAgICAvL2NvbG9yOiNmZmY7XG4gIC8vfVxuICAuYnRuLWN1c3RvbTpmb2N1c3tcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMTQsNjEsMTkwLC4yNSk7XG4gIH1cbiAgXG4gIFxuICAuZm9vdGVye1xuICAgIHBvc2l0aW9uOiBzdGlja3kgYm90dG9tO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luLXRvcDo1MHB4O1xuICAgIGhlaWdodDo1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206MnJlbTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgXG4gIC5mb250e1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAiLCIuYmFjayB7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHdpZHRoOiAxLCAzcmVtO1xuICBtYXJnaW4tbGVmdDogLTAuM3JlbTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uc2V0dGluZ3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDUuOXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAtMC42cmVtO1xuICB6LWluZGV4OiAxO1xufVxuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2FjY291bnQtYmcuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hY2NvdW50LWJnLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jYXJkYmcge1xuICBtYXJnaW4tdG9wOiA1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4ICNiOWI4YTU7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uY2FyZHByb2ZpbCB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0ZTRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMS4zcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5hdmF0YXIge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmQge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG59XG5cbi5uYW1lYXNzbyB7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xufVxuXG5oNiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZjlkNjU1O1xufVxuXG5oNCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmNvbnRhY3QxIHtcbiAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwcHggMHB4O1xuICAvKiB0b3AgbGVmdCwgdG9wIHJpZ2h0LCBib3R0b20gcmlnaHQsIGJvdHRvbSBsZWZ0ICovXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMGI4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLmNvbnRhY3QyIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA3cHggN3B4O1xuICAvKiB0b3AgbGVmdCwgdG9wIHJpZ2h0LCBib3R0b20gcmlnaHQsIGJvdHRvbSBsZWZ0ICovXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMGI4O1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyLXRvcDogMC4zbW0gcmlkZ2UgI2ZmZjBiODY5O1xufVxuXG5oNSB7XG4gIG1hcmdpbi10b3A6IC0xcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XG59XG5cbi5zbWFsbHRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cblxuLmluZm8ge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUQ2NTU7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG5cbi5oNyB7XG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW4tdG9wOiAwLjNyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmJ0bi1jdXN0b20ge1xuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggIzk3OTY4NztcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICBjb2xvcjogIzFiMWIxYjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tbGVmdDogMS42ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uYnRuLWN1c3RvbTpmb2N1cyxcbi5idG4tY3VzdG9tOmhvdmVyLFxuLmJ0bi1jdXN0b206YWN0aXZlLFxuLmJ0bi1jdXN0b206Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMTQsIDYxLCAxOTAsIDAuMjUpO1xufVxuXG4uZm9vdGVyIHtcbiAgcG9zaXRpb246IHN0aWNreSBib3R0b207XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZvbnQge1xuICBmb250LXNpemU6IGxhcmdlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/accountprivebene/accountprivebene.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/accountprivebene/accountprivebene.page.ts ***!
    \***********************************************************/

  /*! exports provided: AccountprivebenePage */

  /***/
  function srcAppAccountprivebeneAccountprivebenePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountprivebenePage", function () {
      return AccountprivebenePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AccountprivebenePage = /*#__PURE__*/function () {
      function AccountprivebenePage() {
        _classCallCheck(this, AccountprivebenePage);
      }

      _createClass(AccountprivebenePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccountprivebenePage;
    }();

    AccountprivebenePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accountprivebene',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./accountprivebene.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/accountprivebene/accountprivebene.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./accountprivebene.page.scss */
      "./src/app/accountprivebene/accountprivebene.page.scss"))["default"]]
    })], AccountprivebenePage);
    /***/
  }
}]);
//# sourceMappingURL=accountprivebene-accountprivebene-module-es5.js.map