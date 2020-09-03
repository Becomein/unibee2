(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asso-profile-tab4-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/asso-profile/tab4.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/asso-profile/tab4.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Profidd</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n\n  <!-- valuechange<h3>{{ post | async | json}}</h3>\n  [src] est une variable-->\n  <img *ngIf=\"dataUser.logocrop\" [src]=\"dataUser.logocrop\"  block style=\"width : 50% ; height : 30%\">\n  <img *ngIf=\"!dataUser.logocrop\" src='assets/addpic.png'  block style=\"width : 50% ; height : 30%\">\n  <ion-button (click)=\"logout()\" color=\"danger\" >Logout</ion-button>\n\n  <ion-item *ngIf=\"dataUser.nom\">{{dataUser.nom}}</ion-item>\n  <ion-item *ngIf=\"!dataUser.nom\"><ion-label color=\"primary\" >Ajouter une Nom</ion-label> </ion-item>\n  <ion-item *ngIf=\"dataUser.description\">{{dataUser.description}}</ion-item>\n  <ion-item *ngIf=\"!dataUser.description\"><ion-label color=\"primary\" >Ajouter une Description</ion-label> </ion-item>\n  <ion-item *ngIf=\"dataUser.siret\">{{dataUser.siret}}</ion-item>\n  <ion-item *ngIf=\"!dataUser.siret\"><ion-label color=\"primary\" >Ajouter un numéro de Siret</ion-label> </ion-item>\n  <ion-item *ngIf=\"dataUser.tel\">{{dataUser.tel}}</ion-item>\n  <ion-item *ngIf=\"!dataUser.tel\"><ion-label color=\"primary\" >Ajouter un numéro de Télephone</ion-label> </ion-item>\n  <ion-item >{{user.getEmail()}}</ion-item>\n  <ion-item *ngIf=\"dataUser.adresse\">{{dataUser.adresse}}</ion-item>\n  <ion-item *ngIf=\"!dataUser.adresse\"><ion-label color=\"primary\" >Ajouter un numéro de Adresse</ion-label> </ion-item>\n \n  <ion-button (click)=\"Goedit()\" expand=\"block\">Modifier</ion-button>\n\n\n  \n   \n  \n\n \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/PAGES_ASSO/asso-profile/tab4-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/PAGES_ASSO/asso-profile/tab4-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: Tab4PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function() { return Tab4PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab4.page */ "./src/app/PAGES_ASSO/asso-profile/tab4.page.ts");




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"]
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ "./src/app/PAGES_ASSO/asso-profile/tab4.module.ts":
/*!********************************************************!*\
  !*** ./src/app/PAGES_ASSO/asso-profile/tab4.module.ts ***!
  \********************************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/PAGES_ASSO/asso-profile/tab4.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/PAGES_ASSO/explore-container/explore-container.module.ts");
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab4-routing.module */ "./src/app/PAGES_ASSO/asso-profile/tab4-routing.module.ts");









let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"] }]),
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab4PageRoutingModule"],
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })
], Tab4PageModule);



/***/ }),

/***/ "./src/app/PAGES_ASSO/asso-profile/tab4.page.scss":
/*!********************************************************!*\
  !*** ./src/app/PAGES_ASSO/asso-profile/tab4.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BBR0VTX0FTU08vYXNzby1wcm9maWxlL3RhYjQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/PAGES_ASSO/asso-profile/tab4.page.ts":
/*!******************************************************!*\
  !*** ./src/app/PAGES_ASSO/asso-profile/tab4.page.ts ***!
  \******************************************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _SERVICES_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../SERVICES/user.service */ "./src/app/SERVICES/user.service.ts");








let Tab4Page = class Tab4Page {
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
            nom: '',
            description: '',
            tel: '',
            email: '',
            adresse: '',
            siret: '',
            logo: ''
        };
    }
    GetPrivateInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // get document
            this.presentLoading('Pollenisation du profil');
            console.log(this.user.getUID());
            const docRef = this.firestore.collection('privateassos').doc(this.user.getUID());
            docRef.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(doc => doc.data()))
                .subscribe(data => {
                console.log(data);
                console.log(data.name);
                if (data.name !== "#") {
                    this.dataUser.nom = data.name;
                }
                console.log(this.dataUser.nom);
                if (data.AssoDescription !== "#") {
                    this.dataUser.description = data.AssoDescription;
                }
                console.log(this.dataUser.description);
                if (data.AssoTel !== "#") {
                    this.dataUser.tel = data.AssoTel;
                }
                console.log(this.dataUser.tel);
                if (data.AssoAdress !== "#") {
                    this.dataUser.adresse = data.AssoAdress;
                }
                console.log(this.dataUser.siret);
                if (data.AssoSIRET !== "#") {
                    this.dataUser.siret = data.AssoSIRET;
                }
                if (data.logo !== "#") {
                    this.dataUser.logocrop = data.logo;
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
        this.router.navigate(['asso-edit-profile'], navigationExtras);
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
Tab4Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] },
    { type: _SERVICES_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tab4',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab4.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/asso-profile/tab4.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab4.page.scss */ "./src/app/PAGES_ASSO/asso-profile/tab4.page.scss")).default]
    })
], Tab4Page);



/***/ })

}]);
//# sourceMappingURL=asso-profile-tab4-module-es2015.js.map