function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asso-list-tab2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/asso-list/tab2.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/asso-list/tab2.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPAGES_ASSOAssoListTab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Evenements\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  \n\n  <ion-card *ngFor=\"let item of items | async\"\n  (click)=\"goTo(item.id)\">\n    <img [src]=\"item.photo\">\n    <ion-item lines=\"none\">\n      <ion-label> {{item.titre}}</ion-label>\n      <ion-label> {{item.date}}</ion-label>\n    </ion-item>\n  </ion-card >\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/asso-list/tab2-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/PAGES_ASSO/asso-list/tab2-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: Tab2PageRoutingModule */

  /***/
  function srcAppPAGES_ASSOAssoListTab2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
      return Tab2PageRoutingModule;
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


    var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/PAGES_ASSO/asso-list/tab2.page.ts");

    var routes = [{
      path: '',
      component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
    }];

    var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
      _classCallCheck(this, Tab2PageRoutingModule);
    };

    Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/asso-list/tab2.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/PAGES_ASSO/asso-list/tab2.module.ts ***!
    \*****************************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppPAGES_ASSOAssoListTab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
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


    var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/PAGES_ASSO/asso-list/tab2.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/PAGES_ASSO/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab2-routing.module */
    "./src/app/PAGES_ASSO/asso-list/tab2-routing.module.ts");

    var Tab2PageModule = function Tab2PageModule() {
      _classCallCheck(this, Tab2PageModule);
    };

    Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/asso-list/tab2.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/PAGES_ASSO/asso-list/tab2.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPAGES_ASSOAssoListTab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BBR0VTX0FTU08vYXNzby1saXN0L3RhYjIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/asso-list/tab2.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/PAGES_ASSO/asso-list/tab2.page.ts ***!
    \***************************************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppPAGES_ASSOAssoListTab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
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

    var Tab2Page = /*#__PURE__*/function () {
      function Tab2Page(firestore, router) {
        _classCallCheck(this, Tab2Page);

        this.firestore = firestore;
        this.router = router;
        this.Collection = this.firestore.collection('publicevents');
        this.items = this.Collection.valueChanges();
      }

      _createClass(Tab2Page, [{
        key: "goTo",
        value: function goTo(postID) {
          this.router.navigate(['/detailevents/' + postID]);
        }
      }]);

      return Tab2Page;
    }();

    Tab2Page.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-tab2',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/asso-list/tab2.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/PAGES_ASSO/asso-list/tab2.page.scss"))["default"]]
    })], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=asso-list-tab2-module-es5.js.map