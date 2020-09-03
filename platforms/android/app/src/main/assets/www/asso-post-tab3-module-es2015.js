(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asso-post-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/asso-post/tab3.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/asso-post/tab3.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Publier un Event\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <button  (click)=\"addPhoto()\" block style=\"width : 50% ; height : 50%\" >\n    <img *ngIf=\"dataEvent.photocrop\" [src]=\"dataEvent.photocrop\">\n    <img *ngIf=\"!dataEvent.photocrop\" src='assets/addpic.png'>\n  </button>\n  <ion-button (click)=\"GoMap()\" expand=\"block\"  shape=\"round\">Choisir un lieu</ion-button>\n  <ion-input placeholder=\"Titre\" [(ngModel)]=\"dataEvent.titre\"></ion-input>\n  <ion-input placeholder=\"Description\" [(ngModel)]=\"dataEvent.description\"></ion-input>\n  <ion-input type=\"number\" placeholder=\"deadline\" [(ngModel)]=\"dataEvent.deadline\"></ion-input>\n  <ion-input type=\"number\" placeholder=\"Nombre de places\" [(ngModel)]=\"dataEvent.maxgens\"></ion-input>\n  <ion-item>\n    <ion-label>Choisir une date</ion-label>\n      <ion-input  type=\"date\" [(ngModel)]=\"dataEvent.date\"></ion-input>   \n  </ion-item>\n  <ion-item>\n    <ion-label>Heure de début</ion-label>\n    <ion-datetime displayFormat=\"HH:mm\" [(ngModel)]=\"dataEvent.heureD\"></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label>Heure de fin</ion-label>\n    <ion-datetime displayFormat=\"HH:mm\" [(ngModel)]=\"dataEvent.heureF\"></ion-datetime>\n  </ion-item>\n  <!--<ion-input type=\"heure\" [(ngModel)]=\"dataEvent.heureD\"></ion-input>\n  <ion-input placeholder=\"heure fin\" [(ngModel)]=\"dataEvent.heureF\"></ion-input>-->\n  <ion-button (click)=\"Post()\">Poster</ion-button>\n</ion-content>\n ");

/***/ }),

/***/ "./src/app/PAGES_ASSO/asso-post/tab3-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/PAGES_ASSO/asso-post/tab3-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "./src/app/PAGES_ASSO/asso-post/tab3.page.ts");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "./src/app/PAGES_ASSO/asso-post/tab3.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/PAGES_ASSO/asso-post/tab3.module.ts ***!
  \*****************************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/PAGES_ASSO/asso-post/tab3.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/PAGES_ASSO/explore-container/explore-container.module.ts");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "./src/app/PAGES_ASSO/asso-post/tab3-routing.module.ts");









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/PAGES_ASSO/asso-post/tab3.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/PAGES_ASSO/asso-post/tab3.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=\"date\"] {\n  background-color: red;\n  border: none;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUEFHRVNfQVNTTy9hc3NvLXBvc3QvQzpcXFVzZXJzXFxVdGlsaXNhdGV1clxcdW5pYmVlL3NyY1xcYXBwXFxQQUdFU19BU1NPXFxhc3NvLXBvc3RcXHRhYjMucGFnZS5zY3NzIiwic3JjL2FwcC9QQUdFU19BU1NPL2Fzc28tcG9zdC90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQ0NmIiwiZmlsZSI6InNyYy9hcHAvUEFHRVNfQVNTTy9hc3NvLXBvc3QvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9IiwiaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/PAGES_ASSO/asso-post/tab3.page.ts":
/*!***************************************************!*\
  !*** ./src/app/PAGES_ASSO/asso-post/tab3.page.ts ***!
  \***************************************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _SERVICES_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../SERVICES/user.service */ "./src/app/SERVICES/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");








// Pass data between pages


