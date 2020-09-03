function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bene-list-bene-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-list/bene-list.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-list/bene-list.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPAGES_BENEBeneListBeneListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Evenements\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  \n\n  <ion-card *ngFor=\"let item of items | async\"\n  (click)=\"goTo(item.id)\">\n    <img [src]=\"item.photo\">\n    <ion-item lines=\"none\">\n      <ion-label> {{item.titre}}</ion-label>\n      <ion-label> {{item.date}}</ion-label>\n    </ion-item>\n  </ion-card >\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/PAGES_BENE/bene-list/bene-list-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/PAGES_BENE/bene-list/bene-list-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: BeneListPageRoutingModule */

  /***/
  function srcAppPAGES_BENEBeneListBeneListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeneListPageRoutingModule", function () {
      return BeneListPageRoutingModule;
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


    var _bene_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bene-list.page */
    "./src/app/PAGES_BENE/bene-list/bene-list.page.ts");

    var routes = [{
      path: '',
      component: _bene_list_page__WEBPACK_IMPORTED_MODULE_3__["BeneListPage"]
    }];

    var BeneListPageRoutingModule = function BeneListPageRoutingModule() {
      _classCallCheck(this, BeneListPageRoutingModule);
    };

    BeneListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BeneListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/PAGES_BENE/bene-list/bene-list.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/PAGES_BENE/bene-list/bene-list.module.ts ***!
    \**********************************************************/

  /*! exports provided: BeneListPageModule */

  /***/
  function srcAppPAGES_BENEBeneListBeneListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeneListPageModule", function () {
      return BeneListPageModule;
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


    var _bene_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bene-list-routing.module */
    "./src/app/PAGES_BENE/bene-list/bene-list-routing.module.ts");
    /* harmony import */


    var _bene_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bene-list.page */
    "./src/app/PAGES_BENE/bene-list/bene-list.page.ts");

    var BeneListPageModule = function BeneListPageModule() {
      _classCallCheck(this, BeneListPageModule);
    };

    BeneListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bene_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["BeneListPageRoutingModule"]],
      declarations: [_bene_list_page__WEBPACK_IMPORTED_MODULE_6__["BeneListPage"]]
    })], BeneListPageModule);
    /***/
  },

  /***/
  "./src/app/PAGES_BENE/bene-list/bene-list.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/PAGES_BENE/bene-list/bene-list.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPAGES_BENEBeneListBeneListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BBR0VTX0JFTkUvYmVuZS1saXN0L2JlbmUtbGlzdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/PAGES_BENE/bene-list/bene-list.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/PAGES_BENE/bene-list/bene-list.page.ts ***!
    \********************************************************/

  /*! exports provided: BeneListPage */

  /***/
  function srcAppPAGES_BENEBeneListBeneListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeneListPage", function () {
      return BeneListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BeneListPage = /*#__PURE__*/function () {
      function BeneListPage(firestore, router) {
        _classCallCheck(this, BeneListPage);

        this.firestore = firestore;
        this.router = router;
        this.Collection = this.firestore.collection('publicevents');
        this.items = this.Collection.valueChanges();
      }

      _createClass(BeneListPage, [{
        key: "goTo",
        value: function goTo(postID) {
          this.router.navigate(['/bene-details/' + postID]);
        }
      }]);

      return BeneListPage;
    }();

    BeneListPage.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    BeneListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-bene-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./bene-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-list/bene-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./bene-list.page.scss */
      "./src/app/PAGES_BENE/bene-list/bene-list.page.scss"))["default"]]
    })], BeneListPage);
    /***/
  }
}]);
//# sourceMappingURL=bene-list-bene-list-module-es5.js.map