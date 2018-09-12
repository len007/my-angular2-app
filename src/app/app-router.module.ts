import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const AppRouterModule: Routes = [{
    path: 'list',
    loadChildren: './list/list.module#ListModule',
}, {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    }, {
    path: '**',
    redirectTo: 'list',
}];
