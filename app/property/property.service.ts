import {Injectable} from 'angular2/core';
import {IProperty} from './property';
import {Http, Response } from 'angular2/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class PropertyService{
    //private _propertyUrl = 'api/property/property.json';

    private _propertyUrl = 'https://project-7453768492658223022.firebaseio.com/.json';

    constructor(private _http:Http){

    }
    getProperty(): Observable<IProperty[]>{
        return this._http.get(this._propertyUrl)
            .map((response: Response) => <IProperty[]>response.json())
            .do(data=> console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);

    }

    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error ||'Server error');
    }


}
