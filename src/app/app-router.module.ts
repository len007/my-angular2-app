import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const AppRouterModule: Routes = [
    {
        path: 'len',
        component: MainComponent,
    },
    {
        path: '**',
        component: MainComponent,
    }
];
