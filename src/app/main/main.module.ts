import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainRouterModule } from './main-router.module'
import { MainComponent } from './main.component';
import { BrowserModule } from '@angular/platform-browser';
import { ListModule } from '../list/list.module';
import { HomeModule } from '../home/home.module';

@NgModule({
    imports: [
        BrowserModule,
        ListModule,
        HomeModule,
        RouterModule.forChild(MainRouterModule)
    ],
    declarations: [
        MainComponent,
    ],
    exports: [
        MainComponent
    ]
})
export class MainModule { }
