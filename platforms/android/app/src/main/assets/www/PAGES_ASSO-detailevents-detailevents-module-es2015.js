(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PAGES_ASSO-detailevents-detailevents-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/detailevents/detailevents.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/detailevents/detailevents.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    <ion-back-button\n    \n        text=\"BACK\"\n       >\n    </ion-back-button>\n  </ion-buttons>\n\n    <ion-title>Détail évenements</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngIf= \"post | async as postData \">\n    <img [src]=\"postData.photo\">\n    <ion-item >\n      <ion-label> {{ postID }}</ion-label>\n    </ion-item>\n    <ion-item >\n      <ion-label> {{ postData.titre }}</ion-label>\n    </ion-item>\n    <ion-item >\n      <ion-label> {{ postData.description }}</ion-label>\n    </ion-item>\n    <ion-item >\n      <ion-label> {{ postData.date }}</ion-label>\n    </ion-item>\n  </ion-card>\n  <ion-button (click)=\"Modifier()\" color=\"secondary\" >Modifier</ion-button>\n  <ion-button (click)=\"Supprimer()\" color=\"danger\" >Supprimer</ion-button>\n\n  <ion-card>\n    <ion-item >\n      <ion-label> {{ user.getUID() }}</ion-label>\n    </ion-item>\n    </ion-card>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/PAGES_ASSO/detailevents/detailevents-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/PAGES_ASSO/detailevents/detailevents-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: DetaileventsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetaileventsPageRoutingModule", function() { return DetaileventsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detailevents_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detailevents.page */ "./src/app/PAGES_ASSO/detailevents/detailevents.page.ts");




const routes = [
    {
        path: '',
        component: _detailevents_page__WEBPACK_IMPORTED_MODULE_3__["DetaileventsPage"]
    }
];
let DetaileventsPageRoutingModule = class DetaileventsPageRoutingModule {
};
DetaileventsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetaileventsPageRoutingModule);



/***/ }),

/***/ "./src/app/PAGES_ASSO/detailevents/detailevents.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/PAGES_ASSO/detailevents/detailevents.module.ts ***!
  \****************************************************************/
/*! exports provided: DetaileventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetaileventsPageModule", function() { return DetaileventsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detailevents_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detailevents-routing.module */ "./src/app/PAGES_ASSO/detailevents/detailevents-routing.module.ts");
/* harmony import */ var _detailevents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detailevents.page */ "./src/app/PAGES_ASSO/detailevents/detailevents.page.ts");







let DetaileventsPageModule = class DetaileventsPageModule {
};
DetaileventsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detailevents_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetaileventsPageRoutingModule"]
        ],
        declarations: [_detailevents_page__WEBPACK_IMPORTED_MODULE_6__["DetaileventsPage"]]
    })
], DetaileventsPageModule);



/***/ }),

/***/ "./src/app/PAGES_ASSO/detailevents/detailevents.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/PAGES_ASSO/detailevents/detailevents.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BBR0VTX0FTU08vZGV0YWlsZXZlbnRzL2RldGFpbGV2ZW50cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/PAGES_ASSO/detailevents/detailevents.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/PAGES_ASSO/detailevents/detailevents.page.ts ***!
  \**************************************************************/
/*! exports provided: DetaileventsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetaileventsPage", function() { return DetaileventsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _SERVICES_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../SERVICES/user.service */ "./src/app/SERVICES/user.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");





let DetaileventsPage = class DetaileventsPage {
    constructor(route, user, afs) {
        this.route = route;
        this.user = user;
        this.afs = afs;
    }
    ngOnInit() {
        this.postID = this.route.snapshot.paramMap.get('id');
        this.post = this.afs.doc(`publicevents/${this.postID}`).valueChanges();
    }
};
DetaileventsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _SERVICES_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
DetaileventsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-detailevents',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detailevents.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/detailevents/detailevents.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detailevents.page.scss */ "./src/app/PAGES_ASSO/detailevents/detailevents.page.scss")).default]
    })
], DetaileventsPage);



/***/ })

}]);
//# sourceMappingURL=PAGES_ASSO-detailevents-detailevents-module-es2015.js.map