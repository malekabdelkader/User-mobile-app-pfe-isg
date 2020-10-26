(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parking-parking-module"],{

/***/ "./src/app/parking/parking.module.ts":
/*!*******************************************!*\
  !*** ./src/app/parking/parking.module.ts ***!
  \*******************************************/
/*! exports provided: ParkingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingPageModule", function() { return ParkingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _parking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parking.page */ "./src/app/parking/parking.page.ts");







var routes = [
    {
        path: '',
        component: _parking_page__WEBPACK_IMPORTED_MODULE_6__["ParkingPage"]
    }
];
var ParkingPageModule = /** @class */ (function () {
    function ParkingPageModule() {
    }
    ParkingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_parking_page__WEBPACK_IMPORTED_MODULE_6__["ParkingPage"]]
        })
    ], ParkingPageModule);
    return ParkingPageModule;
}());



/***/ }),

/***/ "./src/app/parking/parking.page.html":
/*!*******************************************!*\
  !*** ./src/app/parking/parking.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title>Parking</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-list>\n<ion-item>\n  <ion-icon name=\"car\"> </ion-icon>\n  <ion-label style=\"margin-left: 5%\"> Places :</ion-label>\n</ion-item>\n<ion-item><ion-label>Capacité </ion-label>{{totale}}</ion-item>\n<ion-item><ion-label>Réservées</ion-label>{{capacite}}</ion-item>\n<ion-item  href=\"/parking\">\n<ion-icon style=\"margin-left: 37%\" name=\"refresh-circle\"></ion-icon>\n<label style=\"color: lightseagreen\">Actualiser</label>\n</ion-item>\n</ion-list>\n<ion-item>\n    <ion-icon name=\"locate\"></ion-icon>\n    <ion-label style=\"margin-left: 5%\"> Map :</ion-label>\n  </ion-item>\n<iframe width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" title=\"Parking\" src=\"//www.arcgis.com/apps/Embed/index.html?webmap=38bcf284174e4e9894037da31a338c3f&extent=10.0884,33.882,10.094,33.8844&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light\"></iframe>\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/parking/parking.page.scss":
/*!*******************************************!*\
  !*** ./src/app/parking/parking.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcmtpbmcvcGFya2luZy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/parking/parking.page.ts":
/*!*****************************************!*\
  !*** ./src/app/parking/parking.page.ts ***!
  \*****************************************/
/*! exports provided: ParkingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingPage", function() { return ParkingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_abonnement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/abonnement.service */ "./src/app/shared/abonnement.service.ts");


 // CRUD API service class
var ParkingPage = /** @class */ (function () {
    function ParkingPage(crudApi) {
        this.crudApi = crudApi;
        this.hideWhenNoStudent = false; // Hide Parks data table when no Park.
        this.noData = false; // Showing No Park Message, when no Park in database.
        this.preLoader = true; // Save Parks data in Park's array.
    }
    ParkingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataState(); // Initialize Park's list, when component is ready
        var s = this.crudApi.GetAbonnementsList();
        console.log(s);
        s.snapshotChanges().subscribe(function (data) {
            _this.Abonnement = [];
            data.forEach(function (item) {
                var a = item.payload.toJSON();
                //console.log(a);
                a['$key'] = item.key;
                _this.Abonnement.push(a);
            });
        });
        this.totale = "8";
        this.capacite = localStorage.getItem("reserve");
    };
    ParkingPage.prototype.dataState = function () {
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
    ParkingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parking',
            template: __webpack_require__(/*! ./parking.page.html */ "./src/app/parking/parking.page.html"),
            styles: [__webpack_require__(/*! ./parking.page.scss */ "./src/app/parking/parking.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_abonnement_service__WEBPACK_IMPORTED_MODULE_2__["AbonnementService"]])
    ], ParkingPage);
    return ParkingPage;
}());



/***/ })

}]);
//# sourceMappingURL=parking-parking-module.js.map