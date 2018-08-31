import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainRouterModule } from './main-router.module'
import { MainComponent } from './main.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
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
