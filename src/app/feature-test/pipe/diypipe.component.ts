import { Component, OnInit, Pipe, PipeTransform, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DiyMyPipePipe } from './diypipe';

@Component({
    templateUrl: './diypipe.component.html',
    styles: [``]
})
export class DiypipeComponent implements OnInit, OnDestroy {
    datePipe: Date;
    jsonPipe: any;
    upperCasePipe: string;
    lowerCasePipe: string;
    decimalPipe: number;
    currentcyPipe: number;
    percentPipe: number;
    arrSlice: Array<string> = [];
    strSlice: string;
    diyPipe: any = [];
    mysi: any;
    changeDetection: ChangeDetectionStrategy.OnPush;
    constructor(private cdRef: ChangeDetectorRef, private diy: DiyMyPipePipe) { }
    ngOnInit() {
        setTimeout(function () {
            console.log(1)
        }, 0);
        new Promise(function executor(resolve) {
            console.log(2);
            for (var i = 0; i < 10000; i++) {
                i == 9999 && resolve();
            }
            console.log(3);
        }).then(function () {
            console.log(4);
        });
        console.log(5);
        this.datePipe = new Date('2018-05-18 14:13:00');
        this.jsonPipe = { name: 'Bob', age: 18, brother: ['Tom', 'Tim'] };
        this.upperCasePipe = 'this a uppercase for pipe';
        this.lowerCasePipe = 'THIS A LOWERCASE FOR PIPE';
        this.decimalPipe = 3.1415926;
        this.currentcyPipe = 99.9;
        this.percentPipe = 0.3333;
        this.arrSlice = ['a', 'b', 'c', 'd', 'e', 'f'];
        this.strSlice = 'this_is_a_string';
        // console.log(this.strSlice.slice(2,6));
        // console.log(this.arrSlice.splice(2,1));
        this.diyPipe = [{
            name: 'bob', sex: 'male'
        }, {
            name: 'tom', sex: 'male'
        }, {
            name: 'res', sex: 'female'
        }, {
            name: 'Tim', sex: 'male'
        }];

        // 在TS中使用管道，与使用服务相似
        console.log(this.diy.transform(this.diyPipe, 'male'));
        this.mysi = setInterval(() => {
            this.diyPipe[3].sex = this.diyPipe[3].sex === 'female' ? 'male' : 'female';
        }, 1000)
    }
    ngOnDestroy() {
        clearInterval(this.mysi);
    }
    changeSex() {
        this.diyPipe[3].sex = this.diyPipe[3].sex === 'female' ? 'male' : 'female';
    }
}
