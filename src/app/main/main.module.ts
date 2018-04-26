import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MainRouterModule } from './main-router.module'
import { MainComponent } from './main.component';
import { BrowserModule } from '@angular/platform-browser';
import { ListModule } from '../list/list.module';
import { HomeModule } from '../home/home.module';
import { HomeComponent } from '../home/home.component';
import { ListComponent } from '../list/list.component';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(MainRouterModule)
    ],
    declarations: [
        MainComponent,
        HomeComponent,
        ListComponent
    ],
    exports: [
        MainComponent
    ]
})
export class MainModule { }