(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asso-map-home-asso-map-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/asso-map-home/asso-map-home.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/asso-map-home/asso-map-home.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Proche de chez vous</ion-title>\n    <ion-buttons slot=\"end\">\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div id=\"maphome\" ></div>\n    <script *ngFor=\"let item of items | async\">\n      \n    </script>\n    \n   \n \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/PAGES_ASSO/asso-map-home/asso-map-home-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/PAGES_ASSO/asso-map-home/asso-map-home-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: AssoMapHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssoMapHomePageRoutingModule", function() { return AssoMapHomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _asso_map_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asso-map-home.page */ "./src/app/PAGES_ASSO/asso-map-home/asso-map-home.page.ts");




const routes = [
    {
        path: '',
        component: _asso_map_home_page__WEBPACK_IMPORTED_MODULE_3__["AssoMapHomePage"]
    }
];
let AssoMapHomePageRoutingModule = class AssoMapHomePageRoutingModule {
};
AssoMapHomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AssoMapHomePageRoutingModule);



/***/ }),

/***/ "./src/app/PAGES_ASSO/asso-map-home/asso-map-home.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/PAGES_ASSO/asso-map-home/asso-map-home.module.ts ***!
  \******************************************************************/
/*! exports provided: AssoMapHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssoMapHomePageModule", function() { return AssoMapHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _asso_map_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asso-map-home-routing.module */ "./src/app/PAGES_ASSO/asso-map-home/asso-map-home-routing.module.ts");
/* harmony import */ var _asso_map_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asso-map-home.page */ "./src/app/PAGES_ASSO/asso-map-home/asso-map-home.page.ts");







let AssoMapHomePageModule = class AssoMapHomePageModule {
};
AssoMapHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _asso_map_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssoMapHomePageRoutingModule"]
        ],
        declarations: [_asso_map_home_page__WEBPACK_IMPORTED_MODULE_6__["AssoMapHomePage"]]
    })
], AssoMapHomePageModule);



/***/ }),

/***/ "./src/app/PAGES_ASSO/asso-map-home/asso-map-home.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/PAGES_ASSO/asso-map-home/asso-map-home.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#maphome {\n  min-height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUEFHRVNfQVNTTy9hc3NvLW1hcC1ob21lL0M6XFxVc2Vyc1xcVXRpbGlzYXRldXJcXHVuaWJlZS9zcmNcXGFwcFxcUEFHRVNfQVNTT1xcYXNzby1tYXAtaG9tZVxcYXNzby1tYXAtaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL1BBR0VTX0FTU08vYXNzby1tYXAtaG9tZS9hc3NvLW1hcC1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdCQUFnQjtBQ0FsQiIsImZpbGUiOiJzcmMvYXBwL1BBR0VTX0FTU08vYXNzby1tYXAtaG9tZS9hc3NvLW1hcC1ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jbWFwaG9tZXtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59IiwiI21hcGhvbWUge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/PAGES_ASSO/asso-map-home/asso-map-home.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/PAGES_ASSO/asso-map-home/asso-map-home.page.ts ***!
  \****************************************************************/
/*! exports provided: AssoMapHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssoMapHomePage", function() { return AssoMapHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png");
/* harmony import */ var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png");
/* harmony import */ var leaflet_dist_images_marker_icon_2x_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ "./node_modules/leaflet/dist/images/marker-icon-2x.png");










let AssoMapHomePage = class AssoMapHomePage {
    constructor(Afs, router) {
        this.Afs = Afs;
        this.router = router;
    }
    ngAfterViewInit() {
        this.createMap();
    }
    createMap() {
        this.maphome = leaflet__WEBPACK_IMPORTED_MODULE_5__["map"]('maphome', {
            center: [48.298246, 4.078672],
            zoom: 12,
            renderer: leaflet__WEBPACK_IMPORTED_MODULE_5__["canvas"]()
        });
        leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"]('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'donn&eacute;es &copy; <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
            minZoom: 1,
            maxZoom: 20
        }).addTo(this.maphome);
        this.markerinvasion();
        // force map to resize on init
        setTimeout(() => {
            this.maphome.invalidateSize();
        }, 0);
    }
    addHomeMarker() {
        const homeMarker = leaflet__WEBPACK_IMPORTED_MODULE_5__["marker"]({ lat: 48.4, lng: 4.0833 });
        homeMarker.bindPopup('This is the voice', {
            closeButton: true
        });
        homeMarker.addTo(this.maphome);
    }
    addMarker(lat, lng, pop, id) {
        this.mark = leaflet__WEBPACK_IMPORTED_MODULE_5__["marker"]({ lat: lat, lng: lng }, { draggable: false });
        this.mark.bindPopup(pop, {
            closeButton: true
        }).on('click', (clickEvent) => { this.goTo(id); });
        this.mark.addTo(this.maphome);
    }
    markerinvasion() {
        const size$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        const queryObservable = size$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(size => this.Afs.collection('publicevents' /*, ref => ref.where('size', '==', size)*/).valueChanges()));
        // is scalar
        console.log(queryObservable);
        // subscribe to changes
        queryObservable.subscribe(queriedItems => {
            // [{...}, {...}]
            this.obj = queriedItems;
            console.log("gg" + queriedItems.length);
            for (var i = 0; i < queriedItems.length; i++) {
                console.log(this.obj[i].titre);
                console.log(this.obj[i].geolat);
                console.log(this.obj[i].geolng);
                this.addMarker(this.obj[i].geolat, this.obj[i].geolng, this.obj[i].titre, this.obj[i].id);
            }
        });
        // trigger the query
        size$.next('large');
        // re-trigger the query!!!
        size$.next('small');
    }
    goTo(postID) {
        this.router.navigate(['/detailevents/' + postID]);
    }
};
AssoMapHomePage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AssoMapHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-asso-map-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./asso-map-home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/asso-map-home/asso-map-home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./asso-map-home.page.scss */ "./src/app/PAGES_ASSO/asso-map-home/asso-map-home.page.scss")).default]
    })
], AssoMapHomePage);



/***/ })

}]);
//# sourceMappingURL=asso-map-home-asso-map-home-module-es2015.js.map