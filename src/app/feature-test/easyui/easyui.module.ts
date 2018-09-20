import { NgModule } from "@angular/core";
import { EasyuiComponent } from "./easyui.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: EasyuiComponent
        }])
    ],
    declarations: [EasyuiComponent],
    exports: [EasyuiComponent],
})
export class EasyuiModule { }