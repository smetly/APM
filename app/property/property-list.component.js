System.register(['angular2/core', './property-filter.pipe', './property.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, property_filter_pipe_1, property_service_1, router_1;
    var PropertyListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (property_filter_pipe_1_1) {
                property_filter_pipe_1 = property_filter_pipe_1_1;
            },
            function (property_service_1_1) {
                property_service_1 = property_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            PropertyListComponent = (function () {
                function PropertyListComponent(_propertyService) {
                    this._propertyService = _propertyService;
                    this.pageTitle = 'Property List';
                    this.message = 'Here is the List';
                    this.imageWidth = 75;
                    this.imageMargin = 2;
                    this.showImage = false;
                }
                PropertyListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                PropertyListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._propertyService.getProperty()
                        .subscribe(function (property) { return _this.property = property; }, function (error) { return _this.errorMessage = error; });
                };
                PropertyListComponent.prototype.onRatingClicked = function (message) {
                    this.pageTitle = 'Property List: ' + message;
                };
                PropertyListComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/property/property-list.component.html",
                        styleUrls: ['app/property/property-list.component.css'],
                        pipes: [property_filter_pipe_1.PropertyFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [property_service_1.PropertyService])
                ], PropertyListComponent);
                return PropertyListComponent;
            }());
            exports_1("PropertyListComponent", PropertyListComponent);
        }
    }
});
//# sourceMappingURL=property-list.component.js.map