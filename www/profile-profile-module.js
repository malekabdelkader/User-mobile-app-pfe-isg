(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.html":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        {{user.nom}} {{user.prenom}}\n       </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    \n    <ion-img src=\"/assets/park.jpg\"></ion-img>\n      \n    <ion-card-header>\n      <ion-card-subtitle>Smart Parking</ion-card-subtitle>\n      <ion-card-title style=\"color:darkgrey;font-size:medium\">Paramètres de profil :</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n        <form >\n\n            <ion-item>\n               <ion-label >Nom :   </ion-label>\n           {{user.nom}}\n            </ion-item>\n    \n            <ion-item>\n               <ion-label  >Prénom :    </ion-label>\n            {{user.prenom}}\n            </ion-item>\n    \n            <ion-item>\n                <ion-label >Télephone:   </ion-label>\n            {{user.telephone}}\n            </ion-item>\n           \n            <ion-item>\n                <ion-label  >E-mail :  </ion-label>\n            {{user.email}}\n           </ion-item>\n    \n            <ion-item>\n                <ion-label >Matricule:   </ion-label>\n                    {{user.matricule}}\n            </ion-item>\n                <h2 style=\"text-align: center\"> <a  href=\"/edit-user\">Modifier</a></h2> \n    \n    </form>\n<!--\n      <form >\n\n        <ion-item>\n           <ion-label >Nom :   </ion-label>\n           <ion-input [(ngModel)]=\"user.nom\"   name=\"nom\" type=\"text\"> {{user.nom}}</ion-input>\n        </ion-item>\n\n        <ion-item>\n           <ion-label  >Prénom :    </ion-label>\n           <ion-input [(ngModel)]=\"user.prenom\" name=\"prenom\" type=\"text\"> {{user.prenom}}</ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label >Télephone:   </ion-label>\n            <ion-input [(ngModel)]=\"user.telephone\" name=\"telephone\" type=\"text\"> {{user.telephone}}</ion-input>\n        </ion-item>\n       \n        <ion-item>\n            <ion-label  >E-mail :  </ion-label>\n            <ion-input [(ngModel)]=\"user.email\" name=\"email\"  type=\"email\"> {{user.email}}</ion-input>\n       </ion-item>\n\n       <ion-item>\n          <ion-label >Mot de passe:   </ion-label>\n          <ion-input  [(ngModel)]=\"user.password\" name=\"password\"   type=\"password\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label >Matricule:   </ion-label>\n            <ion-input [(ngModel)]=\"user.matricule\" name=\"matricule\" type=\"text\"> {{user.matricule}}</ion-input>\n        </ion-item>\n\n          <ion-button type=\"submit\" expand=\"block\">S'inscrire</ion-button>\n\n</form> -->\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user */ "./src/app/shared/user.ts");



var ProfilePage = /** @class */ (function () {
    function ProfilePage() {
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.user = new _shared_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.user.nom = localStorage.getItem("nom");
        this.user.prenom = localStorage.getItem("prenom");
        this.user.email = localStorage.getItem("email");
        this.user.password = localStorage.getItem("password");
        this.user.matricule = localStorage.getItem("matricule");
        this.user.telephone = localStorage.getItem("telephone");
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map