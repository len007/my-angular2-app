import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
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
