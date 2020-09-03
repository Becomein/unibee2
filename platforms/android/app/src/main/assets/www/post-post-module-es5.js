function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-post-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/post/post.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/post/post.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPAGES_ASSOPostPostPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf=\"post | async as postData\">\n    {{postData.titre}}\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/post/post-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/PAGES_ASSO/post/post-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: PostPageRoutingModule */

  /***/
  function srcAppPAGES_ASSOPostPostRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostPageRoutingModule", function () {
      return PostPageRoutingModule;
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


    var _post_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./post.page */
    "./src/app/PAGES_ASSO/post/post.page.ts");

    var routes = [{
      path: '',
      component: _post_page__WEBPACK_IMPORTED_MODULE_3__["PostPage"]
    }];

    var PostPageRoutingModule = function PostPageRoutingModule() {
      _classCallCheck(this, PostPageRoutingModule);
    };

    PostPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PostPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/post/post.module.ts":
  /*!************************************************!*\
    !*** ./src/app/PAGES_ASSO/post/post.module.ts ***!
    \************************************************/

  /*! exports provided: PostPageModule */

  /***/
  function srcAppPAGES_ASSOPostPostModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostPageModule", function () {
      return PostPageModule;
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


    var _post_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./post-routing.module */
    "./src/app/PAGES_ASSO/post/post-routing.module.ts");
    /* harmony import */


    var _post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./post.page */
    "./src/app/PAGES_ASSO/post/post.page.ts");

    var PostPageModule = function PostPageModule() {
      _classCallCheck(this, PostPageModule);
    };

    PostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _post_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostPageRoutingModule"]],
      declarations: [_post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"]]
    })], PostPageModule);
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/post/post.page.scss":
  /*!************************************************!*\
    !*** ./src/app/PAGES_ASSO/post/post.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPAGES_ASSOPostPostPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BBR0VTX0FTU08vcG9zdC9wb3N0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/post/post.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/PAGES_ASSO/post/post.page.ts ***!
    \**********************************************/

  /*! exports provided: PostPage */

  /***/
  function srcAppPAGES_ASSOPostPostPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostPage", function () {
      return PostPage;
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

    var PostPage = /*#__PURE__*/function () {
      function PostPage(firestore, route) {
        _classCallCheck(this, PostPage);

        this.firestore = firestore;
        this.route = route;
      }

      _createClass(PostPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.postID = this.route.snapshot.paramMap.get('titre');
          console.log(this.postID);
          this.post = this.firestore.doc("publicevents/".concat(this.postID)).valueChanges();
        }
      }]);

      return PostPage;
    }();

    PostPage.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }];
    };

    PostPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-post',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./post.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/post/post.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./post.page.scss */
      "./src/app/PAGES_ASSO/post/post.page.scss"))["default"]]
    })], PostPage);
    /***/
  }
}]);
//# sourceMappingURL=post-post-module-es5.js.map