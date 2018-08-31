import { MainComponent } from './main.component';
import { Routes } from '@angular/router';

export const MainRouterModule: Routes = [{
    path: '',
    component: MainComponent,
    children: [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'len/list'
    }, {
        path: 'len/list',
        loadChildren: '../list/list.module#ListModule',
    }, {
        path: 'len/collection',
        loadChildren: '../collection/collection.module#CollectionModule',
    },
    {
        path: 'len/detail/:id',
        loadChildren: '../detail/detail.module#DetailModule'
    }, {
        path: 'len/feature',
        loadChildren: '../feature-test/feature.module#FeatureModule',
    }, {
        path: '**',
        redirectTo: 'len/list'
    }]
}];
