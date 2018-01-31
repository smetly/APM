import {Injectable} from 'angular2/core';
import {IVendor} from './vendor';
import {Http, Response } from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class VendorService{
    //private _propertyUrl = 'api/property/property.json';

    private _vendorUrl = 'http://s0640205/CheckPointWS/api/Vendor';
    private _jsonFile = 'api/vendor/vendor.json';

    constructor(private _http:Http){

    }
    getVendor(): Observable<IVendor>{
        return this._http.get(this._vendorUrl)
            .map((response: Response) => <IVendor>response.json())
            .do(data=> console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);

    }


    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error ||'Server error');
    }

    postJson(): Promise<IVendor>{
      //this._http.post('http://s0640205/CheckPointWs/api/Vendor',)
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers, method: "post" });
      //jsonfile = this._jsonFile;

      return this._http.post(this._vendorUrl, JSON.stringify(this._jsonFile),options)
                 .toPromise()
                 .then(res => res.json().data)
                 //.map(res => res.json().data)
                 .catch(this.handleError);


    }


}
