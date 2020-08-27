function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PAGES_BENE-bene-tabs-bene-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-tabs/bene-tabs.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-tabs/bene-tabs.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPAGES_BENEBeneTabsBeneTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"bene-map\">\n      <ion-icon name=\"map-outline\"></ion-icon>\n      \n    </ion-tab-button>\n\n    <ion-tab-button tab=\"bene-list\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      \n    </ion-tab-button>\n  \n    <ion-tab-button tab=\"bene-my-events\">\n      <ion-icon name=\"calendar-outline\"></ion-icon>\n      \n    </ion-tab-button>\n\n    <ion-tab-button tab=\"bene-compte\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      \n    </ion-tab-button>\n\n    \n  </ion-tab-bar>\n\n \n\n\n</ion-tabs>";
    /***/
  },

  /***/
  "./src/app/PAGES_BENE/bene-tabs/bene-tabs-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/PAGES_BENE/bene-tabs/bene-tabs-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: BeneTabsPageRoutingModule */

  /***/
  function srcAppPAGES_BENEBeneTabsBeneTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeneTabsPageRoutingModule", function () {
      return BeneTabsPageRoutingModule;
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


    var _SERVICES_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../SERVICES/auth.service */
    "./src/app/SERVICES/auth.service.ts");
    /* harmony import */


    var _bene_tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./bene-tabs.page */
    "./src/app/PAGES_BENE/bene-tabs/bene-tabs.page.ts");

    var routes = [{
      path: '',
      component: _bene_tabs_page__WEBPACK_IMPORTED_MODULE_4__["BeneTabsPage"],
      children: [{
        path: 'bene-map',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | bene-map-bene-map-module */
          [__webpack_require__.e("default~PAGES_ASSO-asso-set-marker-asso-map-module~PAGES_BENE-slider-slider-module~asso-map-home-ass~f3743f64"), __webpack_require__.e("bene-map-bene-map-module")]).then(__webpack_require__.bind(null,
          /*! ../bene-map/bene-map.module */
          "./src/app/PAGES_BENE/bene-map/bene-map.module.ts")).then(function (m) {
            return m.BeneMapPageModule;
          });
        },
        canActivate: [_SERVICES_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]]
      }, {
        path: 'bene-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | bene-list-bene-list-module */
          "bene-list-bene-list-module").then(__webpack_require__.bind(null,
          /*! ../bene-list/bene-list.module */
          "./src/app/PAGES_BENE/bene-list/bene-list.module.ts")).then(function (m) {
            return m.BeneListPageModule;
          });
        },
        canActivate: [_SERVICES_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]]
      }, {
        path: 'bene-my-events',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | bene-my-events-bene-my-events-module */
          "bene-my-events-bene-my-events-module").then(__webpack_require__.bind(null,
          /*! ../bene-my-events/bene-my-events.module */
          "./src/app/PAGES_BENE/bene-my-events/bene-my-events.module.ts")).then(function (m) {
            return m.BeneMyEventsPageModule;
          });
        },
        canActivate: [_SERVICES_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]]
      }, {
        path: 'bene-compte',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | bene-compte-bene-compte-module */
          "bene-compte-bene-compte-module").then(__webpack_require__.bind(null,
          /*! ../bene-compte/bene-compte.module */
          "./src/app/PAGES_BENE/bene-compte/bene-compte.module.ts")).then(function (m) {
            return m.BeneComptePageModule;
          });
        },
        canActivate: [_SERVICES_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]]
      }]
    }];

    var BeneTabsPageRoutingModule = function BeneTabsPageRoutingModule() {
      _classCallCheck(this, BeneTabsPageRoutingModule);
    };

    BeneTabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BeneTabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/PAGES_BENE/bene-tabs/bene-tabs.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/PAGES_BENE/bene-tabs/bene-tabs.module.ts ***!
    \**********************************************************/

  /*! exports provided: BeneTabsPageModule */

  /***/
  function srcAppPAGES_BENEBeneTabsBeneTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeneTabsPageModule", function () {
      return BeneTabsPageModule;
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


    var _bene_tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bene-tabs-routing.module */
    "./src/app/PAGES_BENE/bene-tabs/bene-tabs-routing.module.ts");
    /* harmony import */


    var _bene_tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bene-tabs.page */
    "./src/app/PAGES_BENE/bene-tabs/bene-tabs.page.ts");

    var BeneTabsPageModule = function BeneTabsPageModule() {
      _classCallCheck(this, BeneTabsPageModule);
    };

    BeneTabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bene_tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["BeneTabsPageRoutingModule"]],
      declarations: [_bene_tabs_page__WEBPACK_IMPORTED_MODULE_6__["BeneTabsPage"]]
    })], BeneTabsPageModule);
    /***/
  },

  /***/
  "./src/app/PAGES_BENE/bene-tabs/bene-tabs.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/PAGES_BENE/bene-tabs/bene-tabs.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPAGES_BENEBeneTabsBeneTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BBR0VTX0JFTkUvYmVuZS10YWJzL2JlbmUtdGFicy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/PAGES_BENE/bene-tabs/bene-tabs.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/PAGES_BENE/bene-tabs/bene-tabs.page.ts ***!
    \********************************************************/

  /*! exports provided: BeneTabsPage */

  /***/
  function srcAppPAGES_BENEBeneTabsBeneTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeneTabsPage", function () {
      return BeneTabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BeneTabsPage = /*#__PURE__*/function () {
      function BeneTabsPage() {
        _classCallCheck(this, BeneTabsPage);
      }

      _createClass(BeneTabsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BeneTabsPage;
    }();

    BeneTabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bene-tabs',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./bene-tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-tabs/bene-tabs.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./bene-tabs.page.scss */
      "./src/app/PAGES_BENE/bene-tabs/bene-tabs.page.scss"))["default"]]
    })], BeneTabsPage);
    /***/
  }
}]);
//# sourceMappingURL=PAGES_BENE-bene-tabs-bene-tabs-module-es5.js.map