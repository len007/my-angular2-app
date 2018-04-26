import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component'
import { RouterModule, Routes } from '@angular/router';
const testRoutes:Routes = [{
    path: "",
    component: HomeComponent
}]
@NgModule({
    imports: [
        RouterModule.forChild(testRoutes)
    ],
    declarations: [ HomeComponent ],
    providers: [],
    exports: [ HomeComponent ]
})
export class HomeModule { }
