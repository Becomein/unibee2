function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CROP-croplogo-croplogo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/CROP/croplogo/croplogo.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/CROP/croplogo/croplogo.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCROPCroplogoCroplogoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Recadrez votre logo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <image-cropper\n[imageBase64]=\"dataUser.logo\"\n[maintainAspectRatio]=\"true\"\n[aspectRatio]=\"1/1\"\nformat=\"png\"\n(imageCropped)=\"imageCropped($event)\"\noutputType=\"base64\">\n</image-cropper>\n<ion-button (click)='btnOk()' expand=\"block\" >OK</ion-button>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/CROP/croplogo/croplogo-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/CROP/croplogo/croplogo-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: CroplogoPageRoutingModule */

  /***/
  function srcAppCROPCroplogoCroplogoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CroplogoPageRoutingModule", function () {
      return CroplogoPageRoutingModule;
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


    var _croplogo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./croplogo.page */
    "./src/app/CROP/croplogo/croplogo.page.ts");

    var routes = [{
      path: '',
      component: _croplogo_page__WEBPACK_IMPORTED_MODULE_3__["CroplogoPage"]
    }];

    var CroplogoPageRoutingModule = function CroplogoPageRoutingModule() {
      _classCallCheck(this, CroplogoPageRoutingModule);
    };

    CroplogoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CroplogoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/CROP/croplogo/croplogo.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/CROP/croplogo/croplogo.module.ts ***!
    \**************************************************/

  /*! exports provided: CroplogoPageModule */

  /***/
  function srcAppCROPCroplogoCroplogoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CroplogoPageModule", function () {
      return CroplogoPageModule;
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


    var _croplogo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./croplogo-routing.module */
    "./src/app/CROP/croplogo/croplogo-routing.module.ts");
    /* harmony import */


    var _croplogo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./croplogo.page */
    "./src/app/CROP/croplogo/croplogo.page.ts");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");

    var CroplogoPageModule = function CroplogoPageModule() {
      _classCallCheck(this, CroplogoPageModule);
    };

    CroplogoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _croplogo_routing_module__WEBPACK_IMPORTED_MODULE_5__["CroplogoPageRoutingModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"]],
      declarations: [_croplogo_page__WEBPACK_IMPORTED_MODULE_6__["CroplogoPage"]]
    })], CroplogoPageModule);
    /***/
  },

  /***/
  "./src/app/CROP/croplogo/croplogo.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/CROP/croplogo/croplogo.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCROPCroplogoCroplogoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NST1AvY3JvcGxvZ28vY3JvcGxvZ28ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/CROP/croplogo/croplogo.page.ts":
  /*!************************************************!*\
    !*** ./src/app/CROP/croplogo/croplogo.page.ts ***!
    \************************************************/

  /*! exports provided: CroplogoPage */

  /***/
  function srcAppCROPCroplogoCroplogoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CroplogoPage", function () {
      return CroplogoPage;
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


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js"); /////// importer crop module dans .module/////////


    var CroplogoPage = /*#__PURE__*/function () {
      function CroplogoPage(route, router, crop) {
        var _this = this;

        _classCallCheck(this, CroplogoPage);

        this.route = route;
        this.router = router;
        this.crop = crop;
        this.dataUser = {
          email: '',
          password: '',
          nom: '',
          logo: '',
          logocrop: ''
        };
        this.croppedimage = null; // receptionner dataUser

        this.route.queryParams.subscribe(function (params) {
          console.log('params:', params);

          if (_this.router.getCurrentNavigation().extras.state) {
            _this.dataUser = _this.router.getCurrentNavigation().extras.state.dataUser;
            console.log("recep" + _this.dataUser.logo);
          }
        });
      }

      _createClass(CroplogoPage, [{
        key: "imageCropped",
        value: function imageCropped(event) {
          this.croppedimage = event.base64;
        }
      }, {
        key: "btnOk",
        value: function btnOk() {
          console.log("zcropped" + this.croppedimage);
          this.dataUser.logocrop = this.croppedimage;
          this.Goregister();
        } // go to register and pass dataUser

      }, {
        key: "Goregister",
        value: function Goregister() {
          var navigationExtras = {
            state: {
              dataUser: this.dataUser
            }
          };
          this.router.navigate(['asso-register'], navigationExtras);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CroplogoPage;
    }();

    CroplogoPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_3__["Crop"]
      }];
    };

    CroplogoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-croplogo',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./croplogo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/CROP/croplogo/croplogo.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./croplogo.page.scss */
      "./src/app/CROP/croplogo/croplogo.page.scss"))["default"]]
    })], CroplogoPage);
    /***/
  }
}]);
//# sourceMappingURL=CROP-croplogo-croplogo-module-es5.js.map