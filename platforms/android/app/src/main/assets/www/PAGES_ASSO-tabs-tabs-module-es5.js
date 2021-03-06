function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PAGES_ASSO-tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/tabs/tabs.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/tabs/tabs.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPAGES_ASSOTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"map-outline\"></ion-icon>\n      \n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      \n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n      \n    </ion-tab-button>\n    \n    <ion-tab-button tab=\"tab5\">\n      <ion-icon name=\"calendar-outline\"></ion-icon>\n      \n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab4\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      \n    </ion-tab-button>\n\n    \n  </ion-tab-bar>\n\n \n\n\n</ion-tabs>\n";
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/tabs/tabs-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/PAGES_ASSO/tabs/tabs-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppPAGES_ASSOTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _SERVICES_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../SERVICES/auth.service */
    "./src/app/SERVICES/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/PAGES_ASSO/tabs/tabs.page.ts");

    var routes = [{
      path: '',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
      children: [{
        path: 'tab1',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | asso-map-home-asso-map-home-module */
          [__webpack_require__.e("default~PAGES_ASSO-asso-set-marker-asso-map-module~PAGES_BENE-slider-slider-module~asso-map-home-ass~f3743f64"), __webpack_require__.e("asso-map-home-asso-map-home-module")]).then(__webpack_require__.bind(null,
          /*! ../asso-map-home/asso-map-home.module */
          "./src/app/PAGES_ASSO/asso-map-home/asso-map-home.module.ts")).then(function (m) {
            return m.AssoMapHomePageModule;
          });
        },
        canActivate: [_SERVICES_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
      }, {
        path: 'tab2',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | asso-list-tab2-module */
          [__webpack_require__.e("common"), __webpack_require__.e("asso-list-tab2-module")]).then(__webpack_require__.bind(null,
          /*! ../asso-list/tab2.module */
          "./src/app/PAGES_ASSO/asso-list/tab2.module.ts")).then(function (m) {
            return m.Tab2PageModule;
          });
        },
        canActivate: [_SERVICES_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
      }, {
        path: 'tab3',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | asso-post-tab3-module */
          [__webpack_require__.e("common"), __webpack_require__.e("asso-post-tab3-module")]).then(__webpack_require__.bind(null,
          /*! ../asso-post/tab3.module */
          "./src/app/PAGES_ASSO/asso-post/tab3.module.ts")).then(function (m) {
            return m.Tab3PageModule;
          });
        },
        canActivate: [_SERVICES_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
      }, {
        path: 'tab4',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | asso-profile-tab4-module */
          [__webpack_require__.e("common"), __webpack_require__.e("asso-profile-tab4-module")]).then(__webpack_require__.bind(null,
          /*! ../asso-profile/tab4.module */
          "./src/app/PAGES_ASSO/asso-profile/tab4.module.ts")).then(function (m) {
            return m.Tab4PageModule;
          });
        },
        canActivate: [_SERVICES_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
      }, {
        path: 'tab5',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | assomyevents-assomyevents-module */
          "assomyevents-assomyevents-module").then(__webpack_require__.bind(null,
          /*! ../assomyevents/assomyevents.module */
          "./src/app/PAGES_ASSO/assomyevents/assomyevents.module.ts")).then(function (m) {
            return m.AssomyeventsPageModule;
          });
        },
        canActivate: [_SERVICES_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
      }, {
        // dynamic
        path: 'post/:titre',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | post-post-module */
          "post-post-module").then(__webpack_require__.bind(null,
          /*! ../post/post.module */
          "./src/app/PAGES_ASSO/post/post.module.ts")).then(function (m) {
            return m.PostPageModule;
          });
        }
      }]
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/tabs/tabs.module.ts":
  /*!************************************************!*\
    !*** ./src/app/PAGES_ASSO/tabs/tabs.module.ts ***!
    \************************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppPAGES_ASSOTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-routing.module */
    "./src/app/PAGES_ASSO/tabs/tabs-routing.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/PAGES_ASSO/tabs/tabs.page.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/tabs/tabs.page.scss":
  /*!************************************************!*\
    !*** ./src/app/PAGES_ASSO/tabs/tabs.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPAGES_ASSOTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BBR0VTX0FTU08vdGFicy90YWJzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/tabs/tabs.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/PAGES_ASSO/tabs/tabs.page.ts ***!
    \**********************************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppPAGES_ASSOTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TabsPage = function TabsPage() {
      _classCallCheck(this, TabsPage);
    };

    TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/tabs/tabs.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/PAGES_ASSO/tabs/tabs.page.scss"))["default"]]
    })], TabsPage);
    /***/
  }
}]);
//# sourceMappingURL=PAGES_ASSO-tabs-tabs-module-es5.js.map