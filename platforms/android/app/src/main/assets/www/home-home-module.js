(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    </ion-buttons>\n    <ion-title>\n        Connexion\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"welcome-card\">\n        <ion-img src=\"/assets/park3.jpg\"></ion-img>\n        <ion-card-header>\n        <ion-card-subtitle>Smart Parking</ion-card-subtitle>\n        <ion-card-title>Bienvenue</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n<form (ngSubmit)=\"Searchannonce()\" >\n<ion-item>\n  <ion-label position=\"floating\">E-mail</ion-label>\n  <ion-input name=\"email\"  [(ngModel)]=\"user.email\" type=\"email\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label position=\"floating\">Mot de passe</ion-label>\n  <ion-input name=\"password\"  [(ngModel)]=\"user.password\" type=\"password\"></ion-input>\n</ion-item>\n<h6 style=\"color: red\">{{invalide}}</h6>\n<ion-button type=\"submit\" expand=\"block\">Connexion</ion-button>\n<br>\n  <h2 style=\"text-align: center\"> <a  href=\"/list\">S'abonner</a></h2> \n\n</form>\n      </ion-card-content>\n    </ion-card>\n   \n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXE1hbGVrXFxEZXNrdG9wXFxVc2VyU2lkZS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user */ "./src/app/shared/user.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



 // CRUD API service class

var HomePage = /** @class */ (function () {
    function HomePage(crudApi, router) {
        this.crudApi = crudApi;
        this.router = router;
        this.invalide = "";
        this.keys = new Array(100);
    }
    HomePage.prototype.ngOnInit = function () {
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
                console.log(a);
                a['$key'] = item.key;
                console.log(item.key);
                _this.keys[i] = item.key;
                _this.Users.push(a);
            });
        });
        console.log("started");
    };
    HomePage.prototype.Searchannonce = function (user) {
        var email = this.user.email;
        var password = this.user.password;
        this.n = 0;
        var b = 0;
        for (var _i = 0, _a = this.Users; _i < _a.length; _i++) {
            var us = _a[_i];
            this.n = this.n + 1;
            if ((email == us.email) && (password == us.password)) {
                localStorage.setItem("nom", us.nom);
                localStorage.setItem("prenom", us.prenom);
                localStorage.setItem("matricule", us.matricule);
                localStorage.setItem("email", us.email);
                localStorage.setItem("password", us.password);
                localStorage.setItem("telephone", us.telephone);
                localStorage.setItem("id", us.id);
                localStorage.setItem("key", this.keys[b + 1]);
                this.router.navigate(['abonnement']);
                this.user.email = null;
                this.user.password = null;
            }
            else {
                b = b + 1;
            }
        }
        if (this.n == b) {
            this.invalide = "* Email ou Mot de passe incorrecte!";
        }
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map