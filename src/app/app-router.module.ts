import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const AppRouterModule: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: '**',
        redirectTo: '',
    }
];
