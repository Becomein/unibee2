function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PAGES_ASSO-asso-set-marker-asso-map-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/asso-set-marker/asso-map.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/asso-set-marker/asso-map.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPAGES_ASSOAssoSetMarkerAssoMapPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Où se trouve votre Event?</ion-title>\n    <ion-buttons slot=\"end\">\n    <ion-button (click)=\"GoandPass()\" color=\"primary\">OK</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div id=\"map\" ></div>\n \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/asso-set-marker/asso-map-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/PAGES_ASSO/asso-set-marker/asso-map-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: AssoMapPageRoutingModule */

  /***/
  function srcAppPAGES_ASSOAssoSetMarkerAssoMapRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssoMapPageRoutingModule", function () {
      return AssoMapPageRoutingModule;
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


    var _asso_map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./asso-map.page */
    "./src/app/PAGES_ASSO/asso-set-marker/asso-map.page.ts");

    var routes = [{
      path: '',
      component: _asso_map_page__WEBPACK_IMPORTED_MODULE_3__["AssoMapPage"]
    }];

    var AssoMapPageRoutingModule = function AssoMapPageRoutingModule() {
      _classCallCheck(this, AssoMapPageRoutingModule);
    };

    AssoMapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AssoMapPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/asso-set-marker/asso-map.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/PAGES_ASSO/asso-set-marker/asso-map.module.ts ***!
    \***************************************************************/

  /*! exports provided: AssoMapPageModule */

  /***/
  function srcAppPAGES_ASSOAssoSetMarkerAssoMapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssoMapPageModule", function () {
      return AssoMapPageModule;
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


    var _asso_map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./asso-map-routing.module */
    "./src/app/PAGES_ASSO/asso-set-marker/asso-map-routing.module.ts");
    /* harmony import */


    var _asso_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./asso-map.page */
    "./src/app/PAGES_ASSO/asso-set-marker/asso-map.page.ts");

    var AssoMapPageModule = function AssoMapPageModule() {
      _classCallCheck(this, AssoMapPageModule);
    };

    AssoMapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _asso_map_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssoMapPageRoutingModule"]],
      declarations: [_asso_map_page__WEBPACK_IMPORTED_MODULE_6__["AssoMapPage"]]
    })], AssoMapPageModule);
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/asso-set-marker/asso-map.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/PAGES_ASSO/asso-set-marker/asso-map.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPAGES_ASSOAssoSetMarkerAssoMapPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  min-height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUEFHRVNfQVNTTy9hc3NvLXNldC1tYXJrZXIvQzpcXFVzZXJzXFxVdGlsaXNhdGV1clxcdW5pYmVlL3NyY1xcYXBwXFxQQUdFU19BU1NPXFxhc3NvLXNldC1tYXJrZXJcXGFzc28tbWFwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvUEFHRVNfQVNTTy9hc3NvLXNldC1tYXJrZXIvYXNzby1tYXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0FDQ3BCIiwiZmlsZSI6InNyYy9hcHAvUEFHRVNfQVNTTy9hc3NvLXNldC1tYXJrZXIvYXNzby1tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4iLCIjbWFwIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/PAGES_ASSO/asso-set-marker/asso-map.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/PAGES_ASSO/asso-set-marker/asso-map.page.ts ***!
    \*************************************************************/

  /*! exports provided: AssoMapPage */

  /***/
  function srcAppPAGES_ASSOAssoSetMarkerAssoMapPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssoMapPage", function () {
      return AssoMapPage;
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
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! leaflet/dist/images/marker-shadow.png */
    "./node_modules/leaflet/dist/images/marker-shadow.png");
    /* harmony import */


    var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! leaflet/dist/images/marker-icon.png */
    "./node_modules/leaflet/dist/images/marker-icon.png");
    /* harmony import */


    var leaflet_dist_images_marker_icon_2x_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! leaflet/dist/images/marker-icon-2x.png */
    "./node_modules/leaflet/dist/images/marker-icon-2x.png");

    var AssoMapPage = /*#__PURE__*/function () {
      function AssoMapPage(Afs, router, route) {
        _classCallCheck(this, AssoMapPage);

        this.Afs = Afs;
        this.router = router;
        this.route = route;
        this.dataEvent = {
          geolat: '',
          geolng: ''
        };
      }

      _createClass(AssoMapPage, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          //this.createMap();
          if (this.map) this.map.remove();
          this.createMap();
        }
      }, {
        key: "createMap",
        value: function createMap() {
          var _this = this;

          this.map = leaflet__WEBPACK_IMPORTED_MODULE_4__["map"]('map', {
            center: [48.298246, 4.078672],
            zoom: 12,
            renderer: leaflet__WEBPACK_IMPORTED_MODULE_4__["canvas"]()
          });
          leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"]('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'donn&eacute;es &copy; <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
            minZoom: 1,
            maxZoom: 20
          }).addTo(this.map);
          this.addHomeMarker(); // force map to resize on init

          setTimeout(function () {
            _this.map.invalidateSize();
          }, 0);
        }
      }, {
        key: "addHomeMarker",
        value: function addHomeMarker() {
          this.homeMarker = leaflet__WEBPACK_IMPORTED_MODULE_4__["marker"]({
            lat: 48.3,
            lng: 4.0833
          }, {
            draggable: true
          });
          this.homeMarker.addTo(this.map);
          this.recepData();
        } // receptionner dataUser

      }, {
        key: "recepData",
        value: function recepData() {
          var _this2 = this;

          console.log('recepdataUser');
          this.route.queryParams.subscribe(function (params) {
            console.log('params:', params);
            console.log("recep");

            if (_this2.router.getCurrentNavigation().extras.state) {
              _this2.dataEvent = _this2.router.getCurrentNavigation().extras.state.dataEvent;
              console.log(_this2.dataEvent);
            }
          });
        } // go to other page and pass dataUser

      }, {
        key: "GoandPass",
        value: function GoandPass() {
          this.dataEvent.geolat = this.homeMarker.getLatLng().lat;
          this.dataEvent.geolng = this.homeMarker.getLatLng().lng;
          var navigationExtras = {
            state: {
              dataEvent: this.dataEvent
            }
          };
          this.router.navigate(['/tabs/tab3'], navigationExtras);
        }
      }]);

      return AssoMapPage;
    }();

    AssoMapPage.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }];
    };

    AssoMapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-asso-map',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./asso-map.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/asso-set-marker/asso-map.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./asso-map.page.scss */
      "./src/app/PAGES_ASSO/asso-set-marker/asso-map.page.scss"))["default"]]
    })], AssoMapPage);
    /***/
  }
}]);
//# sourceMappingURL=PAGES_ASSO-asso-set-marker-asso-map-module-es5.js.map