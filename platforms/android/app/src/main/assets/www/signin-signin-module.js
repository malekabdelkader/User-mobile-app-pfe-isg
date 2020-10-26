(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signin-signin-module"],{

/***/ "./src/app/shared/abonnement.ts":
/*!**************************************!*\
  !*** ./src/app/shared/abonnement.ts ***!
  \**************************************/
/*! exports provided: Abonnement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Abonnement", function() { return Abonnement; });
var Abonnement = /** @class */ (function () {
    function Abonnement() {
    }
    return Abonnement;
}());



/***/ }),

/***/ "./src/app/signin/signin.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.module.ts ***!
  \*****************************************/
/*! exports provided: SigninPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin.page */ "./src/app/signin/signin.page.ts");







var routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]
    }
];
var SigninPageModule = /** @class */ (function () {
    function SigninPageModule() {
    }
    SigninPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]]
        })
    ], SigninPageModule);
    return SigninPageModule;
}());



/***/ }),

/***/ "./src/app/signin/signin.page.html":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        Ajoutez Abonnement\n       </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    \n    <ion-img src=\"/assets/add.jpg\"></ion-img>\n      \n    <ion-card-header>\n      <ion-card-subtitle>Smart Parking</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n\n      <form (ngSubmit)=\"submitAbonnementData()\" >\n        <ion-item>\n            <ion-icon name=\"lock\"></ion-icon>\n           <ion-label >Code</ion-label>\n           {{a}}\n        </ion-item>\n\n        <ion-item>\n            <ion-icon name=\"calendar\"></ion-icon>\n            <ion-label >Date de debut</ion-label>\n            2019/06/21 </ion-item>\n       \n        <ion-item>\n            <ion-icon name=\"calendar\"></ion-icon>\n            <ion-label  >Date d'expiration</ion-label>\n            <ion-datetime [(ngModel)]=\"abonnement.expiration\" name=\"nom\" min=\"2019-06-23\" max=\"2025-12-31\"display-format=\"YYYY/MM/DD\t\" picker-format=\"YYYY/MM/DD\t\"></ion-datetime>\n\n       </ion-item>\n<br>\n        <ion-text>\n        <h3 style=\"color: red\">{{show}}</h3>\n        </ion-text>\n          <ion-button type=\"submit\" expand=\"block\">Envoyer</ion-button>\n\n</form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/signin/signin.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/signin/signin.page.ts":
/*!***************************************!*\
  !*** ./src/app/signin/signin.page.ts ***!
  \***************************************/
/*! exports provided: SigninPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPage", function() { return SigninPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_abonnement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/abonnement */ "./src/app/shared/abonnement.ts");
/* harmony import */ var _shared_abonnement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/abonnement.service */ "./src/app/shared/abonnement.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



 // CRUD services API

var SigninPage = /** @class */ (function () {
    function SigninPage(crudApi, // CRUD API services
    router) {
        this.crudApi = crudApi;
        this.router = router;
        this.hideWhenNoStudent = false; // Hide Parks data table when no Park.
        this.noData = false; // Showing No Park Message, when no Park in database.
        this.preLoader = true;
    }
    SigninPage.prototype.ngOnInit = function () {
        this.capacite = localStorage.getItem("reserve");
        console.log(this.capacite);
        this.show = null;
        this.crudApi.GetAbonnementsList(); // Call ModifierClientsList() before main form is being called
        this.abonnement = new _shared_abonnement__WEBPACK_IMPORTED_MODULE_2__["Abonnement"]();
        this.a = 1000000 + Math.round(Math.random() * (100000 - 999999));
        this.today = new Date();
        this.time = this.today.getFullYear() + "/" + this.today.getMonth() + "/" + this.today.getDay();
        var nextmonth = this.today.getMonth() + 1;
        this.expire = this.today.getFullYear() + "/" + nextmonth + "/" + this.today.getDay() + "  " + +this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
        console.log(this.time);
        console.log(this.expire);
        this.abonnement.code = this.a;
        this.abonnement.etat = "off";
        this.abonnement.mode = "2019/06/21";
        this.abonnement.email = localStorage.getItem("email");
        // this.abonnement.mode=this.time;
    };
    SigninPage.prototype.dataState = function () {
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
    SigninPage.prototype.submitAbonnementData = function () {
        this.dataState();
        this.capacite = localStorage.getItem("reserve");
        if ((this.abonnement.expiration == null) || (this.abonnement.mode == null)) {
            this.show = " * Tous les champs sont obligatoires";
            this.capacite = localStorage.getItem("reserve");
        }
        else if (this.capacite == "8") {
            this.show = "Parking Plein !";
            alert("Parking Plein !");
            this.capacite = "8";
            this.capacite = localStorage.getItem("reserve");
        }
        else if ((this.capacite != "8") && (this.abonnement.expiration != null) && (this.abonnement.mode != null)) {
            this.crudApi.AjouterAbonnement(this.abonnement); // Submit user data using CRUD API
            this.router.navigate(['abonnement']);
            this.abonnement.code = null;
            this.abonnement.mode = null;
            this.abonnement.expiration = null;
        }
    };
    ;
    SigninPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.page.html */ "./src/app/signin/signin.page.html"),
            styles: [__webpack_require__(/*! ./signin.page.scss */ "./src/app/signin/signin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_abonnement_service__WEBPACK_IMPORTED_MODULE_3__["AbonnementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SigninPage);
    return SigninPage;
}());



/***/ })

}]);
//# sourceMappingURL=signin-signin-module.js.map