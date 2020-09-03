(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CROP-croplogoedit-croplogoedit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/CROP/croplogoedit/croplogoedit.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/CROP/croplogoedit/croplogoedit.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Recadrez votre logo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <image-cropper\n[imageBase64]=\"dataUser.logo\"\n[maintainAspectRatio]=\"true\"\n[aspectRatio]=\"1/1\"\nformat=\"png\"\n(imageCropped)=\"imageCropped($event)\"\noutputType=\"base64\">\n</image-cropper>\n<ion-button (click)='btnOk()' expand=\"block\" >OK</ion-button>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/CROP/croplogoedit/croplogoedit-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/CROP/croplogoedit/croplogoedit-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: CroplogoeditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CroplogoeditPageRoutingModule", function() { return CroplogoeditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _croplogoedit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./croplogoedit.page */ "./src/app/CROP/croplogoedit/croplogoedit.page.ts");




const routes = [
    {
        path: '',
        component: _croplogoedit_page__WEBPACK_IMPORTED_MODULE_3__["CroplogoeditPage"]
    }
];
let CroplogoeditPageRoutingModule = class CroplogoeditPageRoutingModule {
};
CroplogoeditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CroplogoeditPageRoutingModule);



/***/ }),

/***/ "./src/app/CROP/croplogoedit/croplogoedit.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/CROP/croplogoedit/croplogoedit.module.ts ***!
  \**********************************************************/
/*! exports provided: CroplogoeditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CroplogoeditPageModule", function() { return CroplogoeditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _croplogoedit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./croplogoedit-routing.module */ "./src/app/CROP/croplogoedit/croplogoedit-routing.module.ts");
/* harmony import */ var _croplogoedit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./croplogoedit.page */ "./src/app/CROP/croplogoedit/croplogoedit.page.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");








let CroplogoeditPageModule = class CroplogoeditPageModule {
};
CroplogoeditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _croplogoedit_routing_module__WEBPACK_IMPORTED_MODULE_5__["CroplogoeditPageRoutingModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"]
        ],
        declarations: [_croplogoedit_page__WEBPACK_IMPORTED_MODULE_6__["CroplogoeditPage"]]
    })
], CroplogoeditPageModule);



/***/ }),

/***/ "./src/app/CROP/croplogoedit/croplogoedit.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/CROP/croplogoedit/croplogoedit.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NST1AvY3JvcGxvZ29lZGl0L2Nyb3Bsb2dvZWRpdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/CROP/croplogoedit/croplogoedit.page.ts":
/*!********************************************************!*\
  !*** ./src/app/CROP/croplogoedit/croplogoedit.page.ts ***!
  \********************************************************/
/*! exports provided: CroplogoeditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CroplogoeditPage", function() { return CroplogoeditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");




let CroplogoeditPage = class CroplogoeditPage {
    constructor(route, router, crop) {
        this.route = route;
        this.router = router;
        this.crop = crop;
        this.dataUser = {
            email: 'n',
            password: 'n',
            nom: 'n',
            logo: 'n',
            logocrop: 'n',
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
    ngOnInit() {
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
        this.router.navigate(['asso-edit-profile'], navigationExtras);
    }
};
CroplogoeditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_3__["Crop"] }
];
CroplogoeditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-croplogoedit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./croplogoedit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/CROP/croplogoedit/croplogoedit.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./croplogoedit.page.scss */ "./src/app/CROP/croplogoedit/croplogoedit.page.scss")).default]
    })
], CroplogoeditPage);



/***/ })

}]);
//# sourceMappingURL=CROP-croplogoedit-croplogoedit-module-es2015.js.map