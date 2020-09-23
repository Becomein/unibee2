(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asso-post-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/asso-post/tab3.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/asso-post/tab3.page.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Publier un Event\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <img (click)=\"getGallery()\" [src]=\"URL\" height=\"200\" width=\"200\">\n    <button  (click)=\"addPhoto()\" block style=\"width : 50% ; height : 50%\" >\n    \n  <img *ngIf=\"dataEvent.photocrop\" [src]=\"dataEvent.photocrop\">\n    <img *ngIf=\"!dataEvent.photocrop\" src='assets/addtof.png'>\n  </button>\n  <ion-button (click)=\"GoMap()\" expand=\"block\"  shape=\"round\">Choisir un lieu</ion-button>\n  <ion-input placeholder=\"Titre\" [(ngModel)]=\"dataEvent.titre\"></ion-input>\n  <ion-input placeholder=\"Description\" [(ngModel)]=\"dataEvent.description\"></ion-input>\n  <ion-input type=\"number\" placeholder=\"deadline\" [(ngModel)]=\"dataEvent.deadline\"></ion-input>\n  <ion-input type=\"number\" placeholder=\"Nombre de places\" [(ngModel)]=\"dataEvent.maxgens\"></ion-input>\n  <ion-item>\n    <ion-label>Choisir une date</ion-label>\n      <ion-input  type=\"date\" [(ngModel)]=\"dataEvent.date\"></ion-input>   \n  </ion-item>\n  <ion-item>\n    <ion-label>Heure de début</ion-label>\n    <ion-datetime displayFormat=\"HH:mm\" [(ngModel)]=\"dataEvent.heureD\"></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label>Heure de fin</ion-label>\n    <ion-datetime displayFormat=\"HH:mm\" [(ngModel)]=\"dataEvent.heureF\"></ion-datetime>\n  </ion-item>\n  <ion-input type=\"heure\" [(ngModel)]=\"dataEvent.heureD\"></ion-input>\n  <ion-input placeholder=\"heure fin\" [(ngModel)]=\"dataEvent.heureF\"></ion-input>\n  <ion-button (click)=\"Post()\">Poster</ion-button>\n</ion-content>-->\n<ion-content class=\"white\">\n\n\n\n\n\n  <div class=\"container-fluid\" rows=\"12\">\n  <div class=\"col-12\">\n  \n  \n    <img  *ngIf=\"dataEvent.photocrop\" (click)=\"addPhoto()\" class=\"addpic\" [src]=\"dataEvent.photocrop\">\n    <img *ngIf=\"!dataEvent.photocrop\" (click)=\"addPhoto()\" class=\"addpic\"  src='/assets/baseevent2.svg'>\n    <img (click)=\"addPhoto()\" class=\"event\" src= '/assets/addevent2.svg'/>\n  \n  \n    <div class=\"col-5 asso\" rows=\"12\" >\n  \n      <img class=\"logo\" src=\"/assets/choixasso-none.png\" alt=\"addpic\"> \n  \n    </div>\n  \n  \n  \n    \n  <div class=\"col=7 name\">\n    <ion-input [(ngModel)]=\"dataEvent.titre\" [ngModelOptions]=\"{standalone: true}\"  placeholder=\"Nom de l'évènement\" type=\"text\" class=\"nevent\"></ion-input>   \n    <h2>Nom asso</h2> \n  \n  \n  \n  </div>\n  \n  \n  </div>\n  </div>\n  \n  \n    <div class=\"container-fluid mt-auto\">\n      <div class=\" row col-12 cardbg justify-content-center\"> \n  \n  \n  \n        <div class=\"col-11 hbt cardbg2 row text-center\">\n  \n  \n          <div class=\"col-4\">\n            <img (click)=\"chooseDate()\" class=\"ico\" src=\"assets/date.svg\" alt=\"date de l'event\" />\n           <!-- <h6 [(ngModel)]=\"dataEvent.date\" [ngModelOptions]=\"{standalone: true}\"  placeholder=\"Date de l'évènement\" type=\"date\" class=\"holder\"></ion-textarea> -->\n            <h6  (click)=\"chooseDate()\" >{{ dataEvent.date }}<br/> {{ dataEvent.heureD}} - {{ dataEvent.heureF}}</h6>\n          </div>\n  \n          \n  \n          <span class=\"col-4 border-left border-right\">\n            <span>\n  \n              <img class=\"ico\"  src=\"assets/bene.svg\" alt=\"nombre de benevole\" />\n              <ion-textarea [(ngModel)]=\"dataEvent.maxgens\" [ngModelOptions]=\"{standalone: true}\"  placeholder=\"Bénévoles demandés\" type=\"text\" class=\"holder\"></ion-textarea>\n            </span>\n          </span>\n  \n  \n  \n          <div class=\"col-4\">\n            <img class=\"ico\"  src=\"assets/time.svg\" alt=\"temps restant\" />\n            <ion-textarea [(ngModel)]=\"dataEvent.deadline\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Temps restant\" type=\"HH:mm\" class=\"holder\"></ion-textarea>\n          </div>\n  \n        </div>\n  \n  \n          <div class=\"col-11 info\">\n            <p class=\"smalltitle\">Details de l'évènement</p>\n            <ion-textarea placeholder=\"Renseigner une déscription de l'évènement\" type=\"text\" class=\"inputinfo form-control\" rows=\"8\"></ion-textarea>\n          </div>\n  \n          \n  \n  \n  \n  \n  \n  \n  \n        <div class=\"col-11 map\">\n          <div>  \n            <h6 class=\"col-12 adress\"> Adresse de l'evenement </h6>\n          </div>\n  \n        </div>\n  \n        <div class=\"container-fluid\">\n          <div class=\"col-12 row\">\n            <div class=\"col-6 d-flex justify-content-center>\">\n              \n              <button type=\"submit\" class=\"btn font bc\">Supprimer</button>\n            </div>\n  \n            <div class=\"col-6 d-flex justify-content-center>\">\n  \n                <button type=\"submit\" class=\"btn font bv\">Publier</button>\n  \n            </div>\n  \n          </div>\n        </div>\n      </div>\n    </div>\n  \n  \n  \n  </ion-content>\n  \n ");

