(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bene-map-bene-map-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-map/bene-map.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-map/bene-map.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Proche de chez vous</ion-title>\n    <ion-buttons slot=\"end\">\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div id=\"maphome\" ></div>\n    <script *ngFor=\"let item of items | async\">\n      \n    </script>\n    \n   \n \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/PAGES_BENE/bene-map/bene-map-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/PAGES_BENE/bene-map/bene-map-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: BeneMapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneMapPageRoutingModule", function() { return BeneMapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bene_map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bene-map.page */ "./src/app/PAGES_BENE/bene-map/bene-map.page.ts");




const routes = [
    {
        path: '',
        component: _bene_map_page__WEBPACK_IMPORTED_MODULE_3__["BeneMapPage"]
    }
];
let BeneMapPageRoutingModule = class BeneMapPageRoutingModule {
};
BeneMapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BeneMapPageRoutingModule);



/***/ }),

/***/ "./src/app/PAGES_BENE/bene-map/bene-map.module.ts":
/*!********************************************************!*\
  !*** ./src/app/PAGES_BENE/bene-map/bene-map.module.ts ***!
  \********************************************************/
/*! exports provided: BeneMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneMapPageModule", function() { return BeneMapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bene_map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bene-map-routing.module */ "./src/app/PAGES_BENE/bene-map/bene-map-routing.module.ts");
/* harmony import */ var _bene_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bene-map.page */ "./src/app/PAGES_BENE/bene-map/bene-map.page.ts");







let BeneMapPageModule = class BeneMapPageModule {
};
BeneMapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bene_map_routing_module__WEBPACK_IMPORTED_MODULE_5__["BeneMapPageRoutingModule"]
        ],
        declarations: [_bene_map_page__WEBPACK_IMPORTED_MODULE_6__["BeneMapPage"]]
    })
], BeneMapPageModule);



/***/ }),

/***/ "./src/app/PAGES_BENE/bene-map/bene-map.page.scss":
/*!********************************************************!*\
  !*** ./src/app/PAGES_BENE/bene-map/bene-map.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#maphome {\n  min-height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUEFHRVNfQkVORS9iZW5lLW1hcC9DOlxcVXNlcnNcXFV0aWxpc2F0ZXVyXFx1bmliZWUvc3JjXFxhcHBcXFBBR0VTX0JFTkVcXGJlbmUtbWFwXFxiZW5lLW1hcC5wYWdlLnNjc3MiLCJzcmMvYXBwL1BBR0VTX0JFTkUvYmVuZS1tYXAvYmVuZS1tYXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQWdCO0FDQXBCIiwiZmlsZSI6InNyYy9hcHAvUEFHRVNfQkVORS9iZW5lLW1hcC9iZW5lLW1hcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI21hcGhvbWV7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIH0iLCIjbWFwaG9tZSB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/PAGES_BENE/bene-map/bene-map.page.ts":
/*!******************************************************!*\
  !*** ./src/app/PAGES_BENE/bene-map/bene-map.page.ts ***!
  \******************************************************/
/*! exports provided: BeneMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneMapPage", function() { return BeneMapPage; });
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










let BeneMapPage = class BeneMapPage {
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
            console.log(queriedItems);
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
        this.router.navigate(['/bene-details/' + postID]);
    }
};
BeneMapPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
BeneMapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-bene-map',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bene-map.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-map/bene-map.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bene-map.page.scss */ "./src/app/PAGES_BENE/bene-map/bene-map.page.scss")).default]
    })
], BeneMapPage);



/***/ })

}]);
//# sourceMappingURL=bene-map-bene-map-module-es2015.js.map