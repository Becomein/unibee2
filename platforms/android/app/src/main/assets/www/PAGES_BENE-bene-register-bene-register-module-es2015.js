(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PAGES_BENE-bene-register-bene-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-register/bene-register.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-register/bene-register.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>beneRegister</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>E-mail</ion-label>\n    <ion-input type=\"email\" [(ngModel)]=\"dataUser.email\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Mot de passe</ion-label>\n    <ion-input type=\"password\" [(ngModel)]=\"dataUser.password\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Nom</ion-label>\n    <ion-input [(ngModel)]=\"dataUser.nom\"></ion-input>\n  </ion-item>\n\n  <ion-button (click)='btncreercompte()' >Créer Mon Compte</ion-button>\n  <ion-button href=\"asso-login\" color=\"secondary\">Déja inscit ? Se Connecter</ion-button>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/PAGES_BENE/bene-register/bene-register-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/PAGES_BENE/bene-register/bene-register-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: BeneRegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneRegisterPageRoutingModule", function() { return BeneRegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bene_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bene-register.page */ "./src/app/PAGES_BENE/bene-register/bene-register.page.ts");




const routes = [
    {
        path: '',
        component: _bene_register_page__WEBPACK_IMPORTED_MODULE_3__["BeneRegisterPage"]
    }
];
let BeneRegisterPageRoutingModule = class BeneRegisterPageRoutingModule {
};
BeneRegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BeneRegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/PAGES_BENE/bene-register/bene-register.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/PAGES_BENE/bene-register/bene-register.module.ts ***!
  \******************************************************************/
/*! exports provided: BeneRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneRegisterPageModule", function() { return BeneRegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bene_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bene-register-routing.module */ "./src/app/PAGES_BENE/bene-register/bene-register-routing.module.ts");
/* harmony import */ var _bene_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bene-register.page */ "./src/app/PAGES_BENE/bene-register/bene-register.page.ts");







let BeneRegisterPageModule = class BeneRegisterPageModule {
};
BeneRegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bene_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["BeneRegisterPageRoutingModule"]
        ],
        declarations: [_bene_register_page__WEBPACK_IMPORTED_MODULE_6__["BeneRegisterPage"]]
    })
], BeneRegisterPageModule);



/***/ }),

/***/ "./src/app/PAGES_BENE/bene-register/bene-register.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/PAGES_BENE/bene-register/bene-register.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BBR0VTX0JFTkUvYmVuZS1yZWdpc3Rlci9iZW5lLXJlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/PAGES_BENE/bene-register/bene-register.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/PAGES_BENE/bene-register/bene-register.page.ts ***!
  \****************************************************************/
/*! exports provided: BeneRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneRegisterPage", function() { return BeneRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");








// Pass data between pages


let BeneRegisterPage = class BeneRegisterPage {
    constructor(loadingController, alertController, afSG, afAuth, Afs, camera, crop, router, route) {
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.afSG = afSG;
        this.afAuth = afAuth;
        this.Afs = Afs;
        this.camera = camera;
        this.crop = crop;
        this.router = router;
        this.route = route;
        this.logo = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
        // data to pass to crop page
        this.dataUser = {
            email: '',
            password: '',
            nom: '',
        };
        this.afAuth.authState.subscribe(auth => { });
    }
    ngOnInit() {
    }
    // creer compte requiert nom + email + mdp bien formatés
    btncreercompte() {
        console.log('OK');
        let length = this.dataUser.password.length;
        console.log(length);
        if (this.dataUser.nom == '') {
            this.presentAlert('Entrez un nom');
        }
        else if (!this.dataUser.email) {
            this.presentAlert('Entrez un email');
        }
        else if (length < 6) {
            this.presentAlert('Le mot de passe doit comporter au moins 6 caractéres');
        }
        else {
            this.afAuth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password)
                .then(success => {
                this.presentLoading('Création du compte');
                this.uploadFirestore();
            }, (error) => {
                console.log('Email ou mot de passe mal formaté');
                this.presentAlert('Email non valide');
            });
        }
    }
    uploadFirestore() {
        //recup info auth
        this.afAuth.authState.subscribe(auth => {
            this.currentUserId = auth.uid;
            console.log("firestore:   " + this.currentUserId);
            this.Afs.collection("privatebene").doc(this.currentUserId).set({
                name: this.dataUser.nom,
            }, { merge: true })
                .then(sucess => {
                this.deleteLoading();
                this.router.navigate(['/bene-tabs/bene-list']);
            })
                .catch((error) => {
                console.error("Error writing document: ", error);
            });
        });
    }
    // ALERTS
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
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
BeneRegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__["Crop"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__["ImageCropperComponent"], { static: false })
], BeneRegisterPage.prototype, "angularCropper", void 0);
BeneRegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bene-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bene-register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_BENE/bene-register/bene-register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bene-register.page.scss */ "./src/app/PAGES_BENE/bene-register/bene-register.page.scss")).default]
    })
], BeneRegisterPage);



/***/ })

}]);
//# sourceMappingURL=PAGES_BENE-bene-register-bene-register-module-es2015.js.map