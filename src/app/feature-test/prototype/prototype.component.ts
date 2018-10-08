import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './prototype.component.html',
    styleUrls: ['./prototype.component.css']
})
export class PrototypeComponent implements OnInit {
    SArray: Array<any> = [2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 2, 1, 1, 1, 1];
    IsBug(Sn) {
        if (Sn === 1) {
            return true;
        }
        return false;
    }
    mytest(SArray, low, high) {
        if (high - low <= 1) {
            console.log("出问题的版本是：" + high);
            return;
        }
        let i = Math.floor((high - low + 1) / 2) + low;
        console.log("i=" + i + " low=" + low + " high=" + high);
        if (!this.IsBug(SArray[i - 1])) {
            this.mytest(SArray, i, high);
        } else {
            this.mytest(SArray, low, i);
        }
    }
    ngOnInit() {
        // let arr1: Array<any> = [];
        // console.log(arr1 instanceof Array);

        // let s1 = new String('aa');
        // console.log(typeof s1);

        // let s2 = 'a';
        // console.log(typeof s2);

        // let s3 = '123456789';
        // console.log(s3.slice(1));
        // console.log(s3);

        // function Test() {
        //     this.oute = function () {
        //         console.log(this);
        //     }
        // }
        // Test.prototype = new String('aaa');
        // let test2 = new Test();
        // console.log(test2);
        console.log(this.SArray.length);
        console.log(this.mytest(this.SArray, 1, this.SArray.length));
    }
}