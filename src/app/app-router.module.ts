import { Routes } from '@angular/router';

export const AppRouterModule: Routes = [{
    path: 'list',
    loadChildren: './list/list.module#ListModule',
}, {
    path: 'collection',
    loadChildren: './collection/collection.module#CollectionModule',
},
{
    path: 'detail/:id',
    loadChildren: './detail/detail.module#DetailModule'
}, {
    path: 'feature',
    loadChildren: './feature-test/feature.module#FeatureModule',
}, {
    path: '**',
    redirectTo: 'feature'
}];
