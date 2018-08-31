import { Routes } from '@angular/router';

export const AppRouterModule: Routes = [
    {
        path: '',
        loadChildren: './main/main.module#MainModule',
    },
    {
        path: '**',
        redirectTo: '',
    }
];
