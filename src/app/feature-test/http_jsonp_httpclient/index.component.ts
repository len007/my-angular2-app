import { Component, OnInit } from "@angular/core";

import { myhttpService } from "./http.service";
import { myhttpClientService } from "./httpclient.service";
import { myJsonpService } from "./jsonp.service";

@Component({
    moduleId: module.id,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],
})
export class indexComponent implements OnInit {
    data: any;
    constructor(private http: myhttpService,private jsonp: myJsonpService,
        private httpC: myhttpClientService) { }
    ngOnInit() {
        // 使用HttpClient方式
        this.httpC.getData().subscribe(res=>{
            this.data = res;
            console.log(res);
        },error=>{
            console.error(error);
        });

        // 使用Http方式
        // this.http.getData().subscribe(res => {
        //     console.log(res);
        // }, error => {
        //     console.error(error);
        // });

        // // 
        // this.jsonp.getData().subscribe(res=>{
        //     console.log(res);
        // },error=>{
        //     console.error(error);
        // });
    }
}