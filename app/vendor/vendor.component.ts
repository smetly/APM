import { Component, OnInit } from 'angular2/core';
import { VendorService } from './vendor.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {IVendor} from './vendor';


@Component({
    templateUrl : `app/vendor/vendor.component.html`,
    styleUrls:['app/property/property-list.component.css'],
    directives:[ROUTER_DIRECTIVES],
})

export class VendorComponent implements OnInit{

  pageTitle: string = 'This is the Vendor Page!!';
  vendor: IVendor;
  errorMessage: string = '';
  jsonFile = 'api/vendor/vendor.json';

  constructor (private _vendorService: VendorService){

  }

  ngOnInit(): void{

       this._vendorService.getVendor()
           .subscribe(
                vendor => this.vendor = vendor,
                error => this.errorMessage = <any>error);
      //this._propertyService.getProperty()
      //    .subscribe(
      //        property => this.property = property,
      //        error => this.errorMessage = <any>error);

  }

  postJson(): void{
    this._vendorService.postJson(this.vendor)
        .subscribe(error => this.errorMessage = <any>error);

    //this._vendorService.postVendor()
    //    .subscribe

  }


}
