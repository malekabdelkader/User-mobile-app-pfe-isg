(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-user-edit-user-module"],{

/***/ "./src/app/edit-user/edit-user.module.ts":
/*!***********************************************!*\
  !*** ./src/app/edit-user/edit-user.module.ts ***!
  \***********************************************/
/*! exports provided: EditUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPageModule", function() { return EditUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-user.page */ "./src/app/edit-user/edit-user.page.ts");







var routes = [
    {
        path: '',
        component: _edit_user_page__WEBPACK_IMPORTED_MODULE_6__["EditUserPage"]
    }
];
var EditUserPageModule = /** @class */ (function () {
    function EditUserPageModule() {
    }
    EditUserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_user_page__WEBPACK_IMPORTED_MODULE_6__["EditUserPage"]]
        })
    ], EditUserPageModule);
    return EditUserPageModule;
}());



/***/ }),

/***/ "./src/app/edit-user/edit-user.page.html":
/*!***********************************************!*\
  !*** ./src/app/edit-user/edit-user.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title>Modifier profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"welcome-card\">\n        <ion-img src=\"/assets/park3.jpg\"></ion-img>\n        <ion-card-header>\n        <ion-card-subtitle>Smart Parking</ion-card-subtitle>\n        <ion-card-title>{{user.nom}} {{user.prenom}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n      <form (ngSubmit)=\"updateForm()\">\n        <ion-item>\n            <ion-label width=\"30%\">Télephone</ion-label>\n            <ion-input [(ngModel)]=\"user.telephone\"  name=\"telephonee\" type=\"number\" ></ion-input>\n        </ion-item>\n       \n        <ion-item>\n            <ion-label width=\"30%\" >E-mail</ion-label>\n            <ion-input [(ngModel)]=\"user.email\" name=\"emailll\"  type=\"email\" ></ion-input>\n       </ion-item>\n\n       <ion-item>\n          <ion-label width=\"30%\">Mot de passe</ion-label>\n          <ion-input [(ngModel)]=\"user.password\"   name=\"passwordd\"   type=\"password\" ></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label width=\"30%\">Matricule</ion-label>\n            <ion-input [(ngModel)]=\"user.matricule\" name=\"matriculee\" type=\"text\"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label style=\"color: red\" width=\"30%\">{{show}}</ion-label>\n        </ion-item>\n        <ion-button *ngIf=\"((capacite!='7')&&(capacite!='6')&&(capacite!='5')&&(capacite!='4')&&(capacite!='3')&&(capacite!='2')&&(capacite!='1')&&(capacite!='0'))\" type=\"submit\" expand=\"block\">\n            Sauvgarder\n        </ion-button>\n\n      </form></ion-card-content></ion-card></ion-content>\n"

/***/ }),

/***/ "./src/app/edit-user/edit-user.page.scss":
/*!***********************************************!*\
  !*** ./src/app/edit-user/edit-user.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtdXNlci9lZGl0LXVzZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit-user/edit-user.page.ts":
/*!*********************************************!*\
  !*** ./src/app/edit-user/edit-user.page.ts ***!
  \*********************************************/
/*! exports provided: EditUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPage", function() { return EditUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user */ "./src/app/shared/user.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");




var EditUserPage = /** @class */ (function () {
    function EditUserPage(crudApi) {
        this.crudApi = crudApi;
    }
    EditUserPage.prototype.ngOnInit = function () {
        this.show = "";
        var id = localStorage.getItem("key");
        this.crudApi.GetUser(id).valueChanges().subscribe(function (data) {
            console.log(data);
        });
        this.user = new _shared_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.user.nom = localStorage.getItem("nom");
        this.user.prenom = localStorage.getItem("prenom");
        this.user.email = localStorage.getItem("email");
        this.user.password = localStorage.getItem("password");
        this.user.telephone = localStorage.getItem("telephone");
        this.user.matricule = localStorage.getItem("matricule");
        this.user.telephone = this.user.telephone;
        this.user.password = this.user.password;
        this.user.email = this.user.email;
        this.user.matricule = this.user.matricule;
    };
    EditUserPage.prototype.updateForm = function () {
        if ((this.user.email == null) || (this.user.password == null) || (this.user.matricule == null) || (this.user.telephone == null)) {
            alert("Case Vide existante !");
            this.show = "Case vide existant !";
        }
        else {
            this.crudApi.ModifierUser(this.user); // Update user data using CRUD API
            localStorage.setItem("nom", this.user.nom);
            localStorage.setItem("prenom", this.user.prenom);
            localStorage.setItem("email", this.user.email);
            localStorage.setItem("password", this.user.password);
            localStorage.setItem("matricule", this.user.matricule);
            localStorage.setItem("telephone", this.user.telephone);
            window.location.replace('profile');
        }
        // Navigate to user's list page when user data is updated
    };
    EditUserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.page.html */ "./src/app/edit-user/edit-user.page.html"),
            styles: [__webpack_require__(/*! ./edit-user.page.scss */ "./src/app/edit-user/edit-user.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], EditUserPage);
    return EditUserPage;
}());



/***/ })

}]);
//# sourceMappingURL=edit-user-edit-user-module.js.map