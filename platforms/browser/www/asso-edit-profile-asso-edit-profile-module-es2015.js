(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asso-edit-profile-asso-edit-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/asso-edit-profile/asso-edit-profile.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/asso-edit-profile/asso-edit-profile.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>AssoEditProfile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <button  (click)=\"addPhoto()\" block style=\"width : 50% ; height : 50%\" >\n    <img *ngIf=\"dataUser.logocrop\" [src]=\"dataUser.logocrop\">\n    <img *ngIf=\"!dataUser.logocrop\" src='assets/addpic.png'>\n  </button>\n  <ion-button (click)=\"logout()\" color=\"danger\" >Logout</ion-button>\n\n  <ion-input  [(ngModel)]=\"dataUser.nom\"></ion-input>\n  <ion-input  [(ngModel)]=\"dataUser.description\"></ion-input>\n  <ion-input  [(ngModel)]=\"dataUser.siret\"></ion-input>\n  <ion-input  [(ngModel)]=\"dataUser.tel\"></ion-input>\n  <ion-input  [(ngModel)]=\"dataUser.email\"></ion-input>\n  <ion-input  [(ngModel)]=\"dataUser.adresse\"></ion-input>\n\n\n\n\n\n  <ion-button (click)=\"BtnOK()\" expand=\"block\">Ok</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/asso-edit-profile/asso-edit-profile-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/asso-edit-profile/asso-edit-profile-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AssoEditProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssoEditProfilePageRoutingModule", function() { return AssoEditProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _asso_edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asso-edit-profile.page */ "./src/app/asso-edit-profile/asso-edit-profile.page.ts");




const routes = [
    {
        path: '',
        component: _asso_edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["AssoEditProfilePage"]
    }
];
let AssoEditProfilePageRoutingModule = class AssoEditProfilePageRoutingModule {
};
AssoEditProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AssoEditProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/asso-edit-profile/asso-edit-profile.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/asso-edit-profile/asso-edit-profile.module.ts ***!
  \***************************************************************/
/*! exports provided: AssoEditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssoEditProfilePageModule", function() { return AssoEditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _asso_edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asso-edit-profile-routing.module */ "./src/app/asso-edit-profile/asso-edit-profile-routing.module.ts");
/* harmony import */ var _asso_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asso-edit-profile.page */ "./src/app/asso-edit-profile/asso-edit-profile.page.ts");







let AssoEditProfilePageModule = class AssoEditProfilePageModule {
};
AssoEditProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _asso_edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssoEditProfilePageRoutingModule"]
        ],
        declarations: [_asso_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["AssoEditProfilePage"]]
    })
], AssoEditProfilePageModule);



/***/ }),

/***/ "./src/app/asso-edit-profile/asso-edit-profile.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/asso-edit-profile/asso-edit-profile.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc28tZWRpdC1wcm9maWxlL2Fzc28tZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/asso-edit-profile/asso-edit-profile.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/asso-edit-profile/asso-edit-profile.page.ts ***!
  \*************************************************************/
/*! exports provided: AssoEditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssoEditProfilePage", function() { return AssoEditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let AssoEditProfilePage = class AssoEditProfilePage {
    constructor(route, router, afAuth, firestore, camera, loadingController, afSG, toastController) {
        this.route = route;
        this.router = router;
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.camera = camera;
        this.loadingController = loadingController;
        this.afSG = afSG;
        this.toastController = toastController;
        this.userId = '';
        this.dataUser = {
            logocrop: 'n',
            nom: 'n',
            description: 'n',
            tel: 'n',
            email: 'n',
            adresse: 'n',
            siret: 'n',
            logo: 'n'
        };
    }
    ngOnInit() {
        //recep dataUser
        this.route.queryParams.subscribe(params => {
            console.log('params:', params);
            if (this.router.getCurrentNavigation().extras.state) {
                this.dataUser = this.router.getCurrentNavigation().extras.state.dataUser;
                console.log("recep" + this.dataUser.nom);
            }
        });
        //recup info auth
        this.afAuth.authState.subscribe(auth => {
            this.userId = auth.uid;
            console.log("userID:   " + this.userId);
        });
        this.presentToast('fin recup dataUser+auth');
    }
    BtnOK() {
        let verif = this.dataUser.logocrop.slice(0, 4);
        this.presentToast(verif);
        // si logochangé, logocrop est en base 64 
        if (verif == 'data') {
            this.presentToast('TRUE');
            this.uploadFirebase();
        }
        else {
            this.imageUrl = this.dataUser.logocrop;
            this.uploadFirestore();
        }
    }
    uploadFirebase() {
        //this.presentToast('debutupload')
        // stocker dans un dossier -->  this.imagePath = 'Users/'+ new Date().getTime() + 'jpg'
        this.imagePath = 'LogoAssos/' + this.userId + 'jpg';
        // Upload image stockée dans image de type data_url
        //this.presentToast('debutupload')
        //this.presentToast('f'+ 'data_url')
        this.afSG.ref(this.imagePath).putString(this.dataUser.logocrop, 'data_url');
        //this.presentToast('f')
        this.upload = this.afSG.ref(this.imagePath).putString(this.dataUser.logocrop, 'data_url');
        // this.presentToast('url'+ this.imagePath)
        this.upload.then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //get download Url
            this.afSG.ref(this.imagePath).getDownloadURL().subscribe(imgUrl => {
                console.log('down   ' + imgUrl);
                this.imageUrl = imgUrl;
                //this.presentToast('firebase post'+ this.imageUrl)
                this.presentToast('f' + this.dataUser.logocrop);
                this.uploadFirestore();
            });
        }));
    }
    uploadFirestore() {
        //this.afAuth.authState.subscribe(auth => {this.userId = auth.uid;
        this.presentToast('firestoree');
        this.firestore.collection("privateassos").doc(this.userId).set({
            name: this.dataUser.nom,
            logo: this.imageUrl,
            AssoSIRET: this.dataUser.siret,
            AssoDescription: this.dataUser.description,
            AssoTel: this.dataUser.tel,
            AssoAdress: this.dataUser.adresse
        }, { merge: true })
            .then(function () {
            console.log("Document successfully written!");
        })
            .catch(function (error) {
            console.error("Error writing document: ", error);
        });
        //  });
        this.presentToast('sortie');
        this.router.navigate(['/tabs/tab4']);
    }
    // async car temps de choisir photo non limité
    addPhoto(source) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('library');
            //stocke image selectionné dans libraryImage
            const libraryImage = yield this.openLibrary();
            // console.log('hello');
            // 
            //base64 rend le fichier visible en html
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
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            return yield this.camera.getPicture(options).then((ImageData) => {
                this.dataUser.logo = 'data:image/jpg;base64,' + ImageData;
                this.Gocrop();
            });
        });
    }
    // go to crop and pass dataUser
    Gocrop() {
        console.log('crop');
        let navigationExtras = {
            state: {
                dataUser: this.dataUser
            }
        };
        this.router.navigate(['croplogoedit'], navigationExtras);
    }
    // ALERTS //////////
    presentLoading(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({ message });
            return this.loading.present();
        });
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                duration: 2000,
                message
            });
            toast.present();
        });
    }
};
AssoEditProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
AssoEditProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-asso-edit-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./asso-edit-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/asso-edit-profile/asso-edit-profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./asso-edit-profile.page.scss */ "./src/app/asso-edit-profile/asso-edit-profile.page.scss")).default]
    })
], AssoEditProfilePage);



/***/ })

}]);
//# sourceMappingURL=asso-edit-profile-asso-edit-profile-module-es2015.js.map