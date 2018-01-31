import {Component } from 'angular2/core';
import {ProductListComponent} from './products/product-list.component';
import {PropertyListComponent} from './property/property-list.component';
import {ProductService} from './products/product.service';
import {PropertyService} from './property/property.service';
import {VendorComponent} from './vendor/vendor.component';
import {VendorService} from './vendor/vendor.service';
import {HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import {WelcomeComponent} from './home/welcome.component';
import {ProductDetailComponent} from './products/product-detail.component';
@Component({
    selector: 'pm-app',
    template : `<div>
                <nav class='navbar navbar-default'>
                    <div class='container-fluid'>
                        <a class='navbar-brand'>{{pageTitle}}</a>
                        <ul class='nav navbar-nav'>
                            <li><a [routerLink]="['Welcome']">Home</a></li>
                            <li><a [routerLink]="['Products']">Product List</a></li>
                            <li><a [routerLink]="['Property']">Property List</a></li>
                            <li><a [routerLink]="['Vendor']">Vendor List</a></li>
                         </ul>
                      </div>
                      </nav>
                      <div class='container'>
                        <router-outlet></router-outlet>
                      </div>
                      </div>
                 `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService, PropertyService, VendorService, HTTP_PROVIDERS, ROUTER_PROVIDERS]

})

@RouteConfig ([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
    { path: '/products', name: 'Products', component: ProductListComponent},
    { path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent},
    { path: '/property', name:'Property', component: PropertyListComponent},
    { path: '/vendor', name:'Vendor', component:VendorComponent}
])
export class AppComponent{
    pageTitle: string = 'Customer Contact List';
}
