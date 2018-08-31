import { Component, OnInit, Pipe, PipeTransform, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';

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
    diyPipe: any= [ ];
    changeDetection: ChangeDetectionStrategy.OnPush;
    constructor(private cdRef: ChangeDetectorRef) { }
    ngOnInit() {
        this.datePipe = new Date('2018-05-18 14:13:00');
        this.jsonPipe = { name: 'Bob', age: 18, brother: ['Tom', 'Tim'] };
        this.upperCasePipe = 'this a uppercase for pipe';
        this.lowerCasePipe = 'THIS A LOWERCASE FOR PIPE';
        this.decimalPipe = 3.1415926;
        this.currentcyPipe = 99.9;
        this.percentPipe = 0.3333;
        this.arrSlice = ['a', 'b', 'c', 'd', 'e', 'f'];
        this.strSlice = 'this_is_a_string';
        this.diyPipe = [{
            name: 'bob', sex: 'male'
        }, {
            name: 'tom', sex: 'male'
        }, {
            name: 'res', sex: 'female'
        }, {
            name: 'Tim', sex: 'male'
        }];
        setInterval(() => {
            this.diyPipe[3].sex = this.diyPipe[3].sex === 'female'?'male':'female';
        }, 1000)
    }
    ngOnDestroy(){ }
    changeSex(){
        this.diyPipe[3].sex = this.diyPipe[3].sex === 'female'?'male':'female';
    }
}
