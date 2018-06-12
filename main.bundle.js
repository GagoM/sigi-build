webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main-component></app-main-component>\n<!--<app-main></app-main>-->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_related_carousel_carousel_component__ = __webpack_require__("../../../../../src/app/components/home-related/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_shared_menu_menu_component__ = __webpack_require__("../../../../../src/app/components/shared/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_related_sentences_sentences_component__ = __webpack_require__("../../../../../src/app/components/home-related/sentences/sentences.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_related_home_home_alt_component__ = __webpack_require__("../../../../../src/app/components/home-related/home/home-alt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_shared_logo_logo_component__ = __webpack_require__("../../../../../src/app/components/shared/logo/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_main_component_main_component_component__ = __webpack_require__("../../../../../src/app/components/main-component/main-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_bread_order_bread_order_component__ = __webpack_require__("../../../../../src/app/components/bread-order/bread-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_breads_service__ = __webpack_require__("../../../../../src/app/services/breads.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_bread_order_bread_card_bread_card_component__ = __webpack_require__("../../../../../src/app/components/bread-order/bread-card/bread-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_shared_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/components/shared/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_directions_directions_component__ = __webpack_require__("../../../../../src/app/components/directions/directions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_managment_main_main_component__ = __webpack_require__("../../../../../src/app/components/managment/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_managment_tabs_menu_tabs_menu_component__ = __webpack_require__("../../../../../src/app/components/managment/tabs-menu/tabs-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_managment_add_product_add_product_component__ = __webpack_require__("../../../../../src/app/components/managment/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_managment_edit_product_edit_product_component__ = __webpack_require__("../../../../../src/app/components/managment/edit-product/edit-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_managment_orders_orders_component__ = __webpack_require__("../../../../../src/app/components/managment/orders/orders.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_12__components_home_related_home_home_alt_component__["a" /* HomeAltComponent */] },
    { path: 'bread-order', component: __WEBPACK_IMPORTED_MODULE_15__components_bread_order_bread_order_component__["a" /* BreadOrderComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_18__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'directions', component: __WEBPACK_IMPORTED_MODULE_20__components_directions_directions_component__["a" /* DirectionsComponent */] },
    {
        path: 'management', component: __WEBPACK_IMPORTED_MODULE_21__components_managment_main_main_component__["a" /* MainComponent */],
        children: [
            { path: 'add-product', component: __WEBPACK_IMPORTED_MODULE_23__components_managment_add_product_add_product_component__["a" /* AddProductComponent */] },
            { path: 'edit-product', component: __WEBPACK_IMPORTED_MODULE_24__components_managment_edit_product_edit_product_component__["a" /* EditProductComponent */] },
            { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_25__components_managment_orders_orders_component__["a" /* OrdersComponent */] },
        ]
    },
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_19__components_shared_not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: '*', redirectTo: '/not-found' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_related_carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_shared_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_related_sentences_sentences_component__["a" /* SentencesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_home_related_home_home_alt_component__["a" /* HomeAltComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_shared_logo_logo_component__["a" /* LogoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_main_component_main_component_component__["a" /* MainComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_bread_order_bread_order_component__["a" /* BreadOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_bread_order_bread_card_bread_card_component__["a" /* BreadCardComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_shared_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_directions_directions_component__["a" /* DirectionsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_managment_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_managment_tabs_menu_tabs_menu_component__["a" /* TabsMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_managment_add_product_add_product_component__["a" /* AddProductComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_managment_edit_product_edit_product_component__["a" /* EditProductComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_managment_orders_orders_component__["a" /* OrdersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyA0bxjxKwQjIHM0QvFy5snAQzYnAOX2vUg'
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatOptionModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["i" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_breads_service__["a" /* BreadsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n  height: 100vh;\r\n  overflow-y: hidden;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  background-image: url('https://upload.wikimedia.org/wikipedia/commons/0/09/Flours.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.jumbotron{\r\n  text-align: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"jumbotron\">\r\n    <h1>אז מי אנחנו?</h1>\r\n    <h3>בלה בלה בלה בלה בלה </h3>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bread-order/bread-card/bread-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\r\n  max-height: 400px;\r\n  margin-top: 15px;\r\n  width: 28rem;\r\n}\r\n.card-img-top{\r\n  max-height: 250px;\r\n  height: auto;\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bread-order/bread-card/bread-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <img class=\"card-img-top\" src=\"{{img}}\"/>\n  <div class=\" card-body\">\n    <h5 class=\"card-title\">{{ name }}</h5>\n    <p class=\"card-text\">{{ desc }}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/bread-order/bread-card/bread-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreadCardComponent = /** @class */ (function () {
    function BreadCardComponent() {
    }
    BreadCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('img'),
        __metadata("design:type", String)
    ], BreadCardComponent.prototype, "img", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('name'),
        __metadata("design:type", String)
    ], BreadCardComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('desc'),
        __metadata("design:type", String)
    ], BreadCardComponent.prototype, "desc", void 0);
    BreadCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bread-card',
            template: __webpack_require__("../../../../../src/app/components/bread-order/bread-card/bread-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bread-order/bread-card/bread-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BreadCardComponent);
    return BreadCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bread-order/bread-order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n  background-image: url('https://upload.wikimedia.org/wikipedia/commons/0/09/Flours.jpg');\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  text-align: right;\r\n  height: 93vh;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  /*overflow-y: scroll;*/\r\n}\r\n\r\n.breads {\r\n  margin-top: 100px;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  max-width: 80%;\r\n}\r\n\r\n.bread {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bread-order/bread-order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper animated fadeIn\">\n  <div class=\"breads\">\n    <div class=\"bread\" *ngFor=\"let bread of breads\">\n      <app-bread-card img=\"{{bread.image}}\" name=\"{{bread.name}}\" desc=\"{{bread.description}}\"></app-bread-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/bread-order/bread-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_breads_service__ = __webpack_require__("../../../../../src/app/services/breads.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreadOrderComponent = /** @class */ (function () {
    function BreadOrderComponent(breadService) {
        this.breadService = breadService;
        this.breads = [];
    }
    BreadOrderComponent.prototype.ngOnInit = function () {
        this.getAllBreads();
    };
    BreadOrderComponent.prototype.getAllBreads = function () {
        var _this = this;
        this.breadService.getAllBreads().subscribe(function (breads) {
            _this.breads = breads;
            console.log(_this.breads);
        }, function (error) {
            console.error(error);
        });
    };
    BreadOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bread-order',
            template: __webpack_require__("../../../../../src/app/components/bread-order/bread-order.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bread-order/bread-order.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_breads_service__["a" /* BreadsService */]])
    ], BreadOrderComponent);
    return BreadOrderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/directions/directions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n  height: 100vh;\r\n  overflow-y: hidden;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  background-image: url('https://upload.wikimedia.org/wikipedia/commons/0/09/Flours.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.map {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  width: 60%;\r\n  -webkit-box-shadow: 5px 10px 8px #888888;\r\n          box-shadow: 5px 10px 8px #888888;\r\n}\r\n\r\nagm-map {\r\n  /*flex: 1;*/\r\n  height: 400px;\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/directions/directions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"map\">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n      <agm-marker\n        [latitude]=\"lat\"\n        [longitude]=\"lng\"\n        [label]=\"markerTitle\"\n        [iconUrl]=\"icon\"\n      >\n      </agm-marker>\n    </agm-map>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/directions/directions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DirectionsComponent = /** @class */ (function () {
    function DirectionsComponent() {
        this.title = 'My first AGM project';
        this.lat = 32.977493;
        this.lng = 35.099129;
        this.markerTitle = 'סיגלחם';
        this.icon = {
            scaledSize: {
                scale: 3,
                height: 40,
                width: 40
            }
        };
    }
    DirectionsComponent.prototype.ngOnInit = function () {
    };
    DirectionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-directions',
            template: __webpack_require__("../../../../../src/app/components/directions/directions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/directions/directions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DirectionsComponent);
    return DirectionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home-related/carousel/carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n  height: 100%;\r\n\r\n}\r\n\r\n.carousel-inner{\r\n}\r\n\r\n.carousel-item img {\r\n\r\n}\r\n\r\n.carousel-item {\r\n  height: 100vh;\r\n}\r\n\r\n@media screen and (max-width: 1100px) {\r\n  .carousel img {\r\n    max-width: 100%;\r\n  }\r\n  .carousel-item {\r\n    /*height: 40%;*/\r\n  width: 100%;\r\n    height: 30%;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home-related/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-wrapper\">\n  <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\" >\n      <div class=\"carousel-item active\" [ngStyle]=\"{'max-height':getWindowHeight()+'vh'}\">\n        <img class=\"d-block w-100\" src=\"{{ pictures[0] }}\"/>\n      </div>\n      <div class=\"carousel-item animated fadeIn\" *ngFor=\"let pic of pictures | slice:1;\" [ngStyle]=\"{'max-height':getWindowHeight()+'vh'}\">\n        <img class=\"d-block w-100\" src=\"{{ pic }}\"/>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home-related/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.pictures = ['https://i.imgur.com/oCCVKy4.jpg', 'https://i.imgur.com/8RGcSV4.jpg', 'https://i.imgur.com/HGDLdpw.jpg',
            'https://i.imgur.com/mqYLKFV.jpg', 'https://i.imgur.com/1R4iig4.jpg'];
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent.prototype.getWindowHeight = function () {
        return window.innerWidth / 12;
    };
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-carousel',
            template: __webpack_require__("../../../../../src/app/components/home-related/carousel/carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home-related/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home-related/home/home-alt.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n  height: 92vh;\r\n  position: relative;\r\n  padding: 0;\r\n  margin: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.menu {\r\n  z-index: 2;\r\n  right: 0px;\r\n  /*position: fixed;*/\r\n  width: 100%;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  /*z-index: 999;*/\r\n}\r\n\r\n.sentences {\r\n  margin-top: 50px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.transparent{\r\n  width: 100%;\r\n  top: 0;\r\n  z-index: 999;\r\n  height: 92vh;\r\n  position: absolute;\r\n  background-color: rgba(255, 255, 255, 0);\r\n}\r\n\r\n.logo {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n@media screen and (max-width: 1100px) {\r\n  .wrapper {\r\n    /*background: linear-gradient(#a5714d, gray);*/\r\n    /*background: -webkit-linear-gradient(1deg, rgba(97,59,16,1) 6%, rgba(95,59,17,1) 7%, rgba(0,138,138,1) 100%); !* safari5.1+,chrome10+ *!*/\r\n    background-color: beige;\r\n  }\r\n\r\n  .carousel img {\r\n    /*width: 100%;*/\r\n    /*height: auto;*/\r\n  }\r\n\r\n  .carousel {\r\n    position: relative;\r\n    top: 30%;\r\n    max-height: 30px !important;\r\n  }\r\n  .form{\r\n    opacity: 1;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home-related/home/home-alt.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper animated fadeIn\" dir=\"rtl\">\n  <div class=\"carousel\">\n    <app-carousel></app-carousel>\n  </div>\n  <div class=\"transparent\">\n    <div class=\"sentences\">\n      <app-sentences style=\"display: flex; justify-content: center\"></app-sentences>\n    </div>\n    <div class=\"logo\">\n      <app-logo></app-logo>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home-related/home/home-alt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeAltComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeAltComponent = /** @class */ (function () {
    function HomeAltComponent() {
    }
    HomeAltComponent.prototype.ngOnInit = function () {
    };
    HomeAltComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-alt',
            template: __webpack_require__("../../../../../src/app/components/home-related/home/home-alt.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home-related/home/home-alt.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeAltComponent);
    return HomeAltComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home-related/sentences/sentences.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n  font-family: dana-hand-write;\r\n  src: url(" + escape(__webpack_require__("../../../../../src/assets/fonts/DanaYadAlefAlefAlef-Normal.woff")) + ");\r\n}\r\n\r\n.container {\r\n  /*left: 8%;*/\r\n  position: absolute;\r\n  z-index: 2;\r\n  text-align: right;\r\n  color: snow;\r\n  background-color: rgba(20, 20, 17, 0.4);\r\n  border-radius: 5px;\r\n  width: 60%;\r\n  /*justify-content: center;*/\r\n}\r\n\r\n#title {\r\n}\r\n\r\n.sentences {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin-right: 50px;\r\n\r\n  font-size: 2rem;\r\n}\r\n\r\n#typed-strings {\r\n\r\n  font-family: dana-hand-write;\r\n}\r\n\r\n#typed {\r\n  font-family: dana-hand-write;\r\n}\r\n\r\n.main-title {\r\n  font-size: 4em;\r\n}\r\n\r\n/* The typing effect */\r\n\r\n@-webkit-keyframes typing {\r\n  from {\r\n    width: 0\r\n  }\r\n  to {\r\n    width: 100%\r\n  }\r\n}\r\n\r\n@keyframes typing {\r\n  from {\r\n    width: 0\r\n  }\r\n  to {\r\n    width: 100%\r\n  }\r\n}\r\n\r\n/* The typewriter cursor effect */\r\n\r\n@-webkit-keyframes blink-caret {\r\n  from, to {\r\n    border-color: transparent\r\n  }\r\n  50% {\r\n    border-color: orange;\r\n  }\r\n}\r\n\r\n@keyframes blink-caret {\r\n  from, to {\r\n    border-color: transparent\r\n  }\r\n  50% {\r\n    border-color: orange;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1100px) {\r\n  .container {\r\n    width: 100%;\r\n    background-color: beige;\r\n    left: 0;\r\n  }\r\n\r\n  .main-title {\r\n    color: black;\r\n  }\r\n\r\n  .sentences {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin-right: 0px;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    font-size: 2rem;\r\n    color: black;\r\n    font-weight: 500;\r\n  }\r\n\r\n  #typed {\r\n    font-size: 0.9em;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home-related/sentences/sentences.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" dir=\"rtl\">\n  <h1 class=\"main-title d-none d-sm-block d-sm-none d-md-block\"> סיגלחם.</h1>\n  <div class=\"sentences\">\n    <span id=\"title\">לחמי מחמצת&nbsp;\n    </span>\n    <div class=\"b\">\n      <span id=\"typed\"></span>\n    </div>\n    <div id=\"typed-strings\">\n      <p>בעבודת יד </p>\n      <p>בריאים </p>\n      <p>מחומרים טבעיים בלבד </p>\n      <p>במגוון תערובות קמחים </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home-related/sentences/sentences.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SentencesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_typed_js__ = __webpack_require__("../../../../typed.js/lib/typed.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_typed_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_typed_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SentencesComponent = /** @class */ (function () {
    function SentencesComponent() {
        this.title = 'לחמי מחמצת';
    }
    SentencesComponent.prototype.ngOnInit = function () {
        var typed = new __WEBPACK_IMPORTED_MODULE_1_typed_js__('#typed', {
            stringsElement: '#typed-strings',
            typeSpeed: 50,
            loop: true
        });
    };
    SentencesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sentences',
            template: __webpack_require__("../../../../../src/app/components/home-related/sentences/sentences.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home-related/sentences/sentences.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SentencesComponent);
    return SentencesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main-component/main-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main-component/main-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" dir=\"rtl\">\n<app-menu></app-menu>\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/main-component/main-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponentComponent = /** @class */ (function () {
    function MainComponentComponent(router) {
        this.router = router;
    }
    MainComponentComponent.prototype.ngOnInit = function () {
    };
    MainComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-component',
            template: __webpack_require__("../../../../../src/app/components/main-component/main-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main-component/main-component.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], MainComponentComponent);
    return MainComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/managment/add-product/add-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper{\r\n  background-color: white;\r\n  width: 600px;\r\n  height: 400px;\r\n  border-radius: 10px;\r\n  /*display: flex;*/\r\n  /*justify-content: right;*/\r\n}\r\n.example-container{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: right;\r\n      -ms-flex-pack: right;\r\n          justify-content: right;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  text-align: right;\r\n  padding: 25px 25px;\r\n}\r\n.product-name mat-form-field{\r\n  width: 250px;\r\n}\r\n.product-description mat-form-field{\r\n  width: 400px;\r\n  height: 100px;\r\n}\r\n.product-price mat-form-field{\r\n  width: 100px;\r\n}\r\n.product-image mat-form-field{\r\n  width: 250px;\r\n}\r\n/*input.ng-valid.ng-touched{*/\r\n/*border: 1px solid green;*/\r\n/*}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/managment/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" dir=\"rtl\">\n  <div class=\"example-container\">\n    <div class=\"product-name\">\n      <mat-form-field>\n        <input matInput placeholder=\"הכנס שם מוצר\" [formControl]=\"name\" required>\n        <mat-error *ngIf=\"name.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"product-description\">\n      <mat-form-field>\n        <textarea matInput placeholder=\"הכנס תיאור\" [formControl]=\"description\" required></textarea>\n        <mat-error *ngIf=\"description.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"product-price\">\n      <mat-form-field>\n        <input type=\"number\" matInput placeholder=\"הכנס מחיר\" [formControl]=\"price\" required>\n        <mat-error *ngIf=\"price.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"product-image\">\n      <mat-form-field>\n        <input matInput placeholder=\"בחר תמונה\" [formControl]=\"image\" required>\n        <mat-error *ngIf=\"image.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"button\">\n      <button mat-raised-button color=\"accent\" (click)=\"addNewBread()\">הוסף מוצר</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/managment/add-product/add-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_breads_service__ = __webpack_require__("../../../../../src/app/services/breads.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Bread__ = __webpack_require__("../../../../../src/app/models/Bread.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(service) {
        this.service = service;
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
        this.description = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
        this.price = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
        this.image = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
    }
    AddProductComponent.prototype.ngOnInit = function () {
    };
    AddProductComponent.prototype.getErrorMessage = function () {
        return this.name.hasError('required') ? 'שדה זה הינו חובה' :
            this.description.hasError('required') ? 'שדה זה הינו חובה' :
                this.price.hasError('required') ? 'שדה זה הינו חובה' :
                    this.image.hasError('required') ? 'שדה זה הינו חובה' :
                        '';
    };
    AddProductComponent.prototype.addNewBread = function () {
        this.service.addNewBread(new __WEBPACK_IMPORTED_MODULE_3__models_Bread__["a" /* Bread */]('', '', 0, ''));
    };
    AddProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-product',
            template: __webpack_require__("../../../../../src/app/components/managment/add-product/add-product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/managment/add-product/add-product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_breads_service__["a" /* BreadsService */]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/managment/edit-product/edit-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper{\r\n  width: 100% !important;\r\n}\r\n\r\n.table{\r\n  text-align: right;\r\n}\r\n\r\n.products{\r\n  /*width: 200%;*/\r\n/*max-width: 800px;*/\r\n  background-color: white;\r\n  -webkit-box-shadow: 2px 1px 1px 1px #000000;\r\n          box-shadow: 2px 1px 1px 1px #000000;\r\n\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/managment/edit-product/edit-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"products\">\n    <table class=\"table table-striped\" dir=\"rtl\">\n      <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">שם המוצר</th>\n        <th scope=\"col\">תיאור</th>\n        <th scope=\"col\">מחיר</th>\n        <th scope=\"col\">תמונה</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let bread of breads\">\n        <th scope=\"row\">{{breads.indexOf(bread)+1}}</th>\n        <td>{{bread.name}}</td>\n        <td>{{bread.description}}</td>\n        <td>{{bread.price}}</td>\n        <td><img src=\"{{bread.image}}\" style=\"width: 100px\"/></td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/managment/edit-product/edit-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_breads_service__ = __webpack_require__("../../../../../src/app/services/breads.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(service) {
        this.service = service;
        this.breads = [];
    }
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllBreads().subscribe(function (breads) {
            _this.breads = breads;
        }, function (error) {
            console.error(error);
        });
    };
    EditProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-product',
            template: __webpack_require__("../../../../../src/app/components/managment/edit-product/edit-product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/managment/edit-product/edit-product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_breads_service__["a" /* BreadsService */]])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/managment/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n  height: 100vh;\r\n  overflow-y: hidden;\r\n  /*display: flex;*/\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  background-image: url('https://upload.wikimedia.org/wikipedia/commons/0/09/Flours.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  z-index: -99;\r\n}\r\n\r\n.menu {\r\n  height: 200px;\r\n}\r\n\r\n.actions {\r\n  /*height: 400px;*/\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/managment/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"menu\">\r\n    <app-tabs-menu></app-tabs-menu>\r\n  </div>\r\n  <div class=\"actions\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/managment/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(router) {
        this.router = router;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/components/managment/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/managment/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/managment/orders/orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/managment/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  orders works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/managment/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-orders',
            template: __webpack_require__("../../../../../src/app/components/managment/orders/orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/managment/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/managment/tabs-menu/tabs-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n  height: 100vh;\r\n  overflow-y: hidden;\r\n  /*display: flex;*/\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  background-image: url('https://upload.wikimedia.org/wikipedia/commons/0/09/Flours.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  z-index: -99;\r\n}\r\n.menu{\r\n  /*background-color: red;*/\r\n  /*height: 50vh;*/\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.tabs{\r\n  /*background-color: #cccacc;*/\r\n}\r\n.demo-tab-group {\r\n  border: 1px solid #e8e8e8;\r\n}\r\n.demo-tab-content {\r\n  padding: 16px;\r\n  width: 100%;\r\n}\r\nmat-tab{\r\n  color: white;\r\n}\r\n.icon{\r\n  font-size: 1.5em;\r\n  /*color: white;*/\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/managment/tabs-menu/tabs-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" dir=\"rtl\">\n  <div class=\"menu\">\n    <mat-card class=\"tabs\">\n      <mat-card-content>\n        <mat-tab-group class=\"demo-tab-group\">\n          <mat-tab *ngFor=\"let tab of tabs\">\n            <ng-template mat-tab-label>\n              <div class=\"routing\" (click)=\"navTabOne(tab.routeTo)\">\n                <div class=\"icon\">{{ tab.title }}</div>\n                <mat-icon class=\"icon\">{{ tab.icon }}</mat-icon>\n              </div>\n            </ng-template>\n          </mat-tab>\n        </mat-tab-group>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/managment/tabs-menu/tabs-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsMenuComponent = /** @class */ (function () {
    function TabsMenuComponent(router) {
        this.router = router;
        this.tabs = [
            { routeTo: 'add-product', title: 'הוספת מוצר', icon: 'add' },
            { routeTo: 'edit-product', title: 'עריכת מוצר', icon: 'edit' },
            { routeTo: 'orders', title: 'צפייה בהזמנות', icon: 'shopping_cart' }
        ];
    }
    TabsMenuComponent.prototype.ngOnInit = function () {
    };
    TabsMenuComponent.prototype.navTabOne = function (routeTo) {
        this.router.navigate(['management/' + routeTo]);
    };
    TabsMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tabs-menu',
            template: __webpack_require__("../../../../../src/app/components/managment/tabs-menu/tabs-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/managment/tabs-menu/tabs-menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], TabsMenuComponent);
    return TabsMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/logo/logo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\nimg {\r\n  max-height: 180px;\r\n  max-width: 180px;\r\n  background-color: aliceblue;\r\n  opacity: .7;\r\n  border-radius: 250px;\r\n  cursor: pointer;\r\n}\r\n\r\n.form {\r\n  height: 168px;\r\n  width: 175px;\r\n  background-color: aliceblue;\r\n  opacity: .7;\r\n  border-radius: 250px;\r\n  cursor: pointer;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.form input {\r\n  width: 80%;\r\n  padding-right: 15px;\r\n  outline: none;\r\n}\r\n\r\n.user-name {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.password {\r\n  margin-top: 15px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  padding-right: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/logo/logo.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!formIsOn\" class=\"image animated flipInY\" (click)=\"switchFormMode()\">\n  <img src=\"https://i.imgur.com/AtFgLA3.png\"/>\n</div>\n<div class=\"form animated flipInY\" *ngIf=\"formIsOn\">\n  <i class=\"fas fa-times\" (click)=\"switchFormMode()\" style=\"top: 10px; position: absolute\"></i>\n  <div class=\"user-name\">\n    <input type=\"text\" placeholder=\"שם משתמש\" style=\"border-radius: 50px\"/>\n  </div>\n  <div class=\"password\">\n    <input type=\"text\" placeholder=\"סיסמא\" style=\"border-radius: 50px\"/>\n  </div>\n  <button class=\"btn btn-success btn-sm\" style=\"margin-top: 5px\">התחבר</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/logo/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
        this.formIsOn = false;
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent.prototype.switchFormMode = function () {
        this.formIsOn = !this.formIsOn;
    };
    LogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logo',
            template: __webpack_require__("../../../../../src/app/components/shared/logo/logo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/logo/logo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.menu-wrapper {*/\r\n  /*display: flex;*/\r\n  /*justify-content: right;*/\r\n  /*position: absolute;*/\r\n  /*background-color: rgb(83, 54, 27);*/\r\n  /*border-radius: 5px;*/\r\n  /*color: white;*/\r\n  /*font-weight: 400;*/\r\n  /*text-align: right;*/\r\n  /*width: 450px;*/\r\n  /*}*/\r\n  .menu-wrapper a {\r\n  color: white;\r\n  /*flex: 1;*/\r\n}\r\n  .menu-wrapper a:hover {\r\n  -webkit-animation: change-color 1s;\r\n          animation: change-color 1s;\r\n  color: orange;\r\n\r\n}\r\n  @-webkit-keyframes change-color {\r\n  from {\r\n    color: white;\r\n  }\r\n  to {\r\n    color: orange;\r\n  }\r\n}\r\n  @keyframes change-color {\r\n  from {\r\n    color: white;\r\n  }\r\n  to {\r\n    color: orange;\r\n  }\r\n}\r\n  .navbar {\r\n  background-color: black;\r\n  width: 100%;\r\n  text-align: right;\r\n}\r\n  .navbar-brand{\r\n  margin-left: 15px;\r\n}\r\n  #brand :hover{\r\n  color: #ff6bc1;\r\n  -webkit-animation: none;\r\n          animation: none;\r\n}\r\n  .divider {\r\n  opacity: .3;\r\n  border-bottom: 1px solid white;\r\n}\r\n  .navbar-toggler {\r\n  color: white;\r\n  outline: none;\r\n}\r\n  .navbar a {\r\n  color: white;\r\n  font-size: 1.1em;\r\n\r\n}\r\n  .active{\r\n  color: orange !important;\r\n  font-size: 1.1em;\r\n  /*border-bottom: 1px solid orange;*/\r\n\r\n}\r\n  .navbar a:hover {\r\n  -webkit-animation: change-color 1s;\r\n          animation: change-color 1s;\r\n  color: orange;\r\n}\r\n  .navbar a:after {\r\n  display: block;\r\n  content: '';\r\n  border-bottom: solid 2px orange;\r\n  -webkit-transform: scaleX(0);\r\n          transform: scaleX(0);\r\n  -webkit-transition: -webkit-transform 250ms ease-in-out;\r\n  transition: -webkit-transform 250ms ease-in-out;\r\n  transition: transform 250ms ease-in-out;\r\n  transition: transform 250ms ease-in-out, -webkit-transform 250ms ease-in-out;\r\n}\r\n  .navbar a:hover:after {\r\n  -webkit-transform: scaleX(1);\r\n          transform: scaleX(1);\r\n}\r\n  .fa-home{\r\n  font-size: 1.5em;\r\n}\r\n  @media screen and (max-width: 1100px){\r\n  .menu-wrapper a:hover {\r\n    -webkit-animation: change-color 1s;\r\n            animation: change-color 1s;\r\n    color: orange;\r\n  }\r\n  .navbar a:after {\r\n    border-bottom: none;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg\">\n  <a class=\"navbar-brand d-lg-none\" href=\"#\">סיגלחם.</a>\n  <button class=\"navbar-toggler\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n    <i class=\"fas fa-bars animated flipInX\" *ngIf=\"!menuIsToggled\" (click)=\"onMenuToggle()\" data-toggle=\"collapse\"\n       data-target=\"#navbarSupportedContent\"></i>\n    <i class=\"fas fa-times animated flipInX\" *ngIf=\"menuIsToggled\" (click)=\"onMenuToggle()\" data-toggle=\"collapse\"\n       data-target=\"#navbarSupportedContent\"></i>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav\">\n      <a id=\"brand\" class=\"navbar-brand\" href=\"#\" routerLink=\"/home\" routerLinkActive=\"active\"><i\n        class=\"fas fa-home\"></i></a>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/bread-order\" routerLinkActive=\"active\">הלחמים שלנו</a>\n      </li>\n      <li>\n        <div class=\"divider\"></div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/about\" routerLinkActive=\"active\">אודות</a>\n      </li>\n      <li>\n        <div class=\"divider\"></div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/directions\" routerLinkActive=\"active\">איך מגיעים אלינו?</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.menuIsToggled = false;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.onMenuToggle = function () {
        this.menuIsToggled = !this.menuIsToggled;
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/components/shared/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper{\r\n  height: 100vh;\r\n  background-color: beige;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <h1>Page Not Found!</h1>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/components/shared/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/Bread.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bread; });
var Bread = /** @class */ (function () {
    function Bread(name, description, price, image) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }
    return Bread;
}());



/***/ }),

/***/ "../../../../../src/app/services/breads.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Bread__ = __webpack_require__("../../../../../src/app/models/Bread.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreadsService = /** @class */ (function () {
    function BreadsService(http) {
        this.http = http;
        this.breads = [
            new __WEBPACK_IMPORTED_MODULE_3__models_Bread__["a" /* Bread */]('לחם א 1', 'לחם מקמח שיפון 100% בתוספת חמוציות ואגוזים', 25, 'https://static1.squarespace.com/static/56fd379ad51cd41823eb00a1/56fecd6ab09f95b37d28b8d0/571b6ccc1bbee027950a0ceb/1461415118703/boulangerie-jade-products-breads3.jpg?format=1500w'),
            new __WEBPACK_IMPORTED_MODULE_3__models_Bread__["a" /* Bread */]('לחם א 2', 'לחם מקמח קוסמין 100% ממחמצת טרייה', 15, 'https://fastfoodinusa.com/templates/uploads/gallery/big/Panera_Bread_Rye_Loaf.jpg'),
            new __WEBPACK_IMPORTED_MODULE_3__models_Bread__["a" /* Bread */]('לחם א 3', 'לחם 50% מלא 50% לבן למושחתים שבינינו', 17, 'http://www.brezelbar.com.au/wp-content/uploads/2017/10/rye-roll-small.jpg'),
            new __WEBPACK_IMPORTED_MODULE_3__models_Bread__["a" /* Bread */]('לחם א 4', 'לחם 100% קמח מלא בתוספת עגבניות מיובשות ופלפלים קלויים', 17, 'http://www.recipe4living.com/assets/itemimages/400/400/3/default_590913972ffb4361bcbdd181773eb493_Depositphotos_13255822_m.jpg'),
        ];
    }
    BreadsService.prototype.getAllBreads = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observe) {
            observe.next(_this.breads);
            observe.complete();
        });
    };
    BreadsService.prototype.addNewBread = function (bread) {
        // this.http.post()
    };
    BreadsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BreadsService);
    return BreadsService;
}());



/***/ }),

/***/ "../../../../../src/assets/fonts/DanaYadAlefAlefAlef-Normal.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "DanaYadAlefAlefAlef-Normal.482cca6a5a343f5a471c.woff";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map