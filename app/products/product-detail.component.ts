import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import { IProduct } from './product';
import {ProductListComponent} from './product-list.component';
import {ProductService} from './product.service';

@Component({
    templateUrl: 'app/products/product-detail.component.html',

})

export class ProductDetailComponent{

    pageTitle: string = 'Product Detail';

    constructor(private _routeParams: RouteParams,
                private _router: Router,
                private _productService: ProductService){
      let id = +this._routeParams.get('id');
      this.pageTitle += `: ${id}`;
    }

    onBack(): void{
      this._router.navigate(['Products']);
    }


}
