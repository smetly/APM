import { Component, OnInit } from 'angular2/core';

import { IProperty } from './property';
import { PropertyFilterPipe } from './property-filter.pipe';
import { PropertyService } from './property.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    templateUrl : `app/property/property-list.component.html`,
    styleUrls:['app/property/property-list.component.css'],
    pipes:[PropertyFilterPipe],
    directives:[ROUTER_DIRECTIVES]
})

export class PropertyListComponent implements OnInit{
    pageTitle: string = 'Property List';
    message: string = 'Here is the List';
    imageWidth: number  = 75;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    property: IProperty[];
    errorMessage: string;

    constructor (private _propertyService: PropertyService){

    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{

        this._propertyService.getProperty()
            .subscribe(
                property => this.property = property,
                error => this.errorMessage = <any>error);

    }
    onRatingClicked(message: string): void {
        this.pageTitle = 'Property List: ' + message;
    }


}
