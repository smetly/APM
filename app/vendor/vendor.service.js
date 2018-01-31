System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, http_2, Observable_1;
    var VendorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            VendorService = (function () {
                function VendorService(_http) {
                    this._http = _http;
                    //private _propertyUrl = 'api/property/property.json';
                    this._vendorUrl = 'http://s0640205/CheckPointWS/api/Vendor';
                    this._jsonFile = 'api/vendor/vendor.json';
                }
                VendorService.prototype.getVendor = function () {
                    return this._http.get(this._vendorUrl)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                VendorService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                VendorService.prototype.postJson = function () {
                    //this._http.post('http://s0640205/CheckPointWs/api/Vendor',)
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers, method: "post" });
                    //jsonfile = this._jsonFile;
                    return this._http.post(this._vendorUrl, JSON.stringify(this._jsonFile), options)
                        .toPromise()
                        .then(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                VendorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], VendorService);
                return VendorService;
            }());
            exports_1("VendorService", VendorService);
        }
    }
});
//# sourceMappingURL=vendor.service.js.map