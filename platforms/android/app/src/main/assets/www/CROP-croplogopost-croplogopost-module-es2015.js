(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CROP-croplogopost-croplogopost-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/CROP/croplogopost/croplogopost.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/CROP/croplogopost/croplogopost.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Recadrez votre logo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <image-cropper\n[imageBase64]=\"dataEvent.photo\"\n[maintainAspectRatio]=\"true\"\n[aspectRatio]=\"16/9\"\nformat=\"jpeg\"\nimageQuality=\"30\"\n(imageCropped)=\"imageCropped($event)\"\noutputType=\"base64\">\n</image-cropper>\n<ion-button (click)='btnOk()' expand=\"block\" >OK</ion-button>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/CROP/croplogopost/croplogopost-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/CROP/croplogopost/croplogopost-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: CroplogopostPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CroplogopostPageRoutingModule", function() { return CroplogopostPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _croplogopost_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./croplogopost.page */ "./src/app/CROP/croplogopost/croplogopost.page.ts");




const routes = [
    {
        path: '',
        component: _croplogopost_page__WEBPACK_IMPORTED_MODULE_3__["CroplogopostPage"]
    }
];
let CroplogopostPageRoutingModule = class CroplogopostPageRoutingModule {
};
CroplogopostPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CroplogopostPageRoutingModule);



/***/ }),

/***/ "./src/app/CROP/croplogopost/croplogopost.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/CROP/croplogopost/croplogopost.module.ts ***!
  \**********************************************************/
/*! exports provided: CroplogopostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CroplogopostPageModule", function() { return CroplogopostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _croplogopost_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./croplogopost-routing.module */ "./src/app/CROP/croplogopost/croplogopost-routing.module.ts");
/* harmony import */ var _croplogopost_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./croplogopost.page */ "./src/app/CROP/croplogopost/croplogopost.page.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");








let CroplogopostPageModule = class CroplogopostPageModule {
};
CroplogopostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _croplogopost_routing_module__WEBPACK_IMPORTED_MODULE_5__["CroplogopostPageRoutingModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"]
        ],
        declarations: [_croplogopost_page__WEBPACK_IMPORTED_MODULE_6__["CroplogopostPage"]]
    })
], CroplogopostPageModule);



/***/ }),

/***/ "./src/app/CROP/croplogopost/croplogopost.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/CROP/croplogopost/croplogopost.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NST1AvY3JvcGxvZ29wb3N0L2Nyb3Bsb2dvcG9zdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/CROP/croplogopost/croplogopost.page.ts":
/*!********************************************************!*\
  !*** ./src/app/CROP/croplogopost/croplogopost.page.ts ***!
  \********************************************************/
/*! exports provided: CroplogopostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CroplogopostPage", function() { return CroplogopostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");




/////// importer crop module dans .module/////////
let CroplogopostPage = class CroplogopostPage {
    constructor(route, router, crop) {
        this.route = route;
        this.router = router;
        this.crop = crop;
        this.dataEvent = {
            photocrop: '',
        };
        this.croppedimage = null;
        this.recepData();
    }
    recepData() {
        // receptionner dataUser
        this.route.queryParams.subscribe(params => {
            console.log('params:', params);
            console.log("recep");
            if (this.router.getCurrentNavigation().extras.state) {
                this.dataEvent = this.router.getCurrentNavigation().extras.state.dataEvent;
            }
        });
    }
    imageCropped(event) {
        this.croppedimage = event.base64;
    }
    btnOk() {
        console.log("zcropped" + this.croppedimage);
        this.dataEvent.photocrop = this.croppedimage;
        this.Goregister();
    }
    // go to register and pass dataUser
    Goregister() {
        let navigationExtras = {
            state: {
                dataEvent: this.dataEvent
            }
        };
        this.router.navigate(['/tabs/tab3'], navigationExtras);
    }
    ngOnInit() {
    }
};
CroplogopostPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_3__["Crop"] }
];
CroplogopostPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-croplogopost',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./croplogopost.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/CROP/croplogopost/croplogopost.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./croplogopost.page.scss */ "./src/app/CROP/croplogopost/croplogopost.page.scss")).default]
    })
], CroplogopostPage);



/***/ })

}]);
//# sourceMappingURL=CROP-croplogopost-croplogopost-module-es2015.js.map