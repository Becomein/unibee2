(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["acceuil-acceuil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/acceuil/acceuil.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/acceuil/acceuil.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>acceuil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-button href=\"loginbene2\">login bene</ion-button>\n<ion-button href=\"choix\">Bénévole/Asso</ion-button>\n<ion-button href=\"registerbene\">registerbene</ion-button>\n<ion-button href=\"resterasso\">registerasso</ion-button>\n<ion-button href=\"splashscreen\">splash</ion-button>\n<ion-button href=\"loginasso\">loginasso</ion-button>\n<ion-button href=\"accountpublicasso\">asso public</ion-button>\n<ion-button href=\"accountprivebene\">bene prive</ion-button>\n<ion-button href=\"accountpublicebene\">bene prive</ion-button>\n<ion-button href=\"createnewevent\">createnewe</ion-button>\n<ion-button href=\"eventcomplet\">complet</ion-button>\n<ion-button href=\"eventlist\">complet</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/acceuil/acceuil-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/acceuil/acceuil-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AcceuilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceuilPageRoutingModule", function() { return AcceuilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _acceuil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./acceuil.page */ "./src/app/acceuil/acceuil.page.ts");




const routes = [
    {
        path: '',
        component: _acceuil_page__WEBPACK_IMPORTED_MODULE_3__["AcceuilPage"]
    }
];
let AcceuilPageRoutingModule = class AcceuilPageRoutingModule {
};
AcceuilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AcceuilPageRoutingModule);



/***/ }),

/***/ "./src/app/acceuil/acceuil.module.ts":
/*!*******************************************!*\
  !*** ./src/app/acceuil/acceuil.module.ts ***!
  \*******************************************/
/*! exports provided: AcceuilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceuilPageModule", function() { return AcceuilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _acceuil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./acceuil-routing.module */ "./src/app/acceuil/acceuil-routing.module.ts");
/* harmony import */ var _acceuil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./acceuil.page */ "./src/app/acceuil/acceuil.page.ts");







let AcceuilPageModule = class AcceuilPageModule {
};
AcceuilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _acceuil_routing_module__WEBPACK_IMPORTED_MODULE_5__["AcceuilPageRoutingModule"]
        ],
        declarations: [_acceuil_page__WEBPACK_IMPORTED_MODULE_6__["AcceuilPage"]]
    })
], AcceuilPageModule);



/***/ }),

/***/ "./src/app/acceuil/acceuil.page.scss":
/*!*******************************************!*\
  !*** ./src/app/acceuil/acceuil.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY2V1aWwvYWNjZXVpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/acceuil/acceuil.page.ts":
/*!*****************************************!*\
  !*** ./src/app/acceuil/acceuil.page.ts ***!
  \*****************************************/
/*! exports provided: AcceuilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceuilPage", function() { return AcceuilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AcceuilPage = class AcceuilPage {
    constructor() { }
    ngOnInit() {
    }
};
AcceuilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-acceuil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./acceuil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/acceuil/acceuil.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./acceuil.page.scss */ "./src/app/acceuil/acceuil.page.scss")).default]
    })
], AcceuilPage);



/***/ })

}]);
//# sourceMappingURL=acceuil-acceuil-module-es2015.js.map