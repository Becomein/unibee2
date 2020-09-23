(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eventlist-eventlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/eventlist/eventlist.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/eventlist/eventlist.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content fullscreen class=\"white\">\n\n<div class=\"container\">\n\n\n  <div class=\"col-11 row cardbg\">\n    <div>\n      \n      <p>test</p>\n      \n      \n    </div>\n    \n    \n  </div>\n  \n  \n</div>\n\n    \n</ion-content>\n    \n");

/***/ }),

/***/ "./src/app/eventlist/eventlist-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/eventlist/eventlist-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EventlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventlistPageRoutingModule", function() { return EventlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _eventlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventlist.page */ "./src/app/eventlist/eventlist.page.ts");




const routes = [
    {
        path: '',
        component: _eventlist_page__WEBPACK_IMPORTED_MODULE_3__["EventlistPage"]
    }
];
let EventlistPageRoutingModule = class EventlistPageRoutingModule {
};
EventlistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventlistPageRoutingModule);



/***/ }),

/***/ "./src/app/eventlist/eventlist.module.ts":
/*!***********************************************!*\
  !*** ./src/app/eventlist/eventlist.module.ts ***!
  \***********************************************/
/*! exports provided: EventlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventlistPageModule", function() { return EventlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _eventlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventlist-routing.module */ "./src/app/eventlist/eventlist-routing.module.ts");
/* harmony import */ var _eventlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventlist.page */ "./src/app/eventlist/eventlist.page.ts");







let EventlistPageModule = class EventlistPageModule {
};
EventlistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _eventlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventlistPageRoutingModule"]
        ],
        declarations: [_eventlist_page__WEBPACK_IMPORTED_MODULE_6__["EventlistPage"]]
    })
], EventlistPageModule);



/***/ }),

/***/ "./src/app/eventlist/eventlist.page.scss":
/*!***********************************************!*\
  !*** ./src/app/eventlist/eventlist.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".white {\n  --background: rgb(255, 255, 255);\n  width: 100%;\n  height: 100%;\n}\n\n.cardbg {\n  background-color: black;\n  position: absolute;\n  border-radius: 20px 20px 20px 20px;\n  box-shadow: 5x 5px 15px #b9b8a5;\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWNvbWVpbi9EZXNrdG9wL2FwcGxpY2F0aW9uLXVuaWJlZS91bmliZWUyLmdpdC9zcmMvYXBwL2V2ZW50bGlzdC9ldmVudGxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9ldmVudGxpc3QvZXZlbnRsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURNQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvZXZlbnRsaXN0L2V2ZW50bGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGV7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuXG4gIFxuICBcbiAgXG4uY2FyZGJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDIwcHggMjBweDtcbiAgICBib3gtc2hhZG93OiA1eCA1cHggMTVweCByZ2IoMTg1LCAxODQsIDE2NSk7XG4gICAgaGVpZ2h0OiAxNTBweDtcblxuICAgIFxuICBcbiAgfVxuICAiLCIud2hpdGUge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmRiZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAyMHB4IDIwcHg7XG4gIGJveC1zaGFkb3c6IDV4IDVweCAxNXB4ICNiOWI4YTU7XG4gIGhlaWdodDogMTUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/eventlist/eventlist.page.ts":
/*!*********************************************!*\
  !*** ./src/app/eventlist/eventlist.page.ts ***!
  \*********************************************/
/*! exports provided: EventlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventlistPage", function() { return EventlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EventlistPage = class EventlistPage {
    constructor() { }
    ngOnInit() {
    }
};
EventlistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-eventlist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./eventlist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/eventlist/eventlist.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./eventlist.page.scss */ "./src/app/eventlist/eventlist.page.scss")).default]
    })
], EventlistPage);



/***/ })

}]);
//# sourceMappingURL=eventlist-eventlist-module-es2015.js.map