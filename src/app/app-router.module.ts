import { Routes, RouterModule, Route } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

export const AppRouterModule: Routes =[
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {
        path: 'list',
        loadChildren: 'app/list/list.module#ListModule'
    },
    {
        path:'**',
        loadChildren: 'app/home/home.module#HomeModule'
    }
];