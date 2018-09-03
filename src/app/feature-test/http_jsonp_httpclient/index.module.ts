import { NgModule } from "@angular/core";
import { indexComponent } from "./index.component";
import { RouterModule } from "@angular/router";
import { JsonpModule } from "@angular/http";  // 引入Jsonp模块
import { CommonModule } from "@angular/common"; // 为了引入json管道

import { myhttpService } from "./http.service";
import { myhttpClientService } from "./httpclient.service";
import { myJsonpService } from "./jsonp.service";

@NgModule({
    declarations: [
        indexComponent
    ],
    imports: [
        JsonpModule,
        CommonModule,
        RouterModule.forChild([{
            path: '', component: indexComponent
        }])
    ],
    exports: [indexComponent],
    providers: [
        myhttpService,
        myhttpClientService,
        myJsonpService
    ]
})
export class indexModule { }