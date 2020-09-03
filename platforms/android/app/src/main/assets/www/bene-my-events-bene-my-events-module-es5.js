function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bene-my-events-bene-my-events-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-my-events/bene-my-events.page.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-my-events/bene-my-events.page.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPAGES_BENEBeneMyEventsBeneMyEventsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    \n\n    <ion-title>Evenements participés</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n    <!--question mark avoid null, async pipe subscribe \n    <ion-card *ngFor=\"let post of ((userPosts | async)?.posts)\" (click)=\"goTo(post)\">\n      <ion-item lines=\"none\">\n        <ion-label> {{ post }}</ion-label>\n       \n      </ion-item>\n    </ion-card >-->\n    <ion-card *ngFor=\"let item of items | async\"\n    (click)=\"goTo(item.id)\">\n      <img [src]=\"item.photo\">\n      <ion-item lines=\"none\">\n        <ion-label> {{item.titre}}</ion-label>\n        <ion-label> {{item.date}}</ion-label>\n        <ion-label> {{item.deadline}}</ion-label>\n        <ion-label> {{item.geo}}</ion-label>\n        <ion-label> {{item.maxgens}}</ion-label>\n        <ion-label> {{item.description}}</ion-label>\n      </ion-item>\n    </ion-card >\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/PAGES_BENE/bene-my-events/bene-my-events-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/PAGES_BENE/bene-my-events/bene-my-events-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: BeneMyEventsPageRoutingModule */

  /***/
  function srcAppPAGES_BENEBeneMyEventsBeneMyEventsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeneMyEventsPageRoutingModule", function () {
      return BeneMyEventsPageRoutingModule;
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


    var _bene_my_events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bene-my-events.page */
    "./src/app/PAGES_BENE/bene-my-events/bene-my-events.page.ts");

    var routes = [{
      path: '',
      component: _bene_my_events_page__WEBPACK_IMPORTED_MODULE_3__["BeneMyEventsPage"]
    }];

    var BeneMyEventsPageRoutingModule = function BeneMyEventsPageRoutingModule() {
      _classCallCheck(this, BeneMyEventsPageRoutingModule);
    };

    BeneMyEventsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BeneMyEventsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/PAGES_BENE/bene-my-events/bene-my-events.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/PAGES_BENE/bene-my-events/bene-my-events.module.ts ***!
    \********************************************************************/

  /*! exports provided: BeneMyEventsPageModule */

  /***/
  function srcAppPAGES_BENEBeneMyEventsBeneMyEventsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeneMyEventsPageModule", function () {
      return BeneMyEventsPageModule;
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


    var _bene_my_events_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bene-my-events-routing.module */
    "./src/app/PAGES_BENE/bene-my-events/bene-my-events-routing.module.ts");
    /* harmony import */


    var _bene_my_events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bene-my-events.page */
    "./src/app/PAGES_BENE/bene-my-events/bene-my-events.page.ts");

    var BeneMyEventsPageModule = function BeneMyEventsPageModule() {
      _classCallCheck(this, BeneMyEventsPageModule);
    };

    BeneMyEventsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bene_my_events_routing_module__WEBPACK_IMPORTED_MODULE_5__["BeneMyEventsPageRoutingModule"]],
      declarations: [_bene_my_events_page__WEBPACK_IMPORTED_MODULE_6__["BeneMyEventsPage"]]
    })], BeneMyEventsPageModule);
    /***/
  },

  /***/
  "./src/app/PAGES_BENE/bene-my-events/bene-my-events.page.scss":
  /*!********************************************************************!*\
    !*** ./src/app/PAGES_BENE/bene-my-events/bene-my-events.page.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPAGES_BENEBeneMyEventsBeneMyEventsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BBR0VTX0JFTkUvYmVuZS1teS1ldmVudHMvYmVuZS1teS1ldmVudHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/PAGES_BENE/bene-my-events/bene-my-events.page.ts":
  /*!******************************************************************!*\
    !*** ./src/app/PAGES_BENE/bene-my-events/bene-my-events.page.ts ***!
    \******************************************************************/

  /*! exports provided: BeneMyEventsPage */

  /***/
  function srcAppPAGES_BENEBeneMyEventsBeneMyEventsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeneMyEventsPage", function () {
      return BeneMyEventsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _SERVICES_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../SERVICES/user.service */
    "./src/app/SERVICES/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BeneMyEventsPage = /*#__PURE__*/function () {
      function BeneMyEventsPage(firestore, router, user) {
        var _this = this;

        _classCallCheck(this, BeneMyEventsPage);

        this.firestore = firestore;
        this.router = router;
        this.user = user;
        console.log(this.user.getUID());
        this.Collection = this.firestore.collection('/publicevents', function (ref) {
          return ref.where('participants', 'array-contains', _this.user.getUID());
        });
        this.items = this.Collection.valueChanges();
      }

      _createClass(BeneMyEventsPage, [{
        key: "goTo",
        value: function goTo(postID) {
          this.router.navigate(['/bene-details/' + postID]);
        }
      }]);

      return BeneMyEventsPage;
    }();

    BeneMyEventsPage.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _SERVICES_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
      }];
    };

    BeneMyEventsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-bene-my-events',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./bene-my-events.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-my-events/bene-my-events.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./bene-my-events.page.scss */
      "./src/app/PAGES_BENE/bene-my-events/bene-my-events.page.scss"))["default"]]
    })], BeneMyEventsPage);
    /***/
  }
}]);
//# sourceMappingURL=bene-my-events-bene-my-events-module-es5.js.map