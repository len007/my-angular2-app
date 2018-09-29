import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './prototype.component.html',
    styleUrls: ['./prototype.component.css']
})
export class PrototypeComponent implements OnInit{
    ngOnInit(){
        let arr1: Array<any> = [];
        console.log(arr1 instanceof Array);

        let s1 = new String('aa');
        console.log(typeof s1);

        let s2 = 'a';
        console.log(typeof s2);
    }
}