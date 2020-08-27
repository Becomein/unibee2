(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PAGES_BENE-bene-details-bene-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-details/bene-details.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-details/bene-details.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    <ion-back-button\n        text=\"BACK\"\n       >\n    </ion-back-button>\n  </ion-buttons>\n\n    <ion-title>Détail évenements</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngIf= \"post | async as postData \">\n    <img [src]=\"postData.photo\">\n    <ion-item >\n      <ion-label> {{ postID }}</ion-label>\n    </ion-item>\n    <ion-item >\n      <ion-label> {{ postData.titre }}</ion-label>\n    </ion-item>\n    <ion-item >\n      <ion-label> {{ postData.description }}</ion-label>\n    </ion-item>\n    <ion-item >\n      <ion-label> {{ postData.date }}</ion-label>\n    </ion-item>\n  </ion-card>\n  <ion-button (click)=\"Participer()\" color=\"secondary\" expand=\"full\" >Participer</ion-button>\n  <ion-button (click)=\"RemoveParticiper()\" color=\"danger\" expand=\"full\" >Ne plus Participer</ion-button>\n\n  <ion-card>\n    <ion-item >\n      <ion-label> {{ user.getUID() }}</ion-label>\n    </ion-item>\n    </ion-card>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/PAGES_BENE/bene-details/bene-details-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/PAGES_BENE/bene-details/bene-details-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: BeneDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneDetailsPageRoutingModule", function() { return BeneDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bene_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bene-details.page */ "./src/app/PAGES_BENE/bene-details/bene-details.page.ts");




const routes = [
    {
        path: '',
        component: _bene_details_page__WEBPACK_IMPORTED_MODULE_3__["BeneDetailsPage"]
    }
];
let BeneDetailsPageRoutingModule = class BeneDetailsPageRoutingModule {
};
BeneDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BeneDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/PAGES_BENE/bene-details/bene-details.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/PAGES_BENE/bene-details/bene-details.module.ts ***!
  \****************************************************************/
/*! exports provided: BeneDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneDetailsPageModule", function() { return BeneDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bene_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bene-details-routing.module */ "./src/app/PAGES_BENE/bene-details/bene-details-routing.module.ts");
/* harmony import */ var _bene_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bene-details.page */ "./src/app/PAGES_BENE/bene-details/bene-details.page.ts");







let BeneDetailsPageModule = class BeneDetailsPageModule {
};
BeneDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bene_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["BeneDetailsPageRoutingModule"]
        ],
        declarations: [_bene_details_page__WEBPACK_IMPORTED_MODULE_6__["BeneDetailsPage"]]
    })
], BeneDetailsPageModule);



/***/ }),

/***/ "./src/app/PAGES_BENE/bene-details/bene-details.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/PAGES_BENE/bene-details/bene-details.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BBR0VTX0JFTkUvYmVuZS1kZXRhaWxzL2JlbmUtZGV0YWlscy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/PAGES_BENE/bene-details/bene-details.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/PAGES_BENE/bene-details/bene-details.page.ts ***!
  \**************************************************************/
/*! exports provided: BeneDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneDetailsPage", function() { return BeneDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _SERVICES_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../SERVICES/user.service */ "./src/app/SERVICES/user.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);






let BeneDetailsPage = class BeneDetailsPage {
    constructor(route, user, afs, router) {
        this.route = route;
        this.user = user;
        this.afs = afs;
        this.router = router;
    }
    ngOnInit() {
        this.postID = this.route.snapshot.paramMap.get('id');
        this.post = this.afs.doc(`publicevents/${this.postID}`).valueChanges();
    }
    Participer() {
        this.afs.collection("publicevents").doc(this.postID).update({
            participants: [this.user.getUID()]
        })
            .then(function () {
            console.log("Document successfully written!");
        })
            .catch(function (error) {
            console.error("Error writing document: ", error);
        });
        this.router.navigate(['/bene-tabs/bene-my-events']);
    }
    RemoveParticiper() {
        this.afs.collection("publicevents").doc(this.postID)
            .update({
            participants: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayRemove(this.user.getUID())
        })
            .catch(function (error) {
            console.error("Error removing document: ", error);
        });
    }
};
BeneDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _SERVICES_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
BeneDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-bene-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bene-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-details/bene-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bene-details.page.scss */ "./src/app/PAGES_BENE/bene-details/bene-details.page.scss")).default]
    })
], BeneDetailsPage);



/***/ })

}]);
//# sourceMappingURL=PAGES_BENE-bene-details-bene-details-module-es2015.js.map