let Tab3Page = class Tab3Page {
    constructor(loadingController, alertController, afSG, afAuth, Afs, camera, crop, router, route, toastController, user) {
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.afSG = afSG;
        this.afAuth = afAuth;
        this.Afs = Afs;
        this.camera = camera;
        this.crop = crop;
        this.router = router;
        this.route = route;
        this.toastController = toastController;
        this.user = user;
        this.dataEvent = {
            titre: '',
            description: '',
            deadline: '',
            maxgens: '',
            photocrop: '',
            date: '',
            heureD: '',
            heureF: '',
            photo: '',
            geolat: '',
            geolng: ''
        };
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
                correctOrientation: true,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                targetWidth: 1000,
                targetHeight: 1000,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            return yield this.camera.getPicture(options).then((ImageData) => {
                this.dataEvent.photo = 'data:image/jpg;base64,' + ImageData;
                this.GoandPass();
            });
        });
    }
    Post() {
        if (!this.dataEvent.titre) {
            this.presentAlert('Entrez un titre');
        }
        else {
            let verif = this.dataEvent.photocrop.slice(0, 4);
            // si logochangé, logocrop est en base 64 
            if (verif == 'data') {
                this.uploadFirebase();
            }
            else {
                this.imageUrl = this.dataEvent.photocrop;
                this.uploadFirestore();
            }
        }
    }
    uploadFirestore() {
        // see assoedit upload firestore to use old picture
        let currentDate = new Date().getTime();
        this.Afs.collection("publicevents").doc(this.user.getUID() + currentDate).set({
            id: this.user.getUID() + currentDate,
            titre: this.dataEvent.titre,
            description: this.dataEvent.description,
            deadline: this.dataEvent.deadline,
            geolat: this.dataEvent.geolat,
            geolng: this.dataEvent.geolng,
            maxgens: this.dataEvent.maxgens,
            photo: this.dataEvent.photocrop,
            date: this.dataEvent.date,
            host: this.user.getUID(),
            starthour: this.dataEvent.heureD,
            endhour: this.dataEvent.heureF
        }, { merge: true })
            .then(function () {
            console.log("Document successfully written!");
        })
            .catch(function (error) {
            console.error("Error writing document: ", error);
        });
        this.router.navigate(['/tabs/tab5']);
    }
    // go to other page and pass dataUser
    GoandPass() {
        let navigationExtras = {
            state: {
                dataEvent: this.dataEvent
            }
        };
        this.router.navigate(['croplogopost'], navigationExtras);
    }
    // go to other page and pass dataUser
    GoMap() {
        let navigationExtras = {
            state: {
                dataEvent: this.dataEvent
            }
        };
        this.router.navigate(['asso-map'], navigationExtras);
    }
    // receptionner dataUser
    recepData() {
        console.log('recepdataUser');
        this.route.queryParams.subscribe(params => {
            console.log('params:', params);
            if (this.router.getCurrentNavigation().extras.state) {
                this.dataEvent = this.router.getCurrentNavigation().extras.state.dataEvent;
                console.log(this.dataEvent);
            }
        });
    }
    ionViewWillEnter() {
        this.recepData();
    }
    ngOnInit() {
        this.recepData();
    }
    uploadFirebase() {
        let currentDate = new Date().getTime();
        this.imagePath = 'PhotoEvent/' + this.user.getUID() + currentDate + 'jpg';
        this.afSG.ref(this.imagePath).putString(this.dataEvent.photocrop, 'data_url');
        this.upload = this.afSG.ref(this.imagePath).putString(this.dataEvent.photocrop, 'data_url');
        this.upload.then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //get download Url
            this.afSG.ref(this.imagePath).getDownloadURL().subscribe(imgUrl => {
                console.log('down   ' + imgUrl);
                this.dataEvent.photocrop = imgUrl;
                this.uploadFirestore();
            });
        }));
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
Tab3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__["Crop"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _SERVICES_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES_ASSO/asso-post/tab3.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab3.page.scss */ "./src/app/PAGES_ASSO/asso-post/tab3.page.scss")).default]
    })
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=asso-post-tab3-module-es2015.js.map