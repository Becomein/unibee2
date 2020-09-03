function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asso-edit-profile-asso-edit-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/asso-edit-profile/asso-edit-profile.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/asso-edit-profile/asso-edit-profile.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAssoEditProfileAssoEditProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>AssoEditProfile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <button  (click)=\"addPhoto()\" block style=\"width : 50% ; height : 50%\" >\n    <img *ngIf=\"dataUser.logocrop\" [src]=\"dataUser.logocrop\">\n    <img *ngIf=\"!dataUser.logocrop\" src='assets/addpic.png'>\n  </button>\n  <ion-button (click)=\"logout()\" color=\"danger\" >Logout</ion-button>\n\n  <ion-input  [(ngModel)]=\"dataUser.nom\"></ion-input>\n  <ion-input  [(ngModel)]=\"dataUser.description\"></ion-input>\n  <ion-input  [(ngModel)]=\"dataUser.siret\"></ion-input>\n  <ion-input  [(ngModel)]=\"dataUser.tel\"></ion-input>\n  <ion-input  [(ngModel)]=\"dataUser.email\"></ion-input>\n  <ion-input  [(ngModel)]=\"dataUser.adresse\"></ion-input>\n\n\n\n\n\n  <ion-button (click)=\"BtnOK()\" expand=\"block\">Ok</ion-button>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/asso-edit-profile/asso-edit-profile-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/asso-edit-profile/asso-edit-profile-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: AssoEditProfilePageRoutingModule */

  /***/
  function srcAppAssoEditProfileAssoEditProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssoEditProfilePageRoutingModule", function () {
      return AssoEditProfilePageRoutingModule;
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


    var _asso_edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./asso-edit-profile.page */
    "./src/app/asso-edit-profile/asso-edit-profile.page.ts");

    var routes = [{
      path: '',
      component: _asso_edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["AssoEditProfilePage"]
    }];

    var AssoEditProfilePageRoutingModule = function AssoEditProfilePageRoutingModule() {
      _classCallCheck(this, AssoEditProfilePageRoutingModule);
    };

    AssoEditProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AssoEditProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/asso-edit-profile/asso-edit-profile.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/asso-edit-profile/asso-edit-profile.module.ts ***!
    \***************************************************************/

  /*! exports provided: AssoEditProfilePageModule */

  /***/
  function srcAppAssoEditProfileAssoEditProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssoEditProfilePageModule", function () {
      return AssoEditProfilePageModule;
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


    var _asso_edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./asso-edit-profile-routing.module */
    "./src/app/asso-edit-profile/asso-edit-profile-routing.module.ts");
    /* harmony import */


    var _asso_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./asso-edit-profile.page */
    "./src/app/asso-edit-profile/asso-edit-profile.page.ts");

    var AssoEditProfilePageModule = function AssoEditProfilePageModule() {
      _classCallCheck(this, AssoEditProfilePageModule);
    };

    AssoEditProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _asso_edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssoEditProfilePageRoutingModule"]],
      declarations: [_asso_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["AssoEditProfilePage"]]
    })], AssoEditProfilePageModule);
    /***/
  },

  /***/
  "./src/app/asso-edit-profile/asso-edit-profile.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/asso-edit-profile/asso-edit-profile.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAssoEditProfileAssoEditProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc28tZWRpdC1wcm9maWxlL2Fzc28tZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/asso-edit-profile/asso-edit-profile.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/asso-edit-profile/asso-edit-profile.page.ts ***!
    \*************************************************************/

  /*! exports provided: AssoEditProfilePage */

  /***/
  function srcAppAssoEditProfileAssoEditProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssoEditProfilePage", function () {
      return AssoEditProfilePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AssoEditProfilePage = /*#__PURE__*/function () {
      function AssoEditProfilePage(route, router, afAuth, firestore, camera, loadingController, afSG, toastController) {
        _classCallCheck(this, AssoEditProfilePage);

        this.route = route;
        this.router = router;
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.camera = camera;
        this.loadingController = loadingController;
        this.afSG = afSG;
        this.toastController = toastController;
        this.userId = '';
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
      }

      _createClass(AssoEditProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //recep dataUser
          this.route.queryParams.subscribe(function (params) {
            console.log('params:', params);

            if (_this.router.getCurrentNavigation().extras.state) {
              _this.dataUser = _this.router.getCurrentNavigation().extras.state.dataUser;
              console.log("recep" + _this.dataUser.nom);
            }
          }); //recup info auth

          this.afAuth.authState.subscribe(function (auth) {
            _this.userId = auth.uid;
            console.log("userID:   " + _this.userId);
          });
          this.presentToast('fin recup dataUser+auth');
        }
      }, {
        key: "BtnOK",
        value: function BtnOK() {
          var verif = this.dataUser.logocrop.slice(0, 4);
          this.presentToast(verif); // si logochangé, logocrop est en base 64 

          if (verif == 'data') {
            this.presentToast('TRUE');
            this.uploadFirebase();
          } else {
            this.imageUrl = this.dataUser.logocrop;
            this.uploadFirestore();
          }
        }
      }, {
        key: "uploadFirebase",
        value: function uploadFirebase() {
          var _this2 = this;

          //this.presentToast('debutupload')
          // stocker dans un dossier -->  this.imagePath = 'Users/'+ new Date().getTime() + 'jpg'
          this.imagePath = 'LogoAssos/' + this.userId + 'jpg'; // Upload image stockée dans image de type data_url
          //this.presentToast('debutupload')
          //this.presentToast('f'+ 'data_url')

          this.afSG.ref(this.imagePath).putString(this.dataUser.logocrop, 'data_url'); //this.presentToast('f')

          this.upload = this.afSG.ref(this.imagePath).putString(this.dataUser.logocrop, 'data_url'); // this.presentToast('url'+ this.imagePath)

          this.upload.then(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      //get download Url
                      this.afSG.ref(this.imagePath).getDownloadURL().subscribe(function (imgUrl) {
                        console.log('down   ' + imgUrl);
                        _this3.imageUrl = imgUrl; //this.presentToast('firebase post'+ this.imageUrl)

                        _this3.presentToast('f' + _this3.dataUser.logocrop);

                        _this3.uploadFirestore();
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }, {
        key: "uploadFirestore",
        value: function uploadFirestore() {
          //this.afAuth.authState.subscribe(auth => {this.userId = auth.uid;
          this.presentToast('firestoree');
          this.firestore.collection("privateassos").doc(this.userId).set({
            name: this.dataUser.nom,
            logo: this.imageUrl,
            AssoSIRET: this.dataUser.siret,
            AssoDescription: this.dataUser.description,
            AssoTel: this.dataUser.tel,
            AssoAdress: this.dataUser.adresse
          }, {
            merge: true
          }).then(function () {
            console.log("Document successfully written!");
          })["catch"](function (error) {
            console.error("Error writing document: ", error);
          }); //  });

          this.presentToast('sortie');
          this.router.navigate(['/tabs/tab4']);
        } // async car temps de choisir photo non limité

      }, {
        key: "addPhoto",
        value: function addPhoto(source) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var libraryImage;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log('library'); //stocke image selectionné dans libraryImage

                    _context2.next = 3;
                    return this.openLibrary();

                  case 3:
                    libraryImage = _context2.sent;

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } //ionic existing fonction ouvre la librarie

      }, {
        key: "openLibrary",
        value: function openLibrary() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var options;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    options = {
                      quality: 100,
                      destinationType: this.camera.DestinationType.DATA_URL,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE,
                      targetWidth: 1000,
                      targetHeight: 1000,
                      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
                    };
                    _context3.next = 3;
                    return this.camera.getPicture(options).then(function (ImageData) {
                      _this4.dataUser.logo = 'data:image/jpg;base64,' + ImageData;

                      _this4.Gocrop();
                    });

                  case 3:
                    return _context3.abrupt("return", _context3.sent);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // go to crop and pass dataUser

      }, {
        key: "Gocrop",
        value: function Gocrop() {
          console.log('crop');
          var navigationExtras = {
            state: {
              dataUser: this.dataUser
            }
          };
          this.router.navigate(['croplogoedit'], navigationExtras);
        } // ALERTS //////////

      }, {
        key: "presentLoading",
        value: function presentLoading(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingController.create({
                      message: message
                    });

                  case 2:
                    this.loading = _context4.sent;
                    return _context4.abrupt("return", this.loading.present());

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var toast;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.toastController.create({
                      duration: 2000,
                      message: message
                    });

                  case 2:
                    toast = _context5.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return AssoEditProfilePage;
    }();

    AssoEditProfilePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    AssoEditProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-asso-edit-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./asso-edit-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/asso-edit-profile/asso-edit-profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./asso-edit-profile.page.scss */
      "./src/app/asso-edit-profile/asso-edit-profile.page.scss"))["default"]]
    })], AssoEditProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=asso-edit-profile-asso-edit-profile-module-es5.js.map