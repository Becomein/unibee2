(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["neweventgarat-neweventgarat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/neweventgarat/neweventgarat.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/neweventgarat/neweventgarat.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>neweventgarat</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/neweventgarat/neweventgarat-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/neweventgarat/neweventgarat-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NeweventgaratPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeweventgaratPageRoutingModule", function() { return NeweventgaratPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _neweventgarat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./neweventgarat.page */ "./src/app/neweventgarat/neweventgarat.page.ts");




const routes = [
    {
        path: '',
        component: _neweventgarat_page__WEBPACK_IMPORTED_MODULE_3__["NeweventgaratPage"]
    }
];
let NeweventgaratPageRoutingModule = class NeweventgaratPageRoutingModule {
};
NeweventgaratPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NeweventgaratPageRoutingModule);



/***/ }),

/***/ "./src/app/neweventgarat/neweventgarat.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/neweventgarat/neweventgarat.module.ts ***!
  \*******************************************************/
/*! exports provided: NeweventgaratPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeweventgaratPageModule", function() { return NeweventgaratPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _neweventgarat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./neweventgarat-routing.module */ "./src/app/neweventgarat/neweventgarat-routing.module.ts");
/* harmony import */ var _neweventgarat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./neweventgarat.page */ "./src/app/neweventgarat/neweventgarat.page.ts");







let NeweventgaratPageModule = class NeweventgaratPageModule {
};
NeweventgaratPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _neweventgarat_routing_module__WEBPACK_IMPORTED_MODULE_5__["NeweventgaratPageRoutingModule"]
        ],
        declarations: [_neweventgarat_page__WEBPACK_IMPORTED_MODULE_6__["NeweventgaratPage"]]
    })
], NeweventgaratPageModule);



/***/ }),

/***/ "./src/app/neweventgarat/neweventgarat.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/neweventgarat/neweventgarat.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld2V2ZW50Z2FyYXQvbmV3ZXZlbnRnYXJhdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/neweventgarat/neweventgarat.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/neweventgarat/neweventgarat.page.ts ***!
  \*****************************************************/
/*! exports provided: NeweventgaratPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeweventgaratPage", function() { return NeweventgaratPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NeweventgaratPage = class NeweventgaratPage {
    constructor() { }
    ngOnInit() {
    }
};
NeweventgaratPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-neweventgarat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./neweventgarat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/neweventgarat/neweventgarat.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./neweventgarat.page.scss */ "./src/app/neweventgarat/neweventgarat.page.scss")).default]
    })
], NeweventgaratPage);



/***/ })

}]);
//# sourceMappingURL=neweventgarat-neweventgarat-module-es2015.js.map