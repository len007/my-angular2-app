import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
    template: `
        <child-detector-content [detectionInt]="detectionInt"
        [detectionObjInput]="detectionObjOutput"></child-detector-content>
    `
})
export class ParentDetectorComponent implements OnInit,OnDestroy{
    detectionInt: number;
    interval: any;
    detectionObjOutput: any;
    constructor(){
        this.detectionInt = 0;
        this.detectionObjOutput = {
            name: 'Bob',
            score: 1
        }
    }
    ngOnInit(){
        this.interval = setInterval(()=>{ // 每隔两秒自动加一
            this.detectionInt += 1;
            this.detectionObjOutput.score +=1;
        },2000)
        console.log(this.interval);
    }
    ngOnDestroy(){
        clearInterval(this.interval)
    }
}
