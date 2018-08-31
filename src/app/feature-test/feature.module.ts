import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { FeatureRouterModule } from './feature-router.module'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(FeatureRouterModule)
    ],
    declarations: [ FeatureComponent ],
    exports: [ FeatureComponent ]
})
export class FeatureModule { }
