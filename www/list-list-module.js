(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");







var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
                    }
                ])
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/list/list.page.html":
/*!*************************************!*\
  !*** ./src/app/list/list.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    </ion-buttons>\n    <ion-title>\n        S'abonner  \n       </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <ion-img src=\"/assets/park3.jpg\"></ion-img>\n    <ion-card-header>\n    <ion-card-subtitle>Smart Parking</ion-card-subtitle>\n    <ion-card-subtitle >Je suis abonné: <a  href=\"/home\">Se connecter</a></ion-card-subtitle> \n\n    <ion-card-title>Abonnez-Vous</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n\n      <form (ngSubmit)=\"submitUserData()\" >\n\n        <ion-item>\n           <ion-label position=\"floating\">Nom</ion-label>\n           <ion-input [(ngModel)]=\"user.nom\"   name=\"nom\" type=\"text\" required></ion-input>\n        </ion-item>\n\n        <ion-item>\n           <ion-label  position=\"floating\">Prénom</ion-label>\n           <ion-input [(ngModel)]=\"user.prenom\" name=\"nom\" type=\"text\" required></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Télephone</ion-label>\n            <ion-input [(ngModel)]=\"user.telephone\" name=\"nom\" type=\"number\" required></ion-input>\n        </ion-item>\n       \n        <ion-item>\n            <ion-label  position=\"floating\">E-mail</ion-label>\n            <ion-input [(ngModel)]=\"user.email\" name=\"nom\"  type=\"email\"  pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" required></ion-input>\n            <h3 style=\"color: red\">{{message}}</h3>\n\n       </ion-item>\n\n       <ion-item>\n          <ion-label position=\"floating\">Mot de passe</ion-label>\n          <ion-input  [(ngModel)]=\"user.password\" name=\"nom\"   type=\"password\" required></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Confirmer Mot de pase</ion-label>\n            <ion-input  [(ngModel)]=\"confirm\" name=\"nom\"   type=\"password\" required></ion-input>\n            <h3 style=\"color: red\">{{showw}}</h3>\n          </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Matricule de voiture</ion-label>\n            <ion-input [(ngModel)]=\"user.matricule\"     name=\"nom\" type=\"text\" required></ion-input>\n        </ion-item>\n<br>\n        <ion-text>\n        <h3 style=\"color: red\">{{show}}</h3>\n        <h3 style=\"color:green\">{{showww}}</h3>\n\n        </ion-text>\n          <ion-button type=\"submit\" expand=\"block\">Envoyer</ion-button>\n          <h2 style=\"text-align: center\"> <a  href=\"/home\">Se connecter</a></h2> \n\n\n</form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user */ "./src/app/shared/user.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



 // CRUD services API

var ListPage = /** @class */ (function () {
    // Define FormGroup to user's form
    function ListPage(crudApi, // CRUD API services
    router) {
        this.crudApi = crudApi;
        this.router = router;
        this.keys = new Array(100);
    }
    ListPage.prototype.submitUserData = function (user) {
        this.message = "";
        if ((this.user.email == null) || (this.user.matricule == null) || (this.user.nom == null) || (this.user.password == null) || (this.user.prenom == null) || (this.user.telephone == null)) {
            this.show = " * Tous les champs sont obligatoires";
        }
        else if (this.confirmemail() == "exist") {
            this.message = "email existant !";
        }
        else if (this.user.password !== this.confirm) {
            this.showw = "La confirmation du mot de passe ne correspond pas";
        }
        else {
            this.user.grade = "Abonné";
            this.crudApi.AjouterUser(this.user); // Submit user data using CRUD API
            this.router.navigate(['home']);
            this.user.email = null;
            this.user.nom = null;
            this.user.prenom = null;
            this.user.password = null;
            this.user.telephone = null;
            this.user.matricule = null;
            this.confirm = null;
            this.show = null;
            this.showww = "Ajouté Avec Succes";
        }
    };
    ;
    ListPage.prototype.confirmemail = function () {
        var exist = "exist";
        var eemail = this.user.email;
        for (var _i = 0, _a = this.Users; _i < _a.length; _i++) {
            var us = _a[_i];
            if (this.user.email == us.email) {
                return (exist);
            }
        }
    };
    ListPage.prototype.ngOnInit = function () {
        var _this = this;
        var i = 0;
        this.user = new _shared_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        var s = this.crudApi.GetUsersList();
        console.log(s);
        s.snapshotChanges().subscribe(function (data) {
            _this.Users = [];
            data.forEach(function (item) {
                var a = item.payload.toJSON();
                i++;
                //console.log(a);
                a['$key'] = item.key;
                console.log(item.key);
                _this.keys[i] = item.key;
                _this.Users.push(a);
            });
        });
        console.log("started");
        this.showww = null;
        this.showw = null;
        this.show = null;
        this.message = null;
        this.crudApi.GetUsersList(); // Call ModifierClientsList() before main form is being called
        this.user = new _shared_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.page.html */ "./src/app/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ListPage);
    return ListPage;
}());

/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}*/


/***/ })

}]);
//# sourceMappingURL=list-list-module.js.map