function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assomyevents-assomyevents-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/assomyevents/assomyevents.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/assomyevents/assomyevents.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPAGES_ASSOAssomyeventsAssomyeventsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    \n\n    <ion-title>Evenements publiés</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n    <!--question mark avoid null, async pipe subscribe \n    <ion-card *ngFor=\"let post of ((userPosts | async)?.posts)\" (click)=\"goTo(post)\">\n      <ion-item lines=\"none\">\n        <ion-label> {{ post }}</ion-label>\n       \n      </ion-item>\n    </ion-card >-->\n    <ion-card *ngFor=\"let item of items | async\"\n    (click)=\"goTo(item.id)\">\n      <img [src]=\"item.photo\">\n      <ion-item lines=\"none\">\n        <ion-label> {{item.titre}}</ion-label>\n        <ion-label> {{item.date}}</ion-label>\n        <ion-label> {{item.deadline}}</ion-label>\n        <ion-label> {{item.geo}}</ion-label>\n        <ion-label> {{item.maxgens}}</ion-label>\n        <ion-label> {{item.description}}</ion-label>\n      </ion-item>\n    </ion-card >\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/assomyevents/assomyevents-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/PAGES_ASSO/assomyevents/assomyevents-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: AssomyeventsPageRoutingModule */

  /***/
  function srcAppPAGES_ASSOAssomyeventsAssomyeventsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssomyeventsPageRoutingModule", function () {
      return AssomyeventsPageRoutingModule;
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


    var _assomyevents_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./assomyevents.page */
    "./src/app/PAGES_ASSO/assomyevents/assomyevents.page.ts");

    var routes = [{
      path: '',
      component: _assomyevents_page__WEBPACK_IMPORTED_MODULE_3__["AssomyeventsPage"]
    }];

    var AssomyeventsPageRoutingModule = function AssomyeventsPageRoutingModule() {
      _classCallCheck(this, AssomyeventsPageRoutingModule);
    };

    AssomyeventsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AssomyeventsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/assomyevents/assomyevents.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/PAGES_ASSO/assomyevents/assomyevents.module.ts ***!
    \****************************************************************/

  /*! exports provided: AssomyeventsPageModule */

  /***/
  function srcAppPAGES_ASSOAssomyeventsAssomyeventsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssomyeventsPageModule", function () {
      return AssomyeventsPageModule;
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


    var _assomyevents_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./assomyevents-routing.module */
    "./src/app/PAGES_ASSO/assomyevents/assomyevents-routing.module.ts");
    /* harmony import */


    var _assomyevents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./assomyevents.page */
    "./src/app/PAGES_ASSO/assomyevents/assomyevents.page.ts");

    var AssomyeventsPageModule = function AssomyeventsPageModule() {
      _classCallCheck(this, AssomyeventsPageModule);
    };

    AssomyeventsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _assomyevents_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssomyeventsPageRoutingModule"]],
      declarations: [_assomyevents_page__WEBPACK_IMPORTED_MODULE_6__["AssomyeventsPage"]]
    })], AssomyeventsPageModule);
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/assomyevents/assomyevents.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/PAGES_ASSO/assomyevents/assomyevents.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPAGES_ASSOAssomyeventsAssomyeventsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BBR0VTX0FTU08vYXNzb215ZXZlbnRzL2Fzc29teWV2ZW50cy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/assomyevents/assomyevents.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/PAGES_ASSO/assomyevents/assomyevents.page.ts ***!
    \**************************************************************/

  /*! exports provided: AssomyeventsPage */

  /***/
  function srcAppPAGES_ASSOAssomyeventsAssomyeventsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssomyeventsPage", function () {
      return AssomyeventsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _SERVICES_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../SERVICES/user.service */
    "./src/app/SERVICES/user.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var AssomyeventsPage = /*#__PURE__*/function () {
      function AssomyeventsPage(Afs, user, router, afAuth) {
        _classCallCheck(this, AssomyeventsPage);

        this.Afs = Afs;
        this.user = user;
        this.router = router;
        this.afAuth = afAuth;
      }

      _createClass(AssomyeventsPage, [{
        key: "goTo",
        value: function goTo(postID) {
          console.log(postID);
          this.router.navigate(['/detailevents/' + postID]);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.afAuth.authState.subscribe(function (auth) {
            _this.userId = auth.uid;
            console.log("userID:   " + _this.userId);
          });
          console.log("oldmethodId    " + this.userId);
          console.log("newmethodId    " + this.user.getUID());
          this.Collection = this.Afs.collection('/publicevents', function (ref) {
            return ref.where('host', '==', _this.user.getUID());
          });
          this.items = this.Collection.valueChanges();
        }
      }]);

      return AssomyeventsPage;
    }();

    AssomyeventsPage.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
      }, {
        type: _SERVICES_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
      }];
    };

    AssomyeventsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-assomyevents',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./assomyevents.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/assomyevents/assomyevents.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./assomyevents.page.scss */
      "./src/app/PAGES_ASSO/assomyevents/assomyevents.page.scss"))["default"]]
    })], AssomyeventsPage);
    /***/
  }
}]);
//# sourceMappingURL=assomyevents-assomyevents-module-es5.js.map