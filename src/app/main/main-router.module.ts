import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ListComponent } from '../list/list.component';

export const MainRouterModule: Routes = [{
        path: 'len',
        children:[
            {
                path: '',
                component: ListComponent,
            },
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'list',
                component: ListComponent
            },
            {
                path: '**',
                component: HomeComponent
            }
        ]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'len/home'
    }
];
