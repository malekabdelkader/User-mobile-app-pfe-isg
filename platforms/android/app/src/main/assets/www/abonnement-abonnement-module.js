(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["abonnement-abonnement-module"],{

/***/ "./src/app/abonnement/abonnement.module.ts":
/*!*************************************************!*\
  !*** ./src/app/abonnement/abonnement.module.ts ***!
  \*************************************************/
/*! exports provided: AbonnementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbonnementPageModule", function() { return AbonnementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _abonnement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./abonnement.page */ "./src/app/abonnement/abonnement.page.ts");







var routes = [
    {
        path: '',
        component: _abonnement_page__WEBPACK_IMPORTED_MODULE_6__["AbonnementPage"]
    }
];
var AbonnementPageModule = /** @class */ (function () {
    function AbonnementPageModule() {
    }
    AbonnementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_abonnement_page__WEBPACK_IMPORTED_MODULE_6__["AbonnementPage"]]
        })
    ], AbonnementPageModule);
    return AbonnementPageModule;
}());



/***/ }),

/***/ "./src/app/abonnement/abonnement.page.html":
/*!*************************************************!*\
  !*** ./src/app/abonnement/abonnement.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n          Abonnement\n         </ion-title>\n         \n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-item href=\"/signin\">\n    <ion-icon name=\"add-circle-outline\"></ion-icon> \n     <label style=\"margin-left: 5%\"  > Ajouter</label>\n</ion-item>\n    <ion-list *ngFor=\"let abonnement of Abonnement\">\n      <ion-item *ngIf=\"abonnement.email==email\">\n        <ion-icon name=\"pricetag\"></ion-icon>\n      <ion-title style=\"color: darkcyan\">Abonnement :</ion-title>\n    </ion-item>\n        <ion-item *ngIf=\"abonnement.email==email\">\n          <ion-label>Code</ion-label>{{abonnement.code}}\n        </ion-item>\n        <ion-item *ngIf=\"abonnement.email==email\">\n          <ion-label>Début</ion-label>{{abonnement.mode}}\n        </ion-item>\n        <ion-item *ngIf=\"abonnement.email==email\">\n          <ion-label>Expiration</ion-label>{{abonnement.expiration}}\n        </ion-item>\n      </ion-list>\n \n</ion-content>\n"

/***/ }),

/***/ "./src/app/abonnement/abonnement.page.scss":
/*!*************************************************!*\
  !*** ./src/app/abonnement/abonnement.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib25uZW1lbnQvYWJvbm5lbWVudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/abonnement/abonnement.page.ts":
/*!***********************************************!*\
  !*** ./src/app/abonnement/abonnement.page.ts ***!
  \***********************************************/
/*! exports provided: AbonnementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbonnementPage", function() { return AbonnementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_abonnement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/abonnement.service */ "./src/app/shared/abonnement.service.ts");


 // CRUD API service class
var AbonnementPage = /** @class */ (function () {
    function AbonnementPage(crudApi) {
        this.crudApi = crudApi;
        this.p = 1;
        this.hideWhenNoStudent = false; // Hide Parks data table when no Park.
        this.noData = false; // Showing No Park Message, when no Park in database.
        this.preLoader = true; // Showing Preloader to show Park data is coming for you from thre server(A tiny UX Shit)
    }
    ;
    AbonnementPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataState(); // Initialize Park's list, when component is ready
        var s = this.crudApi.GetAbonnementsList();
        console.log(s);
        this.email = localStorage.getItem("email");
        s.snapshotChanges().subscribe(function (data) {
            _this.Abonnement = [];
            data.forEach(function (item) {
                var a = item.payload.toJSON();
                //console.log(a);
                a['$key'] = item.key;
                _this.Abonnement.push(a);
            });
        });
        //this.delete();
    };
    // Using valueChanges() method to fetch simple list of Parks data. It updates the state of hideWhenNoStudent, noData & preLoader variables when any changes occurs in Park data list in real-time.
    AbonnementPage.prototype.dataState = function () {
        var _this = this;
        this.crudApi.GetAbonnementsList().valueChanges().subscribe(function (data) {
            _this.preLoader = false;
            if (data.length <= 0) {
                _this.hideWhenNoStudent = false;
                _this.noData = true;
            }
            else {
                console.log(data.length);
                localStorage.setItem("reserve", data.length.toString());
                _this.hideWhenNoStudent = true;
                _this.noData = false;
            }
        });
    };
    AbonnementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-abonnement',
            template: __webpack_require__(/*! ./abonnement.page.html */ "./src/app/abonnement/abonnement.page.html"),
            styles: [__webpack_require__(/*! ./abonnement.page.scss */ "./src/app/abonnement/abonnement.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_abonnement_service__WEBPACK_IMPORTED_MODULE_2__["AbonnementService"]])
    ], AbonnementPage);
    return AbonnementPage;
}());

/* delete(){
   let b=0;
   console.log("ok");
   for (let abb of this.Abonnement){
     console.log("FOR 1 works");

     for(let uss of this.User){
       console.log("FOR 2 works");
     if(abb.email===uss.email){
       b=1;
     };};
     if(b===0){
       console.log("email inexistant");
     };
   };
     }*/


/***/ })

}]);
//# sourceMappingURL=abonnement-abonnement-module.js.map