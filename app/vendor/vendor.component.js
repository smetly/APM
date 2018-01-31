System.register(['angular2/core', './vendor.service', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, vendor_service_1, router_1;
    var VendorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vendor_service_1_1) {
                vendor_service_1 = vendor_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            VendorComponent = (function () {
                function VendorComponent(_vendorService) {
                    this._vendorService = _vendorService;
                    this.pageTitle = 'This is the Vendor Page!!';
                    this.errorMessage = '';
                    this.jsonFile = 'api/vendor/vendor.json';
                }
                VendorComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._vendorService.getVendor()
                        .subscribe(function (vendor) { return _this.vendor = vendor; }, function (error) { return _this.errorMessage = error; });
                    //this._propertyService.getProperty()
                    //    .subscribe(
                    //        property => this.property = property,
                    //        error => this.errorMessage = <any>error);
                };
                VendorComponent.prototype.postJson = function () {
                    var _this = this;
                    this._vendorService.postJson(this.vendor)
                        .subscribe(function (error) { return _this.errorMessage = error; });
                    //this._vendorService.postVendor()
                    //    .subscribe
                };
                VendorComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/vendor/vendor.component.html",
                        styleUrls: ['app/property/property-list.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [vendor_service_1.VendorService])
                ], VendorComponent);
                return VendorComponent;
            }());
            exports_1("VendorComponent", VendorComponent);
        }
    }
});
//# sourceMappingURL=vendor.component.js.map