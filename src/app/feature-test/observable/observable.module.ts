import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ObservableComponent } from "./observable.component";

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '', component: ObservableComponent
        }])
    ],
    declarations: [ObservableComponent],
    exports:[ObservableComponent]
})
export class ObservableModule { }