/***/ }),

/***/ "./src/app/asso-post/tab3-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/asso-post/tab3-routing.module.ts ***!
  \**************************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "./src/app/asso-post/tab3.page.ts");




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

/***/ "./src/app/asso-post/tab3.module.ts":
/*!******************************************!*\
  !*** ./src/app/asso-post/tab3.module.ts ***!
  \******************************************/
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
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/asso-post/tab3.page.ts");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab3-routing.module */ "./src/app/asso-post/tab3-routing.module.ts");








let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/asso-post/tab3.page.scss":
/*!******************************************!*\
  !*** ./src/app/asso-post/tab3.page.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".white {\n  --background: rgb(255, 255, 255);\n}\n\n.event {\n  z-index: 0;\n  position: relative;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.addpic {\n  fill: black;\n  position: absolute;\n  opacity: 100%;\n  z-index: 1;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 20rem;\n  width: 100%;\n}\n\n.cardbg {\n  z-index: 2;\n  position: relative;\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n  box-shadow: -5px -5px 15px #b9b8a5;\n  height: 68%;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  margin-top: -3rem;\n}\n\n.cardbg2 {\n  position: relative;\n  background-color: white;\n  border-radius: 20px;\n  box-shadow: 5px 5px 15px #b9b8a5;\n  height: 65%;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\n.container-fluid {\n  margin-bottom: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.container-fluid .col-12 {\n  margin: 0px;\n  padding: 0px;\n}\n\np {\n  color: black;\n}\n\n.map {\n  align-content: center;\n  background-color: red;\n  height: 25% !important;\n  border-radius: 7px;\n  margin-bottom: 1rem;\n}\n\n.info {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 20px;\n  padding-top: 1vh;\n}\n\n.smalltitle {\n  margin-top: 0.3rem;\n  font-size: 0.8rem;\n}\n\n.hbt {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: relative;\n  margin-top: 15px;\n  margin-bottom: -20px;\n  padding: 0px;\n}\n\nh3 {\n  color: black;\n  margin-top: 45px;\n  margin-bottom: 45px;\n}\n\nh6 {\n  margin-top: 5px;\n  color: black;\n  font-size: 0.6rem;\n}\n\n.ico {\n  margin-top: 10px;\n  height: 50px !important;\n  width: 50px !important;\n}\n\n.inputinfo {\n  line-height: 130%;\n  text-align: justify;\n  margin-top: 0.3rem;\n  font-size: 1rem;\n  color: black !important;\n  z-index: 1;\n  background-color: transparent;\n  margin-top: -1rem;\n  margin-left: -10px;\n  width: 100%;\n  border-color: transparent;\n  outline: transparent;\n  height: auto;\n  line-break: auto;\n}\n\n.bc {\n  border-inline: black;\n  color: white;\n  position: relative;\n  background-color: #57575777;\n  margin-right: 0px;\n  width: 100%;\n  border-radius: 15px;\n}\n\n.bv {\n  color: white;\n  position: relative;\n  margin-left: 0px;\n  background-color: #f9d655;\n  width: 100%;\n  border-radius: 15px;\n}\n\n.btn {\n  margin-bottom: 15px;\n}\n\n.holder {\n  margin-top: -5px;\n  color: black;\n  font-size: 0.6rem;\n  border-color: transparent;\n  text-align: center;\n  margin-left: 5px;\n}\n\n.adress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: #f5f5f5;\n  padding-bottom: 5px !important;\n  padding-top: 5px !important;\n  padding-left: 7px !important;\n}\n\n.asso {\n  padding-left: 8px;\n  z-index: 2;\n  background: none;\n  position: absolute;\n  top: 0;\n  margin-top: 22%;\n  margin-bottom: 50%;\n}\n\n.logo {\n  width: 70px;\n  height: 70px;\n  margin-top: 70%;\n}\n\n.name {\n  z-index: 2;\n  background: none;\n  position: absolute;\n  top: 0;\n  margin-top: 48%;\n  margin-bottom: 50%;\n  margin-left: 90px;\n}\n\nh2 {\n  font-weight: bold;\n  font-size: 12px;\n  color: #f9d655;\n}\n\nh4 {\n  margin-bottom: 0px;\n  color: #212529;\n  font-size: 25px;\n}\n\n.nevent {\n  color: black;\n  text-transform: h4;\n  padding-bottom: 0px;\n}\n\n@media screen and (max-width: 320px) {\n  .logo {\n    width: 70px;\n    height: 70px;\n    margin-top: 30%;\n  }\n\n  .name {\n    z-index: 2;\n    background: none;\n    position: absolute;\n    top: 0;\n    margin-top: 33%;\n    margin-bottom: 50%;\n    margin-left: 90px;\n  }\n}\n\n.jdi {\n  background-color: #212529;\n  border-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWNvbWVpbi9EZXNrdG9wL2FwcGxpY2F0aW9uLXVuaWJlZS91bmliZWUyLmdpdC9zcmMvYXBwL2Fzc28tcG9zdC90YWIzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXNzby1wb3N0L3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUNDRjs7QURLQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNDLG9CQUFBO0tBQUEsaUJBQUE7RUFDRCxZQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNKRjs7QURPQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDSkY7O0FEUUE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0xGOztBRFdBO0VBQ0Esa0JBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDUko7O0FEU0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1BGOztBRFdBO0VBQ0ksWUFBQTtBQ1JKOztBRFlBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1RKOztBRFlBO0VBQ0UsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1RGOztBRFlBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ1RGOztBRFlBO0VBQ0UsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ1RGOztBRGFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNWRjs7QURhQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNWRjs7QURhQTtFQUVFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ1hGOztBRGVBO0VBRUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDYkY7O0FEa0JBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDRiwyQkFBQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDZkY7O0FEaUJBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDRix5QkFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ2RGOztBRGlCQTtFQUNFLG1CQUFBO0FDZEY7O0FEa0JBO0VBRUEsZ0JBQUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNoQkY7O0FEb0JBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDakJGOztBRHFCQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDbEJGOztBRHFCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ2xCRjs7QURvQkE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2pCRjs7QURxQkE7RUFDRSxpQkFBQTtFQUNNLGVBQUE7RUFDQSxjQUFBO0FDbEJSOztBRG9CSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNqQk47O0FEbUJFO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNoQk47O0FEb0JFO0VBR0Y7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUNuQkE7O0VEcUJGO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxNQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUNsQkE7QUFDRjs7QURvQkU7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDbEJKIiwiZmlsZSI6InNyYy9hcHAvYXNzby1wb3N0L3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndoaXRle1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uZXZlbnR7XHJcbiAgei1pbmRleDogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG4uYWRkcGlje1xyXG4gIGZpbGw6IGJsYWNrO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbiAgei1pbmRleDogMTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBoZWlnaHQ6IDIwcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG4uY2FyZGJnIHtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XHJcbiAgYm94LXNoYWRvdzogLTVweCAtNXB4IDE1cHggcmdiKDE4NSwgMTg0LCAxNjUpO1xyXG4gIGhlaWdodDogNjglO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogLTNyZW07XHJcbn1cclxuXHJcblxyXG4uY2FyZGJnMiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2IoMTg1LCAxODQsIDE2NSk7XHJcbiAgaGVpZ2h0OiA2NSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmNvbnRhaW5lci1mbHVpZHtcclxubWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbi5jb2wtMTJ7XHJcbiAgbWFyZ2luOjBweDtcclxuICBwYWRkaW5nOjBweDtcclxufVxyXG59XHJcblxyXG5we1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuLm1hcHtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGhlaWdodDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uaW5mb3tcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50OyAgICBcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxdmg7XHJcbn1cclxuXHJcbi5zbWFsbHRpdGxle1xyXG4gIG1hcmdpbi10b3A6IC4zcmVtO1xyXG4gIGZvbnQtc2l6ZTogLjhyZW07XHJcbn1cclxuXHJcbi5oYnR7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAtMjBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcblxyXG5oM3tcclxuICBjb2xvcjpibGFjaztcclxuICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbn1cclxuXHJcbmg2e1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAuNnJlbTtcclxufVxyXG5cclxuLmljb3tcclxuXHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmlucHV0aW5mb1xyXG57XHJcbmxpbmUtaGVpZ2h0OiAxMzAlO1xyXG50ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG5tYXJnaW4tdG9wOiAuM3JlbTtcclxuZm9udC1zaXplOiAxcmVtO1xyXG5jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuei1pbmRleDogMTtcclxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgO1xyXG4gIG1hcmdpbi10b3A6IC0xcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBsaW5lLWJyZWFrOiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcbi5iY3tcclxuICBib3JkZXItaW5saW5lOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjNTc1NzU3Nzc7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4uYnZ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZjlkNjU1O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuXHJcbi5ob2xkZXJ7XHJcbi8vICBtYXJnaW4tdG9wOiA1cHg7XHJcbm1hcmdpbi10b3A6LTVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAuNnJlbTtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5cclxuLmFkcmVzc3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogN3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uYXNzb3tcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBtYXJnaW4tdG9wOiAyMiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTAlO1xyXG5cclxufVxyXG4ubG9nb3tcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgbWFyZ2luLXRvcDogNzAlO1xyXG59XHJcbi5uYW1le1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIG1hcmdpbi10b3A6IDQ4JTtcclxuICBtYXJnaW4tYm90dG9tOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XHJcbn1cclxuXHJcblxyXG5oMntcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6KCNmOWQ2NTUpO1xyXG4gICAgfVxyXG4gICAgaDR7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgY29sb3I6IzIxMjUyOTtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuICAubmV2ZW50e1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBoNDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICB9XHJcblxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCl7XHJcblxyXG5cclxuLmxvZ297XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwJTtcclxufVxyXG4ubmFtZXtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBtYXJnaW4tdG9wOiAzMyU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xyXG59XHJcbiAgfVxyXG4gIC5qZGl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBcclxuICB9XHJcbiIsIi53aGl0ZSB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4uZXZlbnQge1xuICB6LWluZGV4OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRkcGljIHtcbiAgZmlsbDogYmxhY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGhlaWdodDogMjByZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZGJnIHtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gIGJveC1zaGFkb3c6IC01cHggLTVweCAxNXB4ICNiOWI4YTU7XG4gIGhlaWdodDogNjglO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtM3JlbTtcbn1cblxuLmNhcmRiZzIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggI2I5YjhhNTtcbiAgaGVpZ2h0OiA2NSU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4uY29udGFpbmVyLWZsdWlkIC5jb2wtMTIge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5wIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubWFwIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGhlaWdodDogMjUlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmluZm8ge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMXZoO1xufVxuXG4uc21hbGx0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDAuM3JlbTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5oYnQge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmgzIHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tdG9wOiA0NXB4O1xuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xufVxuXG5oNiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDAuNnJlbTtcbn1cblxuLmljbyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXRpbmZvIHtcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbi10b3A6IDAuM3JlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi10b3A6IC0xcmVtO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWJyZWFrOiBhdXRvO1xufVxuXG4uYmMge1xuICBib3JkZXItaW5saW5lOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NzU3NTc3NztcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uYnYge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZDY1NTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5idG4ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uaG9sZGVyIHtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uYWRyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDdweCAhaW1wb3J0YW50O1xufVxuXG4uYXNzbyB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogMjIlO1xuICBtYXJnaW4tYm90dG9tOiA1MCU7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luLXRvcDogNzAlO1xufVxuXG4ubmFtZSB7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBtYXJnaW4tdG9wOiA0OCU7XG4gIG1hcmdpbi1ib3R0b206IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XG59XG5cbmgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmOWQ2NTU7XG59XG5cbmg0IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjb2xvcjogIzIxMjUyOTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ubmV2ZW50IHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LXRyYW5zZm9ybTogaDQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5sb2dvIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICB9XG5cbiAgLm5hbWUge1xuICAgIHotaW5kZXg6IDI7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbi10b3A6IDMzJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDkwcHg7XG4gIH1cbn1cbi5qZGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICBib3JkZXItY29sb3I6IHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/asso-post/tab3.page.ts":
/*!****************************************!*\
  !*** ./src/app/asso-post/tab3.page.ts ***!
  \****************************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../modal/modal.page */ "./src/app/modal/modal.page.ts");
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
    constructor(loadingController, alertController, afSG, afAuth, Afs, camera, crop, router, modalController, route, toastController) {
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.afSG = afSG;
        this.afAuth = afAuth;
        this.Afs = Afs;
        this.camera = camera;
        this.crop = crop;
        this.router = router;
        this.modalController = modalController;
        this.route = route;
        this.toastController = toastController;
        this.dataEvent = {
            titre: '',
            description: '',
            deadline: '',
            maxgens: '',
            photocrop: '',
            date: '',
            heureD: new Date(),
            heureF: new Date(),
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
    getGallery() {
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            // data url convert url into text
            destinationType: this.camera.DestinationType.DATA_URL,
        }).then((res) => {
            console.log('res');
            this.URL = 'data:image/jpg;base64,' + res;
        }).catch(e => {
            console.log(e);
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
        let start = this.dataEvent.heureD.getTime();
        let end = this.dataEvent.heureF.getTime();
        this.Afs.collection("publicevents").doc().set({
            titre: this.dataEvent.titre,
            description: this.dataEvent.description,
            deadline: this.dataEvent.deadline,
            geolat: this.dataEvent.geolat,
            geolng: this.dataEvent.geolng,
            maxgens: this.dataEvent.maxgens,
            photo: this.dataEvent.photocrop,
            date: this.dataEvent.date,
            starthour: start,
            endhour: end
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
    chooseDate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_1__["ModalPage"],
                cssClass: 'ion-modal ionbg'
            });
            return yield alert.present();
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
Tab3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__["Crop"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/asso-post/tab3.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab3.page.scss */ "./src/app/asso-post/tab3.page.scss")).default]
    })
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=asso-post-tab3-module-es2015.js.map