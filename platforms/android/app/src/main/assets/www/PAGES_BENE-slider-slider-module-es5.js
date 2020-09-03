function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PAGES_BENE-slider-slider-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/slider/slider.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/slider/slider.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPAGES_BENESliderSliderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>slider</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"mapa\" ></div>\n<div class=\"container\">\n  <p>Lat:{{lat}}, Lng:{{lng}}</p>\n  <ion-button (click)=\"Iamhere()\"> Where I am?</ion-button>\n  \n</div>\n<div class=\"ion-padding\">\n  <ion-item>\n    <ion-range [(ngModel)]=\"rangeVal\" pin =\"true\" min = \"10\" max = \"15\" color=\"secondary\">\n      <ion-icon slot=\"start\" size=\"small\" color=\"danger\" name=\"sunny\"></ion-icon>\n      <ion-icon slot=\"end\"  name=\"sunny\" color=\"danger\" ></ion-icon>\n    </ion-range>\n  </ion-item>\n  <h1><b>RangeValue:{{rangeVal}}</b></h1>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/PAGES_BENE/slider/slider-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/PAGES_BENE/slider/slider-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: SliderPageRoutingModule */

  /***/
  function srcAppPAGES_BENESliderSliderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderPageRoutingModule", function () {
      return SliderPageRoutingModule;
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


    var _slider_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./slider.page */
    "./src/app/PAGES_BENE/slider/slider.page.ts");

    var routes = [{
      path: '',
      component: _slider_page__WEBPACK_IMPORTED_MODULE_3__["SliderPage"]
    }];

    var SliderPageRoutingModule = function SliderPageRoutingModule() {
      _classCallCheck(this, SliderPageRoutingModule);
    };

    SliderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SliderPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/PAGES_BENE/slider/slider.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/PAGES_BENE/slider/slider.module.ts ***!
    \****************************************************/

  /*! exports provided: SliderPageModule */

  /***/
  function srcAppPAGES_BENESliderSliderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderPageModule", function () {
      return SliderPageModule;
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


    var _slider_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./slider-routing.module */
    "./src/app/PAGES_BENE/slider/slider-routing.module.ts");
    /* harmony import */


    var _slider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./slider.page */
    "./src/app/PAGES_BENE/slider/slider.page.ts");

    var SliderPageModule = function SliderPageModule() {
      _classCallCheck(this, SliderPageModule);
    };

    SliderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _slider_routing_module__WEBPACK_IMPORTED_MODULE_5__["SliderPageRoutingModule"]],
      declarations: [_slider_page__WEBPACK_IMPORTED_MODULE_6__["SliderPage"]]
    })], SliderPageModule);
    /***/
  },

  /***/
  "./src/app/PAGES_BENE/slider/slider.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/PAGES_BENE/slider/slider.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPAGES_BENESliderSliderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  display: flex;\n  height: 15%;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n#mapa {\n  min-height: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUEFHRVNfQkVORS9zbGlkZXIvQzpcXFVzZXJzXFxVdGlsaXNhdGV1clxcdW5pYmVlL3NyY1xcYXBwXFxQQUdFU19CRU5FXFxzbGlkZXJcXHNsaWRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL1BBR0VTX0JFTkUvc2xpZGVyL3NsaWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFjO0VBQ2QsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FDQzFCOztBRENBO0VBQ0ksZUFBZTtBQ0VuQiIsImZpbGUiOiJzcmMvYXBwL1BBR0VTX0JFTkUvc2xpZGVyL3NsaWRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogIGZsZXg7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuI21hcGF7XHJcbiAgICBtaW4taGVpZ2h0OiA1MCU7XHJcbiAgfVxyXG4iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxNSU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jbWFwYSB7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/PAGES_BENE/slider/slider.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/PAGES_BENE/slider/slider.page.ts ***!
    \**************************************************/

  /*! exports provided: SliderPage */

  /***/
  function srcAppPAGES_BENESliderSliderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderPage", function () {
      return SliderPage;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! leaflet/dist/images/marker-shadow.png */
    "./node_modules/leaflet/dist/images/marker-shadow.png");
    /* harmony import */


    var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! leaflet/dist/images/marker-icon.png */
    "./node_modules/leaflet/dist/images/marker-icon.png");
    /* harmony import */


    var leaflet_dist_images_marker_icon_2x_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! leaflet/dist/images/marker-icon-2x.png */
    "./node_modules/leaflet/dist/images/marker-icon-2x.png");

    var SliderPage = /*#__PURE__*/function () {
      function SliderPage(geo, Afs, platform) {
        var _this = this;

        _classCallCheck(this, SliderPage);

        this.geo = geo;
        this.Afs = Afs;
        this.platform = platform;
        this.rangeVal = 14;
        this.platform.ready().then(function () {
          _this.rangeVal = 12;
        });
      }

      _createClass(SliderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "zoom",
        value: function zoom() {
          setInterval(function () {
            this.map.setZoom(0);
            setTimeout(function () {
              this.map.setZoom(1);
            }, 2000);
          }, 4000);
        }
      }, {
        key: "Iamhere",
        value: function Iamhere() {
          var _this2 = this;

          this.geo.getCurrentPosition({
            timeout: 10000,
            enableHighAccuracy: true
          }).then(function (res) {
            _this2.lat = res.coords.latitude;
            _this2.lng = res.coords.longitude;

            _this2.createMap();
          })["catch"](function (e) {
            console.log(e);
          });
        }
      }, {
        key: "createMap",
        value: function createMap() {
          var _this3 = this;

          this.zoomLevel = this.rangeVal;
          this.map = leaflet__WEBPACK_IMPORTED_MODULE_5__["map"]('mapa', {
            center: [this.lat, this.lng],
            zoom: this.zoomLevel,
            renderer: leaflet__WEBPACK_IMPORTED_MODULE_5__["canvas"]()
          });
          leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"]('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'donn&eacute;es &copy; <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
            minZoom: 1,
            maxZoom: 20
          }).addTo(this.map);
          this.addHomeMarker(); // force map to resize on init

          setTimeout(function () {
            _this3.map.invalidateSize();
          }, 0);
        }
      }, {
        key: "addHomeMarker",
        value: function addHomeMarker() {
          this.homeMarker = leaflet__WEBPACK_IMPORTED_MODULE_5__["marker"]({
            lat: this.lat,
            lng: this.lng
          }, {
            draggable: true
          });
          this.homeMarker.addTo(this.map);
        }
      }]);

      return SliderPage;
    }();

    SliderPage.ctorParameters = function () {
      return [{
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
      }];
    };

    SliderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-slider',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./slider.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/slider/slider.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./slider.page.scss */
      "./src/app/PAGES_BENE/slider/slider.page.scss"))["default"]]
    })], SliderPage);
    /***/
  }
}]);
//# sourceMappingURL=PAGES_BENE-slider-slider-module-es5.js.map