(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bene-compte-bene-compte-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-compte/bene-compte.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-compte/bene-compte.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Profidd</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n\n  <!-- valuechange<h3>{{ post | async | json}}</h3>\n  [src] est une variable-->\n  <img *ngIf=\"dataUser.logocrop\" [src]=\"dataUser.logocrop\"  block style=\"width : 50% ; height : 30%\">\n  <img *ngIf=\"!dataUser.logocrop\" src='assets/addpic.png'  block style=\"width : 50% ; height : 30%\">\n  <ion-button (click)=\"logout()\" color=\"danger\" >Logout</ion-button>\n  <ion-button href=\"slider\">slider</ion-button>\n\n  <ion-item *ngIf=\"dataUser.name\">{{dataUser.name}}</ion-item>\n  <ion-item *ngIf=\"!dataUser.name\"><ion-label color=\"primary\" >Ajouter une Nom</ion-label> </ion-item>\n  <ion-item *ngIf=\"dataUser.certifs\">{{dataUser.certifs}</ion-item>\n  <ion-item *ngIf=\"!dataUser.certifs\"><ion-label color=\"primary\" >Ajouter des diplomes</ion-label> </ion-item>\n  <ion-item *ngIf=\"dataUser.motivations\">{{dataUser.motivations}}</ion-item>\n  <ion-item *ngIf=\"!dataUser.motivations\"><ion-label color=\"primary\" >Quelles sont vos motivations</ion-label> </ion-item>\n  <ion-item *ngIf=\"dataUser.skills\">{{dataUser.skills}}</ion-item>\n  <ion-item *ngIf=\"!dataUser.skills\"><ion-label color=\"primary\" >Ajouter des competences</ion-label> </ion-item>\n  <ion-item >{{user.getEmail()}}</ion-item>\n \n  <ion-button (click)=\"Goedit()\" expand=\"block\">Modifier</ion-button>\n\n\n  \n   \n  \n\n \n\n</ion-content>");

/***/ }),

/***/ "./src/app/PAGES_BENE/bene-compte/bene-compte-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/PAGES_BENE/bene-compte/bene-compte-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: BeneComptePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneComptePageRoutingModule", function() { return BeneComptePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bene_compte_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bene-compte.page */ "./src/app/PAGES_BENE/bene-compte/bene-compte.page.ts");




const routes = [
    {
        path: '',
        component: _bene_compte_page__WEBPACK_IMPORTED_MODULE_3__["BeneComptePage"]
    }
];
let BeneComptePageRoutingModule = class BeneComptePageRoutingModule {
};
BeneComptePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BeneComptePageRoutingModule);



/***/ }),

/***/ "./src/app/PAGES_BENE/bene-compte/bene-compte.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/PAGES_BENE/bene-compte/bene-compte.module.ts ***!
  \**************************************************************/
/*! exports provided: BeneComptePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneComptePageModule", function() { return BeneComptePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bene_compte_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bene-compte-routing.module */ "./src/app/PAGES_BENE/bene-compte/bene-compte-routing.module.ts");
/* harmony import */ var _bene_compte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bene-compte.page */ "./src/app/PAGES_BENE/bene-compte/bene-compte.page.ts");







let BeneComptePageModule = class BeneComptePageModule {
};
BeneComptePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bene_compte_routing_module__WEBPACK_IMPORTED_MODULE_5__["BeneComptePageRoutingModule"]
        ],
        declarations: [_bene_compte_page__WEBPACK_IMPORTED_MODULE_6__["BeneComptePage"]]
    })
], BeneComptePageModule);



/***/ }),

/***/ "./src/app/PAGES_BENE/bene-compte/bene-compte.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/PAGES_BENE/bene-compte/bene-compte.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BBR0VTX0JFTkUvYmVuZS1jb21wdGUvYmVuZS1jb21wdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/PAGES_BENE/bene-compte/bene-compte.page.ts":
/*!************************************************************!*\
  !*** ./src/app/PAGES_BENE/bene-compte/bene-compte.page.ts ***!
  \************************************************************/
/*! exports provided: BeneComptePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneComptePage", function() { return BeneComptePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _SERVICES_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../SERVICES/user.service */ "./src/app/SERVICES/user.service.ts");








let BeneComptePage = class BeneComptePage {
    constructor(loadingController, router, route, afAuth, firestore, toastController, user) {
        this.loadingController = loadingController;
        this.router = router;
        this.route = route;
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.toastController = toastController;
        this.user = user;
        // data to pass to edit page
        this.dataUser = {
            logocrop: '',
            name: '',
            motivations: '',
            certifs: '',
            skills: '',
            logo: ''
        };
    }
    GetPrivateInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // get document
            this.presentLoading('Pollenisation du profil');
            console.log(this.user.getUID());
            const docRef = this.firestore.collection('privatebene').doc(this.user.getUID());
            docRef.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(doc => doc.data()))
                .subscribe(data => {
                console.log(data);
                console.log(data.name);
                if (data.name) {
                    this.dataUser.name = data.name;
                }
                console.log(this.dataUser.name);
                if (data.certifs) {
                    this.dataUser.certifs = data.certifs;
                }
                console.log(this.dataUser.certifs);
                if (data.motivations) {
                    this.dataUser.motivations = data.motivations;
                }
                console.log(this.dataUser.motivations);
                if (data.skills) {
                    this.dataUser.skills = data.skills;
                }
                console.log(this.dataUser.skills);
                if (data.pprofil) {
                    this.dataUser.logocrop = data.pprofil;
                }
                this.deleteLoading();
            });
        });
    }
    ngOnInit() { }
    ionViewWillEnter() { this.GetPrivateInfo(); }
    // go to edit and pass dataUser
    Goedit() {
        let navigationExtras = {
            state: {
                dataUser: this.dataUser
            }
        };
        this.router.navigate(['bene-edit-compte'], navigationExtras);
    }
    logout() {
        this.afAuth.signOut();
        this.router.navigate(['welcome']);
    }
    // ALERTS //////////
    presentLoading(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({ message });
            return this.loading.present();
        });
    }
    deleteLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = this.loadingController.getTop();
            (yield loader).parentNode.removeChild(yield loader);
        });
    }
};
BeneComptePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] },
    { type: _SERVICES_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
BeneComptePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-bene-compte',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bene-compte.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-compte/bene-compte.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bene-compte.page.scss */ "./src/app/PAGES_BENE/bene-compte/bene-compte.page.scss")).default]
    })
], BeneComptePage);



/***/ })

}]);
//# sourceMappingURL=bene-compte-bene-compte-module-es2015.js.map