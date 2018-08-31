import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormControlDirective } from '@angular/forms';


@Component({
    selector: 'directive-content',
    templateUrl: './highlight.component.html',
    styleUrls: []
})
export class HighLightComponent implements OnInit, OnChanges {
    hlColor: any;
    loginControl: FormControl = new FormControl('ddd');
    name: string = 'ggg';
    isShow: boolean = true;
    ngOnInit() {
        this.hlColor = { 'bgColor': '#56c3f6', 'color': '#fff' }
        console.log(this.loginControl);
    }
    ngOnChanges(){
        console.log(this.name);
    }
}
