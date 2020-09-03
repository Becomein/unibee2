(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PAGES_ASSO-asso-register-asso-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/asso-register/asso-register.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/asso-register/asso-register.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    <ion-back-button\n    defaultHref='re'\n        text=\"BACK\"\n       >\n    </ion-back-button>\n  </ion-buttons>\n\n    <ion-title>AssoRegister</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n \n\n<button  (click)=\"addPhoto()\" block style=\"width : 50% ; height : 50%\" >\n  <img *ngIf=\"dataUser.logocrop\" [src]=\"dataUser.logocrop\">\n  <img *ngIf=\"!dataUser.logocrop\" src='assets/addpic.png'>\n</button>\n\n  <ion-item>\n    <ion-label>E-mail</ion-label>\n    <ion-input type=\"email\" [(ngModel)]=\"dataUser.email\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Mot de passe</ion-label>\n    <ion-input type=\"password\" [(ngModel)]=\"dataUser.password\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Nom</ion-label>\n    <ion-input [(ngModel)]=\"dataUser.nom\"></ion-input>\n  </ion-item>\n\n  <ion-button (click)='btncreercompte()' >Créer Mon Compte</ion-button>\n  <ion-button href=\"asso-login\" color=\"secondary\">Déja inscit ? Se Connecter</ion-button>\n  \n\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/PAGES_ASSO/asso-register/asso-register-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/PAGES_ASSO/asso-register/asso-register-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: AssoRegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssoRegisterPageRoutingModule", function() { return AssoRegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _asso_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asso-register.page */ "./src/app/PAGES_ASSO/asso-register/asso-register.page.ts");




const routes = [
    {
        path: '',
        component: _asso_register_page__WEBPACK_IMPORTED_MODULE_3__["AssoRegisterPage"]
    }
];
let AssoRegisterPageRoutingModule = class AssoRegisterPageRoutingModule {
};
AssoRegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AssoRegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/PAGES_ASSO/asso-register/asso-register.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/PAGES_ASSO/asso-register/asso-register.module.ts ***!
  \******************************************************************/
/*! exports provided: AssoRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssoRegisterPageModule", function() { return AssoRegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _asso_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asso-register-routing.module */ "./src/app/PAGES_ASSO/asso-register/asso-register-routing.module.ts");
/* harmony import */ var _asso_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asso-register.page */ "./src/app/PAGES_ASSO/asso-register/asso-register.page.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");








let AssoRegisterPageModule = class AssoRegisterPageModule {
};
AssoRegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _asso_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssoRegisterPageRoutingModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"]
        ],
        declarations: [_asso_register_page__WEBPACK_IMPORTED_MODULE_6__["AssoRegisterPage"]]
    })
], AssoRegisterPageModule);



/***/ }),

/***/ "./src/app/PAGES_ASSO/asso-register/asso-register.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/PAGES_ASSO/asso-register/asso-register.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BBR0VTX0FTU08vYXNzby1yZWdpc3Rlci9hc3NvLXJlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/PAGES_ASSO/asso-register/asso-register.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/PAGES_ASSO/asso-register/asso-register.page.ts ***!
  \****************************************************************/
/*! exports provided: AssoRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssoRegisterPage", function() { return AssoRegisterPage; });
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


let AssoRegisterPage = class AssoRegisterPage {
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
            logo: '',
            logocrop: ''
        };
        this.afAuth.authState.subscribe(auth => { });
        // receptionner dataUser
        this.route.queryParams.subscribe(params => {
            console.log('params:', params);
            if (this.router.getCurrentNavigation().extras.state) {
                this.dataUser = this.router.getCurrentNavigation().extras.state.dataUser;
                console.log("recep" + this.dataUser.logo);
                console.log("iff" + this.dataUser.logocrop);
            }
        });
        console.log("cropé" + this.dataUser.logocrop);
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
                console.log('hello');
                let verif = this.dataUser.logocrop.slice(0, 4);
                // si logochangé, logocrop est en base 64 
                if (verif == 'data') {
                    this.uploadFirebase();
                }
                else {
                    this.imageUrl = this.dataUser.logocrop;
                    this.uploadFirestore();
                }
            }, (error) => {
                console.log('Email ou mot de passe mal formaté');
                this.presentAlert('Email non valide');
            });
        }
    }
    // go to crop and pass dataUser
    Gocrop() {
        let navigationExtras = {
            state: {
                dataUser: this.dataUser
            }
        };
        this.router.navigate(['croplogo'], navigationExtras);
    }
    // async car temps de choisir photo non limité
    addPhoto(source) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('library');
            //stocke image selectionné dans libraryImage
            const libraryImage = yield this.openLibrary();
        });
    }
    //ionic existing fonction ouvre la librarie
    openLibrary() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                targetWidth: 1000,
                targetHeight: 1000,
                correctOrientation: true,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            return yield this.camera.getPicture(options).then((ImageData) => {
                this.dataUser.logo = 'data:image/jpg;base64,' + ImageData;
                this.Gocrop();
            });
        });
    }
    uploadFirebase() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //recup info auth
            this.afAuth.authState.subscribe(auth => {
                this.currentUserId = auth.uid;
                console.log("userID:   " + this.currentUserId);
                console.log("firebase:" + this.currentUserId);
                this.imagePath = 'LogoAssos/' + this.dataUser.nom + this.currentUserId + 'jpg';
                // Upload image stockée dans image de type data_url
                this.afSG.ref(this.imagePath).putString(this.dataUser.logocrop, 'data_url');
                this.upload = this.afSG.ref(this.imagePath).putString(this.dataUser.logocrop, 'data_url');
                console.log('url' + this.imagePath);
                this.upload.then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    //get download Url
                    this.afSG.ref(this.imagePath).getDownloadURL().subscribe(imgUrl => {
                        console.log('down   ' + imgUrl);
                        this.imageUrl = imgUrl;
                        this.uploadFirestore();
                    });
                }));
            });
        });
    }
    uploadFirestore() {
        //recup info auth
        this.afAuth.authState.subscribe(auth => {
            this.currentUserId = auth.uid;
            console.log("firestore:   " + this.currentUserId);
            this.Afs.collection("privateassos").doc(this.currentUserId).set({
                name: this.dataUser.nom,
                logo: this.imageUrl
            }, { merge: true })
                .then(function () {
                console.log("Document successfully written!");
            })
                .catch(function (error) {
                console.error("Error writing document: ", error);
            });
            this.loading.dismiss();
            this.router.navigate(['/tabs/tab1']);
        });
    }
    // ALERTS
    presentLoading(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({ message });
            return this.loading.present();
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
AssoRegisterPage.ctorParameters = () => [
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
], AssoRegisterPage.prototype, "angularCropper", void 0);
AssoRegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-asso-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./asso-register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/asso-register/asso-register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./asso-register.page.scss */ "./src/app/PAGES_ASSO/asso-register/asso-register.page.scss")).default]
    })
], AssoRegisterPage);



/***/ })

}]);
//# sourceMappingURL=PAGES_ASSO-asso-register-asso-register-module-es2015.js.map