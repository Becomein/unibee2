function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab4Tab4PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Profil\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Profidd</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n\n  <!-- valuechange<h3>{{ post | async | json}}</h3>\n  [src] est une variable-->\n  <img *ngIf=\"dataUser.logocrop\" [src]=\"dataUser.logocrop\"  block style=\"width : 50% ; height : 30%\">\n  <img *ngIf=\"!dataUser.logocrop\" src='assets/addpic.png'  block style=\"width : 50% ; height : 30%\">\n  <ion-button (click)=\"logout()\" color=\"danger\" >Logout</ion-button>\n  <ion-item>{{dataUser.nom}}</ion-item>\n  <ion-item>{{dataUser.description}}</ion-item>\n  <ion-item>{{dataUser.siret}}</ion-item>\n  <ion-item>{{dataUser.tel}}</ion-item>\n  <ion-item>{{dataUser.email}}</ion-item>\n  <ion-item>{{dataUser.adresse}}</ion-item>\n  <ion-button (click)=\"Goedit()\" expand=\"block\">Modify</ion-button>\n\n\n \n   \n  \n\n \n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tab4/tab4-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab4/tab4-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab4PageRoutingModule */

  /***/
  function srcAppTab4Tab4RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function () {
      return Tab4PageRoutingModule;
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


    var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab4.page */
    "./src/app/tab4/tab4.page.ts");

    var routes = [{
      path: '',
      component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"]
    }];

    var Tab4PageRoutingModule = function Tab4PageRoutingModule() {
      _classCallCheck(this, Tab4PageRoutingModule);
    };

    Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab4PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab4/tab4.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab4/tab4.module.ts ***!
    \*************************************/

  /*! exports provided: Tab4PageModule */

  /***/
  function srcAppTab4Tab4ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function () {
      return Tab4PageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab4.page */
    "./src/app/tab4/tab4.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tab4-routing.module */
    "./src/app/tab4/tab4-routing.module.ts");

    var Tab4PageModule = function Tab4PageModule() {
      _classCallCheck(this, Tab4PageModule);
    };

    Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]
      }]), _tab4_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab4PageRoutingModule"]],
      declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })], Tab4PageModule);
    /***/
  },

  /***/
  "./src/app/tab4/tab4.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab4/tab4.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab4Tab4PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab4/tab4.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab4/tab4.page.ts ***!
    \***********************************/

  /*! exports provided: Tab4Page */

  /***/
  function srcAppTab4Tab4PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab4Page", function () {
      return Tab4Page;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var Tab4Page = /*#__PURE__*/function () {
      function Tab4Page(loadingController, router, route, afAuth, firestore, toastController) {
        _classCallCheck(this, Tab4Page);

        this.loadingController = loadingController;
        this.router = router;
        this.route = route;
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.toastController = toastController;
        this.userId = ''; // data to pass to edit page

        this.dataUser = {
          logocrop: 'n',
          nom: 'n',
          description: 'n',
          tel: 'n',
          email: 'n',
          adresse: 'n',
          siret: 'n',
          logo: 'n'
        };
        this.presentToast('constructor');
      }

      _createClass(Tab4Page, [{
        key: "GetPrivateInfo",
        value: function GetPrivateInfo() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var docRef;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // get document
                    docRef = this.firestore.collection('privateassos').doc(this.userId);
                    docRef.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (doc) {
                      return doc.data();
                    })).subscribe(function (data) {
                      // do stuff with document
                      console.log(data);
                      console.log(data.name);

                      _this.presentToast('début recup doc');

                      if (data.name) {
                        _this.dataUser.nom = data.name;
                      }

                      if (data.AssoDescription) {
                        _this.dataUser.description = data.AssoDescription;
                      }

                      if (data.AssoTel) {
                        _this.dataUser.tel = data.AssoTel;
                      }

                      if (data.AssoAdress) {
                        _this.dataUser.adresse = data.AssoAdress;
                      }

                      if (data.AssoSIRET) {
                        _this.dataUser.siret = data.AssoSIRET;
                      }

                      if (data.logo) {
                        _this.dataUser.logocrop = data.logo;
                      }

                      _this.loading.dissmiss;

                      _this.presentToast('fin recup doc');

                      _this.loading.dismiss();
                    }); //this.postDoc = this.firestore.doc<Post>("privateassos/LA");
                    //this.post = this.postDoc.valueChanges();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.presentToast('OnInit');
          this.presentLoading('Pollénisation du profil'); //recup info auth
          //this.presentLoading('Pollénisation du profil');

          this.afAuth.authState.subscribe(function (auth) {
            _this2.userId = auth.uid;
            console.log("userID:   " + _this2.userId);
            _this2.dataUser.email = auth.email;

            _this2.GetPrivateInfo();
          });
        } // go to edit and pass dataUser

      }, {
        key: "Goedit",
        value: function Goedit() {
          this.presentToast('goedit');
          var navigationExtras = {
            state: {
              dataUser: this.dataUser
            }
          };
          this.router.navigate(['asso-edit-profile'], navigationExtras);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.afAuth.signOut();
          this.router.navigate(['welcome']);
        } // ALERTS //////////

      }, {
        key: "presentLoading",
        value: function presentLoading(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      message: message
                    });

                  case 2:
                    this.loading = _context2.sent;
                    return _context2.abrupt("return", this.loading.present());

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastController.create({
                      duration: 2000,
                      message: message
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return Tab4Page;
    }();

    Tab4Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]
      }];
    };

    Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-tab4',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab4.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab4.page.scss */
      "./src/app/tab4/tab4.page.scss"))["default"]]
    })], Tab4Page);
    /***/
  }
}]);
//# sourceMappingURL=tab4-tab4-module-es5.js.map