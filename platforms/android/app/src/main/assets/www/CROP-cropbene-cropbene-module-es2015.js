(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CROP-cropbene-cropbene-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/CROP/cropbene/cropbene.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/CROP/cropbene/cropbene.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>cropbene</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <image-cropper\n  [imageBase64]=\"dataUser.logo\"\n  [maintainAspectRatio]=\"true\"\n  [aspectRatio]=\"1/1\"\n  format=\"png\"\n  (imageCropped)=\"imageCropped($event)\"\n  outputType=\"base64\">\n  </image-cropper>\n  <ion-button (click)='btnOk()' expand=\"block\" >OK</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/CROP/cropbene/cropbene-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/CROP/cropbene/cropbene-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: CropbenePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropbenePageRoutingModule", function() { return CropbenePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cropbene_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cropbene.page */ "./src/app/CROP/cropbene/cropbene.page.ts");




const routes = [
    {
        path: '',
        component: _cropbene_page__WEBPACK_IMPORTED_MODULE_3__["CropbenePage"]
    }
];
let CropbenePageRoutingModule = class CropbenePageRoutingModule {
};
CropbenePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CropbenePageRoutingModule);



/***/ }),

/***/ "./src/app/CROP/cropbene/cropbene.module.ts":
/*!**************************************************!*\
  !*** ./src/app/CROP/cropbene/cropbene.module.ts ***!
  \**************************************************/
/*! exports provided: CropbenePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropbenePageModule", function() { return CropbenePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cropbene_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cropbene-routing.module */ "./src/app/CROP/cropbene/cropbene-routing.module.ts");
/* harmony import */ var _cropbene_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cropbene.page */ "./src/app/CROP/cropbene/cropbene.page.ts");








let CropbenePageModule = class CropbenePageModule {
};
CropbenePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _cropbene_routing_module__WEBPACK_IMPORTED_MODULE_6__["CropbenePageRoutingModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_1__["ImageCropperModule"]
        ],
        declarations: [_cropbene_page__WEBPACK_IMPORTED_MODULE_7__["CropbenePage"]]
    })
], CropbenePageModule);



/***/ }),

/***/ "./src/app/CROP/cropbene/cropbene.page.scss":
/*!**************************************************!*\
  !*** ./src/app/CROP/cropbene/cropbene.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NST1AvY3JvcGJlbmUvY3JvcGJlbmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/CROP/cropbene/cropbene.page.ts":
/*!************************************************!*\
  !*** ./src/app/CROP/cropbene/cropbene.page.ts ***!
  \************************************************/
/*! exports provided: CropbenePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropbenePage", function() { return CropbenePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");




/////// importer crop module dans .module/////////
let CropbenePage = class CropbenePage {
    constructor(route, router, crop) {
        this.route = route;
        this.router = router;
        this.crop = crop;
        this.dataUser = {
            email: '',
            password: '',
            nom: '',
            logo: '',
            logocrop: '',
        };
        this.croppedimage = null;
        // receptionner dataUser
        this.route.queryParams.subscribe(params => {
            console.log('params:', params);
            if (this.router.getCurrentNavigation().extras.state) {
                this.dataUser = this.router.getCurrentNavigation().extras.state.dataUser;
                console.log("recep" + this.dataUser.logo);
            }
        });
    }
    imageCropped(event) {
        this.croppedimage = event.base64;
    }
    btnOk() {
        console.log("zcropped" + this.croppedimage);
        this.dataUser.logocrop = this.croppedimage;
        this.Goregister();
    }
    // go to register and pass dataUser
    Goregister() {
        let navigationExtras = {
            state: {
                dataUser: this.dataUser
            }
        };
        this.router.navigate(['bene-edit-compte'], navigationExtras);
    }
    ngOnInit() {
    }
};
CropbenePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_3__["Crop"] }
];
CropbenePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cropbene',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cropbene.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/CROP/cropbene/cropbene.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cropbene.page.scss */ "./src/app/CROP/cropbene/cropbene.page.scss")).default]
    })
], CropbenePage);



/***/ })

}]);
//# sourceMappingURL=CROP-cropbene-cropbene-module-es2015.js.map