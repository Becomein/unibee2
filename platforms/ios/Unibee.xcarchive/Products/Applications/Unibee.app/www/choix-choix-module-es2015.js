(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choix-choix-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/choix/choix.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/choix/choix.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div class=\"container\">\n    <div class=\"col-12\"> \n        <h4 class=\"h4 mt-5 mb-5\">Rejoins une communauté <br>de bénévoles actifs</h4> \n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <a href=\"#\" ><img class=\"choixbouton\" src=\"assets/choixbene-none.svg\" alt=\"logo\"/></a>\n        <h6 class=\"h6 mt-2\">Je suis <br/>un bénévole</h6> \n      </div>\n      <div class=\"col-6\">\n        <a href=\"#\" ><img class=\"choixbouton\" src=\"assets/choixasso-none.svg\" alt=\"logo\" /></a>\n\n        <h6 class=\"h6 mt-2\">Je suis <br/>une association</h6> \n      </div>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/choix/choix-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/choix/choix-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ChoixPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoixPageRoutingModule", function() { return ChoixPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _choix_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choix.page */ "./src/app/choix/choix.page.ts");




const routes = [
    {
        path: '',
        component: _choix_page__WEBPACK_IMPORTED_MODULE_3__["ChoixPage"]
    }
];
let ChoixPageRoutingModule = class ChoixPageRoutingModule {
};
ChoixPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChoixPageRoutingModule);



/***/ }),

/***/ "./src/app/choix/choix.module.ts":
/*!***************************************!*\
  !*** ./src/app/choix/choix.module.ts ***!
  \***************************************/
/*! exports provided: ChoixPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoixPageModule", function() { return ChoixPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _choix_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choix-routing.module */ "./src/app/choix/choix-routing.module.ts");
/* harmony import */ var _choix_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choix.page */ "./src/app/choix/choix.page.ts");







let ChoixPageModule = class ChoixPageModule {
};
ChoixPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _choix_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChoixPageRoutingModule"]
        ],
        declarations: [_choix_page__WEBPACK_IMPORTED_MODULE_6__["ChoixPage"]]
    })
], ChoixPageModule);



/***/ }),

/***/ "./src/app/choix/choix.page.scss":
/*!***************************************!*\
  !*** ./src/app/choix/choix.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap\");\nion-content {\n  --background: none;\n  background-image: url('choix-bg-2.svg');\n  background-position: center bottom;\n  background-repeat: no-repeat;\n  background-color: #F9D655;\n  background-size: 100%;\n}\n.h1 {\n  position: auto;\n  text-align: left;\n  font-family: \"Nunito\", sans-serif;\n  color: white;\n}\n.h4 {\n  text-align: left;\n  font-family: \"Nunito\", sans-serif;\n}\n.container {\n  text-align: center;\n}\n.choixbouton {\n  height: 14vh;\n}\n.h5 {\n  position: auto;\n  font-family: \"Nunito\", sans-serif;\n  color: white;\n  margin-top: min2vw;\n}\n.h6 {\n  font-family: \"Nunito\", sans-serif;\n}\n.h6 {\n  font-family: \"Nunito\", sans-serif;\n}\n.mb-5 {\n  margin-bottom: 30% !important;\n}\n.mt-5 {\n  margin-top: 30% !important;\n}\n@media screen and (min-height: 200px) and (max-height: 590px) {\n  .mt-5 {\n    margin-top: 20% !important;\n    margin-bottom: 10% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWNvbWVpbi9EZXNrdG9wL2FwcGxpY2F0aW9uLXVuaWJlZS91bmliZWUyLmdpdC9zcmMvYXBwL2Nob2l4L2Nob2l4LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hvaXgvY2hvaXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9GQUFBO0FBR1I7RUFDSSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNESjtBRE1BO0VBQ1EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0FDSFI7QURXQTtFQUNJLGdCQUFBO0VBQ0EsaUNBQUE7QUNSSjtBRFlBO0VBRUksa0JBQUE7QUNWSjtBRGNBO0VBRUksWUFBQTtBQ1pKO0FEZUE7RUFDSSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7QUNiSjtBRGdCQTtFQUVJLGlDQUFBO0FDZEo7QURpQkE7RUFDSSxpQ0FBQTtBQ2RKO0FEaUJBO0VBRUksNkJBQUE7QUNmSjtBRG1CQTtFQUVJLDBCQUFBO0FDakJKO0FEdUJBO0VBQ0k7SUFFSSwwQkFBQTtJQUNBLDZCQUFBO0VDckJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jaG9peC9jaG9peC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEA2MDAmZGlzcGxheT1zd2FwJyk7XG5cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvY2hvaXgtYmctMi5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUQ2NTU7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG5cblxuLmgxe1xuICAgICAgICBwb3NpdGlvbjogYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgIC8vICAgZm9udC1zaXplOiAzMnB4O1xuICAgIC8vICAgIG1hcmdpbi10b3A6IDMwdnc7XG4gICAgIC8vICAgbWFyZ2luLWJvdHRvbTogMzB2dztcbiAgICAgICAgXG4gICAgICAgICB9XG5cblxuLmg0e1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuXG4gICAgICAgICB9XG5cbi5jb250YWluZXJ7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLmNob2l4Ym91dG9ue1xuXG4gICAgaGVpZ2h0OiAxNHZoO1xufVxuXG4uaDV7XG4gICAgcG9zaXRpb246IGF1dG87XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcbiAvLyAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgIG1hcmdpbi10b3A6IG1pbjJ2dztcbn1cblxuLmg2e1xuXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4uaDZ7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4ubWItNXtcbiAgICBcbiAgICBtYXJnaW4tYm90dG9tOiAzMCUgIWltcG9ydGFudDtcbiAgICBcbn1cblxuLm10LTV7XG4gICAgXG4gICAgbWFyZ2luLXRvcDogMzAlICFpbXBvcnRhbnQ7XG4gICAgXG59XG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMjAwcHgpIGFuZCAobWF4LWhlaWdodDogNTkwcHgpIHtcbiAgICAubXQtNXtcbiAgICBcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwJSAhaW1wb3J0YW50O1xuICAgICAgICBcbiAgICB9XG4gICAgfVxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDYwMCZkaXNwbGF5PXN3YXBcIik7XG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2Nob2l4LWJnLTIuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlENjU1O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG5cbi5oMSB7XG4gIHBvc2l0aW9uOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaDQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNob2l4Ym91dG9uIHtcbiAgaGVpZ2h0OiAxNHZoO1xufVxuXG4uaDUge1xuICBwb3NpdGlvbjogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogbWluMnZ3O1xufVxuXG4uaDYge1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLmg2IHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYi01IHtcbiAgbWFyZ2luLWJvdHRvbTogMzAlICFpbXBvcnRhbnQ7XG59XG5cbi5tdC01IHtcbiAgbWFyZ2luLXRvcDogMzAlICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAyMDBweCkgYW5kIChtYXgtaGVpZ2h0OiA1OTBweCkge1xuICAubXQtNSB7XG4gICAgbWFyZ2luLXRvcDogMjAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/choix/choix.page.ts":
/*!*************************************!*\
  !*** ./src/app/choix/choix.page.ts ***!
  \*************************************/
/*! exports provided: ChoixPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoixPage", function() { return ChoixPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ChoixPage = class ChoixPage {
    constructor() { }
    ngOnInit() {
    }
};
ChoixPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-choix',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./choix.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/choix/choix.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./choix.page.scss */ "./src/app/choix/choix.page.scss")).default]
    })
], ChoixPage);



/***/ })

}]);
//# sourceMappingURL=choix-choix-module-es2015.js.map