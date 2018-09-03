import { Routes } from '@angular/router';

export const AppRouterModule: Routes = [
    {
        path: 'len',
        loadChildren: './main/main.module#MainModule',
    },
    {
        path: '**',
        redirectTo: 'len',
    }
];
